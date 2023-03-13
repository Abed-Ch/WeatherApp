import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
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
import { DashboardGuard } from './guards/dashboard.guard';
import { WeathericonsService } from './services/WeatherIcons.Service/weathericons.service';
import { DashCardsComponent } from './components/dash-cards/dash-cards.component';
import { DashDailyComponent } from './components/dash-daily/dash-daily.component';
import { DashHourlyComponent } from './components/dash-hourly/dash-hourly.component';
import { DashHeroComponent } from './components/dash-hero/dash-hero.component';
import { WeatherDetails1Component } from './components/dash-hero/weather-details1/weather-details1.component';
import { WeatherDetails2Component } from './components/dash-hero/weather-details2/weather-details2.component';
import { WeatherCardsComponent } from './components/dash-hero/weather-cards/weather-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    HeroComponent,
    BlobSVGComponent,
    WeatherCardComponent,
    CloudyDirective,
    SunnyDirective,
    RainyDirective,
    SnowyDirective,
    DashCardsComponent,
    DashDailyComponent,
    DashHourlyComponent,
    DashHeroComponent,
    WeatherDetails1Component,
    WeatherDetails2Component,
    WeatherCardsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule],
  providers: [
    DarkmodeService,
    ThemesService,
    WeatherDataService,
    LocationsService,
    DashboardGuard,
    WeathericonsService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
