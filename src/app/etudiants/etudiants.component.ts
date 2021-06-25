import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {
  public listFormations:any;
  public listEtudiants:any;
  public currentFormation:any={id:-1};

  constructor(private http:HttpClient,private etdService:ServiceService) { }

  ngOnInit(): void {

    this.http.get("http://localhost:8080/formations")
    .subscribe((data:any)=>{
      this.listFormations=data;
    },err=>{
      console.log(err);
    })
  }

  onGetEtudiants(f:any){
    this.currentFormation=f;
    this.http.get("http://localhost:8080/formations/"+f.id+"/etudiants")
    .subscribe((data:any)=>{
      this.listEtudiants=data;
    },err=>{
      console.log(err);
    })
  }

}
