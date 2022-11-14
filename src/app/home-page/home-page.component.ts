import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

  constructor(private route: Router, public photoService: PhotoService) {}

  gallery() {
    this.route.navigate(['/gallery']);
  }

  
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
  
  ngOnInit() {}

}
