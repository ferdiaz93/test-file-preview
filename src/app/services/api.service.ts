import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {enableProdMode} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }

  useNetelip(){
    enableProdMode();
    console.log('servicio');

    let data = {
      token: '',
      api: 'https://api.netelip.com/v1/voice/',
      src: '',
      dst: '',
      duration: '30',
      typedst:'pstn',
    }
    return this.httpClient.post<any>("https://api.netelip.com/v1/voice", data, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS"
      }
    }).pipe(map(data => data));
  }

}
