//Shout-out to UnsignedArduino/Cyrus Yiu
class FastRandomBlocks {
    _rng: Math.FastRandom

    constructor(seed: number) {
        this._rng = new Math.FastRandom(seed)
    }

    /**
     * Return the next number between 1 and 65535
     */
    nextNumber() {
        return this._rng.next()
    }

    /**
     * Returns a random number between two numbers
     * @param minimum The minimum number, ex: 1
     * @param maximum The maximum number, ex: 10
     */
    randomRange(minimum: number, maximum: number) {
        return this._rng.randomRange(minimum, maximum)
    }

    /**
     * Returns a boolean based on the percent passed in
     * @param percent The percentage of the time the boolean returned will be true.
     */
    percentChance(percent: number) {
        return this._rng.percentChance(percent)
    }

    /**
     * Returns a boolean with a 50% chance of being true
     */
    randomBoolean() {
        return this._rng.randomBool()
    }

    /**
     * Pick a random element from the array passed in
     * @param elements The array to choose from, ex: ["apples", "oranges", "pears"]
     */
    randomElement(elements: any[]) {
        return this._rng.pickRandom(elements)
    }

    /**
     * Reset the RNG
     */
    resetRNG() {
        this._rng.reset()
    }
}

namespace Random {
    /**
     * Create a RNG object
     * @param seed The seed for the RNG, ex: 1234. Using 0 as the seed may have unexpected results!!!
     */
    export function createRNG(seed: number = null): FastRandomBlocks {
        return new FastRandomBlocks(seed)
    }
}
