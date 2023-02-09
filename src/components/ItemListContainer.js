import React from 'react';


function ItemListContainer(props) {
  return (
    <div className="item-list-container">
      <h3>{props.greeting}</h3>
    </div>
  );
}

export default ItemListContainer;
