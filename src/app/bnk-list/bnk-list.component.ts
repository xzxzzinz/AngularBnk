import { Component, OnInit } from '@angular/core';
import { BnkModel } from '../Model/BnkModel';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-bnk-list',
  templateUrl: './bnk-list.component.html',
  styleUrls: ['./bnk-list.component.css']
})
export class BnkListComponent implements OnInit {

  Bnks: BnkModel[] = [];
  public username: string;

  constructor(public http: HttpClient) {
    this.HttpGetFunction();
    // this.MockData();

   this.username =  localStorage.getItem("Token11")
  }

  public HttpGetFunction(){
    this.http.get<BnkModel[]>("https://bookstore01.azurewebsites.net/api/Bnk/Get").subscribe(it => this.Bnks = it);

  }

  ngOnInit() {
  }

  private MockData() {
    for(let i = 1; i <= 10; i++) {
      // สร้างจำลองข้อมูล
      let Bnk = new BnkModel();
      Bnk.id = i;
      Bnk.name = "Name Bnk " + i;
      Bnk.details = "Bnk Detail " + i;
      Bnk.age = 24 + i;

      // เพิ่มข้อมูลลง array

      //this.arrays.เพิ่ม(ข้อมูล)
      this.Bnks.push(Bnk);
    }
  }

}
