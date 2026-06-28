import Player from "./player.js";

class AllRounder extends Player {
    constructor(id, name, age, role, basePrice, soldPrice, isSold, totalRuns, totalWickets) {
        super(id, name, age, role, basePrice, soldPrice, isSold);
        this.totalRuns = totalRuns;
        this.totalWickets = totalWickets;
    }
}

export default AllRounder;