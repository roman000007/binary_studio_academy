import { IController, IPlayerUI } from './ui';
import { IFighter, IImprovedFighter } from './fighters';
export interface IFight {
    playerOneUI: IPlayerUI;
    playerTwoUI: IPlayerUI;
    controller: IController;
    fight: (fighter: IFighter, improvedFighter: IImprovedFighter, rest: number[]) => (void);
};


export class Fight implements IFight {
    playerOneUI: IPlayerUI;
    playerTwoUI: IPlayerUI;
    controller: IController;
    private _timerId: number;
    constructor(playerOneUI: IPlayerUI, playerTwoUI: IPlayerUI, controller: IController) {
        this.playerOneUI = playerOneUI;
        this.playerTwoUI = playerTwoUI;
        this.controller = controller;
    }

    private _hitting(step: number, points: number[],fighter: IFighter, improvedFighter: IImprovedFighter){
        if(step == points.length){
            this.controller.info.textContent = "DRAW!";
            console.log("DRAW!");
            return;
        }
        if(step % 2 == 0){
            this.playerTwoUI.hp.innerHTML = `${improvedFighter.health} <span style="color: red">- ${fighter.power * points[step]}</span> = ${improvedFighter.health - (fighter.power * points[step])} HP`;
            fighter.hit(improvedFighter, points[step]);
            this.controller.info.innerHTML = `<span style="color: red">${fighter.name}</span> hit <span style="color: red">${improvedFighter.name}</span>`;
            
        }else{
            this.playerOneUI.hp.innerHTML = `${fighter.health} <span style="color: red">- ${improvedFighter.power * points[step]}</span> = ${fighter.health - (improvedFighter.power * points[step])} HP`;
            improvedFighter.hit(fighter, points[step]);
            this.controller.info.innerHTML = `<span style="color: red">${improvedFighter.name}</span> hit <span style="color: red">${fighter.name}</span>`;
        }

        if(!fighter.isAlive()){
                this.controller.info.innerHTML = `<span style="color: red">${improvedFighter.name}</span> wins!!!`;
                console.log(`${improvedFighter.name} wins!!!`);
                clearTimeout(this._timerId);
                return;
        };
        if(!improvedFighter.isAlive()){
                this.controller.info.innerHTML = `<span style="color: red">${fighter.name}</span> wins!!!`;
                console.log(`${fighter.name} wins!!!`);
                clearTimeout(this._timerId);
                return;
        };

        this._timerId = setTimeout(() => {this._hitting(step + 1, points, fighter, improvedFighter);}, 3000);
    };

    fight(fighter: IFighter, improvedFighter: IImprovedFighter, rest: number[]) {
        this.resetFight();
        this.controller.info.innerHTML = `<span style="color: red">Fight started!</span>`;
        let counter: number = 0;


        this._timerId = setTimeout(() => {this._hitting(counter, rest, fighter, improvedFighter);}, 3000);
    };
    resetFight(){
        this.playerOneUI.hp.textContent = `${this.playerOneUI.health.value} HP`;
        this.playerTwoUI.hp.textContent = `${this.playerTwoUI.health.value} HP`;
        this.controller.info.textContent = "For start press 'Fight!'";
        clearTimeout(this._timerId);
    }
};