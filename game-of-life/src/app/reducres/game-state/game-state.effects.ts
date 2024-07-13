import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as GameStateActions from './game-state.actions';
import { filter, map, switchMap, timer } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app-state';
import { selectGameStarted } from './game-state.selectors';

@Injectable({
  providedIn: 'root',
})
export class GameStateEffects {
  actions$ = inject(Actions);
  store = inject(Store<AppState>);
  resetGame$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GameStateActions.createInitialGrid),
      map(() => GameStateActions.stopGame())
    )
  );

  updateGame$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GameStateActions.startGame),
      switchMap(() => this.store.select(selectGameStarted)),
      switchMap((gameStarted) => {
        return timer(0, 1000).pipe(
          filter(() => gameStarted),
          map(() => GameStateActions.updateGame())
        );
      })
    )
  );
}
