export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "ac0e45005fmshb1e5b60156a473cp19f85cjsn2b5562cf59ea",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  }

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    {
      headers: headers,
    }
  )

  const result = await response.json()

  return result
}
