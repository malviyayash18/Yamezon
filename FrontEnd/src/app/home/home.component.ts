import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {  

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  imageUrlList = ['../../assets/Advertisement/Offer50.png'
  , 'https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg'
  , 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg']

  currentImage = this.imageUrlList[0] ;
  count = 0;
  

  MoveRight() {
    // Move Right
    if (this.count < this.imageUrlList.length - 1) {
      this.count = this.count + 1;
      this.currentImage = this.imageUrlList[this.count]
    }
  }

  MoveLeft() {
    // Mode Left
    if (this.count >= 1) {
      this.count = this.count - 1;
      this.currentImage = this.imageUrlList[this.count]
      console.log(this.count)
    }    
  }

}
