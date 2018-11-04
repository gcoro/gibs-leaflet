import {decorate} from './GIBSLayer';
import {GIBS_LAYERS,GIBS_MASKS} from './support/support'

// we support the wrapping of an existing instance of leaflet, for multi plugin support
export class leafletWrapper {
    public getL(LefletInstance?:any){
        if(LefletInstance)
        return this.wrap(LefletInstance)
        return this.wrap(require('leaflet'))
    }

    private wrap(leaflet:any){
        leaflet.GIBS_LAYERS=GIBS_LAYERS;
        leaflet.GIBS_MASKS=GIBS_MASKS;
        return decorate(leaflet)
    }
}