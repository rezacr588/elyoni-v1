import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';  // Add this import

@Component({
  selector: 'app-footer',
  imports: [RouterLink],  // Add RouterLink to the imports array
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  standalone: true,
})
export class FooterComponent {

}
