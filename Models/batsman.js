import Player from "./player.js";

class Batsman extends Player {
    constructor(id, name, age, role, basePrice, soldPrice, isSold, totalRuns) {
        super(id, name, age, role, basePrice, soldPrice, isSold);
        this.totalRuns = totalRuns;
    }
}

export default Batsman;