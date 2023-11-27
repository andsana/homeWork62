import Menu from './components/Menu/Menu';
import './FastFood.css';
import Order from './components/Order/Order';
import {MENU_ITEMS} from './lib/constans';
import {useState} from 'react';
import type {OrderRecord} from './types';

function FastFood() {
  const [orders, setOrders] = useState<OrderRecord[]>(
    MENU_ITEMS.map((item) => {
      return { id: item.id, name: item.name, count: 0 };
    })
  );

  const addOrder = (id: number) => {
    setOrders((prev) =>
      prev.map((order) => {
        if (order.id === id) {
          return { ...order, count: order.count + 1 };
        }
        return order;
      })
    );
  };

  const resetOrderLine = (id: number) => {
    setOrders((prev) =>
      prev.map((order) => {
        if (order.id === id) {
          return { ...order, count: 0 };
        }
        return order;
      })
    );
  };

  return (
    <div className="App">
      <Menu addOrder={addOrder} />
      <Order list={orders} resetOrderLine={resetOrderLine} />
    </div>
  );
}

export default FastFood;



