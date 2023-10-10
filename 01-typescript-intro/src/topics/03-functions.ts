

// function addNumbers(a: number, b: number) {
//     return a+b;
// }

// const addNumbersArrow = (a: number, b: number): string => {
//     return `${a+b}`;
// }


// const multiply = (a: number, b?: number, c: number = 2): number => {
//     return a*c;
// }

// const result: number = addNumbers(1, 2);
// const result2: string = addNumbersArrow(1, 2)
// const multiplyResult: number = multiply(1);


// console.log({result})
// console.log({result2})
// console.log({multiplyResult})

interface Character { 
    name: string;
    hp: number;
    showHp: () => void;
}

const heal = ( character: Character, amount: number) => {
    
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`)
    }
}



heal(strider, 20);
strider.showHp();
export {};