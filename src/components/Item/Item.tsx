import React from "react";
import Button from "@material-ui/core/Button";
import { CartItemType } from "../../App";
import { Wrapper } from "./Item.styles";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
      <h4>Price: ${item.price}</h4>
      <Button onClick={() => handleAddToCart(item)}> Add to cart</Button>
    </Wrapper>
  );
};

export default Item;