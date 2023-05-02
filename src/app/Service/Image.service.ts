import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }
  uploadImage(image: File) {
    const formData = new FormData();
    formData.append('image', image);

    return this.http.post('http://localhost:8075/app0/uploadImage', formData);
  }
}
