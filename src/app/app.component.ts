import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  greeting: string = 'Hello!';
  users: string = 'Users';
  posts: string = 'Posts';
  albums: string = 'Albums';
  todos: string = 'Todos';
  userComments: string = 'User Comments';
}
