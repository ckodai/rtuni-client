import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from '../utils/url';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VisitaService {
  constructor(
    private httpClient: HttpClient
  ) {}

  public getVisitas(): Observable<any> {
    return this.httpClient.get(url + "/api/visita").pipe(map((res: any) => res));
  }

  public saveVisita(obj: any): Observable<any> {
    //const formData: FormData = new FormData();

    //Object.getOwnPropertyNames(obj).forEach((propertyName: any) => formData.append(propertyName, obj[propertyName]));

    return this.httpClient.post(url + "/api/visita", obj).pipe(map((res: any) => res));
  }
}
