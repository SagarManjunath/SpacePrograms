import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }

  GetAllSpacePrograms(){
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100');
  }
  GetAllSpaceProgramsByYear(year:number){
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year='+year)
  }

  GetAllSuccessfullLaunch(isSuccessLaunch:boolean){
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_success='+isSuccessLaunch)
  }

  GetAllLaunchSuccessAndLandSuccess(isSuccessLaunch:boolean,isSuccessLand:boolean){
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_success='+isSuccessLaunch+'&land_success='+isSuccessLand)
  }
  GetAll(year:number,isSuccessLaunch:boolean,isSuccessLand:boolean){
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_success='+isSuccessLaunch+'&land_success='+isSuccessLand+'&launch_year='+year)
  }
}
