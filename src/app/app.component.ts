import { Component,OnInit ,Input} from '@angular/core';
//import {AngularFireDatabase} from '@angular/fire/database';
import { Observable } from 'rxjs';
import {Policy} from '../app/policy';
import {DataingestService} from '../app/dataingest.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //EmployeeList:Observable<any[]>;
 
  @Input() EmployeeList:Policy;
  employeeList: any;
  title = 'firebase-app';
  constructor(private dService:DataingestService){
    
    
  }
 ngOnInit(){
   //view data
   this.dService.getData().snapshotChanges().pipe(
     map(e=>
      e.map(x=>
        ({key:x.payload.key,
          ...x.payload.val() })
          )

     )
   ).subscribe(
     ex=>{
       this.employeeList=ex;
     }
   )
  }
 
 OnCreatData(poli:Policy){
  this.dService.createData(poli);
 }
 /*OnUpdateData(poli:Policy){
  this.dService.;
 }*/
 OnDeleteData()
 {
  this.dService.deleteData(this.EmployeeList.key);
  console.log('kii')
 }

}
