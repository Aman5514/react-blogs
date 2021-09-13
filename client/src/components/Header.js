import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const media = {
    mobile:'@media(max-width:430px)'
}


function Header() {
return (
    <HeaderContainer>
        <Title to="/">React-Blogs</Title>
        <MenuItem>
        
        <NavLink to="/blog"> + Add Blog</NavLink>
        
        </MenuItem>
    </HeaderContainer>
)}

export default Header

const HeaderContainer = styled.div`
position: fixed;
top:0;
right: 0;
left:0;
height:65px;
padding: 0 10px 0 20px;
background-color: hsl(250,50%,14%);
display: flex;
justify-content: space-between;
align-items: center;
z-index: 10;
`;
    
const Title = styled(NavLink)`
color:white;
text-transform: uppercase;
letter-spacing: 3px;
font-family: 'Nunito', sans-serif;
font-weight: 700;
cursor: pointer;
text-decoration: none;
font-size: 26px;
${media.mobile}{
    font-size: 20px
}
`;

const MenuItem = styled.ul`
display: flex;
justify-content: center;
align-items: center;
gap:15px;

    a{
        text-decoration: none;
        color: white;
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
        font-size: 18px;
        letter-spacing: 1px;
        padding: 6px 12px;
        border-radius: 6px;
        border: 2px solid transparent;
        background-color:hsl(250,45%,30%);
        transition: 0.4s;
        ${media.mobile}{
            padding: 7px;
            font-size: 15px;
        }
        &:hover{
            border: 2px solid snow;
    }
}
`;

