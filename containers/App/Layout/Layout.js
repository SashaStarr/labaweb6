import React from "react";
import { StyledHeader,IconsWrapper,IconBase,VerticalLine} from "./Layout.styled";
import {
    DribbbleSquareOutlined,
    PhoneOutlined,
    MessageOutlined
  } from "@ant-design/icons";
  

  const Layout = () => (

    <StyledHeader title="Sneaker shop">
        <div>
        <IconsWrapper>
        <IconBase component={DribbbleSquareOutlined} />
        </IconsWrapper>
        <p>Sneaker World</p>
        </div>
        <div>
        </div>
        <div>
        <IconsWrapper>
        <IconBase component={PhoneOutlined} />
        <IconBase component={MessageOutlined} />
        </IconsWrapper>
        </div>
    </StyledHeader>
  );
  export default Layout;