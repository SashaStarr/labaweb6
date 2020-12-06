import React from "react";
import { Card,Button } from "antd";
import { Footer } from "./CardItem.styled";

const { Meta } = Card;

const CardItem = ({ title='No title.', imageSrc, price }) => (
  <Card
    hoverable
    style={{ width: 270,backgroundColor: "#E1E1E1", borderRadius: "20px"}}
    cover={
      <img style={{ borderRadius: "20px" }} alt="example" src={imageSrc} />
    }
  >
    <desc><Meta title={title} style={{marginLeft: 10}} />
    <Footer>
      <p style={{marginLeft: 10,fontWeight: 'bold'}}>${price}</p>
      <Button style={{backgroundColor: "#73E514",borderRadius: "10px",width: 100,fontWeight: 'bold',border: 0}}>Buy</Button>

    </Footer></desc>
  </Card>
);

export default CardItem;