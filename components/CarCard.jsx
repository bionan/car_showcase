const CarCard = ({car}) => {

  console.log({car})


  return (
    <div className="car-card">
      <h2>{`${car.make} - ${car.model} - ${car.class}`}</h2>
      {/* <h2>Um carro</h2> */}
    </div>
  )
}

export default CarCard