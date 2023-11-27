import React from 'react';
import {Cake} from '../../types';
import CakeItem from './CakeItem';

interface Props {
  cakes: Cake[];
}

const Cakes: React.FC<Props> = ({cakes}) => {
  return (
    <div className="row justify-content-center mt-5">
      <h1 className="text-center mb-5">Каталог</h1>
      {cakes.map((cake) => (
        <CakeItem key={cake.id} cake={cake}/>
      ))}
    </div>
  );
};

export default Cakes;