# Single SPA Demo

## Demo
```sh
# each command needs to run in it's own terminal window

## start the shell (port 3000)
cd shell && npm start

## start the header (port 4201)
cd ng-header && npm run serve:single-spa:ng-header

## start the table (port 4202)
cd ng-table && npm run serve:single-spa:ng-table

## start the map (port 4203)
cd react-map && npm start

## now visit: http://localhost:3000

```


## Tools
```sh
npm i -g @angular/cli
npm i -g create-single-spa
ng add single-spa-angular
```

## Components

### Shell
* https://single-spa.js.org/docs/create-single-spa/
* port: 9000
```sh
create-single-spa --moduleType root-config
cd shell
npm run start
```

### Header
* https://single-spa.js.org/docs/ecosystem-angular/#angular-13
* port: 4201
```sh
ng new header --routing --prefix app-header
cd header
ng add single-spa-angular

npm run serve:single-spa:header
```

### Table
* https://single-spa.js.org/docs/ecosystem-angular/#angular-13
* port: 4202
```sh
ng new ng-table --routing --prefix mfe-table
cd ng-table
ng add single-spa-angular

npm run serve:single-spa:ng-table
```

### Map
* https://single-spa.js.org/docs/create-single-spa/
* port: 4203
```sh
create-single-spa --framework react --moduleType app-parcel
cd react-map
npm start
```