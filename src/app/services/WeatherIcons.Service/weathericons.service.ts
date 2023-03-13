import { Injectable } from '@angular/core';
import { WeatherCodesIcons } from 'src/app/Interfaces/WeatherResult.interface';
@Injectable({
  providedIn: 'root',
})
export class WeathericonsService {
  private iconArray: {
    path: string;
    code: number;
    nightPath?: string;
    title: string;
  }[] = WeatherCodesIcons;
  constructor() {}
  getIcon(code: number) {
    return this.iconArray.filter((obj) => obj.code === code)[0];
  }
  async fetchIcon(fileName: string) {
    let svg: string = await fetch('../../assets/' + fileName)
      .then((fetchResult) => fetchResult.text())
      .then((results) => {
        return results;
      });
    return svg;
  }
}
