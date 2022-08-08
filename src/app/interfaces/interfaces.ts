export interface Nickname {
  nickname: string;
}

export interface WordsType {
  question: string;
  all_words: string[];
  good_words: string[];
}

export interface GameAnswers {
  name: string;
  isSelected: boolean;
  isCorrect: boolean;
  isCheck: string;
}
