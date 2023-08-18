import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import Logo from '../image/codepen.png'

const Container = styled(AppBar)`
    background: #060606;
    height:9vh;
`

const Header = () => {
  return (
    <Container position="static">
      <Toolbar> 
        <img src={Logo} style={{width:40, height:40}} />
      </Toolbar>
    </Container>
  );  
};

export default Header;
