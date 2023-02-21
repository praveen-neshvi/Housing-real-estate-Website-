import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  public propertyId!: number;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.propertyId = +this.activatedRoute.snapshot.params['id'];

//routerLink will not re-render the component if you are already in the component
//and want to route to the same component. So using snapshot will not change the
//propertyId when we route to differentr component numbers using button.

  this.activatedRoute.params.subscribe(
    (params)=> {
        this.propertyId = +params['id'];
      }
    )
  }

  onSelectNext(){
    this.propertyId += 1;
    this.router.navigate(['property-detail', this.propertyId]);
  }

}
