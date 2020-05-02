(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/login/login.component */ "./src/app/shared/login/login.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");





//import { ChatComponent } from './layout/chat/chat.component';
var routes = ([
    { path: '', component: _shared_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'chat', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"] },
]);
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Admin';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/login/login.component */ "./src/app/shared/login/login.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _shared_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_8__["ChatComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/*!*****************************************!*\
  !*** ./src/app/chat/chat.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"pcoded-main-container\">\n  <div class=\"pcoded-wrapper\">  \n    <div class=\"pcoded-content\">\n      <div class=\"pcoded-inner-content\">\n        <div class=\"main-body chat-bg \">\n          <div class=\"page-wrapper\">\n              <aside class=\"sidebar-chat\">\n                    <div class=\"row \">                     \n                      <div class=\"chat-list col-12 col-sm-5 col-md-4 col-lg-3\">\n                          <div class=\"list-group row\" *ngFor=\"let element of userList\">\n                              <a  href=\"javascript:void(0)\"  class=\"list-group-item\" data-chat-user=\"Julein Renvoye\" (click)=\"getId(element)\">\n                                <span>\n                                  <span class=\"name\">{{element.name}} </span>  \n                                </span>\n                              </a>\n                            </div>\n                      </div>\n                  \n                      <div class=\"col-12 col-sm-7 col-md-8 col-lg-9\" >\n                        <div class=\"card\">\n                          <div class=\"card-header bg-default text-center text-dark\">\n                            {{receiverName}} \n                            <button type=\"button\" (click)=\"cancel()\" class=\"close text-dark lh-20 m-0\" aria-label=\"Close\">\n                              &times;\n                            </button>\n                          </div>\n\n                          <div class=\"card-body bg-light-blue\"> \n                            <div class=\"widget-chat-activity flex-1\">\n                              <ng-container *ngFor = \"let msg of chatList\">\n                                <div class=\"messages scrollbar-enabled suppress-x\" >\n                                  \n                                  <div class=\"message media reply\"  *ngIf = \"msg.recieverId == userId\">\n                                    <div class=\"message-body media-body\">\n                                      <p>{{msg.message}}</p>\n                                    </div>\n                                  </div>    \n                                  <div class=\"message media \" *ngIf = \"msg.senderId == userId\">\n                                    <div class=\"message-body media-body\">\n                                      <p style=\"text-align:right\">{{msg.message}}</p>\n                                    </div>\n                                  </div>                                \n                                </div>\n                              </ng-container>\n                            </div>\n                          </div>\n                          \n                            <div class=\"dfd d-flex justify-content-end col-12 mb-2 p-0\">\n                              <textarea  [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"message\"  name=\"message\"  class=\"form-control p-1 pr-2 pl-2 rounded-0\" style=\"resize: none\" placeholder=\"Type your message here\"></textarea>\n                              <button  (click)=\"sendMessage()\" type=\"button\" class=\"fa fa-paper-plane btn-primary sendBtn border-0 rounded-right\"></button>\n                            </div>\n                        </div>\n                      </div>\n                    </div>\n                  </aside> \n            \n            \n            <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\n            \n            <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\"></script>\n            \n            <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\"></script>\n          </div>\n        </div>\n        \n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_5__);






// import { Observable } from 'rxjs/Observable';
var ChatComponent = /** @class */ (function () {
    function ChatComponent(router, http, route) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.route = route;
        this.userId = JSON.parse(localStorage.getItem('userId'));
        this.url = 'http://localhost:3000';
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_5___default()(this.url, { query: 'userId=' + this.userId });
        this.socket.on('sendMessageToReciever', function (data) {
            if (_this.recieverId == data.senderId)
                _this.chatList.push(data);
        });
    }
    ChatComponent.prototype.ngOnInit = function () {
        this.getAllUser();
    };
    ChatComponent.prototype.getAllUser = function () {
        var _this = this;
        var url = '/getAllUser';
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + url, { userId: this.userId })
            .subscribe(function (response) {
            console.log("userList", response);
            _this.userList = response.data;
            setTimeout(function () {
                _this.getId(_this.userList[0]);
            }, 500);
        }, function (error) {
            console.log(error);
            //this.errorMessage = "Invalid credentials!"
        });
    };
    ChatComponent.prototype.getId = function (item) {
        var _this = this;
        console.log("getId calling", item);
        var senderId = this.userId;
        this.recieverId = item._id;
        this.receiverName = item.name;
        var receiverName = item.name;
        var recieverId = item._id;
        this.senderName = JSON.parse(localStorage.getItem('name'));
        var url = '/getChat';
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + url, { recieverId: recieverId, senderId: senderId })
            .subscribe(function (response) {
            console.log("response", response);
            _this.chatList = response.chat;
            console.log(" this.chatList", _this.chatList);
        }, function (error) {
            //this.errorMessage = "Invalid credentials!"
        });
    };
    ChatComponent.prototype.getChat = function () {
        var _this = this;
        var name = localStorage.getItem('name');
        var url = '/getAllUser';
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + url, { name: name })
            .subscribe(function (response) {
            console.log(response);
            _this.userList = response.data;
        }, function (error) {
            //this.errorMessage = "Invalid credentials!"
        });
    };
    ChatComponent.prototype.sendMessage = function () {
        var _this = this;
        console.log("item", this.message);
        var senderId = this.userId;
        var receiverName = this.receiverName;
        var recieverId = this.recieverId;
        var senderName = this.senderName;
        var url = '/sendMessage';
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + url, { receiverName: receiverName, recieverId: recieverId, senderId: senderId, senderName: senderName, message: this.message })
            .subscribe(function (response) {
            _this.socket.emit('sendMessageFromSender', { receiverName: receiverName, recieverId: recieverId, senderId: senderId, senderName: senderName, message: _this.message });
            _this.message = "";
            console.log("response", response);
            var data = {
                name: _this.receiverName,
                _id: recieverId,
            };
            _this.getId(data);
        }, function (error) {
            console.log(error);
        });
    };
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/chat/chat.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/shared/login/login.component.css":
/*!**************************************************!*\
  !*** ./src/app/shared/login/login.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/login/login.component.html":
/*!***************************************************!*\
  !*** ./src/app/shared/login/login.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"login p-fixed d-flex text-center bg-primary common-img-bg\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"login-card card-block auth-body mr-auto ml-auto\">\r\n                <form class=\"md-float-material\" #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm.value)\" >\r\n              <div class=\"text-center\">\r\n              </div>\r\n              <div class=\"auth-box\">\r\n                <div class=\"row m-b-20\">\r\n                  <div class=\"col-md-12\">\r\n                    <h3 class=\"text-left txt-primary\">Sign In</h3>\r\n                  </div>                 \r\n                </div>\r\n                <hr />\r\n                <h6  class=\"text-danger\" >{{errorMessage}}</h6>\r\n                <div class=\"row m-0\">\r\n                  <div class=\"input-group d-block\" for=\"email\">\r\n                      <input id=\"name\" class=\"form-control\"  name=\"name\" autocomplete=\"off\" [(ngModel)]=\"name\" placeholder=\"Enter your name\" required >\r\n                  </div>\r\n                  <div class=\"input-group d-block\">\r\n                      <input id=\"password\" class=\"form-control\" type=\"password\" name=\"password\" placeholder=\"Enter your password\" [(ngModel)]=\"password\" required >\r\n                  </div>\r\n                </div>\r\n                <div class=\"row m-t-25 text-left\">\r\n                  <div class=\"col-12\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"row m-t-30\">\r\n                  <div class=\"col-md-12\">\r\n                    <button class=\"btn btn-primary btn-md btn-block waves-effect text-center m-b-20\">Sign in</button>\r\n                  </div>\r\n                </div>\r\n                <hr/>               \r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  "

/***/ }),

