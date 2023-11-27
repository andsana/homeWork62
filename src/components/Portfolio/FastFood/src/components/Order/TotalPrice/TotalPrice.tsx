import React from 'react';
import './TotalPrice.css';
import {OrderRecord} from '../../../types';
import {MENU_ITEMS} from '../../../lib/constans';

interface Props {
  list: OrderRecord[];
}
const TotalPrice: React.FC<Props> = ({list}) => {
  const total = list.reduce((acc, orderItem) => {
    const item = MENU_ITEMS.find((item) => item.id === orderItem.id);
    if (item === undefined) return 0;
    return acc + orderItem.count * item.price;
  }, 0);
  return (
    <div className="totalPrice">
      Total price: <span>{total} KGS</span>
    </div>
  );
};

export default TotalPrice;