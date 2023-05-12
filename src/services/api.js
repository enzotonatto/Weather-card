/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable linebreak-style */
const KEY = '0efe4e24027b4745970155057230404';

const fetchData = async (city) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`

  const fetchResponse = await fetch(url);
  const data = await fetchResponse.json();

  return data;
}

export default fetchData; 
