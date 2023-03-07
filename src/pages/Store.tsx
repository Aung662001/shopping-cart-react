import { Col, Row } from "react-bootstrap";
import StoreItems from "../data/items.json";
import StoreItem from "../components/StoreItem";
export default function Store() {
  return (
    <>
      <Row md={2} xs={1} lg={3} className="g-3">
        {StoreItems.map((Item) => (
          <Col key={Item.id}>
            <StoreItem {...Item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
