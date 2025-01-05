import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
})
export class HomeComponent {
  heroUrl = "https://elyoni-pics.s3.eu-north-1.amazonaws.com/products/pexels-photo-288621.webp";

  getHeroUrl() {
    return `url('${this.heroUrl}') no-repeat center/cover`;
  }
}
