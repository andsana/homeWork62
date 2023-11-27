import React from 'react';
import {OrderRecord} from '../../../types';
import {MENU_ITEMS} from '../../../lib/constans';
import OrderItem from './OrderItem/OrderItem';

interface Props {
  list: OrderRecord[];
  resetOrderLine: (id: number) => void;
}

const OrderList: React.FC<Props> = ({list, resetOrderLine}) => {
  return (
    <div>
      {list.map((orderItem) => {
        if (!orderItem.count) return null;
        const price = orderItem.count * MENU_ITEMS.find((item) => item.id === orderItem.id)!.price;
        return <OrderItem
          key={Math.random() * 88}
          name={orderItem.name}
          count={orderItem.count}
          price={price}
          resetOrderLine={() => resetOrderLine(orderItem.id)}
        />;
      })}
    </div>
  );
};

export default OrderList;