import { Injectable } from '@angular/core';
import { Regestriation } from '../MODELS/Regestriation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegistriationService {

  private readonly url = 'http://localhost:8075/updateRegistration';
  constructor(private http: HttpClient) { }

  private baseUrl = ("http://localhost:8075/updateRegistration");  // remplacer avec votre propre URL

  getRegistriation(): Observable<Regestriation[]> {

    return this.http.get<any[]>("http://localhost:8075/showRegistration")

  }

  public deleteRegistriation(id: number) {
    return this.http.delete("http://localhost:8075/deleteRegistration/" + id)


  }
  updateRegistration(registration: Regestriation): Observable<Regestriation> {
    const url = `${this.baseUrl}/${registration.id_reg}`;
    return this.http.put<Regestriation>(url, registration);
  }
  getRegistrationById(id: number) {
    return this.http.get(`http://localhost:8075/RetriveRegistration/${id}`)
  }

}
    /////////////////////////////////




