import React from "react";
import Container from "../UiElements/Container/Container";
import FooterWrapper, { Text } from "./Footer.styled";

const Footer: React.FC<{}> = () => {
  return (
    <FooterWrapper>
      <Container>
        <Text>Crypto ©{new Date().getFullYear()} Created by CodeDruid13</Text>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
