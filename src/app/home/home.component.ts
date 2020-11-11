import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './newHome.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedFilter=false;
  objectKeys = Object.keys;
  step:any;
  year:number;
  SuccessLaunch:boolean=false;
  Successland:boolean=false;
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
  yearsEven:Array<any>=[{
    id:1,
    name:'2006',
    active:false
  },{
    id:2,
    name:'2008',
    active:false
  },{
    id:3,
    name:'2010',
    active:false
  },{
    id:4,
    name:'2012',
    active:false
  }
  ,{
    id:5,
    name:'2014',
    active:false
  },{
    id:6,
    name:'2016',
    active:false
  },{
    id:7,
    name:'2018',
    active:false
  }
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
    this.year=year;
    this.homeService.GetAllSpaceProgramsByYear(this.year).subscribe((yearPrms)=>{
      this.spaceList=yearPrms;
    })

  }

  GetAllSuccessfullLaunch(isSuccessLaunch){
    this.SuccessLaunch=isSuccessLaunch;
    this.homeService.GetAllSuccessfullLaunch(this.SuccessLaunch).subscribe((successLaunchs)=>{
      this.spaceList=successLaunchs;
    })
  }

  GetAllLaunchSuccessAndLandSuccess(isSuccessLand){
    this.Successland=isSuccessLand;
    this.homeService.GetAllLaunchSuccessAndLandSuccess(this.SuccessLaunch,this.Successland).subscribe((successLaunchs)=>{
      this.spaceList=successLaunchs;
      console.log('after Successfull land');
      console.log(this.spaceList);
    })
  }
  GetAll(){
    this.homeService.GetAll(this.year,this.SuccessLaunch,this.Successland).subscribe((successLaunchs)=>{
      this.spaceList=successLaunchs;
    })
  }

  IsLandingSuccessfull(flight_number:number){
    if(this.spaceList[flight_number].hasOwnProperty('rocket')){
      if( this.spaceList[flight_number].rocket.first_stage.hasOwnProperty('cores'))
    //  return true;
      return this.spaceList[flight_number].rocket.first_stage.cores[0].land_success==true?true:false;
      else
      return false
    }   
    else
    return false

  }

}
