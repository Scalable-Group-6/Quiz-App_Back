/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/grading/src/grading.controller.ts":
/*!************************************************!*\
  !*** ./apps/grading/src/grading.controller.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GradingController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const grading_service_1 = __webpack_require__(/*! ./grading.service */ "./apps/grading/src/grading.service.ts");
let GradingController = class GradingController {
    constructor(gradingService) {
        this.gradingService = gradingService;
    }
    getHello() {
        return this.gradingService.getHello();
    }
};
exports.GradingController = GradingController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], GradingController.prototype, "getHello", null);
exports.GradingController = GradingController = __decorate([
    (0, common_1.Controller)('grading'),
    __metadata("design:paramtypes", [typeof (_a = typeof grading_service_1.GradingService !== "undefined" && grading_service_1.GradingService) === "function" ? _a : Object])
], GradingController);


/***/ }),

/***/ "./apps/grading/src/grading.module.ts":
/*!********************************************!*\
  !*** ./apps/grading/src/grading.module.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GradingModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const grading_controller_1 = __webpack_require__(/*! ./grading.controller */ "./apps/grading/src/grading.controller.ts");
const grading_service_1 = __webpack_require__(/*! ./grading.service */ "./apps/grading/src/grading.service.ts");
let GradingModule = class GradingModule {
};
exports.GradingModule = GradingModule;
exports.GradingModule = GradingModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [grading_controller_1.GradingController],
        providers: [grading_service_1.GradingService],
    })
], GradingModule);


/***/ }),

/***/ "./apps/grading/src/grading.service.ts":
/*!*********************************************!*\
  !*** ./apps/grading/src/grading.service.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GradingService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let GradingService = class GradingService {
    getHello() {
        return 'Hello World!';
    }
};
exports.GradingService = GradingService;
exports.GradingService = GradingService = __decorate([
    (0, common_1.Injectable)()
], GradingService);


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************************!*\
  !*** ./apps/grading/src/main.ts ***!
  \**********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const grading_module_1 = __webpack_require__(/*! ./grading.module */ "./apps/grading/src/grading.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(grading_module_1.GradingModule);
    await app.listen(3000);
}
bootstrap();

})();

/******/ })()
;