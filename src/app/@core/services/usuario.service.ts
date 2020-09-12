import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from '../utils/url';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(
    private httpClient: HttpClient
  ) {}

  public getUsuarios(): Observable<any> {
    return this.httpClient.get(url + "/api/usuarios").pipe(map((res: any) => res));
  }
}
