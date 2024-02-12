import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private dataUrl = 'assets/card.json';

  constructor(private http: HttpClient) { }
    getdata(): Observable<any[]>{
      return this.http.get<any[]>(this.dataUrl);
    }
}
