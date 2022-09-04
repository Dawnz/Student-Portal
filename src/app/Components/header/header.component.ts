import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  show: boolean = false;
  username: string = '';
  firstName: string = '';
  response: any;
  constructor(private auth: AuthenticationService) {
    this.auth.user$.subscribe((res) => {
      this.response = res;
      this.firstName = this.response?.session.firstName;
      this.username = this.response?.session.username;
      console.log(this.response?.session);
    });
  }

  ngOnInit(): void {}

  toggleShow() {
    this.show = !this.show;

    return this.show;
  }
  logout() {
    // this.toggleShow();
    this.show = false;
    console.log(this.show);

    this.auth.logout();
  }
}
