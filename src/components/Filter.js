import React from 'react'

const Filter = ({sortBy, toggleSortBy, filterGreased, toggleGreased}) => {
  return (
    <div>
      <button onClick={toggleGreased}>{filterGreased ? "Show All" : "Show Greased"}</button>
      <select value={sortBy} onChange={toggleSortBy}>
          <option value="">Select One</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
      </select>
    </div>
  )
}

export default Filter