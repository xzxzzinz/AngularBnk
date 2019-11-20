import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BnkListComponent } from "./bnk-list/bnk-list.component";
import { BnkDetailsComponent } from "./bnk-details/bnk-details.component";
import { BnkCreateComponent } from "./bnk-create/bnk-create.component";
import { HttpTestComponent } from "./http-test/http-test.component";
import { BookDetailsComponent } from "./book-details/book-details.component";
import { BookCreateComponent } from "./book-create/book-create.component";
import { BnkEditComponent } from "./bnk-edit/bnk-edit.component";
import { BnkLoginComponent } from "./bnk-login/bnk-login.component";
import { BnkRegisterComponent } from "./bnk-register/bnk-register.component";

const routes: Routes = [
  { path: "", redirectTo: "account/login", pathMatch: "full" },
  {
    path: "bnk",
    children: [
      { path: "", component: BnkListComponent },
      { path: ":id", component: BnkDetailsComponent },
      { path: "edit/:id", component: BnkEditComponent }
    ]
  },
  {
    path: "account",
    children: [
      { path: "login", component: BnkLoginComponent },
      { path: "register", component: BnkRegisterComponent }
    ]
  },
  {
    path: "httptest",
    children: [
      { path: "", component: HttpTestComponent },
      { path: ":id", component: BookDetailsComponent }
      // {path: ':name', component : BookDetailsComponent },
    ]
  },

  { path: "create", component: BnkCreateComponent },
  { path: "bookcreate", component: BookCreateComponent },

  { path: "**", component: BnkListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
