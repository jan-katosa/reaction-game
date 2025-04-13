import { Score } from "./Score"

export interface User {
    name: string,
    email: string;
    password: string;
    scores: Score[];
    high_score: Score
  }