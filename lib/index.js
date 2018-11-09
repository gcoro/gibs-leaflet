import { decorate } from './GIBSLayer';
import { GIBS_LAYERS, GIBS_MASKS } from './support/support';

export default class GIBSLeaflet {
    static wrap(leafletInstance) {
        leafletInstance.GIBS_LAYERS = GIBS_LAYERS;
        leafletInstance.GIBS_MASKS = GIBS_MASKS;
        return decorate(leafletInstance);
    }
}