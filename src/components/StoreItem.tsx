import { Button, Card, CardImg } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import fommatCurrency from "../utilities/fommatCurrency";

interface ItemProp {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}
export default function StoreItem(Props: ItemProp) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  console.log(Props.id);

  const quantity = getItemQuantity(Props.id);
  return (
    <Card>
      <CardImg
        src={Props.imgUrl}
        variant="top"
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column h-100">
        <Card.Title className="d-flex w-100 justify-content-between mb-4 align-items-baseline">
          <span className="fs-2">{Props.name}</span>
          <span className="ms-3 text-muted">{fommatCurrency(Props.price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              className="w-100"
              onClick={() => increaseCartQuantity(Props.id)}
            >
              + Add to Cart
            </Button>
          ) : (
            <Card.Footer style={{ border: "none" }}>
              <div
                className="d-flex align-items-center flex-column"
                style={{ gap: ".5rem" }}
              >
                <div
                  className="d-flex justify-center align-items-center "
                  style={{ gap: ".5rem" }}
                >
                  <Button onClick={() => decreaseCartQuantity(Props.id)}>
                    -
                  </Button>
                  <div>
                    <span className="fs-2"> {quantity}</span> in cart
                  </div>
                  <Button onClick={() => increaseCartQuantity(Props.id)}>
                    +
                  </Button>
                </div>
                <div>
                  <Button
                    className="bg-danger"
                    size="sm"
                    onClick={() => removeFromCart(Props.id)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </Card.Footer>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
