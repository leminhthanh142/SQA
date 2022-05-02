/**
 * @global
 * @typedef Product
 * @type {Object}
 * @property {number}       productId
 * @property {Category}     category
 * @property {string}       name
 * @property {number}       price
 * @property {string}       description
 * @property {number}       quantity
 * @property {string}       imageName
 */

/**
 * @global
 * @typedef Category
 * @type {Object}
 * @property {number}   id
 * @property {string}   name
 */

/**
 * @readonly
 * @enum {number}
 */
export const ShippingType = {
  Courier: 1,
  Pickup: 0
};

/**
 * @enum {number}
 */
export const PaymentType = {
  Online: 1,
  Delivery: 0
};

/**
 * @enum {number}
 */
export const Gender = {
  Male: 0,
  Female: 1
};

/**
 * @enum {string}
 */
export const Categories = {
  BreakFast: 1,
  Lunches: 2,
  Dinner: 3,
  Drink: 4,
  FastFood: 5
};

/**
 * @type {Array<{name: string, type: string}>}
 */
export const dishesType = [
  {
    type: Categories.BreakFast,
    name: 'Breakfast'
  },
  {
    type: Categories.Lunches,
    name: 'Lunches'
  },
  {
    type: Categories.Dinner,
    name: 'Dinner'
  },
  {
    type: Categories.Drink,
    name: 'Drink'
  },
  {
    type: Categories.FastFood,
    name: 'Fastfood'
  }
];

export const digits = /^\d+$/;
