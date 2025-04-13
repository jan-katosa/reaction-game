import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

export interface PlayerPlusScore {
  name: string;
  score: number;
}

const PLAYER_DATA: PlayerPlusScore[] = [
  {name: "Zach", score: 100},
  {name: "Broly", score: 250},
  {name: "Vader", score: 400},
  {name: "Gabriel", score: 1},
  {name: "Minos", score: 500}
];

@Component({
  selector: 'app-leaderboard',
  imports: [
    RouterLink,
    MatTableModule,
    MatButtonModule
  ],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.scss'
})
export class LeaderboardComponent {
  displayedColumns: string[] = ['name', 'score']
  dataSource = PLAYER_DATA;
}
