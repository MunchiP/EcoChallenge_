import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';// Ruteo
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Nivel3';
}
