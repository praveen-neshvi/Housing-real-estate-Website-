import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IProperty } from '../property/IProperty.interface';
import { Observable } from 'rxjs';
import { IPropertyBase } from '../model/ipropertybase';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllProperties(SellRent: number) : Observable<IPropertyBase[]> {
    return this.http.get('data/properties.json').pipe(
      map( data => { console.log(data);
        const propertiesArray: Array<IPropertyBase> = [];
        for (const Id in data){
         if(data.hasOwnProperty(Id) && data[Id].SellRent === SellRent){
          propertiesArray.push(data[Id]);
         }
       }
       return propertiesArray;
      })
    );
  }
}
