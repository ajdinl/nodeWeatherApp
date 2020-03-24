const request = require('request')
const dotenv = require('dotenv').config()

const address = process.argv[2]

const url = `https://api.openweathermap.org/data/2.5/weather?q=${address}&units=metric&appid=${process.env.API_KEY}`

request(url, (error, response, body) => {
  const data = JSON.parse(body)
  console.log(data.name + ': ' + data.main.temp + '°C')
})