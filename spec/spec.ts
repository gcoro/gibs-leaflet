import axios from "axios";
import{GIBS_LAYERS,GIBS_MASKS}from '../lib/support/support'
//TODO: find a way to test this part
//import {leafletWrapper} from "../lib/index";
//const L=new leafletWrapper().getL();

describe("all sources of gibs layers must exist and have yesterday images", () => {
    Object.keys(GIBS_LAYERS).forEach(key=>{
        it(key+"should work", (done) => {
            console.log('trying to fetch '+GIBS_LAYERS[key].template.replace('{Time}','2018-11-03').replace('{TileMatrixSet}','GoogleMapsCompatible_Level6').replace('{TileMatrix}','6').replace('{TileRow}','18').replace('{TileCol}','34'));
        // date is not relevant
        (<any>axios).get(GIBS_LAYERS[key].template.replace('{Time}','2018-11-03').replace('{TileMatrixSet}','GoogleMapsCompatible_Level6').replace('{TileMatrix}','6').replace('{TileRow}','18').replace('{TileCol}','34')).then((result:any)=>{
            console.log(' success!');
            expect(result.status).toBe(200);done();})
            .catch((error:any)=>{
                console.error(error)
            })
            });
    })
});