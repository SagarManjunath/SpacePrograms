import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  spaceList:any;
  EvenLaunchYears:any=[
    2006,   
    2008,    
    2010,    
    2012,   
    2014,    
    2016,    
    2018
   
  ]
  OddLaunchYears:any=[   
    2007,    
    2009,   
    2011,    
    2013,   
    2015,    
    2017,   
    2019
  ]

  constructor(public homeService:HomeService) { }

  ngOnInit() {
    this.GetAllSpacePrograms();
    
  }

  GetAllSpacePrograms(){
    this.homeService.GetAllSpacePrograms().subscribe((prgms)=>{
      this.spaceList=prgms;
      console.log(prgms)
    })
  }

  GetAllSpaceProgramsByYear(year:number){
    this.homeService.GetAllSpaceProgramsByYear(year).subscribe((yearPrms)=>{
      this.spaceList=yearPrms;
    })

  }

  GetAllSuccessfullLaunch(isSuccessLaunch){
    this.homeService.GetAllSuccessfullLaunch(isSuccessLaunch).subscribe((successLaunchs)=>{
      this.spaceList=successLaunchs;
    })
  }

}
