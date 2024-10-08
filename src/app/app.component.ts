import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snaps';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;


  ngOnInit(): void {
    this.faceSnaps = [
      this.mySnap = new FaceSnap(
        'Haman', 'Is my best friend', 'https://images.unsplash.com/photo-1652636347412-46f47856f540?q=80&w=2668&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', new Date(), 12
      ),

      this.myOtherSnap = new FaceSnap(
        'Sport', 'my favorite sport', 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', new Date(), 2
      ),

      
      this.myLastSnap = new FaceSnap(
        'photograph', 'The photo', 'https://images.unsplash.com/photo-1593644311729-d0b478c97d95?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', new Date(),
        12
      )

    ];



    this.faceSnaps[0].setLocation('Paris');



  }
}
