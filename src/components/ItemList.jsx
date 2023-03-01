import React from "react";
import Producto from "./Producto";

const ItemList = ({ products }) => {
  return (
      <div style={styles.container}>
          {products.map((product) =>
              <Producto key={product.id} product={product} />
          )}
      </div>
  )
}
export default ItemList;

const styles = {
  container:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
  }
}
