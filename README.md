# MEAN Stack USWDS & RWD - Containerized

## export NODE_ENV to “production”
   this enables Express.js to cache files.
   
## Angular 2 Notes

   Pass parent data to child uses @Input() varname
   Pass child to Parent is thru @Output EventEmitter
   
## run build 
      server - npm run serve (uses ng serve, it auto loads browser upon  code change)
      client - npm run dev

## Process Managers
      StrongLoop Process Manager
      PM2
      Forever

   
## Generic CRUD Lib for mongoDB
     https://www.npmjs.com/package/node-express-crud-router

## RWD Checker on localhost and live site
     http://responsivedesignchecker.com

## Website prototype
     https://www.stratteos.us

## Install google cloud sdk
   curl https://sdk.cloud.google.com | bash
   
## Basic Dockerfile

      FROM node8.11
      WORKDIR /app
      ADD . /app
      RUN npm install
      EXPOSE 3000
      CMD npm start
   
## Build doc search database from html files
     https://www.mathworks.com/help/matlab/ref/builddocsearchdb.html

## USWDS Website
      https://designsystem.digital.gov/

## Force redirect to https://www
     https://www.npmjs.com/package/node-force-domain
   
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
  
## ExpressJS in dev & production
      https://expressjs.com/en/advanced/best-practice-performance.html
