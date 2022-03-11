import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-netelipbutton',
  templateUrl: './netelipbutton.component.html',
  styleUrls: ['./netelipbutton.component.css']
})
export class NetelipbuttonComponent implements OnInit {

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    console.log("hola");
    this.apiService.useNetelip().subscribe( data => {
      console.log(data);
      
    })
  }

}
