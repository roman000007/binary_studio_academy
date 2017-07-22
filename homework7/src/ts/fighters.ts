export interface IFighter{
    name: string;
    power: number;
    health: number;
    setDamage: (damage: number) => void;
    hit: (enemy: IFighter, point: number) => void;
    isAlive: () => boolean;
};


export interface IImprovedFighter extends IFighter{
    doubleHit: (enemy: IFighter, point: number) => void;
}


export class Fighter implements IFighter{
    name: string;
    power: number;
    health: number;
    constructor(name: string, power: number, health: number){
        this.name = name;
        this.power = power;
        this.health = health;
    };

    setDamage(damage: number){
        this.health -= damage;
        if(this.isAlive) console.log(`health: ${this.health} (${this.name} HP)`);
        return;
    };

    hit(enemy: IFighter, point: number){
        enemy.setDamage(this.power * point);
        return;
    };

    isAlive = () => (this.health > 0 ? true : false);
};

export class ImprovedFighter extends Fighter implements IImprovedFighter{
    constructor(name: string, power: number, health: number){
        super(name, power, health);
    }

    doubleHit(enemy: IFighter, point: number){
        super.hit(enemy, point * 2);
    }

}