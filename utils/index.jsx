

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