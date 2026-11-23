enum Element {
    Fire,
    Water,
    Ground,
    Air,
}
class Card {
    damage:number
    defense:number
    cost:number
    materialize:Element
    consume:Element
    constructor(damage:number,defense:number,cost:number,materialize:Element,consume:Element){
        this.damage=damage
        this.defense=defense
        this.cost=cost
        this.materialize=materialize
        this.consume=consume
    }
}
enum Intents{
    Attack,
    Debuff,
    Buff,
    DestroyElement,
    CreateCurse
}
interface EnemyAction{
    intent:Intents
    identifier?:number|Element
}