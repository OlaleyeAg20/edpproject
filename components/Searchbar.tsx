import React from 'react'
import { SearchIcon } from './ui/Icon'

const Searchbar = () => {
  return (
    <div className="searchBar flex rounded-lg w-full px-3.5 py-2.5 items-center border">
      <SearchIcon />
      <input type="text" placeholder="search" className="h-5 pl-2 focus:outline-none" />
    </div>
  )
}

export default Searchbar
