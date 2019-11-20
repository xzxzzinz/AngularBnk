import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { BnkModel } from "../Model/BnkModel";
import { Router } from "@angular/router";

@Component({
  selector: "app-bnk-details",
  templateUrl: "./bnk-details.component.html",
  styleUrls: ["./bnk-details.component.css"]
})
export class BnkDetailsComponent implements OnInit {
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }

  id: number;
  bnk: BnkModel;
  // DI เจ้าตัวดัก param**
  constructor(
    public nativeRoute: ActivatedRoute,

    public http: HttpClient,
    public router: Router
  ) {
    this.nativeRoute.params.forEach(query => {
      this.id = query.id;
      console.log(this.id);
    });
    // query param id ออกมา**
    // เอาไปเก็บใว้ในตัวแปล
    this.GetBnkById(this.id);
  }
  //id ตัวแปล
  //bnk ตัวแปล
  public GetBnkById(id: number) {
    // สร้าง  function ใว้ยิงข้อมูล detail

    this.http
      .get<BnkModel>(`https://bookstore01.azurewebsites.net/api/Bnk/Get/${id}`)
      .subscribe(result => (this.bnk = result));
  }

  public bnkdeletefuntion(id: number) {
    if (confirm("Delete?")) {
      this.http
        .delete(`https://bookstore01.azurewebsites.net/api/Bnk/Delete/${id}`)
        .subscribe(it => {
          this.router.navigateByUrl("/bnk");
          console.log(it);
        });
    }
  }
}
