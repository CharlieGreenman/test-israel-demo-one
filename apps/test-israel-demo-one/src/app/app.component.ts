import { Component } from '@angular/core';

@Component({
  selector: 'test-israel-demo-one-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideNavOpen = false;
  title = 'test-israel-demo-one';

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
