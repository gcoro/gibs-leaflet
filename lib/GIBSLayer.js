import moment from 'moment';

export const decorate = (L) => {

    const GIBS_ATTRIBUTION = `<a href="https://earthdata.nasa.gov/gibs"> NASA EOSDIS GIBS</a>`;

    const getGibsURL = (info, date, x, y, z) => {
        if (info.date && !date) {
            return L.Util.emptyImageUrl;
        }

        return L.Util.template(info.template, {
            Time: info.date ? moment(date).format('YYYY-MM-DD') : '0',
            TileMatrixSet: 'GoogleMapsCompatible_Level' + info.zoom,
            TileMatrix: z,
            TileRow: y,
            TileCol: x
        });
    };

    const GIBSLayerImage = L.TileLayer.extend({
        initialize: function (gibsID, options) {
            this._layerInfo = L.GIBS_LAYERS[gibsID];
            options = options || {};
            options.maxZoom = this._layerInfo.zoom;
            options.attribution = GIBS_ATTRIBUTION;
            this._date = options.date || null;
            L.Util.setOptions(this, options);
            L.TileLayer.prototype.initialize.call(this, this._layerInfo.template, options);
        },
        getTileUrl: function (tilePoint) {
            return getGibsURL(this._layerInfo, this._date, tilePoint.x, tilePoint.y, tilePoint.z);
        },
        setDate: function (newDate) {
            if (this._layerInfo.date) {
                this._date = newDate;
                this._map && this.redraw();
            }
            return this;
        },
        isTemporal: function () {
            return this._layerInfo.date;
        }
    });

    const GIBSLayerCanvas = L.GridLayer.extend({
        initialize: function (layerName, options) {
            L.Util.setOptions(this, {
                async: true,
                attribution: GIBS_ATTRIBUTION
            });
            L.Util.setOptions(this, options);

            this._date = this.options.date || null;
            this._layerInfo = L.GIBS_LAYERS[layerName];

            if (!this._layerInfo) {
                throw new Error('Unknown GIBS layer name');
            }

            L.Util.setOptions(this, { maxZoom: this._layerInfo.zoom });

            this._maskInfo = null;
            if (layerName.indexOf('Terra') !== -1) {
                this._maskInfo = L.GIBS_MASKS['MODIS_Terra_Data_No_Data'];
            } else if (layerName.indexOf('Aqua') !== -1) {
                this._maskInfo = L.GIBS_MASKS['MODIS_Aqua_Data_No_Data'];
            }
        },
        setDate: function (newDate) {
            if (this._layerInfo.date) {
                this._date = newDate;
                this._map && this.redraw();
            }
            return this;
        },
        setTransparent: function (isTransparent) {
            this.options.transparent = isTransparent;
            this._map && this.redraw();
            return this;
        },
        _loadImage: function (url, onLoaded, onError) {
            const img = new Image();
            img.onload = onLoaded.bind(null, img);
            img.onerror = onError;
            img.crossOrigin = 'anonymous';
            img.src = url;
        },
        _tryToProcess: function (canvas, c_width, c_height, mainImg, maskImg, hasMask) {
            const mainCtx = canvas.getContext('2d');
            mainCtx.drawImage(mainImg, 0, 0);

            if (hasMask) {
                const mainData = mainCtx.getImageData(0, 0, c_width, c_height);

                const maskCanvas = document.createElement('canvas');
                maskCanvas.width = c_width;
                maskCanvas.height = c_height;

                const maskCtx = maskCanvas.getContext('2d');
                (maskCtx).drawImage(maskImg, 0, 0);

                const maskPixels = (maskCtx).getImageData(0, 0, c_width, c_height).data,
                    pixels = mainData.data;

                for (let p = 0; p < maskPixels.length; p += 4) {
                    if (maskPixels[p + 3]) pixels[p + 3] = 0;
                }

                mainCtx.putImageData(mainData, 0, 0);
            }
        },
        createTile: function (coords) {
            const hasMask = this._maskInfo && this.options.transparent;
            let mainImg, maskImg;

            const tile = L.DomUtil.create('canvas', 'leaflet-tile');

            const size = this.getTileSize();
            tile.width = size.x;
            tile.height = size.y;

            if (!this._date) {
                return tile;
            }

            const tryToProcess = (canvas) => {
                if (mainImg && (maskImg || !hasMask)) {
                    if (mainImg.width !== canvas.width || (hasMask && maskImg.width !== canvas.width)) return;
                    this._tryToProcess(canvas, canvas.width, canvas.height, mainImg, maskImg, hasMask);
                }
            }

            const mainSrc = getGibsURL(this._layerInfo, this._date, coords.x, coords.y, coords.z);

            this._loadImage(mainSrc, function (img) {
                mainImg = img;
                tryToProcess(tile);
            });

            if (hasMask) {
                const maskSrc = getGibsURL(this._maskInfo, this._date, coords.x, coords.y, coords.z);
                this._loadImage(maskSrc, function (img) {
                    maskImg = img;
                    tryToProcess(tile);
                });
            }

            return tile;
        },
        isTemporal: function () {
            return this._layerInfo.date;
        }
    });

    L.GIBSLayer = (gibsID, options) => {
        const layerInfo = L.GIBS_LAYERS[gibsID];

        if (!layerInfo) {
            throw new Error('Unknown GIBS layer name');
        }

        options = options || {};
        const needMask = layerInfo.date && 'transparent' in options && /jpg$/.test(layerInfo.template) &&
            (gibsID.indexOf('Terra') !== -1 || gibsID.indexOf('Aqua') !== -1);

        return needMask ? new GIBSLayerCanvas(gibsID, options) : new GIBSLayerImage(gibsID, options);
    }
};