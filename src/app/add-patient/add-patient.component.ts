import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {

  patientID=""
  patientName=""
  dob=""
  gender=""
  phoneNo=""
  doctorID=""
  doctorName=""
  roomNo=""

  constructor(private api:ApiService){}

  readValues=()=>
  {
    let data:any={"patientID":this.patientID,"patientName":this.patientName,"dob":this.dob,"gender":this.gender,"phoneNo":this.phoneNo,"doctorID":this.doctorID,"doctorName":this.doctorName,"roomNo":this.roomNo}

    console.log(data)

    this.api.addPatientData(data).subscribe(

      (response:any)=>
      {
        console.log(response)

        if(response.status == "success")
        {
          alert("patient added successfulyy")

          this.patientID=""
          this.patientName=""
          this.dob=""
          this.gender=""
          this.phoneNo=""
          this.doctorID=""
          this.doctorName=""
          this.roomNo=""


        }
        else
        {
          alert("something went wrong")
        }
      }
    )

  }

}
