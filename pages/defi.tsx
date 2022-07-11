import { Block } from "baseui/block";
import Container from "components/UiElements/Container/Container";
import { NextPage } from "next";
import Head from "next/head";

const Defi: NextPage<{}> = () => {
  return (
    <Container>
      <Block
        marginLeft={"-8px"}
        marginRight={"-8px"}
        paddingTop={["15px", "20px", "30px", "40px"]}
      ></Block>
    </Container>
  );
};

export default Defi;
