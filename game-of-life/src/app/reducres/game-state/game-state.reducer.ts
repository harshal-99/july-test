import { createReducer, on } from '@ngrx/store';
import * as GameStateActions from './game-state.actions';

export type GameState = {
  grid: boolean[][];
  gameStarted: boolean;
};

export const GameStateInitialState: GameState = {
  grid: [],
  gameStarted: false,
};

export const gameStateReducer = createReducer(
  GameStateInitialState,
  on(GameStateActions.startGame, (state) => ({ ...state, gameStarted: true })),
  on(GameStateActions.stopGame, (state) => ({ ...state, gameStarted: false })),
  on(GameStateActions.createInitialGrid, (state, { rows }) => ({
    ...state,
    gameStarted: false,
    grid: rows,
  })),
  on(GameStateActions.updateGame, (state) => {
    const newGrid = state.grid.map((row, i) => {
      return row.map((cell, j) => {
        const neighbors = [
          state.grid[i - 1]?.[j - 1],
          state.grid[i - 1]?.[j],
          state.grid[i - 1]?.[j + 1],
          state.grid[i]?.[j - 1],
          state.grid[i]?.[j + 1],
          state.grid[i + 1]?.[j - 1],
          state.grid[i + 1]?.[j],
          state.grid[i + 1]?.[j + 1],
        ].filter(Boolean).length;
        if (cell) {
          return neighbors === 2 || neighbors === 3;
        } else {
          return neighbors === 3;
        }
      });
    });
    return { ...state, grid: newGrid, gameStarted: true };
  })
);
