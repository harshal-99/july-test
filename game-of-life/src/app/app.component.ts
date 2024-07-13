import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AsyncPipe } from '@angular/common';


@Component({
  standalone: true,
  imports: [RouterModule, HomeComponent, AsyncPipe],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'game-of-life';
}
