import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-cloud-page',
  templateUrl: './cloud-page.component.html',
  styleUrls: ['./cloud-page.component.scss'],
})
export class CloudPageComponent implements OnInit {
  question = '';
  allWords: string[] = [];
  goodWords: string[] = [];
  buttonMessage = 'check answers';
  isDisabled = false;

  constructor(public gameService: GameService, private router: Router) {}

  onClick(buttonMessage: string) {
    switch (buttonMessage) {
      case 'check answers':
        this.gameService.gameAnswers.forEach((item) => {
          if (!item.isCheck && item.isSelected) {
            if (item.isCorrect) {
              item.isCheck = 'Good';
            } else {
              item.isCheck = 'Bad';
            }
          }
          this.isDisabled = true;
          this.buttonMessage = 'finish game';
        });
        break;
      case 'finish game':
        this.router.navigate(['/result']);
        break;
    }
  }

  addItem(item: string) {
    this.gameService.gameAnswers.push({
      name: item,
      isSelected: false,
      isCorrect: false,
      isCheck: '',
    });
  }

  onSelect(name: string) {
    this.gameService.gameAnswers.map((item) => {
      if (item.name === name && item.isSelected) {
        item.isSelected = false;
      } else if (item.name === name) {
        item.isSelected = true;
      }
    });
  }

  ngOnInit(): void {
    this.gameService.gameAnswers = [];
    this.gameService.selectGameType().subscribe((res) => {
      this.goodWords = res.good_words;
      this.question = res.question;
      this.allWords = res.all_words;
      this.allWords.forEach((item) => {
        this.addItem(item);
      });
      this.gameService.gameAnswers.map((item) => {
        this.goodWords.forEach((i) => {
          if (item.name === i) {
            item.isCorrect = true;
          }
        });
      });
    });
    console.log('[]',this.gameService.gameAnswers)
  }
}
