import React from "react";
import { SectionWrapper, StyledText,CardWrapper} from "./Home.styled";
import Main from "../../Icons/accessories.jpg";
import Adidas0 from "../../Icons/adidas1.jpg";
import Adidas from "../../Icons/adidas2.jpg";
import Adidas2 from "../../Icons/adidas3.jpg";
import CardItem from "../../components/CardItem/CardItem";
import { Pagination } from 'antd';

const data = [
  {
    title: "Adidas STAN SMITH",
    image: Adidas0,
    price: 100,
  },
  {  
    title: "Adidas Originals Ozweego",
    image: Adidas,
    price: 240,
  },
  {
    title: "Adidas Aztrek",
    image: Adidas2,
    price: 120,
  },
];
  const Home = () => {
    return (
      <div>
        <SectionWrapper>
          <StyledText>
            <h1>New design</h1>
            <p>
              Welcome
            </p>
          </StyledText>
          <img src={Main} />
        </SectionWrapper>
        <CardWrapper>
          {data.map(({ title, image, price }, idx) => (
            <CardItem
              title={title}
              imageSrc={image}
              price={price}
              id={idx}
            />
          ))}
        </CardWrapper>
        <Pagination defaultCurrent={1} total={50} />
      </div>
    )
  };
  export default Home;