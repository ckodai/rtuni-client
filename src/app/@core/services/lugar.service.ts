import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from '../utils/url';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LugarService {
  constructor(
    private httpClient: HttpClient
  ) {}

  public getLugares(): Observable<any> {
    return this.httpClient.get(url + "/api/lugar").pipe(map((res: any) => res));
  }

  public saveLugar(formPost: any): Observable<any> {
    return this.httpClient.post(url + "/api/lugar/postLugar", formPost).pipe(map((res: any) => res));
  }

  public saveFotoLugar(fileToUpload: File, obj: any): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('image', fileToUpload, fileToUpload.name);

    Object.getOwnPropertyNames(obj).forEach((propertyName: any) => formData.append(propertyName, obj[propertyName]));

    return this.httpClient.post(url + "/api/lugar/postLugar", formData).pipe(map((res: any) => res));
  }
}
