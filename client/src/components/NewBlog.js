import React,{useState} from 'react'
import styled from 'styled-components';
import {useHistory} from 'react-router-dom'

const media = {
  tab:'@media(max-width:940px)',
  miniTab:'@media(max-width:620px)',
  mobile:'@media(max-width:470px)'
}
function NewBlog() {


const [title , SetTitle] = useState('')
const [image , SetImage] = useState('')
const [auther , SetAuther] = useState('')
const [category , SetCategory] = useState('')
const [mdesc , SetMinidesc] = useState('')
const [description , SetDescription] = useState('')
const history = useHistory()

const PostData = async(event)=>
{
    event.preventDefault();
  if(title && image && auther && category && description){
    history.push('/')
    const res = await fetch('/upload-blogs',{
        method:"POST",
        headers:{
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
        title:title,
        image:image,
        author:auther,
        category:category,
        mdesc:mdesc,
        desc:description
        })
    });
  }
  else{
    alert('Fill all details first')
  }
}


    return (
    <>
    <FormContainer>

      <Form method="POST" enctype="multipart/form-data">

            <ImageLabel htmlfor="image">
              { image ? <Preview src={image} alt="" />: ""}
              <Input
              onChange={(e)=>{
              const files = e.target.files;
              let reader = new FileReader();
              reader.readAsDataURL(files[0]);

              reader.onload=(e)=>{
                  SetImage(e.target.result)
              }
              }}
              type="file"
              name="image"
              id="image"
              required
              />
            </ImageLabel>

            <Label htmlfor="title">
              Title:
              <Input type="text" name="title" onChange={(e)=> SetTitle(e.target.value)} placeholder="Title" required/>
            </Label>

            <Label htmlfor="author">
              Author:
              <Input type="text" name="author" onChange={(e)=> SetAuther(e.target.value)} required placeholder="Author" />
            </Label>

            <Label htmlfor="category">
              Category:
              <Input type="text" name="category" onChange={(e)=> SetCategory(e.target.value)}  required placeholder="Category" />
            </Label>

            {/* <Label htmlfor="mini_description">
              Mini-Descreption:
              <MiniTextArea
                onChange={(e)=> SetMinidesc(e.target.value)}
                name="mdesc"
                cols="30"
                rows="5"
                required
                placeholder="Small Description"
              ></MiniTextArea>
            </Label> */}

            <Label htmlfor="description">
              Descreption:
              <TextArea
                onChange={(e)=> SetDescription(e.target.value)}
                name="desc"
                cols="30"
                rows="5"
                required
                placeholder="Descreption"
              ></TextArea>
            </Label>
            <LabelButton>
              <Button type="submit" onClick={PostData}>Upload Post</Button>
            </LabelButton>
     </Form>
    </FormContainer>
     </>
    )
}

export default NewBlog;

const FormContainer = styled.div`
width: 100%;
margin-top: 20px;
display: flex;
justify-content: center;
align-items: center;
`;

const Form = styled.form`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
padding: 10px 20px;
gap:8px;
box-shadow: 0px 0px 25px hsla(250,50%,39%,0.4);
width: 60%;
border-radius: 12px;
${media.tab}{
  width: 90%;
}
${media.mobile}{
  width: 95%;
  padding: 10px;
}
`;

const Label = styled.label`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
font-weight: 700;
${media.miniTab}{
  font-size: 16px;
}
${media.mobile}{
  font-size: 15px;
}
`;

const ImageLabel = styled(Label)`
justify-content: center;
display: flex;
border-bottom: 1px solid gray;
height: 100px;
cursor: pointer;
align-items: center;
gap:20px;
padding-bottom: 10px;
`;

const Preview = styled.img`
height: 100px;
width: 100px;
`;

const LabelButton = styled(Label)`
justify-content: center;
`;

const Input = styled.input`
height: 40px;
width: 350px;
font-weight: 700;
padding: 5px;
font-size: 17px;
${media.miniTab}{
  width: 250px;
  font-size:15px;
}
${media.mobile}{
  width: 200px;
}
`;

const TextArea = styled.textarea`
height: 200px;
width: 350px;
resize: none;
font-weight: 700;
padding: 5px;
font-size: 17px;
${media.miniTab}{
  width: 250px;
  font-size:15px;
}
${media.mobile}{
  width: 200px;
}
`;

const MiniTextArea = styled(TextArea)`
height: 80px;
`;

const Button = styled.button`
padding: 4px 8px;
border-radius: 6px;
background-color: hsl(250,45%,30%);
color:white;
text-transform: uppercase;
font-family:'Nunito', sans-serif;
font-weight: 700;
letter-spacing: 2px;
`;
