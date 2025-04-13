import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

export interface ScorePlusDate {
  value: Number,
  //Date: Date
}

const TEST_USER_SCORES: ScorePlusDate[] = [
  {value: 13},
  {value: 1},
  {value: 25},
  {value: 47},
  {value: 12}
];


@Component({
  selector: 'app-profile',
  imports: [
    MatCardModule,
    MatTableModule,
    RouterLink,
    MatButtonModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  isLoggedIn = false
  displayedColumns: string[] = ['value']
  dataSource = TEST_USER_SCORES;

  ngOnInit(): void {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }

  
}
