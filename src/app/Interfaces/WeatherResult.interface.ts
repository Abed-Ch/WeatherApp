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
    precipitation: string;
    weathercode: string;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    precipitation: number[];
    weathercode: number[];
  };
}
export const WeatherCodesIcons: {
  path: string;
  code: number;
  nightPath?: string;
}[] = [
  {
    path: 'Clear-Day.svg',
    code: 0,
    nightPath: 'Clear-Moon.svg',
  },
  {
    path: 'SlightlyCloudy-Day.svg',
    code: 1,
    nightPath: 'SlightlyCloudy-Night.svg',
  },
  {
    path: 'PartialyCloudy-Day.svg',
    code: 2,
    nightPath: 'PartialyCloudy-Night.svg',
  },
  {
    path: 'Cloudy.svg',
    code: 3,
  },
  {
    path: 'Fog.svg',
    code: 45,
  },
  {
    path: 'Fog.svg',
    code: 48,
  },
  {
    path: 'Drizzle-Light.svg',
    code: 51,
  },
  {
    path: 'Drizzle-Mid.svg',
    code: 53,
  },
  {
    path: 'Drizzle-Heavy.svg',
    code: 55,
  },
  {
    path: 'FreezingDrizzle-Moderate.svg',
    code: 56,
  },
  {
    path: 'FreezingDrizzle-Heavy.svg',
    code: 57,
  },
  {
    path: 'Rain-Light.svg',
    code: 61,
  },
  {
    path: 'Rain-Mid.svg',
    code: 63,
  },
  {
    path: 'Rain-Heavy.svg',
    code: 65,
  },
  {
    path: 'FreezingRain-Moderate.svg',
    code: 66,
  },
  {
    path: 'FreezingRain-Heavy.svg',
    code: 67,
  },
  {
    path: 'Snow-Light.svg',
    code: 71,
  },
  {
    path: 'Snow-Mid.svg',
    code: 73,
  },
  {
    path: 'Snow-Heavy.svg',
    code: 75,
  },
  {
    path: 'Snow-Heavy.svg',
    code: 77,
  },
  {
    path: 'Showers-Light-Day.svg',
    code: 80,
    nightPath: 'Showers-Light-Night.svg',
  },
  {
    path: 'Showers-Mid-Day.svg',
    code: 81,
    nightPath: 'Showers-Mid-Night.svg',
  },
  {
    path: 'Showers-Heavy-Day.svg',
    code: 82,
    nightPath: 'Showers-Heavy-Night.svg',
  },
  {
    path: 'SnowShowers-Mid-Day.svg',
    code: 85,
    nightPath: 'SnowShowers-Mid-Night.svg',
  },
  {
    path: 'SnowShowers-Heavy-Day.svg',
    code: 86,
    nightPath: 'SnowShowers-Heavy-Night.svg',
  },
  {
    path: 'Thunderstorm-Heavy.svg',
    code: 99,
  },
  {
    path: 'Thunderstorm-light.svg',
    code: 95,
  },
  {
    path: 'Thunderstorm-light.svg',
    code: 96,
  },
];
