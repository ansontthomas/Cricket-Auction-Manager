class AuctionUtils {
    static preparePlayer(player) {
        if (player.age < 18) {
            return null;
        }
        if(player.soldPrice < player.basePrice){
            return null;
        }
        player.name = player.name.toUpperCase();

        return player;
    }
}

export default AuctionUtils;