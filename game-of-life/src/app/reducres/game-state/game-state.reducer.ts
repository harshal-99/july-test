import { createReducer, on } from '@ngrx/store';
import { resetGame, startGame, stopGame } from './game-state.actions';

export type GameState = {
  grid: number[][];
  data: Record<number, number>
}

export const GameStateInitialState: GameState = {
  grid: [],
  data: {}
};

export const gameStateReducer = createReducer(GameStateInitialState,
  on(startGame, state => state),
  on(stopGame, state => state),
  on(resetGame, state => state)
);
