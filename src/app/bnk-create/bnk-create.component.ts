import { Component, OnInit } from '@angular/core';
import { BnkModel } from '../Model/BnkModel';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bnk-create',
  templateUrl: './bnk-create.component.html',
  styleUrls: ['./bnk-create.component.css']
})
export class BnkCreateComponent implements OnInit {

  public bnk : BnkModel = new BnkModel();
  constructor(public http : HttpClient , public router: Router) { }


  ngOnInit() {
  }

  bnkcreatefuntion() {

    // this.bnk.name = "Kaew" ;
    // this.bnk.details = "Nutruja" ;
    // this.bnk.age = 25 ;

    // console.log(this.bnk);



    this.http.post("https://bookstore01.azurewebsites.net/api/Bnk/Post", this.bnk).subscribe(it => {
      this.router.navigateByUrl("/bnk");
      console.log(it);
    });
  }
}
