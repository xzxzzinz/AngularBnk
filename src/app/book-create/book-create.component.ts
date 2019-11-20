import { Component, OnInit } from '@angular/core';
import { BookStoreModel } from '../http-test/http-test.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  // function ส่งข้อมูลไป Server
  // ตัวแปล เช่น BookModel => ข้อมูลหนังสือที่ต้องการสร้าง

  // public router: Router => ใช้ในการเปลี่ยนหน้่าต่างๆ เหมือน router-link ใน html
  constructor(public http: HttpClient, public router: Router) { }

  //data ที่ต้องการ create
  public book: BookStoreModel = new BookStoreModel();
  ngOnInit() {
  }


  createBookFunction(){
    // this.http.post("url", data);
    // this.book.id = 99;
    // this.book.name = "book 99";
    // this.book.prices = 99;
    // this.book.details = "book detail 99";

    this.http.post("https://bookstore01.azurewebsites.net/api/BookStore/Post", this.book)
                  .subscribe(it => {
                    this.router.navigateByUrl("/httptest");
                    console.log(it);
                  });
  }
}
