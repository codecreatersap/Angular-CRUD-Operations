import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']  // Change 'styleUrl' to 'styleUrls'
})
export class ReadComponent implements OnInit {
  readData: any;  // Implement OnInit interface
  successmsg:any;


  constructor(private service: ApiserviceService) {}

  ngOnInit(): void {
    this.getAllData();
  }

  //get All Data
  getAllData(){
    this.service.getAllData().subscribe(res => {  // Fix 'subscribed' to 'subscribe'
      console.log(res, 'res==>');
      this.readData = res.data;
    }); 
  }

    //delete by id
    deleteID(id:any){
      console.log(id,'deleteid==>');
      this.service.deleteData(id).subscribe((res)=>{
        console.log(res,'Deleted Data==>');
        this.successmsg = res.message;
        this.getAllData();
      });
    }

    
}


