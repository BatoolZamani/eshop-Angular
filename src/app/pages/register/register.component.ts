import { Component } from '@angular/core';
import {RegisterRequestDto} from '../../dtos/account/register.dto';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../services/account.service';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../../dtos/account/common/api-response';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
 model:RegisterRequestDto={
  mobile:'',
  lastName:'',
  password:'',
  email:'',
  firstName:'',

 };

  constructor(private accountService:AccountService){

}
 onRegisterUser(){
  this.accountService.register(this.model).subscribe((response:ApiResponse<RegisterRequestDto>):void=>
  {
    if(response.isSuccess){
      console.log('success message')
      console.log(response.message);
    }else{
      console.log('error message')
      console.log(response.message);
    }
  })
 }
}
