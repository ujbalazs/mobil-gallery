import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {

  items = [
   /* {
      image: "assets/images/car.jpg"
    },
    {
      image: "assets/images/city.jpeg"
    },
    {
      image: "assets/images/mountain.jpg"
    },
    {
      image: "assets/images/city.jpeg"
    },
    {
      image: "assets/images/mountain.jpg"
    },
    {
      image: "assets/images/car.jpg"
    },
    {
      image: "assets/images/city.jpeg"
    },
    {
      image: "assets/images/mountain.jpg"
    },
    {
      image: "assets/images/car.jpg"
    },
    {
      image: "assets/images/car.jpg"
    },
    {
      image: "assets/images/city.jpeg"
    },
    {
      image: "assets/images/mountain.jpg"
    },
    {
      image: "assets/images/city.jpeg"
    },
    {
      image: "assets/images/mountain.jpg"
    },
    {
      image: "assets/images/car.jpg"
    },
    {
      image: "assets/images/city.jpeg"
    },
    {
      image: "assets/images/mountain.jpg"
    },
    {
      image: "assets/images/car.jpg"
    },*/

  ];


  @ViewChild('slider', { static: true }) private slider: IonSlides;
  style = 'default';
  showMask = false;
  currentImage;
  currentIndex: number;
  controls = true;
  totalImageCount = 0;


  slideOpts = {
    spaceBetween: 5,
    centeredSlides: true,
    speed: 400,
    zoom:{
      maxRatio: 3
    }
  };

  constructor(private route: Router, public photoService: PhotoService) {}

  ngOnInit() {this.photoService.loadSaved().finally(()=>{this.items = this.photoService.photos});}

  menu() {
    this.route.navigate(['']);
  }


  onPreviewImage(index: number): void {
    this.showMask = true;
    this.currentIndex = index;
    this.currentImage = this.items[index];
    this.style = 'change';
    this.slider.slideTo(this.currentIndex);


  }
}
