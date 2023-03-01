import { useParams } from 'react-router-dom';
import  ItemList  from './ItemList';
import React, { useEffect, useState } from "react";

const ItemListContainer = function ({ data }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const { name } = useParams();

  useEffect(() => {
    const URL = name
      ? `https://fakestoreapi.com/products/category/${name}`
      : "https://fakestoreapi.com/products";
    const getProducts = async () => {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        setProducts(data);
      } catch {
        setError(true);
      }
    };

    getProducts();
  }, [name]);

  return (
    <ItemList products={products}/>
  )
};

export default ItemListContainer;
