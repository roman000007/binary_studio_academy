export interface IPlayerUI{
    name: HTMLInputElement;
    health: HTMLInputElement;
    hp: HTMLElement;
    damage: HTMLInputElement;
};

export interface IController{
    info: HTMLElement;
    reset: HTMLElement;
    fight: HTMLElement;
    points: HTMLInputElement;
}

export class PlayerUI implements IPlayerUI{
    name: HTMLInputElement;
    health: HTMLInputElement;
    hp: HTMLElement;
    damage: HTMLInputElement;
    constructor(name: HTMLInputElement, health: HTMLInputElement, damage: HTMLInputElement, hp: HTMLElement){
        this.name = name;
        this.health = health;
        this.damage = damage;
        this.hp = hp;
    }
}


export class Controller implements IController{
    info: HTMLElement;
    reset: HTMLElement;
    fight: HTMLElement;
    points: HTMLInputElement;
    constructor(info: HTMLElement, reset: HTMLElement, fight: HTMLElement, points: HTMLInputElement){
        this.info = info;
        this.reset = reset;
        this.fight = fight;
        this.points = points;
    }
}