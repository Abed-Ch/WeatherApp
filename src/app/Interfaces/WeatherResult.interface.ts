export interface WeatherData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_weather: {
    temperature: number;
    windspeed: number;
    winddirection: number;
    weathercode: number;
    time: string;
  };
  hourly_units: {
    time: string;
    temperature_2m: string;
    precipitation_probability: string;
    weathercode: string;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    precipitation_probability: number[];
    weathercode: number[];
  };
  daily: {
    apparent_temperature_max: number[];
    apparent_temperature_min: number[];
    precipitation_probability_max: number[];
    sunrise: string[];
    sunset: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    time: string[];
    weathercode: number[];
  };
  daily_units: {
    apparent_temperature_max: string;
    apparent_temperature_min: string;
    precipitation_probability_max: string;
    sunrise: string;
    sunset: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
    time: string;
    weathercode: string;
  };
}
export const WeatherCodesIcons: {
  path: string;
  code: number;
  nightPath?: string;
  title: string;
}[] = [
  {
    path: 'Clear-Day.svg',
    code: 0,
    nightPath: 'Clear-Moon.svg',
    title: 'Clear',
  },
  {
    path: 'SlightlyCloudy-Day.svg',
    code: 1,
    nightPath: 'SlightlyCloudy-Night.svg',
    title: 'Mainly Clear',
  },
  {
    path: 'PartialyCloudy-Day.svg',
    code: 2,
    nightPath: 'PartialyCloudy-Night.svg',
    title: 'Partially Cloudy',
  },
  {
    path: 'Cloudy.svg',
    code: 3,
    title: 'Cloudy',
  },
  {
    path: 'Fog.svg',
    code: 45,
    title: 'Fog',
  },
  {
    path: 'Fog.svg',
    code: 48,
    title: 'Depositing Rime Fog',
  },
  {
    path: 'Drizzle-Light.svg',
    code: 51,
    title: 'Light Drizzle',
  },
  {
    path: 'Drizzle-Mid.svg',
    code: 53,
    title: 'Moderate Dizzle',
  },
  {
    path: 'Drizzle-Heavy.svg',
    code: 55,
    title: 'Heavy Drizzle',
  },
  {
    path: 'FreezingDrizzle-Moderate.svg',
    code: 56,
    title: 'Moderate Freezing Drizzle',
  },
  {
    path: 'FreezingDrizzle-Heavy.svg',
    code: 57,
    title: 'Heavy Freezing Drizzle',
  },
  {
    path: 'Rain-Light.svg',
    code: 61,
    title: 'Light Rain',
  },
  {
    path: 'Rain-Mid.svg',
    code: 63,
    title: 'Moderate Rain',
  },
  {
    path: 'Rain-Heavy.svg',
    code: 65,
    title: 'Heavy Rain',
  },
  {
    path: 'FreezingRain-Moderate.svg',
    code: 66,
    title: 'Moderate Freezing Rain',
  },
  {
    path: 'FreezingRain-Heavy.svg',
    code: 67,
    title: 'Heavy Freezing Rain',
  },
  {
    path: 'Snow-Light.svg',
    code: 71,
    title: 'Light Snow',
  },
  {
    path: 'Snow-Mid.svg',
    code: 73,
    title: 'Moderate Snow',
  },
  {
    path: 'Snow-Heavy.svg',
    code: 75,
    title: 'Heavy Snow',
  },
  {
    path: 'Snow-Heavy.svg',
    code: 77,
    title: 'Snow Grains',
  },
  {
    path: 'Showers-Light-Day.svg',
    code: 80,
    nightPath: 'Showers-Light-Night.svg',
    title: 'Light Showers',
  },
  {
    path: 'Showers-Mid-Day.svg',
    code: 81,
    nightPath: 'Showers-Mid-Night.svg',
    title: 'Moderate Showers',
  },
  {
    path: 'Showers-Heavy-Day.svg',
    code: 82,
    nightPath: 'Showers-Heavy-Night.svg',
    title: 'Heavy Showers',
  },
  {
    path: 'SnowShowers-Mid-Day.svg',
    code: 85,
    nightPath: 'SnowShowers-Mid-Night.svg',
    title: 'Moderate Snowy Showers',
  },
  {
    path: 'SnowShowers-Heavy-Day.svg',
    code: 86,
    nightPath: 'SnowShowers-Heavy-Night.svg',
    title: 'Heavy Snowy Showers',
  },
  {
    path: 'Thunderstorm-Heavy.svg',
    code: 99,
    title: 'Heavy Thunderstorm',
  },
  {
    path: 'Thunderstorm-light.svg',
    code: 95,
    title: 'Light Thunderstorm',
  },
  {
    path: 'Thunderstorm-light.svg',
    code: 96,
    title: 'Light Thunderstorm With Hail',
  },
];
