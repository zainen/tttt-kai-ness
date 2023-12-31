import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Kai } from "./pages/Kai";
// import { Recipes } from "./pages/Recipes";
// import { Blogs } from "./pages/Blogs";
import { PageNotFound } from "./pages/PageNotFound";
import { Podcasts } from "./pages/Podcasts";

function App() {

  return (
    <div className="bg-primary-400 overflow-auto">
      <MemoryRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index path= '/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/kai' element={<Kai />}/>
            {/* <Route path='blogs' element={<Blogs />}/> */}
            <Route path='/podcasts' element={<Podcasts/>}/>
            {/* <Route path='recipes' element={<Recipes />}/> */}
            <Route path='/*' element={<PageNotFound />}/>
          </Route>
        </Routes>
      </MemoryRouter>
    </div>
  );
}

export default App;
