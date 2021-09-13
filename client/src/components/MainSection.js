import React,{useEffect , useState} from 'react'
import DisplayBlog from './DisplayBlog';
import  styled  from 'styled-components';
import Lottie from 'react-lottie';
import * as animation from './animation/7773-loading.json'
import SearchBar from './SearchBar';


function MainSection() {

const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData: animation.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
}
};
const [blogs , setBlogs] = useState([]);
const [loader, setLoader] = useState(false);
const [searchBlog , setSearchBlog] = useState('');

const InputEvents = (event) =>{
    const data = event.target.value;
    setSearchBlog(data);
}



const getData = async () =>{
    try {
        
    const response = await fetch('/upload-blogs',{
        method:"GET",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        credentials : "include"
    });

    const data = await response.json();
    setBlogs(data)

    } catch (error) {
        console.log(error.message)
    }
}
useEffect(() => {
setTimeout(() => {
setLoader(true);
}, 2300);
getData();
},[])

const filterBlogs = blogs.filter((filterBlogsData)=>
{
   return filterBlogsData.category == searchBlog || filterBlogsData.title == searchBlog || filterBlogsData.author == searchBlog ;
})

console.log(filterBlogs)



    return !loader ? (<Loading>
          <Lottie options={defaultOptions}
              height={200}
              width={200}/>
    </Loading>):(
    <>
    <SearchBar onChange={InputEvents} />

    {   
    searchBlog == "" ?     
    <MainContainer>
        {blogs.map((blogData,key)=>(
            <DisplayBlog
            title={blogData.title}
            image={blogData.image.data}
            author={blogData.author}
            category={blogData.category}
            description={blogData.desc}
            />
          ))}
    </MainContainer> 
    : 
    <MainContainer>
        {filterBlogs.map((blogData)=>(
            <DisplayBlog
            title={blogData.title}
            image={blogData.image.data}
            author={blogData.author}
            category={blogData.category}
            description={blogData.desc}
            />
        ))}
    </MainContainer>
    }
    </>
    )
}

export default MainSection

const MainContainer = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
justify-content:center;
align-items: center;
padding: 2%;
gap:15px;
`;

const Loading = styled.div`
display: flex;
justify-content:center;
align-items: center;
height: calc(100vh - 65px);
`;