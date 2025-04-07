import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {RegisterRequestDto} from "../dtos/account/register.dto";
import { loginDto } from "../dtos/account/login.dto";
import { ApiAddres } from "./utilities/api-address.utility";
import { ApiResponse } from "../dtos/account/common/api-response";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class AccountService{
    constructor(private httpClient:HttpClient){}

    login(model:loginDto){

    }
    register(model:RegisterRequestDto):Observable<ApiResponse<RegisterRequestDto>>    {
    return this.httpClient.post<ApiResponse<RegisterRequestDto>>(ApiAddres.register,model)
    }
}