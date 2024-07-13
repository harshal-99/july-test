import { createAction, props } from '@ngrx/store';

export const startGame = createAction('[Game State] Start Game');

export const stopGame = createAction('[Game State] Stop Game');

export const createInitialGrid = createAction(
  '[Game State] Create Initial Grid',
  props<{
    rows: boolean[][];
  }>()
);

export const updateGame = createAction('[Game State] Update Game');
