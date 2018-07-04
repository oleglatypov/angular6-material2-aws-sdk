# 0.6.0

### Update

* **angular:** Upgrade to `6.0.7`
* **material2:** Upgrade to `^6.3.2`
* **rxjs:** Upgrade to `6.2.1`
* **flex-layout:** Upgrade to `6.0.0-beta.16`

### BREAKING CHANGES

* **RxJS**: - ChangeLog: https://github.com/ReactiveX/rxjs/blob/master/CHANGELOG.md
    - BehaviorSubject is derived from rxjs
    - Upgrade to 6.0.0, upgrade guide: https://github.com/ReactiveX/rxjs/blob/master/MIGRATION.md
    - Angular upgrade to RxJS v6 ahpla's commit: https://github.com/angular/angular/commit/b43f8bc7d3d101af3fcf02180c54007bb1e8c4ca
    - Angular upgrade to RxJS v6 beta commit: https://github.com/angular/angular/commit/3cc5c2e4d09b7ba0ff31a9f804a8ae654af6c796

* **Material2**: - ChangeLog: https://github.com/angular/material2/blob/master/CHANGELOG.md
    - mat-sidenav: aligin -> position
    - form-field: mat-input-container -> mat-form-field

* **FlexLayout:**: - ChangeLog: https://github.com/angular/flex-layout/blob/master/CHANGELOG.md
    - <div fxLayout="row" fxLayoutWrap="wrap"> ... </div> -> <div fxLayout="row wrap"> ... </div>


# 0.5.6 (2018.04.12)

### Code Refactoring
* **High Map: ** Update default jssdk version, allow incoming configuration parameters, etc.

# 0.5.5 (2018.04.05)

### Code Refactoring
* **notification: ** Change code implementation

# 0.5.4 (2018.01.27)

### Upate
* **package:** upgrade dependencies

# 0.5.3 (2017.12.*)

### Update
* **angular:** Upgrade to `5.1.2`
* **@angular/flex-layout: ** upgrade `2.0.0-beta.12`

### Features
* Added support for pwa

# 0.5.2 (2017.12.20)

### Update
* Added fixed width layout with support for custom options
* Added footer to support custom options
* Update headers, support custom options
* Sidebar menu with support for custom options
* Added material color color matching
* Enable animation animation

### Refactoring
* Sidebar menu rewriting

# 0.5.1 (2017.12.14)

### Update
* **angular:** updated to `5.1.1`
Remove karma, jasmine dependency package

### Features & Optimization
Remove useless files from the assets directory
* **analysis:** Remove ng2-charts


# 0.5.0 (2017.*.*)

### Update

* **angular:** updated to `5.0.0`
* **material:** updated to `5.0.0`
* **flex-layout:** updated to `2.0.0-beta.10`
* **ng-quill:** updated to `2.0.4`
* **@swimlane/ngx-datatable:** updated to `11.1.5`
* **@swimlane/ngx-charts:** updated to `7.0.1`
* **ngx-perfect-scrollbar:** updated to `^5.0.5`
* Remove the specified three theme colors, improve the theme switching mode, support material built-in color theme switching

### Problem fixing
* Fix todo type definition
* Fix the legacy code left by the customizer

# 0.4.12

### Features & Optimization
* Added loading module to display loading effect before loading
* Optimize the analysis module
* Rewrite the todoModule module

### Problem fixing
* Fix upgrade material.12 not imported *matRipple*


# 0.4.11

### Update
* **angular:** updated to `4.2.4`

### Function Optimization
* **navigation: ** increase skeleton screen
* **scss:** Add several gradient effects


# 0.4.10 (2017.10.13)

### Update

* **material:** updated to `2.0.0-beta.12`
* **cdk:** updated to `2.0.0-beta.12`
* **flex-layout:** updated to `2.0.0-beta.9`

### Function realization

* **cli:** Optimize css packaging
* **firebase:** project starts supporting firebase
* **Login & Registration: ** Access to firebase Currently supports github and google account login
* **file upload:** Add file upload module, docking firebase storage
* **electron:** Added branch feature/electron for desktop application development
* **apm:** New front-end monitoring module
* **chats:** Access to firebase for live chat
* **moduel:** update crm profile user widget project


### Function Optimization

* Optimize material module import
* Optimize the sidebar menu
* Optimize navitation module css effect
* Optimize the comment/search component
* Optimize mail module search
* Optimize theme switching


# 0.4.9 (2017.09.8)

### Function realization
* **Notification: ** New notification component
* **Continuous integration: ** Add circle, add docker-compose
* **analysis:** Add data analysis module
* **table:** fixed header code is more important, optimize part of the code


# 0.4.8 (2017.09.1)

### Problem fixing

* Fix chart not displayed on page


# 0.4.7 (2017.08.25)

### Function realization

* **Continuous integration** Automatically publish projects on github.io


# 0.4.6 (2017.08.18)

### Problem modification

* angular2-perfect-scrollbar replaced with ngx-perfect-scrollbar

### Function realization

* Increase the old browser does not support prompts
* Increase api protocol configuration
* Add text generator
* Allow import of json files

### Function Optimization

* **table:** Implementing dynamic tables



# 0.4.5 (2017.08.11)


### Problem modification

* **Route:** Change the route in each module to sub-route
* **navigation:** passed error in setClassActive parameter type in view
* **Build: ** Fix AOT compilation does not pass


### Function realization

* **Module: ** Extract `CommonModule, FormsModule, MaterialModule, FlexLayoutModule` to the shared module
* **Environment: ** Add github.io build environment
* **Package: ** Add `ng2-charts`; update material, cli version; remove echarts, angular-in-memory-web-api
* **Style: ** Add sidenav, pagination, date-picker, navigation topics
* **Build: ** Default extraction of css files
* **index.html:** Add keywords, add Baidu statistics

### Performance Optimization

* ** lazy loading: ** navigation, chats, mail, todo, tables, forms, materials, pages, chart to achieve lazy loading
* **mock data: ** Provide navigation, todo, mail module mock data, placed in the asset / data directory
* **Style: ** style.scss style optimization

### Update

* **Project: ** Replace branch name, project rename, module adjustment optimization
* **Delete** Test scripts are all deleted (*.spec.ts)
* **table:**


# 0.4.0 (2017.06.22)


### Problem modification

* material2 version issue caused the package update is wrong


### Function realization

* Achieve full screen operation


### Performance Optimization

* **icon:** Delete the icon file in the project and add it to the dependency package mode.


### Update

* **Frame: ** Upgrade to `angular 4`
* **Package: ** Add material-design-icons


# 0.3.0 (2017.06.09)


### Function realization

* Added: MarkDown
* Added: echarts


# 0.2.0 (2017.05.26)


### Function realization

* Added: Dockerfile
* Added: .travis.yml


### Update

* Registration & Login Component Adjustment
*Component adjustment under the pages directory


# 0.1.0 (2017.04.27)

* Project release
