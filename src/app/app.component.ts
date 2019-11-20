import { Component, OnChanges } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnChanges {
  /**
   *
   */
  constructor() {
    //
    let token = localStorage.getItem("Token11");

    // ถ้า เช็คแล้วมีข้อมูล ให้แสดง navbar (ถ้ามีข้อมูลฃ แปลว่า login แล้ว)
    if (token == null) {
      this.checkUserLocal = false;
    } else {
      this.checkUserLocal = true;
    }
  }

  ngOnChanges() {
    console.log("Event Change ==========");
  }

  // app
  // login
  // register

  title = "bnk48";

  public checkUserLocal: boolean;

  //เคลียร์ storage
  public LogOut() {
    localStorage.clear();
  }
}
