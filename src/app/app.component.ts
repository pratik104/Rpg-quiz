import { Component } from '@angular/core';
import { QuizComponent } from './quiz/quiz.component'; // ✅ import your quiz component

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [QuizComponent], // ✅ include it here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quiz-app';
}
