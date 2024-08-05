const CarCard = ({make, model}) => {


  return (
    <div className="car-card">
      <h2>{`${make} - ${model}s`}</h2>
      {/* <h2>Um carro</h2> */}
    </div>
  )
}

export default CarCard