export class Person{
    // public name: string;
    //  private address: string; 

    constructor(public name : string, private address : string) {}
}


export class Hero{

    constructor(
        public alterEgo: string,
        public age : number,
        public realName: string,
        public person: Person,
    ) {
    }
}

const person = new Person('Tony Stark', 'NY');
const ironman = new Hero('iron man',45,'Tony', person);

console.log(ironman);