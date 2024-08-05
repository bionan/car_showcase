import Image from "next/image"

import Hero from "@components/Hero"
import CustomFilter from "@components/CustomFilter"
import SearchBar from "@components/SearchBar"
import CarCard from "@components/CarCard"

import { fetchCars } from "@utils"

export default async function Home() {

  const allCars = await fetchCars()

  const isDataEmpty = !Array.isArray(allCars) || allCars.length == 0 || !allCars

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">

        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Car Catalogue
          </h1>
          <p>Explore the cars you might like</p>

          <div className="home__filters">

            <SearchBar />

            <div className="home__filter-container">

              <CustomFilter title="fuel" />
              <CustomFilter title="year" />

            </div>
            
          </div>
        </div>

        {!isDataEmpty ? 
          (
            <section>
              <div className="home__cars-wrapper">
                {
                  allCars.map(
                    (car,index) => {
                      return <CarCard key={index} {...car} />}
                  )
                }
              </div>
            </section>
          )
          :
          (
            <div>
              <h2 className="text-xl font-bold text-black">Oops! No results</h2>
              <p>{allCars?.message}</p>
            </div>
          )
        }

      </div>
    </main>
  );
}