/***/ "./src/app/shared/login/login.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





// import { CommonService } from '../../services/common.service';
//import { MessagingService } from "../../shared/messaging.service";
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, http, route) {
        this.router = router;
        this.http = http;
        this.route = route;
        this.errorMessage = '';
        this.buttonLoading = false;
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"];
    }
    LoginComponent.prototype.ngOnInit = function () {
        // debugger
        // const userId = '5c86773b420b0d0aa00070c3';
        // this.messagingService.requestPermission(userId)
        // this.messagingService.receiveMessage()
        // this.message = this.messagingService.currentMessage
        localStorage.removeItem('name');
        localStorage.removeItem('userId');
        // if(localStorage.getItem('token'))
        // if (localStorage.getItem('email') && localStorage.getItem('password')) 
        //  if(localStorage.getItem('rememberme'))
        //   {
        //     this.email = JSON.parse(localStorage.getItem('email'));
        //     this.password = JSON.parse(localStorage.getItem('password'));
        //    this.rememberme = true;
        //     // this.Formdat.rememberme = this._cookieService.get('remember');
        //   }
        //this.router.navigate(['/dashboard']);
    };
    LoginComponent.prototype.login = function (data) {
        var _this = this;
        this.errorMessage = '';
        var url = '/login';
        console.log("data", data);
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + url, data)
            .subscribe(function (response) {
            _this.data1 = response;
            localStorage.setItem('name', JSON.stringify(data.name));
            localStorage.setItem('userId', JSON.stringify(_this.data1.data._id));
            _this.msg = "Login successful!";
            _this.router.navigate(['/chat']);
        }, function (error) {
            _this.errorMessage = "Invalid credentials!";
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/shared/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/shared/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: 'http://localhost:3000',
};
// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/6.3.0/firebase-app.js"></script>
// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#config-web-app -->
// <script>
// Your web app's Firebase configuration
// <script src="https://www.gstatic.com/firebasejs/6.3.0/firebase-app.js"></script>
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// </script>
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\chat-app-angular\my-chat-app\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map