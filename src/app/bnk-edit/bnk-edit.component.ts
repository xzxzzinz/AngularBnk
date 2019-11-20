import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BnkModel } from "../Model/BnkModel";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-bnk-edit",
  templateUrl: "./bnk-edit.component.html",
  styleUrls: ["./bnk-edit.component.css"]
})
export class BnkEditComponent implements OnInit {
  public bnk: BnkModel = new BnkModel();
  id: number;

  constructor(
    public http: HttpClient,
    public rount: Router,
    public nativeRoute: ActivatedRoute
  ) {
    // step 1
    // params map id
    this.nativeRoute.params.forEach(query => {
      this.id = query.id;
      console.log(this.id);
      console.log(query);
    });

    // step 2 this เรียกใช้ตัวแปร + ฟังชั่น
    this.GetBnkById(this.id);
  }

  ngOnInit() {}

  public GetBnkById(id: number) {
    // สร้าง  function ใว้ยิงข้อมูล detail

    this.http
      .get<BnkModel>(`https://bookstore01.azurewebsites.net/api/Bnk/Get/${id}`)
      .subscribe(result => {
        this.bnk = result;
        console.log(result);
      });
  }

  public bnkeditfuntion() {
    if (confirm("คุณต้องการแก้ไข้ข้อมูลใช่มั๊ย?")) {
      this.http
        .put(
          `https://bookstore01.azurewebsites.net/api/Bnk/Put/${this.id}`,
          this.bnk
        )
        .subscribe(it => {
          console.log(it);
          this.rount.navigateByUrl("/bnk");
        });
    }
  }
}
