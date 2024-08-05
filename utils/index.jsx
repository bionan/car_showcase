

export async function fetchCars() {

  const headers = {
    'X-RapidAPI-Key': '740a79285emsh692dbaf27bef844p1373efjsn1b4a1cf4e839',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }

  try {
    
      const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
        method: 'GET',
      })

      const result = await response.json();

      return result

  } catch (error) {
    console.log('fetchCars error: ', error)
  }

}

export const calculateCarRent = (city_mpg, year) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
