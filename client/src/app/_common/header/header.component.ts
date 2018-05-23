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
      $(".usa-overlay, .usa-nav").click(function(event){     
         $(".usa-nav").attr("class", "usa-nav")
         $("body").attr("class", "vsc-initialized")
         $(".usa-overlay").attr("class", "usa-overlay")
         event.stopImmediatePropagation();     
      });

      $(".usa-overlay, .usa-nav").scroll(function(event) {
        event.stopImmediatePropagation();
      })
    });
  }
  

  clickSignIn() {
    this.router.navigateByUrl('/login');
  }
}
