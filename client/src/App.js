import Header from './components/Header';
import MainSection from './components/MainSection';
import { Route } from "react-router-dom";
import SearchBar from './components/SearchBar';
import NewBlog from './components/NewBlog';


function App() {
  return (
    <>
      <Header/>
      <Route exact path="/" >
      <MainSection/>
      </Route>

      <Route path="/blog">
      <NewBlog/>
      </Route>
    </>
  );
}

export default App;
