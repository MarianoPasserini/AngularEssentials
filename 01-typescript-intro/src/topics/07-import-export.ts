import { Product, taxCalculation } from "./06-function-destructuring"

const shoppingCart: Product[] = [
    {
        desc: 'Nokia',
        price: 100
    },
    {
        desc: 'iPhone',
        price: 150
    }
]

const [ total, tax] = taxCalculation({products: shoppingCart, tax: 0.15});

console.log('Total: ', total );
console.log('Tax: ', tax);

export {}