import readline from 'readline/promises';
//open weather api details;
const apikey='360443e6d5f23784b1b5b48b233d28ed';
const BASE_URL='https://api.openweathermap.org/data/2.5/weather';
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
const getWeatherDetails=async(city)=>{
    const url=`${BASE_URL}?q=${city}&appid=${apikey}&units=metric`;
    try{
        const response=await fetch(url);
        if(!response.ok) throw new Error('City not found');
        const data=await response.json();
        console.log('\nWeather information');
        console.log(`City: ${data.name}`);
        console.log(`Temperature: ${data.main.temp} °C`);
        console.log(`Humidity: ${data.main.humidity} %`);
        console.log(`Wind Speed: ${data.wind.speed} m/s`);
    }catch(error){
        console.error(error);
    }
}
const city= await rl.question('Enter city name to get weather details: ');
await getWeatherDetails(city);
rl.close();
