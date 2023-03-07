import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import Items from "../data/items.json";
import fommatCurrency from "../utilities/fommatCurrency";

interface CardItemsProps {
  id: number;
  quantity: number;
}
interface item {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

export default function CartItems({ id, quantity }: CardItemsProps) {
  const { removeFromCart } = useShoppingCart();
  const item = Items.find((i) => i.id === id);
  if (item === null) return null;
  if (item === undefined) return null;
  return (
    <>
      <Stack
        direction="horizontal"
        gap={3}
        className="d-flex align-items-center mt-4 mb-4"
      >
        <img
          src={item?.imgUrl}
          style={{
            width: "125px",
            height: "80px",
            objectFit: "cover",
          }}
        />
        <div className="me-auto">
          <div>
            {item?.name}
            {quantity > 1 && (
              <span className="text-muted " style={{ fontSize: ".65rem" }}>
                &nbsp; x{quantity}
              </span>
            )}
          </div>
          <div className="text-muted mt-2" style={{ fontSize: ".75rem" }}>
            {fommatCurrency(item.price)}
          </div>
        </div>
        <div>{fommatCurrency(item.price * quantity)}</div>
        <Button
          variant="outline-danger"
          onClick={() => removeFromCart(item!.id)}
        >
          &times;
        </Button>
      </Stack>
    </>
  );
}
