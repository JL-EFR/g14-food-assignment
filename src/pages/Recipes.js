import React from "react"
import Menucard from "../components/Menucard"
import Bar from "../components/Bar"

const Recipes = () => {
  return (
    <div className="recipes">
      <Bar />
      <div className="menulist">
        <Menucard />
        <Menucard />
        <Menucard />
        <Menucard />
        <Menucard />
      </div>
    </div>
  )
}

export default Recipes
