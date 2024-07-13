import { AppState } from '../../app-state';

export const selectGrid = (state: AppState) => state.gameOfLife.grid;

export const selectGameStarted = (state: AppState) =>
  state.gameOfLife.gameStarted;
