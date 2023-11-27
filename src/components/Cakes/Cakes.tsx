import React from 'react';
import {Cake} from '../../types';
import CakeItem from './CakeItem';

interface Props {
  cakes: Cake[];
}

const Cakes: React.FC<Props> = ({cakes}) => {
  return (
    <>
      <h1 className="text-center m-5">Каталог</h1>
      <div className="container d-flex flex-wrap gap-2 justify-content-center">
        {cakes.map((cake) => (
          <CakeItem key={cake.id} cake={cake}/>
        ))}
      </div>
    </>
  );
};

export default Cakes;