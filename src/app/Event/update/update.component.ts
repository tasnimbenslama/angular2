import { Component } from '@angular/core';
import { Event } from 'src/app//Models/event';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {


  event: Event=new Event(0,"","","",0,"",new Date(),new Date());


  url = "http://localhost:8075/app0";// URL de votre API
  endPoint_g = '/updateEvent'; // Endpoint pour la mise à jour de l'événement

  constructor(private http: HttpClient) {}

  updateEvent() {
    if (confirm('are you sure to change  this event ?')){

    this.http.put<Event>(this.url + this.endPoint_g, this.event)
      .subscribe(
        () => {
          const message =('Événement mis à jour avec succès');
          alert(message);
        },
        (error) => {
          console.error('Erreur lors de la mise à jour de l\'événement', error);
          // Gérer les erreurs de mise à jour de l'événement
        }
      );
  }
}
}
