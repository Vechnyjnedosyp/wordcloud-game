import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss'],
})
export class ResultPageComponent implements OnInit {
  score = 0;
  numOfGood = 0;
  numOfBad = 0;
  numOfAnother = 0;

  constructor(
    public gameService: GameService,
    public userService: UserService,
    private router: Router
  ) {}

  onRestart() {
    this.router.navigate(['/']);
  }

  getResult() {
    this.gameService.gameAnswers.forEach((item) => {
      if (item.isCheck === 'Good') {
        return (this.numOfGood += 1);
      } else if (item.isCheck === 'Bad') {
        return (this.numOfBad += 1);
      } else {
        return (this.numOfAnother += 1);
      }
    });
    this.score = this.numOfGood * 2 - (this.numOfBad + this.numOfAnother);
    return this.score;
  }

  ngOnInit(): void {
    this.getResult();
  }
}
