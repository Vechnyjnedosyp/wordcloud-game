import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nickname-page',
  templateUrl: './nickname-page.component.html',
  styleUrls: ['./nickname-page.component.scss'],
})
export class NicknamePageComponent implements OnInit {
  name = '';
  alert = false;

  constructor(private router: Router, private userService: UserService) {}

  play() {
    if (!this.checkName()) {
      this.userService.user = this.name;
      this.router.navigate(['/game']);
    }
  }

  checkName() {
    return !this.name.trim();
  }

  ngOnInit(): void {}
}
