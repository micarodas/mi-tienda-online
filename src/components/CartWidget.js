import { Link } from 'react-router-dom';

function CartWidget() {

  return (
    <Link to="/cart">
      <span className="material-icons">shopping_cart</span>
      <span>0</span>
    </Link>
  );
}

export default CartWidget;
