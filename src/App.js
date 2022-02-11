import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Recipes from "./pages/Recipes"
import Banner from "./components/Banner"
import Detail from "./pages/Detail"
function App() {
  return (
    <BrowserRouter>
      <Banner />
      <Routes>
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:recipeId" element={<Detail />}></Route>
        <Route path="*" element={<Recipes />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
