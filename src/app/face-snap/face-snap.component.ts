import { Component, Input, input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snaps';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
 @Input() faceSnap!: FaceSnap;

 
  snapButtonText!: string;
  userHasSnapped!: boolean;

  ngOnInit(): void {
    
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
      this.faceSnap.removeSnap();
      this.snapButtonText = 'oh snap!';
      this.userHasSnapped = false;
    }
    snap(): void {
      this.faceSnap.addSnap();
      this.snapButtonText = 'Oops, snap!';
      this.userHasSnapped = true;
    }

}
