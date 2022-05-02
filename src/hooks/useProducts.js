import { Categories } from '../type';

/**
 * @param products
 * @param category
 * @property {object}         product
 * @property {category}       product.category
 * @property {name}           product.category.name
 */
export const getProductsByCategory = (products, category) => {
  if (category === Categories.Lunches) {
    return products.filter((product) => product.category.name === Categories.Lunches);
  }
  if (category === Categories.Dinner) {
    return products.filter((product) => product.category.name === Categories.Dinner);
  }
  if (category === Categories.Drink) {
    return products.filter((product) => product.category.name === Categories.Drink);
  }
  if (category === Categories.FastFood) {
    return products.filter((product) => product.category.name === Categories.FastFood);
  }
  return products.filter((product) => product.category.name === Categories.BreakFast);
};
