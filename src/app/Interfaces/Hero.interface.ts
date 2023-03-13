export interface Hero {
  Title: string;
  Condition: 'Sunny' | 'Rainy' | 'Cloudy' | 'Snowy';
}
export const HeroObj: Hero[] = [
  {
    Title: 'Cloudy With A Chance Of Chill',
    Condition: 'Cloudy',
  },
  {
    Title: 'Weather Report: Bring Your Umbrella!',
    Condition: 'Rainy',
  },
  {
    Title: 'Tis The Season For Frosty Forcasting',
    Condition: 'Snowy',
  },
  {
    Title: "Don't Forget Your Shades",
    Condition: 'Sunny',
  },
];
export const themeColors: themes = {
  Sunny: {
    light: {
      primaryBackground: '#fdf8e1',
      blobBackground: '#fcefb4',
      titleColor: '#6798c0',
      descriptionColor: '#99d6ea',
    },
    dark: {
      primaryBackground: '#212d40',
      blobBackground: '#364156',
      titleColor: '#d66853',
      descriptionColor: '#7d4e57',
    },
  },
  Cloudy: {
    light: {
      primaryBackground: '#A0BED9',
      blobBackground: '#D9BBB4',
      titleColor: '#1B2E40',
      descriptionColor: '#325573',
    },
    dark: {
      primaryBackground: '#2B3640',
      blobBackground: '#5D6473',
      titleColor: '#F2F2F2',
      descriptionColor: '#D7D7D9',
    },
  },
  Rainy: {
    light: {
      primaryBackground: '#fffcf9',
      blobBackground: '#ffb774',
      titleColor: '#e91e63',
      descriptionColor: '#ff9a88',
    },
    dark: {
      primaryBackground: '#555555',
      blobBackground: '#2c3ef0',
      titleColor: '#A0B7D9',
      descriptionColor: '#969CA8',
    },
  },
  Snowy: {
    light: {
      primaryBackground: '#D8EBF2',
      blobBackground: '#9CC1D9',
      titleColor: '#BF416F',
      descriptionColor: '#BF8097',
    },
    dark: {
      primaryBackground: '#0D0D0D',
      blobBackground: '#595959',
      titleColor: '#F2F2F2',
      descriptionColor: '#D9D9D9',
    },
  },
};
interface themes {
  Sunny: weatherConditionColors;
  Cloudy: weatherConditionColors;
  Rainy: weatherConditionColors;
  Snowy: weatherConditionColors;
}
export interface colors {
  primaryBackground: string;
  blobBackground: string;
  titleColor: string;
  descriptionColor: string;
}
interface weatherConditionColors {
  light: colors;
  dark: colors;
}
