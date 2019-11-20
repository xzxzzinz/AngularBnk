import { Component, OnInit } from "@angular/core";
import { UserModel, ResultAccount } from "../Model/UserModel";
import { Router } from "@angular/router";
import { HttpClientModule, HttpClient } from "@angular/common/http";

@Component({
  selector: "app-bnk-register",
  templateUrl: "./bnk-register.component.html",
  styleUrls: ["./bnk-register.component.css"]
})
export class BnkRegisterComponent implements OnInit {
  //สร้างตัวแปล
  //สร้างฟังชั่นเพือยิง regis
  //รับข้อมูล
  //กลับไปหน้่login
  public user: UserModel = new UserModel();
  public result: ResultAccount = new ResultAccount();

  constructor(public http: HttpClient, public route: Router) {}

  public RegisterFuntion() {
    this.http
      .post<ResultAccount>(
        "https://bookstore01.azurewebsites.net/api/Account/Register",
        this.user
      )
      .subscribe(it => {
        console.log(it);
        this.result = it;
      if(it.status == "success"){

        this.route.navigateByUrl('/account/login');

      }else{
        alert(it.message);
      }
      });
  }

  ngOnInit() {}
}
