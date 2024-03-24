"use strict";
(() => {
  // src/asConst.ts
  var SeasonObject = {
    SPRING: "SPRING",
    SUMMER: "SUMMER",
    AUTUMN: "AUTUMN",
    WINTER: "WINTER"
  };

  // src/using.ts
  var march1 = SeasonObject.SPRING;
  var march2 = "SPRING";
  var march3 = "SPRING" /* SPRING */;
  var march4 = "SPRING";
  var storage = "SESSION_STORAGE" /* SESSION_STORAGE */;
  console.log(march1, march2, march3, march4, storage);
})();
