export async function fetchCars() {
//   const { manufacturer, year, model, limit, fuel } = filters;

  const headers: HeadersInit = {
    "X-RapidAPI-Key":"a0eed4c70bmshf327ab483171456p12fa2bjsn1e99f660b05d",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=bmw`,
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}
