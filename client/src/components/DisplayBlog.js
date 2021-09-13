import React from 'react'
import styled from 'styled-components';
import {FacebookShareButton,TwitterShareButton,LinkedinShareButton,EmailShareButton,OKShareButton,WhatsappShareButton,EmailIcon,
  FacebookIcon,LinkedinIcon,TwitterIcon,OKIcon,WhatsappIcon,} from "react-share";

function DisplayBlog({title,image,author,category,description,date}) {

const shareURL = "https://www.youtube.com"
    return (
    <Container>
    <Title>{title}</Title>
    <Image src={image}/>
    <Bind>
    <Author>Author:- {author}</Author>
    <Category>Category:- {category}</Category>
    </Bind>
    <Description>{description}</Description>
    <ShareContainer>
        <WhatsappShareButton url={shareURL}>
           <WhatsappIcon size={26}/>
        </WhatsappShareButton>

        <FacebookShareButton url={shareURL}>
           <FacebookIcon size={26}/>
        </FacebookShareButton>

        <TwitterShareButton url={shareURL}>
           <TwitterIcon size={26}/>
        </TwitterShareButton>

        <LinkedinShareButton url={shareURL}>
           <LinkedinIcon size={26}/>
        </LinkedinShareButton>

    </ShareContainer>

    </Container>
    )
}

export default DisplayBlog

const Container = styled.div`
width:350px;
display:flex;
flex-direction:column;
justify-content:space-between;
height:560px;
border:1px solid gray;
padding: 2px 8px;
border-radius: 6px;
background-color: hsl(250,50%,95%);
gap:2px;
`;
const Title = styled.h2`
font-family: 'Nunito', sans-serif;
font-weight: 700;
font-size: 22px;
text-align: center;
`;

const Image = styled.img`
object-fit:cover;
width:100%;
min-height:300px;
`;

const Author = styled.h4`
font-weight:400;
font-size: 18px;
`;

const Category = styled.h4`
font-size: 16px;
font-weight:400;
`;

const Description = styled.p`
font-weight: 100;
padding: 4px 2px;
font-size:14px;
overflow-y: scroll;
&::-webkit-scrollbar
{
    display: none;
}
`;

const Bind = styled.div`
display:flex;
justify-content: space-between;
border-bottom: 2px solid gray;
flex-direction: column;
padding: 4px 0px;
`;

const ShareContainer = styled.div`
display:flex;
gap:10px;
justify-content: flex-end;
margin-top:5px;
`;