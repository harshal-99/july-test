import { inject, Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameStateEffects {
  actions$ = inject(Actions);

}
