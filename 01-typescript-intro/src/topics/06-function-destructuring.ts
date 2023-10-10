
export interface Product {
    desc: string;
    price: number;
}

// const phone: Product = {
//     desc: 'Nokia A1',
//     price: 150
// }

// const tablet: Product = {
//     desc: 'iPad Air',
//     price: 250
// }




export interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

export function taxCalculation({products, tax}:TaxCalculationOptions): number[]{
    let total = 0;

    products.forEach( ( {price} ) => {
        total += price;
    });

    return [total, total * tax];
}
// const shoppingCart =  [phone, tablet];
 


// const [total, totalTax] = taxCalculation({
//     products: shoppingCart,
//     tax: 0.15
// });


// console.log('Total: ', total )
// console.log('Tax: ', totalTax);
