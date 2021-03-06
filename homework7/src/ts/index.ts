import { PlayerUI, Controller } from './ui';
import './../css/style.scss';
import { Fighter, ImprovedFighter, IFighter, IImprovedFighter } from './fighters';
import { Fight } from './fight';



let fighter1: IFighter;
let fighter2: IImprovedFighter;

function isNumber(obj: any) { return !isNaN(parseFloat(obj)) };


const playerOneUI = new PlayerUI(
    document.getElementById('f1-name') as HTMLInputElement,
    document.getElementById('f1-health') as HTMLInputElement,
    document.getElementById('f1-damage') as HTMLInputElement,
    document.getElementById('f1-HP')
)

const playerTwoUI = new PlayerUI(
    document.getElementById('f2-name') as HTMLInputElement,
    document.getElementById('f2-health') as HTMLInputElement,
    document.getElementById('f2-damage') as HTMLInputElement,
    document.getElementById('f2-HP')
)

const controller = new Controller(
    document.getElementById('info'),
    document.getElementById('fight-reset'),
    document.getElementById('fight-start'),
    document.getElementById('arr') as HTMLInputElement
);

const fight = new Fight(playerOneUI, playerTwoUI, controller);



window.onload = () => {
    controller.reset.addEventListener('click', () => {
        fight.resetFight();
    });
    controller.fight.addEventListener('click', () => {

        fighter1 = new Fighter(
            playerOneUI.name.value,
            Number(playerOneUI.damage.value),
            Number(playerOneUI.health.value));

        fighter2 = new ImprovedFighter(
            playerTwoUI.name.value,
            Number(playerTwoUI.damage.value),
            Number(playerTwoUI.health.value));

        let points: number[] = [];
        controller.points.value.split(",").forEach((elem) => {
            if (isNumber(elem)) {
                points.push(Number(elem));
            }
        });

        fight.fight(fighter1, fighter2, points);
    })

};