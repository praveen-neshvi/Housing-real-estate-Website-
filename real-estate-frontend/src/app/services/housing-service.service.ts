import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IProperty } from '../property/IProperty.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllProperties() : Observable<IProperty[]> {
    return this.http.get('data/properties.json').pipe(
      map( data => { console.log(data);
        const propertiesArray: Array<IProperty> = [];
        for (const Id in data){
        //   if(data.hasOwnProperty(idx))
          propertiesArray.push(data[Id]);
       }
       return propertiesArray;
      })
    );
  }
}
