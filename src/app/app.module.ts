import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Er404Component } from './pages/er404/er404.component';
import { HeroComponent } from './components/hero/hero.component';
import { BlobSVGComponent } from './components/hero/blob-svg/blob-svg.component';
import { WeatherCardComponent } from './components/hero/weather-card/weather-card.component';
import { DarkmodeService } from './services/Darkmode.Service/darkmode.service';
import { ThemesService } from './services//Themes.Service/themes.service';
import { CloudyDirective } from './directives/weather-card.Directives/cloudy.directive';
import { SunnyDirective } from './directives/weather-card.Directives/sunny.directive';
import { RainyDirective } from './directives/weather-card.Directives/rainy.directive';
import { SnowyDirective } from './directives/weather-card.Directives/snowy.directive';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WeatherDataService } from './services/WeatherData.Service/weather-data.service';
import { LocationsService } from './services/Locations.Service/locations.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    Er404Component,
    HeroComponent,
    BlobSVGComponent,
    WeatherCardComponent,
    CloudyDirective,
    SunnyDirective,
    RainyDirective,
    SnowyDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule],
  providers: [
    DarkmodeService,
    ThemesService,
    WeatherDataService,
    LocationsService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
