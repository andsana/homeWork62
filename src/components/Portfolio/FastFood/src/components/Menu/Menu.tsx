import React from 'react';
import {MENU_ITEMS} from '../../lib/constans';
import MenuItem from './MenuItem/MenuItem';

interface Props {
  addOrder: (id: number) => void;
}

const Menu: React.FC<Props> = ({addOrder}) => {
  return (
    <div>
      {MENU_ITEMS.map((item) => (
        <MenuItem
          key={Math.random() * 36}
          name={item.name}
          img={item.image}
          price={item.price}
          addOrder={() => addOrder(item.id)}
        />
      ))}
    </div>
  );
};

export default Menu;
