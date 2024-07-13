import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppState } from '../app-state';
import { Store } from '@ngrx/store';
import {
  createInitialGrid,
  selectGameStarted,
  selectGrid,
  startGame,
  stopGame,
  updateGame,
} from '../reducres/game-state';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  store = inject(Store<AppState>);
  grid$ = this.store.select(selectGrid);
  gameStarted$ = this.store.select(selectGameStarted);
  ngOnInit() {
    this.store.dispatch(createInitialGrid({ rows: this.createGrid() }));
  }

  private createGrid() {
    const rows: boolean[][] = [];
    for (let i = 0; i < 30; i++) {
      const row = [];
      for (let j = 0; j < 30; j++) {
        row.push(Math.random() > 0.9);
      }
      rows.push(row);
    }
    return rows;
  }

  onStart() {
    this.store.dispatch(startGame());
  }

  onStop() {
    this.store.dispatch(stopGame());
  }

  onReset() {
    this.store.dispatch(createInitialGrid({ rows: this.createGrid() }));
  }

  onNext() {
    this.store.dispatch(updateGame());
  }
}
