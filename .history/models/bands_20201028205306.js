const Band = require("./band");

class Bands {

    constructor() {
        this.bands = [];
    }
    addBand(band = new Band()) {
        this.bands.push(band);
    }

    getBands() {
return this.bands;

    }
}