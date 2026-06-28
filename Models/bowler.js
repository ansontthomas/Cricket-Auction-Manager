import Player from "./player.js";

class Bowler extends Player {
    constructor(id, name, age, role, basePrice, soldPrice, isSold, totalWickets) {
        super(id, name, age, role, basePrice, soldPrice, isSold);
        this.totalWickets = totalWickets;
    }
}

export default Bowler;