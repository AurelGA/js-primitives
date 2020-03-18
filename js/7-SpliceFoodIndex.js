var foods = [
  'Popcorn',
  'Potato chips',
  'Shrimp',
  'Chicken rice',
  'Poutine',
  'Tacos',
  'Toast',
  'French Toast',
  'Crab',
  'Pho',
  'Lasagna',
  'Brownie',
  'Lobster',
  'Donuts',
  'Ice cream',
  'Hamburger',
  'Sushi',
  'Chocolate',
  'Pizza'
];


var newFL = foods.splice(foods.indexOf('Donuts', 1));

let newList = foods.slice(newFL);

/*console.log(newList);*/


console.log(foods);
