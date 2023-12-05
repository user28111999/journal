import React from 'react';
import { useParams } from 'react-router-dom';

const ItemPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Item ID: {id}</h1>
    </div>
  );
};

export default ItemPage;