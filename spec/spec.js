import axios from 'axios';
import { GIBS_LAYERS, GIBS_MASKS } from '../lib/support/support';

describe("gibs masks should work", () => {
    Object.keys(GIBS_MASKS).forEach(key => {
        it(key + " should work", (done) => {
            console.log('trying to fetch ' + GIBS_MASKS[key].template.replace('{Time}', '2018-11-03').replace('{TileMatrixSet}', 'GoogleMapsCompatible_Level' + GIBS_MASKS[key].zoom).replace('{TileMatrix}', '6').replace('{TileRow}', '18').replace('{TileCol}', '34'));
            // date is not relevant
            axios.get(GIBS_MASKS[key].template.replace('{Time}', '2018-11-03').replace('{TileMatrixSet}', 'GoogleMapsCompatible_Level' + GIBS_MASKS[key].zoom).replace('{TileMatrix}', '6').replace('{TileRow}', '18').replace('{TileCol}', '34')).then(result => {
                console.log(' success :)');
                expect(result.status).toBe(200); done();
            })
                .catch(error => {
                    console.error('fail :(');
                    done.fail(error.response.data);
                })
        });
    })
});

describe("all sources of gibs layers must exist and have yesterday images", () => {
    Object.keys(GIBS_LAYERS).forEach(key => {
        it(key + " should work", (done) => {
            console.log('trying to fetch ' + GIBS_LAYERS[key].template.replace('{Time}', '2018-11-03').replace('{TileMatrixSet}', 'GoogleMapsCompatible_Level' + GIBS_LAYERS[key].zoom).replace('{TileMatrix}', '4').replace('{TileRow}', '6').replace('{TileCol}', '10'));
            // date is not relevant
            axios.get(GIBS_LAYERS[key].template.replace('{Time}', '2018-11-03').replace('{TileMatrixSet}', 'GoogleMapsCompatible_Level' + GIBS_LAYERS[key].zoom).replace('{TileMatrix}', '4').replace('{TileRow}', '6').replace('{TileCol}', '10')).then(result => {
                console.log(' success :)');
                expect(result.status).toBe(200); done();
            })
                .catch(error => {
                    console.error('fail :(');
                    done.fail(error.response.data);
                })
        });
    })
});