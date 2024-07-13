import { createAction } from '@ngrx/store';

export const startGame = createAction('[Game State] Start Game');

export const stopGame = createAction('[Game State] Stop Game');

export const resetGame = createAction('[Game State] Reset Game');
