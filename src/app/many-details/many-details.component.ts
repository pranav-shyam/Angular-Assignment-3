import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-many-details',
  templateUrl: './many-details.component.html',
  styleUrls: ['./many-details.component.css']
})
export class ManyDetailsComponent implements OnInit {
  activeDetails :boolean = false;
  detailsArray: Date[] = []

  constructor() { }

  toggleActiveDetails(){
    this.detailsArray = [...this.detailsArray, new Date()]
    this.activeDetails = !this.activeDetails
  }

  ngOnInit(): void {
  }

}
