import React from 'react';
import {OrderRecord} from '../../types';
import OrderList from './OrderList/OrderList';
import TotalPrice from './TotalPrice/TotalPrice';

interface Props {
  list: OrderRecord[];
  resetOrderLine: (id: number) => void;
}

const Order: React.FC<Props> = ({list, resetOrderLine}) => {
  if (list.every((record) => record.count === 0))
    return (
      <div className="Order-empty">
        <div>Order something already!</div>
      </div>
    );
  return (
    <div>
      <OrderList
        list={list}
        resetOrderLine = {resetOrderLine}
      />
      <TotalPrice
        list={list}
      />
    </div>
  );
};

export default Order;