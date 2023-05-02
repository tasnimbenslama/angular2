import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Document } from 'src/app/Models/document';
@Component({
  selector: 'app-add-d',
  templateUrl: './add-d.component.html',
  styleUrls: ['./add-d.component.css']
})
export class AddDComponent {
  id !:number;
  id1!:number;
  selectedFile: File | undefined;
  constructor(private http: HttpClient) { }
document :Document=new Document(0,"");
  
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    if (!this.selectedFile) {
      // Handle the case where no file was selected
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.http.post<Document>('http://localhost:8075/app0/upload', formData)
      .subscribe(response => {
        const message=('File uploaded successfully');
        alert(message);
        console.log('Document ID:', response.id);

        alert('Document uploaded successfully. ID: ' + response.id);
      }, error => {
        console.error('Error uploading file', error);
      });
  }



  assignEventToAllTeams(id: number,id1:number) {
    const url = `http://localhost:8075/app0/Assign/${id}/${id1}`;
    this.http.put(url, {}).subscribe(
      () => {
        const message =('Document assigned to Your Project successfully.');
        alert(message);
      },
      (error) => {
        console.error('Error assigning event to teams:', error);
      }
    );
  }


}
