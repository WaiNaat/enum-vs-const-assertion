/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/asConst.ts
var SeasonObject = {
  SPRING: 'SPRING',
  SUMMER: 'SUMMER',
  AUTUMN: 'AUTUMN',
  WINTER: 'WINTER'
};
;// CONCATENATED MODULE: ./src/enum.ts
var SeasonEnumType = /*#__PURE__*/function (SeasonEnumType) {
  SeasonEnumType["SPRING"] = "SPRING";
  SeasonEnumType["SUMMER"] = "SUMMER";
  SeasonEnumType["AUTUMN"] = "AUTUMN";
  SeasonEnumType["WINTER"] = "WINTER";
  return SeasonEnumType;
}({});
;// CONCATENATED MODULE: ./src/constEnum.ts
var ConstEnum = /*#__PURE__*/function (ConstEnum) {
  ConstEnum["LOCAL_STORAGE"] = "LOCAL_STORAGE";
  ConstEnum["SESSION_STORAGE"] = "SESSION_STORAGE";
  ConstEnum["COOKIE"] = "COOKIE";
  return ConstEnum;
}({});
;// CONCATENATED MODULE: ./src/using.ts



var march1 = SeasonObject.SPRING;
var march2 = 'SPRING';
var march3 = SeasonEnumType.SPRING;
// @ts-expect-error: Type '"SPRING"' is not assignable to type 'SeasonEnumType'.
var march4 = 'SPRING';
var storage = ConstEnum.SESSION_STORAGE;
console.log(march1, march2, march3, march4, storage);
/******/ })()
;