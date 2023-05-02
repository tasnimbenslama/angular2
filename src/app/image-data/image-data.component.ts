import { Component } from '@angular/core';
import { ImageService } from '../Service/Image.service';

@Component({
  selector: 'app-image-data',
  templateUrl: './image-data.component.html',
  styleUrls: ['./image-data.component.css']
})
export class ImageDataComponent {
  selectedFile: any;



 

  constructor(private imageUploadService: ImageService) { }

  onFileSelected(event :any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    this.imageUploadService.uploadImage(this.selectedFile).subscribe(res => {
      console.log(res);
    });
  }

}
