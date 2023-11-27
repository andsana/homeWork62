import {Cake} from '../../types';
import React from 'react';

interface Props {
  cake: Cake;
}

const CakeItem: React.FC<Props> = ({cake}) => {

  return (
      <div className="card" style={{width: '18rem'}}>
        <img src={cake.image} className="card-img-top" style={{width: "286px", height: "214px"}} alt="cake"/>
        <div className="card-body">
          <h5 className="card-text">{cake.name}</h5>
          <p className="card-text">{cake.price} KGS</p>
        </div>
      </div>
  );
};

export default CakeItem;