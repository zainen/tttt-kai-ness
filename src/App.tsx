import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Kai } from "./pages/Kai";
import { Recipes } from "./pages/Recipes";
import { Blogs } from "./pages/Blogs";
import { Contact} from './pages/Contact';
import { PageNotFound } from "./pages/PageNotFound";
// import { Card } from "./components/reusable/Card";

function App() {
  return (
    <div className="bg-primary-400 ">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index path= '/' element={<Home />}/>
            <Route path= 'about' element={<About />}/>
            <Route path= 'kai' element={<Kai />}/>
            <Route path= 'blogs' element={<Blogs />}/>
            <Route path= 'recipes' element={<Recipes />}/>
            <Route path= 'contact' element={<Contact />}/>
            <Route path='*' element={<PageNotFound />}/>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
