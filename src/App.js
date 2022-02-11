import "./App.css"
import { Navigate, BrowserRouter, Route, Routes } from "react-router-dom"
import Recipes from "./pages/Recipes"
import Banner from "./components/Banner"

function App() {
  return (
    <BrowserRouter>
      <Banner />
      <Routes>
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:recipeID" element={<Recipes />} />
        <Route path="*" element={<Navigate to="recipes" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
