import { Injectable } from '@angular/core';
import {AngularFireDatabase,AngularFireList} from '@angular/fire/database';
import { Policy } from '../app/policy';

@Injectable({
  providedIn: 'root'
})
export class DataingestService {
  EmplyeeDetails:AngularFireList<Policy> = null;
  constructor(private file:AngularFireDatabase) { 
    this.EmplyeeDetails=file.list("/EmployeeDetails");

  }
  getData():AngularFireList<Policy>{
    return this.EmplyeeDetails;
  }
  createData(policy:Policy){
    this.file.list('EmployeeDetails').push(policy);

  }
  /*updateDate(policy:Policy){
    //delete policy.E_ID;
    this.file.list('Employee_details/'+ policy.E_ID).update;
  }
  updateCustomer(key: string, value: any): Promise<void> {
    return this.customersRef.update(key, value);
  }
  deleteAll(): Promise<void> {
    return this.customersRef.remove();
  }*/
  deleteData(key:string):Promise <void>{
    return this.EmplyeeDetails.remove(key)
  }
}
