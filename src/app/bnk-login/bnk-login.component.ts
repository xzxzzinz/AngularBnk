import { Component, OnInit } from "@angular/core";
import { LoginModel, ResultAccount } from "../Model/UserModel";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-bnk-login",
  templateUrl: "./bnk-login.component.html",
  styleUrls: ["./bnk-login.component.css"]
})
export class BnkLoginComponent implements OnInit {
  public login: LoginModel = new LoginModel();
  public result: ResultAccount = new ResultAccount();

  // username pass ตัวแปล
  // func login การยิง
  // result ผลลัพจากการยิง
  constructor(public http: HttpClient, public route: Router) {}

  // เหลือ save data to local storage
  // alert valid message
  public loginFuntion() {
    this.http

      //เป็นการ กำหนดข้อมูลที่ post กลับมา <....>
      .post<ResultAccount>(
        "https://bookstore01.azurewebsites.net/api/Account/Login",
        this.login
      )
      .subscribe(it => {
        console.log(it);
        this.result = it;
        if (it.status == "success") {
          this.route.navigateByUrl("/bnk");
          // save data to local storage
          localStorage.setItem("Token11", it.data.username);
        } else {
          this.login = new LoginModel();
        }
      });
  }

  ngOnInit() {}
}
