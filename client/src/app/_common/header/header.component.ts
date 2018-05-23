import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor(private router: Router){
  }
  
  ngOnInit() {
    $(document).ready(function () {
      $(".usa-nav").click(()=>{
        $("body").attr("class", "vsc-initialized");
        $(".usa-nav").attr("class", "usa-nav");
        $(".usa-overlay").attr("class", "usa-overlay");
       
      })
    });
  }
  

  clickSignIn() {
    this.router.navigateByUrl('/login');
  }
}
