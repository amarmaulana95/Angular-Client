import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pengguna } from '../model/pengguna';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PenggunaService {

  public url = "http://localhost:3000/api"

  constructor(private _http : HttpClient) { }

  simpan(pengguna : Pengguna) : Observable<any> {
    return this._http.post(`${this.url}/pengguna`, pengguna);
  }

  edit(pengguna : Pengguna, id) {
    return this._http.put(`${this.url}/pengguna/${id}`, pengguna);
  }

  listar() : Observable<any> {
    return this._http.get(`${this.url}/pengguna`);
  }

}
