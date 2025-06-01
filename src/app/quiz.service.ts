import { Injectable } from '@angular/core';
import { Question } from './model/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private quizSets: { [key: string]: Question[] } = {
    'Compliance Officer': [
      {
        question: 'What is the primary purpose of a risk assessment in compliance?',
        options: ['To increase profits', 'To identify and mitigate compliance risks', 'To evaluate employee performance', 'To develop marketing strategies'],
        answer: 'To identify and mitigate compliance risks'
      },
      {
        question: 'How often should compliance policies typically be reviewed?',
        options: ['Every 10 years', 'When requested by staff', 'Annually or when regulations change', 'Only after an audit'],
        answer: 'Annually or when regulations change'
      },
      {
        question: 'What is the first step after discovering a potential compliance violation?',
        options: ['Ignore it unless it\'s serious', 'Report it to authorities immediately', 'Conduct an internal investigation', 'Alert the medias'],
        answer: '4'
      },
      {
        question: 'Which of these is a KPI used in compliance monitoring?',
        options: ['Sales revenue', 'Employee attendance', 'Number of reported incidents', 'Social media followers'],
        answer: 'Number of reported incidents'
      },
      {
        question: 'What tool is commonly used to train employees on compliance?',
        options: ['Virtual reality simulation', 'Compliance e-learning modules', 'Live chat support', 'Gamified customer surveys'],
        answer: 'Compliance e-learning modules'
      }
    ],
    'Employee': [
      {
        question: 'What should you do if you see unethical behavior at work?',
        options: ['Join in if it\'s harmless', 'Report it through the proper channels', 'Ignore it', 'Tell a friend'],
        answer: 'Report it through the proper channels'
      },
      {
        question: 'Why is annual compliance training important?',
        options: ['It’s a formality', 'It entertains staff', 'It helps reinforce policies and legal responsibilities', 'It increases wages'],
        answer: 'It helps reinforce policies and legal responsibilities'
      },
      {
        question: 'Who do you report a conflict of interest to?',
        options: ['Your friend', 'Human Resources or Compliance Officer', 'The media', 'No one – it’s personal'],
        answer: 'Human Resources or Compliance Officer'
      },
      {
        question: 'What is considered a compliance breach?',
        options: ['Taking a long lunch', 'Misuse of confidential information', 'Wearing casual clothes on Friday', 'Taking a sick day'],
        answer: 'Misuse of confidential information'
      },
      {
        question: 'Can you accept a gift from a client?',
        options: ['Always', 'Never', 'Only if it complies with company policy', 'Only if it\'s expensive'],
        answer: 'Only if it complies with company policy'
      }
    ],
    'Manager/Supervisor': [
      {
        question: 'What should you do if an employee reports harassment?',
        options: ['Wait and see', 'Keep it secret', 'Escalate it immediately per company policy', 'Ask others if it’s true'],
        answer: 'Escalate it immediately per company policy'
      },
      {
        question: 'How do you build a culture of compliance?',
        options: ['Avoid reporting minor issues', 'Regularly discuss ethical behavior and lead by example', 'Focus only on business goals', 'Ignore training'],
        answer: 'Regularly discuss ethical behavior and lead by example'
      },
      {
        question: 'When should you escalate an issue to the Compliance Officer?',
        options: ['When you feel like it', 'Only if legal action is needed', 'When the issue is serious or violates policy', 'If it\'s related to vacation requests'],
        answer: 'When the issue is serious or violates policy'
      },
      {
        question: 'As a manager, how do you verify compliance documentation?',
        options: ['Ask HR to check', 'Sign it without reading', 'Review for accuracy and completeness', 'Let employees handle it'],
        answer: 'Review for accuracy and completeness'
      },
      {
        question: 'What is your responsibility if an employee bypasses security protocols?',
        options: ['Congratulate them for speed', 'Report and correct the behavior', 'Promote them', 'Ignore if results are good'],
        answer: 'Report and correct the behavior'
      }
    ],
    'Auditor/Regulatory Inspector': [{
      question: 'What is the goal of a compliance audit?',
      options: ['To assess personal goals', 'To check the physical office', 'To ensure the organization is meeting regulatory standards', 'To monitor dress codes'],
      answer: 'To ensure the organization is meeting regulatory standards'
    },
    {
      question: 'What is a sign of non-compliance?',
      options: ['Up-to-date training records', 'Incomplete documentation', 'Regular audits', 'Clear policies'],
      answer: 'Incomplete documentation'
    },
    {
      question: 'What is an internal audit?',
      options: ['A personal review', 'A check of competitor activity', 'A company’s own review of its compliance', 'A tax return filing'],
      answer: 'A company’s own review of its compliance'
    },
    {
      question: 'How do you maintain objectivity during an audit?',
      options: ['Trust personal opinions', 'Rely on rumors', 'Stick to facts and evidence', 'Ask employees for input'],
      answer: 'Stick to facts and evidence'
    },
    {
      question: 'What should follow a compliance audit?',
      options: ['Nothing', 'Public announcement', 'Follow-up actions to address findings', 'Vacation'],
      answer: 'Follow-up actions to address findings'
    }]

  };

  getQuizSetNames(): string[] {
    return Object.keys(this.quizSets);
  }

  getQuestions(setName: string): Question[] {
    return this.quizSets[setName] || [];
  }
}
