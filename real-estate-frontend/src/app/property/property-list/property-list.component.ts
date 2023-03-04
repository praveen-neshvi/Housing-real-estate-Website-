
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPropertyBase } from 'src/app/model/ipropertybase';
import { HousingService } from 'src/app/services/housing-service.service';
import { IProperty } from '../IProperty.interface';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;
  PropertyArray :  Array<IPropertyBase> = [];

  constructor(private activatedRoute: ActivatedRoute, private housingService: HousingService) { }

  ngOnInit() {
    if(this.activatedRoute.snapshot.url.toString()){
      this.SellRent = 2;
    }
    this.housingService.getAllProperties(this.SellRent).subscribe(
      data=>{
          this.PropertyArray = data;
      }, err=>{
        console.log(err);
      }
    )
  }

}
