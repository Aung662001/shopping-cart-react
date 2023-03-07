import { Offcanvas } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import fommatCurrency from "../utilities/fommatCurrency";
import CartItems from "./CartItems";
import StoreItem from "../data/items.json";
type ShoppingCartProps = {
  isOpen: boolean;
};
export default function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.map((item) => {
          return <CartItems key={item.id} {...item} />;
        })}
        <div className=" fw-bold fs-5" style={{ float: "right" }}>
          Total:{" "}
          {fommatCurrency(
            cartItems.reduce((total, CartItem) => {
              const item = StoreItem.find((i) => i.id === CartItem.id);
              return total + (item?.price || 0) * CartItem.quantity;
            }, 0)
          )}
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
