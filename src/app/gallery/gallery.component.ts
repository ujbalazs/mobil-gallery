import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {

  items = [
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
    },

  ];


  previewImage= false;
  showMask=false;
  currentImage;
  currentIndex: number;
  controls=true;
  totalImageCount=0;
 

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };


  constructor(private route: Router) { }

  ngOnInit() {}

  next(){
    if(this.currentIndex < this.items.length-1){
      console.log("sdfsdfsdfsdfsdf")
    this.currentIndex = this.currentIndex + 1;
    this.currentImage = this.items[this.currentIndex];}   
  }

  prev(){
    if(this.currentIndex > 0){
    this.currentIndex = this.currentIndex -1;
    this.currentImage= this.items[this.currentIndex]}
  }
  

  menu() {
    this.route.navigate(['']);
  }


  onPreviewImage(index:number):void{
    this.showMask=true;
    this.previewImage=true;
    this.currentIndex = index;
    this.currentImage = this.items[index];

}}
