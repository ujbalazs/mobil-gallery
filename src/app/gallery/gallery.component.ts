import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { IonSlides } from '@ionic/angular';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {

  items = [];

  itemsToDelete;

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

  ngOnInit() {this.photoService.loadSaved().finally(()=>{this.items = this.photoService.photos});
  this.itemsToDelete = localStorage.getItem('CapacitorStorage.photos')}

  menu() {
    this.route.navigate(['']);
  }

  del(e) {
  let name = e.filepath
  const obj = JSON.parse(this.itemsToDelete);
  for(var i = 0; i < obj.length; i++){
    if(obj[i].filepath == name){
      obj.splice(i, 1) 
    }
  }
  const json = JSON.stringify(obj); 
  localStorage.setItem('CapacitorStorage.photos', json);


  this.photoService.loadSaved().finally(()=>{this.items = this.photoService.photos})
  this.itemsToDelete = localStorage.getItem('CapacitorStorage.photos')
  if(JSON.parse(this.itemsToDelete).length === 0){
    location.reload()
  }
  }


  onPreviewImage(index: number): void {
    this.showMask = true;
    this.currentIndex = index;
    this.currentImage = this.items[index];
    this.style = 'change';
    this.slider.slideTo(this.currentIndex);


  }
}
