import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



const Container = styled.div`
    height:60px;
    ${mobile({height: "50px",padding:"15px"})}
    `

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items:center;
    justify-content:space-between
    ${mobile({ padding: "10px 0px" })}
    `
const Left =styled.div`
    flex:1;
    display:flex;
    align-items:center;
    `;
const Language =styled.span`
   font-size : 14px;
   cursor: pointer;
   ${mobile({ display: "none" })}
`;

const SearchContainer =styled.div`
    border:0.5px solid lightgray;
    display:flex;
    align-items:center;
    margin-left:25px;
    padding:5px;
    ${mobile({ padding:"0px 5px" })}
    
`;

const Input =styled.input`
    border:none;
    ${mobile({ width: "50px" })}
`;

const Center =styled.div`
    flex:1;
    text-align:center;
`;   
const Logo =styled.h1`
    font-weight:bold;
    ${mobile({ fontSize: "20px" })}
`

const Right =styled.div`
    flex:1;
    display:flex;
    align-item:center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`;  


const MenuItem = styled.div`
    font-size:14px;
    cursor:pointer;
    margin-left:25px;
    ${mobile({ fontSize: "10px", marginLeft: "8px" })}
`;



const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity)
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                    <Input placeholder="Search"/>
                    <Search style={{color:"teal", fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo><Link to = "/">MEDICARE</Link></Logo>
                </Center>
                <Right>
                    <MenuItem><Link to="/Register">REGISTER</Link></MenuItem>
                    <MenuItem><Link to="/Login">SIGN IN</Link></MenuItem>
                    
                    <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
                   
                </Right>
            </Wrapper>
        </Container>
        
    );
};

export default Navbar
