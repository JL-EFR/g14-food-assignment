import axios from 'axios'
import React from 'react'

const Recipes = () => {
  return (
    <div className="recipes">
      <form className="searchbar">
        <input type="search" placeholder="Search for Meal" />
        <button className="inputbutton" onclick>Search</button>
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

async function getFoodListFromApi(keyword) {
  const response = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`
  )
  return response.data
}

async function getFoodByIdFromApi(id) {
  const response = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  )
  return response.data
}

function getMealList(keyword) {
  const rawData = getFoodListFromApi(keyword)
  return rawData.meals
}

function getMealDetail(id) {
  const rawData = getFoodByIdFromApi(id)
  return rawData.meals[0]
}

export default Recipes
