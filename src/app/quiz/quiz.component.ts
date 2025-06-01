import { Component } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Question } from '../model/question.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  quizSets: string[] = [];
  selectedSet: string | null = null;
  questions: Question[] = [];
  completedSets: string[] = [];

  loading = false;
  currentIndex = 0;
  score = 0;
  selectedAnswer: string | null = null;
  showResult = false;
  progressMap: { [key: string]: number } = {};


  constructor(private quizService: QuizService) {
    this.quizSets = this.quizService.getQuizSetNames();
  }

  selectAnswer(option: string) {
    this.selectedAnswer = option;
  }

  nextQuestion() {
    if (this.currentIndex >= this.questions.length) {
      this.showResult = true;

      if (this.selectedSet && !this.completedSets.includes(this.selectedSet)) {
        this.completedSets.push(this.selectedSet);
      }
    }
    if (this.selectedAnswer === this.questions[this.currentIndex].answer) {
      this.score++;
    }

    this.selectedAnswer = null;
    this.currentIndex++;

    if (this.currentIndex >= this.questions.length) {
      this.showResult = true;
    }
  }

  restartQuiz() {
    if (this.selectedSet) {
      this.onSelectSet(this.selectedSet);
    }
  }

  onSelectSet(set: string) {
    this.selectedSet = set;
    this.loading = true;
    this.questions = [];
    this.currentIndex = 0;
    this.score = 0;
    this.selectedAnswer = null;
    this.showResult = false;


    // Simulate async loading (e.g., from API)
    setTimeout(() => {
      this.questions = this.quizService.getQuestions(set);
      this.shuffleQuestions();
      this.loading = false;
    }, 1000);
  }
  // Fisher-Yates shuffle algorithm
  shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  shuffleQuestions() {
    this.questions = this.shuffleArray(this.questions);
    // Also shuffle options in each question
    this.questions.forEach(q => {
      q.options = this.shuffleArray(q.options);
    });
  }

}
