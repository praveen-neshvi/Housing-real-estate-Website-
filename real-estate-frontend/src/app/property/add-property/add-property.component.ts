import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit{

  @ViewChild('FormVariable')
  appPropertyFormVariable!: NgForm;

  @ViewChild('formTabs')
  formTabs!: TabsetComponent;

  propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex']
  furnishedTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished']

  propertyView : IProperty = {
    Id: null,
    Name: '',
    Price: null,
    SellRent: null,
    Type: ''
  };

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  onBack(){
    this.router.navigate(['/']);
  }

  onSubmit(){
    console.log(this.appPropertyFormVariable);
  }

  selectTab(NextTabId: number) {
    // this.nextClicked = true;
    // if (IsCurrentTabValid) {
        this.formTabs.tabs[NextTabId].active = true;
    // }
}

}
