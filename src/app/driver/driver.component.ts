import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Driver, Option } from '../vm-types';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  // the data that will be used in the form
  driverData: Driver;

  // Define the preset list of "transportation" options
  transportationList: Option[] = [
    {value: "C", text: "Car"},
    {value: "B", text: "Bus"},
    {value: "M", text: "Motorcycle"},
    {value: "H", text: "Helicopter"}
  ];
  
  constructor() { }

  ngOnInit(): void {
    // Populate the "driverData" with some static data (this would normally come from a data service)
    this.driverData = {
      name: "Richard Hammond",
      description: "Richard is a motor vehicle enthusiast",
      ownedTransportation: ["C", "M"], 
      favouriteTransportation: "M",
      driverLicence: true, 
      vehicleUse: "business"
    };
  }

  onSubmit(f: NgForm) {
    console.log("form submitted. driverData: ", this.driverData);
    console.log("f.value: ", f.value);
    console.log("f.valid: ", f.valid);
  }
}
