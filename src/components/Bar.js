import React from 'react'

const Bar = (props) => {
  return (
    <div className="bar">
      <form className="searchbar">
        <input
          type="search"
          placeholder="Search for Meal"
          value={props.keyword}
          onChange={(e) => props.setKeyword(e.target.value)}
        />
        <button className="inputbutton" onClick={props.onClick}>
          Search
        </button>
      </form>
    </div>
  )
}

export default Bar
