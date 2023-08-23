import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newMemberName: string = '';
  members: string[] = [];
  errorMessage = '';

  add() {
    if (!this.newMemberName.length) {
      this.errorMessage = "Name can't be empty";
      return;
    }

    this.errorMessage = '';
    this.members.push(this.newMemberName);
    this.newMemberName = '';

    console.log(this.members);
  }

  onInput(member: string) {
    this.newMemberName = member;
    console.log(this.newMemberName);
  }

  generate() {
    throw new Error('Method not implemented.');
  }
}
