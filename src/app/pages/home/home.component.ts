import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
})
export class HomeComponent {
  heroUrl = 'https://elyoni-pics.s3.eu-north-1.amazonaws.com/products/pexels-photo-288621.webp';

  getHeroUrl() {
    // Returns a background image plus 'no-repeat' and 'cover' properties
    return `url('${this.heroUrl}') no-repeat center/cover`;
  }
}
