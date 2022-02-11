import React from "react"

const Recipes = () => {
  return (
    <div className="recipes">
      <form className="searchbar">
        <input type="search" placeholder="Search for Meal" />
        <button className="inputbutton">Search</button>
      </form>
      <div className="menulist">
        <div className="menu">
          <div className="pic">
            <img
              src="https://www.themealdb.com/images/media/meals/xqwwpy1483908697.jpg"
              alt="menupic"
            ></img>
          </div>
          <div className="menuname">
            <h5>name</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recipes
