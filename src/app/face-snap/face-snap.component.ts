import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {

  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl!: string;
  snapButtonText!: string;
  userHasSnapped!: boolean;

  ngOnInit(): void {
    this.title = 'Haman';
    this.description = 'Is my best friend';
    this.createdAt = new Date();
    this.snaps = 0;
    this.imageUrl = 'https://images.unsplash.com/photo-1652636347412-46f47856f540?q=80&w=2668&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    this.snapButtonText = 'oh snap!';
    this.userHasSnapped = false;
  }
  onSnap(): void {
    if (this.userHasSnapped) {this.unSnap();
  
    } else {
      this.snap();
  
    }

  }
    unSnap(): void {
      this.snaps--;
      this.snapButtonText = 'oh snap!';
      this.userHasSnapped = false;
    }
    snap(): void {
      this.snaps++;
      this.snapButtonText = 'Oops, snap!';
      this.userHasSnapped = true;
    }

}
