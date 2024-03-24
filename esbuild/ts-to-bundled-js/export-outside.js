"use strict";
(() => {
  // src/asConst.ts
  var SeasonObject = {
    SPRING: "SPRING",
    SUMMER: "SUMMER",
    AUTUMN: "AUTUMN",
    WINTER: "WINTER"
  };

  // src/enum.ts
  var SeasonEnumType = /* @__PURE__ */ ((SeasonEnumType2) => {
    SeasonEnumType2["SPRING"] = "SPRING";
    SeasonEnumType2["SUMMER"] = "SUMMER";
    SeasonEnumType2["AUTUMN"] = "AUTUMN";
    SeasonEnumType2["WINTER"] = "WINTER";
    return SeasonEnumType2;
  })(SeasonEnumType || {});

  // src/constEnum.ts
  var ConstEnum = /* @__PURE__ */ ((ConstEnum2) => {
    ConstEnum2["LOCAL_STORAGE"] = "LOCAL_STORAGE";
    ConstEnum2["SESSION_STORAGE"] = "SESSION_STORAGE";
    ConstEnum2["COOKIE"] = "COOKIE";
    return ConstEnum2;
  })(ConstEnum || {});
})();
