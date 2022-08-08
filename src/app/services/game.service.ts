import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GameAnswers, WordsType } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  gameAnswers!: GameAnswers[];
  urlTypeOfGame!: string;
  constructor(private http: HttpClient) {}

  getRandom(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
  }

  selectGameType(): Observable<WordsType> {
    const numOfGame = Math.round(this.getRandom(2,0));
    switch (numOfGame) {
      case 0:
        this.urlTypeOfGame = './assets/words/animals.json';
        break;
      case 1:
        this.urlTypeOfGame = './assets/words/colors.json';
        break;
      case 2:
        this.urlTypeOfGame = './assets/words/vehicles.json';
        break;
    }
    return this.http.get<WordsType>(this.urlTypeOfGame);
  }
}
