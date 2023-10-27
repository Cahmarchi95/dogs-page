import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cachorro } from '../Cachorro';

@Injectable({
  providedIn: 'root',
})
export class CachorroService {
  private apiUrl = 'http://localhost:3000/dogs';

  constructor(private http: HttpClient) {}

  getCachorros(): Observable<Cachorro[]> {
    return this.http.get<Cachorro[]>(this.apiUrl);
  }

  remove(id: number) {
    return this.http.delete<Cachorro>(`${this.apiUrl}/${id}`);
  }
}
