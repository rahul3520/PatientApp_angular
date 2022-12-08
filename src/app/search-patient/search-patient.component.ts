import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.css']
})
export class SearchPatientComponent {

  patientID=""

  constructor(private api:ApiService){}

  searchData:any=[]

  Search=()=>
  {
    let data:any={"patientID":this.patientID}

    console.log(data)

    this.api.searchPatient(data).subscribe(

      (response:any)=>
      {
        console.log(response)

        if(response.length==0)
        {
          alert("Invalid patient id")
        }
        else
        {
          alert("valid patient id")
          this.searchData=response
        }
      }
    )


  }


  Delete=(id:any)=>
  {
    let data:any={"id":id}

    console.log(data)

    this.api.deletePatient(data).subscribe(

      (response:any)=>
      {
        console.log(response)
        {
          if(response.status=="success")
          {
            alert("patient deleted successfully!")
            window.location.reload()
          }
          else
          {
            alert("Invalid patient id")
          }
        }
      }
    )

  }

}
