import { Injectable } from '@angular/core';
import { WeatherData } from 'src/app/Interfaces/WeatherResult.interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherDataService {
  private response: WeatherData;
  constructor() {}

  async fetchWeatherData(
    latitude: number,
    longitude: number
  ): Promise<WeatherData> {
    var fetchData = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation_probability,weathercode&models=best_match&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_probability_max&timezone=auto&current_weather=true`
    );
    var result: WeatherData = await fetchData.json();
    this.response = result;
    return result;
  }
  getWeather() {
    return this.response;
  }
  getDetailPart1(): {
    city: string;
    TempMin: number;
    TempMax: number;
    windSpeed: number;
    windDirection: number;
  } {
    return {
      city: this.response.timezone.split('/')[1],
      TempMax: this.response.daily.temperature_2m_max[0],
      TempMin: this.response.daily.temperature_2m_min[0],
      windSpeed: this.response.current_weather.windspeed,
      windDirection: this.response.current_weather.winddirection,
    };
  }
  getMainCardData(): {
    temperature: number;
    weatherCode: number;
    night: boolean;
  } {
    let time = new Date().getHours();
    return {
      temperature: this.response.current_weather.temperature,
      weatherCode: this.response.current_weather.weathercode,
      night: !(time >= 6 && time < 18),
    };
  }
  getDetailPart2(): {
    apparentTempMax: number;
    apparentTempMin: number;
    precipitation: number;
    sunRise: string;
    sunSet: string;
  } {
    return {
      apparentTempMax: this.response.daily.apparent_temperature_max[0],
      apparentTempMin: this.response.daily.apparent_temperature_min[0],
      precipitation: this.response.daily.precipitation_probability_max[0],
      sunRise: this.response.daily.sunrise[0],
      sunSet: this.response.daily.sunset[0],
    };
  }
  getHourly(): {
    time: string;
    code: number;
    precipitation: number;
    temperature: number;
    night: boolean;
  }[] {
    let hourly = [];
    let now = new Date().getHours() + 1;
    for (let i = now; i < now + 24; i++) {
      let time = parseInt(
        this.response.hourly.time[i].split('T')[1].split(':')[0]
      );
      hourly.push({
        time:
          (time % 12 === 0 ? '12' : time % 12) +
          (time >= 0 && time <= 11 ? ' AM' : ' PM'),
        code: this.response.hourly.weathercode[i],
        precipitation: this.response.hourly.precipitation_probability[i],
        temperature: this.response.hourly.temperature_2m[i],
        night: time >= 18 || (time >= 0 && time < 6) ? true : false,
      });
    }
    return hourly;
  }
  getDaily(): {
    time: string;
    code: number;
    precipitation: number;
    temperature: number;
    night: boolean;
    temperatureMax:number
  }[] {
    let days = [];
    for (let i = 0; i < 7; i++) {
      let date = new Date(this.response.daily.time[i]).toLocaleDateString(
        'en-US',
        {
          weekday: 'long',
          day: '2-digit',
          month: '2-digit',
        }
      );
      days.push({
        time: date,
        code: this.response.daily.weathercode[i],
        precipitation: this.response.daily.precipitation_probability_max[i],
        temperature: this.response.daily.temperature_2m_min[i],
        night: false,
        temperatureMax:this.response.daily.temperature_2m_max[i]
      });
    }
    return days;
  }
}
