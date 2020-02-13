import { Component, OnInit } from '@angular/core';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'u-blog';
  constructor(private userService: UserService) {}
  ngOnInit() {
    this.userService.populate();
  }
}
