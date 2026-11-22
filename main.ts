
/*
ELEMENTS AND HOW THEY WORK
 Elements are temporary battle buffs the player gets.
 Elements passively give something
 
 . To materialize(create) these the player has 
 to play a card jkjk
*/
enum Element {
    Fire,
    Water,
    Lightning,
    Ground,
    Air,
    Chaos//secret element
}
class Card {
    damage:number
    defense:number
    cost:number
    materialize:Element
    consume:Element
    constructor(damage:number,defense:number,materialize:Element,consume:Element){
        this.damage=damage
    }
}