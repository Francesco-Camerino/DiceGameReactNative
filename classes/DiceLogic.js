export class DiceLogic {
    
    getRandom() {
        let diceRandPlayer = Math.floor((Math.random() *6) + 1);
        let diceRandCpu = Math.floor((Math.random() *6) + 1);
        if (diceRandPlayer > diceRandCpu) {
            return [0, diceRandPlayer, diceRandCpu];
        } else if (diceRandPlayer < diceRandCpu) {
            return [1, diceRandPlayer, diceRandCpu];
        } else {
            return [-1, diceRandPlayer, diceRandCpu];
        }
    }
}