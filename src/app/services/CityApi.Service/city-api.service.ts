import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import {
  LocationInterface,
  LocationResponse,
} from 'src/app/Interfaces/Location.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CityApiService {
  private next: string;
  private offset: number = 0;
  private hasNext: boolean;

  constructor(private http: HttpClient) {}

  fetchLocations(keyword: string): Observable<LocationInterface[] | undefined> {
    let url: string = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${keyword}&offset=${this.offset}&limit=5&rapidapi-key=${environment.Search_API_Key}`;
    return this.http.get<LocationResponse>(url).pipe(
      map((response: LocationResponse) => {
        console.log(response, url);
        const totalCount = response.metadata.totalCount;
        const currentOffset = response.metadata.currentOffset;
        const hasNext = response.data.length < totalCount;
        this.hasNext = hasNext;
        this.offset = currentOffset + 5;
        const locations = response.data.map((location) => ({
          city: location.city,
          country: location.country,
          id: location.id,
          longitude: location.longitude,
          altitude: location.latitude,
        }));
        return locations;
      })
    );
  }

  reset(): void {
    this.hasNext = true;
    this.offset = 0;
  }
  getNext(): boolean {
    return this.hasNext;
  }
}
