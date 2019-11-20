import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BookStoreModel } from '../http-test/http-test.component';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  id: number;
  book: BookStoreModel;

  // ActivatedRoute คือตัวเอาใว้ดัก param เช่น api/:id/:name
  constructor(public nativeRoute: ActivatedRoute, public http: HttpClient) {
    // เก็บค่าจาก Param เพื่อเอาไอดี step แรก
    this.nativeRoute.params.forEach(query => {
      this.id = query.id;
      // console.log(this.id);
      // console.log(query.name);
    });
   // ยิงไปเอาข้อมูลจาก server
    this.GetBookById(this.id);
  }

  public GetBookById(id: number){
    // ``
    this.http.get<BookStoreModel>(`https://bookstore01.azurewebsites.net/api/BookStore/Get/${id}`).subscribe(result => this.book = result);
  }

  ngOnInit() {
  }
}
