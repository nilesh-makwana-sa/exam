import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
  }


  onSubmit(form: ElementRef) {
    console.log(form);

    // console.log( this.http.post('http://111.93.82.91:3000/auth/login', form));
  }

}
