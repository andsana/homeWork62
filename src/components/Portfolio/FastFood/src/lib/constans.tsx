import foodImg from '../assets/icon-food.png';
import drinkImg from '../assets/icon-drink.png';
import type {MenuItem} from '../types';

export const MENU_ITEMS: MenuItem[] = [
  {id: 1, name: 'Hamburger', price: 80, image: foodImg},
  {id: 2, name: 'Cheeseburger', price: 90, image: foodImg},
  {id: 3, name: 'Fries', price: 45, image: foodImg},
  {id: 4, name: 'Coffee', price: 70, image: drinkImg},
  {id: 5, name: 'Tea', price: 50, image: drinkImg},
  {id: 6, name: 'Cola', price: 40, image: drinkImg},
];

