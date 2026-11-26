enum Element {
    Fire,
    Water,
    Ground,
    Air,
}
class Card {
    name:string
    image:Image
    damage:number
    defense:number
    cost:number
    materialize:Element
    consume:Element
    fullCardImage:Image
    constructor(name:string,image:Image,damage:number,defense:number,cost:number,materialize:Element,consume:Element){
        this.damage=damage
        this.defense=defense
        this.cost=cost
        this.materialize=materialize
        this.consume=consume
        this.image=image
        this.name=name
    }
    createCard(){
        this.fullCardImage=image.create(24,40)
        this.fullCardImage.drawRect(0,0,24,40,5)
        this.fullCardImage.fillRect(1,1,22,38,10)
        this.fullCardImage.drawImage(this.image,2,12)
        this.fullCardImage.printCenter(this.name,5,7,image.font5)
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
class Enemy {
    health: number
    private index: number;
    enemyBehavior: () => void;
    currentEnemyIntent:EnemyAction
    allIntents: EnemyAction[]
}
let richard= new Card("richard",assets.image`myImage`,5,0,1,null,null)
richard.createCard()
game.onPaint(()=>{screen.drawImage(richard.fullCardImage,0,0)})