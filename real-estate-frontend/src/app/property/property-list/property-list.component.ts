
import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing-service.service';
import { IProperty } from '../IProperty.interface';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  PropertyArray :  Array<IProperty> = [];

  constructor(private housingService: HousingService) { }

  ngOnInit() {
    this.housingService.getAllProperties().subscribe(
      data=>{
          this.PropertyArray = data;
      }, err=>{
        console.log(err);
      }
    )
  }

}
