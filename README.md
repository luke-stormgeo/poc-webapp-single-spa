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
```sh
create-single-spa --moduleType root-config
cd shell
npm run start
```

## Header
* https://single-spa.js.org/docs/ecosystem-angular/#angular-13
* port: 4201
```sh
ng new header --routing --prefix app-header
cd header
ng add single-spa-angular

npm run serve:single-spa:header
```

## Table
* https://single-spa.js.org/docs/ecosystem-angular/#angular-13
* port: 4202
```sh
ng new ng-table --routing --prefix mfe-table
cd ng-table
ng add single-spa-angular

npm runv serve:single-spa:ng-table
```

## Map
* 
* port: 4203
```sh
create-single-spa --framework react --moduleType app-parcel
```