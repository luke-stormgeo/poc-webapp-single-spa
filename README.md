# poc-webapp-single-spa

## Setup
```
npm i -g @angular/cli
npm i -g create-single-spa
ng add single-spa-angular
```


## Shell
* https://single-spa.js.org/docs/create-single-spa/
* port: 9000
```
create-single-spa --moduleType root-config
```

## Header
* https://single-spa.js.org/docs/ecosystem-angular/#angular-13
* port: 4201
```
ng new header --routing --prefix app-header
cd header
ng add single-spa-angular
```

## Table
* https://single-spa.js.org/docs/ecosystem-angular/#angular-13
* port: 4202
```
ng new ng-table --routing --prefix mfe-table
cd ng-table
ng add single-spa-angular
```