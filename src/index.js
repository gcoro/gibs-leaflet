import { decorate } from './GIBSLayer';
import { GIBS_LAYERS, GIBS_MASKS } from './support/support'

// we support the wrapping of an existing instance of leaflet, for multi plugin support
export default class leafletWrapper {
    constructor() { }

    getL(leafletInstance) {
        if (leafletInstance)
            return this.wrap(leafletInstance)
        return this.wrap(require('leaflet'))
    }

    wrap(leaflet) {
        leaflet.GIBS_LAYERS = GIBS_LAYERS;
        leaflet.GIBS_MASKS = GIBS_MASKS;
        return decorate(leaflet)
    }
}