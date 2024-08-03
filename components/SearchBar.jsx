'use client'

import {useState} from "react"

import SearchManufacturer from "@components/SearchManufacturer"

const SearchBar = () => {

  const [manufacturer, setManufacturer] = useState('')

  const handleSubmit = (e) => {}
  
  return (
    <form action="" className="searchbar" onSubmit={handleSubmit}>
      
      <div className="searchbar__item">

        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
         />

      </div>
    </form>
  )
}

export default SearchBar