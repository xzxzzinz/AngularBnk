import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent implements OnInit {

  constructor(public httpName: HttpClient) {
    this.HttpGetFunction();
  }

  result: BookStoreModel[] = [];

  ngOnInit() {
  }

  public HttpGetFunction(){
    this.httpName.get<BookStoreModel[]>("https://bookstore01.azurewebsites.net/api/bookstore/get/").subscribe( it => this.result = it);
  }


}

export class BookStoreModel {
  id: number;
  name: string;
  details: string;
  prices: number;
  pic: string;
}

