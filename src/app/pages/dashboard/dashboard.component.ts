import { Component, ViewEncapsulation, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnDestroy {
  ngOnDestroy(): void {
    window.location.reload();
  }
}
