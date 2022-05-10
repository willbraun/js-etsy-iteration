// 1. This is a function to calculate the average price in USD of an array of items
// First we map each item to its price in USD
// Then we use lodash to find the mean of the prices
// Return a string with the mean formatted to two decimal places

const average = _.mean(items.map(el => {
    if (el['currency_code'] === 'GBP') {
        return el['price'] * 1.23;
    }
    return el['price'];
    }));
    
console.log(`The average price is $${average.toFixed(2)}`);

// 2. This function takes an array of items and returns the items that are priced between $14 and $18
// We want to return an array of objects, so we use lodash to filter the original array to the elements
// ...whose price is greater than 14 and less than 18

const between14And18 = arr = arr => {
    const result = _.filter(arr, el => {
        let price = el['price'];
        if (el['currency_code'] === 'GBP') {
            price *= 1.23;
        }
        return (price > 14 && price < 18);
        });
    console.log(`Items that cost between $14.00 USD and $18.00 USD:`);
    return result;
}

console.log(between14And18(items));

// 3. This function finds the item with a GBP currency code and prints its name and price
// This filters the array to the items that are in GBP, and sets the first object returned to a variable
// It then returns a string using the name and price properties from that object

const findGBP = arr => {
    const firstItem = _.filter(arr, el => el['currency_code'] === 'GBP')[0];
    return `${firstItem.title} costs £${firstItem.price}`;
}

console.log(findGBP(items));

// 4. This code filters the items that are made of wood, then logs each one to the console using forEach.
_.forEach(_.filter(items,el => el.materials.includes('wood')), item => console.log(`${item.title} is made of wood.`));

// 5. This code filters the items array to those that are made of 8 or more materials
// Then for each item, it uses another forEach to create a list of the materials as a string 
// Then at the end it logs the item title, number of materials, and the list from the previous step
_.forEach(_.filter(items, el => el.materials.length >= 8), item => {
    let materialsList = '';
    _.forEach(item.materials, material => materialsList += `${material}\n`);
    console.log(`${item.title} has ${item.materials.length} materials:\n\n${materialsList}`);
});

// 6. This code first uses reduce to go through the items array
// It only adds to the accumulated value if that item was self made
// Acc starts at 0 so that it can be added to properly
const selfMade = items.reduce((acc,i) => {
    if (i['who_made'] === 'i_did') {
        return acc + 1;    
    }
    return acc;
}, 0);
console.log(`${selfMade} were made by their sellers`);