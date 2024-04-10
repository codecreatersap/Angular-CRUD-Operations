import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  constructor(private service: ApiserviceService,  private router:ActivatedRoute) {}

  errormsg: any;
  error: any;
  successmsg: any;
  getparamid:any;


  ngOnInit(): void {
    this.getparamid = this.router.snapshot.paramMap.get('id')
    if(this.getparamid)
    {
    this.service.getSingleData(this.getparamid).subscribe((res)=>{
      console.log(res,'res==>');
      this.userForm.patchValue({
       id:res.data[0].id,
       fullname:res.data[0].fullname,
       email:res.data[0].email,
       mobile:res.data[0].mobile
      });
    });
  }
  }

  userForm = new FormGroup({
    'id': new FormControl('', Validators.required),
    'fullname': new FormControl('', Validators.required),
    'email': new FormControl('', [Validators.required, Validators.email]),
    'mobile': new FormControl('', Validators.required),
  });

  //Create New User
  userSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.service.createData(this.userForm.value).subscribe((res) => {
        console.log(res, 'res==>');
        this.successmsg = res.message;
        this.userForm.reset();
      });
    } else {
      this.error = 'All fields are required..!';
    }
  }


  //Update User
  userUpdate(){
    console.log(this.userForm.value,'UpdatedForm');

    if(this.userForm.valid){
      this.service.updateData(this.userForm.value,this.getparamid).subscribe((res)=>{
        console.log(res,'Updated Data');
        this.successmsg = res.message;
        this.userForm.reset();
      });
    }
    else{
      this.errormsg = 'Enter All Fields..!';
    }
  }

}
