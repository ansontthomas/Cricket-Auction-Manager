class Team {
    constructor(id, name, players = []) {
        this.id = id;
        this.name = name;
        this.players = players;
    }

    addPlayer(player) {
        this.players.push(player);
    }
}

export default Team;