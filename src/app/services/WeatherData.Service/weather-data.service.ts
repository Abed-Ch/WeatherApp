import { Injectable } from '@angular/core';
import { WeatherData } from 'src/app/Interfaces/WeatherResult.interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherDataService {
  private response: WeatherData;
  private city: string;
  constructor() {}

  async getWeatherData(
    latitude: number,
    longitude: number
  ): Promise<WeatherData> {
    var fetchData = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation,weathercode&models=best_match&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum&current_weather=true&timezone=auto`
    );
    var result: WeatherData = await fetchData.json();
    this.response = result;
    return result;
  }
}
