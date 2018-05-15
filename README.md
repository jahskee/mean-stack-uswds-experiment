# MEAN Stack USWDS & RWD - Containerized

## USWDS Website
   https://designsystem.digital.gov/

## Angular2 click to next page

   '<a routerLink="/Service/Sign_in"><button class="btn btn-success pull-right" > Add Customer</button></a>'

   import { Router } from '@angular/router';
   
   constructor(private router: Router){
   }

   btnClick= function () {
           this.router.navigateByUrl('/user');
   };
   
## During Development

    *cd client
         npm run build
            
     cd server
        npm run start-dev
        
## Angular 2 generate component
   ng generate component

## In Production
   
   cd server   
   nohup npm start &
   
## Access Dev  
    access client: https://localhost
    
## View components CSS
  https://components.designsystem.digital.gov/

## Base documentation
  https://github.com/jahskee/mean-stack-with-ssl-gzip-jwt-jest-travis-docker
