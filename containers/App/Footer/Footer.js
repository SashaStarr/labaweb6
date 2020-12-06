import React from "react";
import { Wrapper,IconsWrapper, VerticalLine, LogoWrapper, StyledText, IconBase,IconBase1 } from "./Footer.styled";
import Icon, {
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  DribbbleSquareOutlined
} from "@ant-design/icons";

  const Footer = () => (
    <Wrapper>
       <LogoWrapper>
        <IconBase1 component={DribbbleSquareOutlined} color = 'orange' />
        <p>Sneaker World</p>
      </LogoWrapper>
      <VerticalLine />
      <IconsWrapper>
          <IconBase component={YoutubeOutlined} color='#FF0000'/>
          <IconBase component={TwitterOutlined} color='#03A9F4' />
          <IconBase component={InstagramOutlined} color='#E60042'/>
      </IconsWrapper>
      <VerticalLine />
      <StyledText>© Sneaker Shop all rights reserved</StyledText>
    </Wrapper>
  );
  export default Footer;