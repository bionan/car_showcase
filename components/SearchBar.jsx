'use client'

import {useState} from "react"

import Image from "next/image"
import { useRouter } from "next/navigation"


import SearchManufacturer from "@components/SearchManufacturer"

const SearchButton = ({otherClasses}) => {
  return (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src="/magnifying-glass.svg"
        width={40}
        height={40}
        className="object-contain"
        alt="submit"  

      />
    </button>
  )
}

const SearchBar = () => {

  const [manufacturer, setManufacturer] = useState('')
  const [model, setModel] = useState("")

  const router = useRouter()

  const handleSubmit = (e) => {

    e.preventDefault()

    if ( manufacturer=="" && model=="") {
      return alert('Please fill in the search bar')
    }

    updateSearchParams(manufacturer.toLowerCase(),model.toLowerCase())

  }

  const updateSearchParams = (manufacturer,model) => {

    // Em JavaScript, window.location.search é uma propriedade que retorna a string de consulta (query string) de uma URL. A string de consulta começa com um ponto de interrogação (?) e contém pares chave-valor que são passados para a página através da URL.
    //https://example.com/page?name=John&age=30
  

    const searchParams = new URLSearchParams(window.location.search)

    if (model) {
      searchParams.set('model', model)
    } else {
      searchParams.delete('model')
    }

    if (manufacturer) {
      searchParams.set('manufacturer', manufacturer)
    } else {
      searchParams.delete('manufacturer')
    }

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`

    console.log(newPathname)

    router.push(newPathname, {scroll:false})

  }
  
  return (
    <form action="" className="searchbar" onSubmit={handleSubmit}>
      
      <div className="searchbar__item">

        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
         />

         <SearchButton otherClasses="sm:hidden"/>

      </div>

      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="model"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />

        <SearchButton otherClasses="sm:hidden" />

      </div>
        <SearchButton otherClasses="max-sm:hidden" />
    </form>
  )
}

export default SearchBar