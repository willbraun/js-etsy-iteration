// 1. This is a function to calculate the average price in USD of an array of items
// This function first uses reduce to go through each object in the array and sum the prices
// There is a check to convert GBP to USD before adding it to the total in USD
// I did not do i['price'] *= 1.23 because we do not want to mutate the items data
// Divide by the number of objects in the array to find the average
// Return a string with the average formatted to two decimal places

const averagePriceUSD = arr => {
    const sumInUSD = arr.reduce((acc, i) => {
        if (i['currency_code'] === 'GBP') {
            return acc + (i['price'] * 1.23);
        }
        return acc + i['price'];
        }, 0);
    const average = sumInUSD/arr.length;
    return `The average price is $${average.toFixed(2)}`;
}

console.log(averagePriceUSD(items));

// 2. This function takes an array of items and returns the items that are priced between $14 and $18
// We want to return an array of objects, so we just need to filter the original array to the elements
// ...whose price is greater than 14 and less than 18

const between14And18 = arr = arr => {
    const result = arr.filter(el => {
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
    const firstItem = arr.filter(el => el['currency_code'] === 'GBP')[0];
    return `${firstItem.title} costs £${firstItem.price}`;
}

console.log(findGBP(items));

// 4. This code filters the items that are made of wood, then logs each one to the console using forEach.
items.filter(el => el.materials.includes('wood')).forEach(item => console.log(`${item.title} is made of wood.`));

// 5. This code fitlers the items array to those that are made of 8 or more materials
// Then for each item, it uses another forEach to create a list of the materials as a string 
// Then at the end it logs the item title, number of materials, and the list from the previous step
items.filter(el => el.materials.length >= 8).forEach(item => {
    let materialsList = '';
    item.materials.forEach(material => materialsList += `${material}\n`)
    console.log(`${item.title} has ${item.materials.length} materials:\n\n${materialsList}`);
});