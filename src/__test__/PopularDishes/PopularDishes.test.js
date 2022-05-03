/*eslint-disable*/
import '../../utils/matchMediaMock'
import { render } from '@testing-library/react';
import { PopularDishes } from '../../components/PopularDishes';
import React from 'react';
import { noop } from "../../utils/test";

it('PopularDishes renders correctly', () => {
  const props = {
    popularDishes: [
      {
        category: {id: 1, name: "Breakfast"},
        id: 1,
        description: "Bánh mỳ doner kebab since 2012 ( quý khách ghi chú bánh : giòn hay mềm , có nhiều hay ít ( tương cà + tương ớt + sốt mayone + rau sống xà lách , mùi ) . Ko ghi chú gì quán xin làm đầy đủ . Xin cảm ơn!",
        imageName: "http://localhost:8080/productImages/file_dcdf7ca3-2367-439f-aa65-208-83401e15-220404113715.jpeg",
        name: "Bánh Mỳ Donner Kebab",
        price: 25,
        productId: 6,
        quantity: 99,
      },
      {
        category: {id: 2, name: "Lunch"},
        id: 2,
        description: "Bánh mỳ doner kebab since 2012 ( quý khách ghi chú bánh : giòn hay mềm , có nhiều hay ít ( tương cà + tương ớt + sốt mayone + rau sống xà lách , mùi ) . Ko ghi chú gì quán xin làm đầy đủ . Xin cảm ơn!",
        imageName: "http://localhost:8080/productImages/file_dcdf7ca3-2367-439f-aa65-208-83401e15-220404113715.jpeg",
        name: "Bánh Mỳ Donner Kebab",
        price: 25,
        productId: 6,
        quantity: 99,
      },
      {
        category: {id: 2, name: "Drink"},
        id: 3,
        description: "Bánh mỳ doner kebab since 2012 ( quý khách ghi chú bánh : giòn hay mềm , có nhiều hay ít ( tương cà + tương ớt + sốt mayone + rau sống xà lách , mùi ) . Ko ghi chú gì quán xin làm đầy đủ . Xin cảm ơn!",
        imageName: "http://localhost:8080/productImages/file_dcdf7ca3-2367-439f-aa65-208-83401e15-220404113715.jpeg",
        name: "Bánh Mỳ Donner Kebab",
        price: 25,
        productId: 6,
        quantity: 99,
      }
    ],
    onChangeDishesType: noop,
    selectedDishType: 1
  }
  const tree = render(<PopularDishes {...props}/>);
  expect(tree).toMatchSnapshot();
});
