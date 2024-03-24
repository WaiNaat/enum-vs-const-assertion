"use strict";
(() => {
  // ts-to-js/asConst.js
  var SeasonObject = {
    SPRING: "SPRING",
    SUMMER: "SUMMER",
    AUTUMN: "AUTUMN",
    WINTER: "WINTER"
  };

  // ts-to-js/enum.js
  var SeasonEnumType;
  (function(SeasonEnumType2) {
    SeasonEnumType2["SPRING"] = "SPRING";
    SeasonEnumType2["SUMMER"] = "SUMMER";
    SeasonEnumType2["AUTUMN"] = "AUTUMN";
    SeasonEnumType2["WINTER"] = "WINTER";
  })(SeasonEnumType || (SeasonEnumType = {}));

  // ts-to-js/using.js
  var march1 = SeasonObject.SPRING;
  var march2 = "SPRING";
  var march3 = SeasonEnumType.SPRING;
  var march4 = "SPRING";
  var storage = "SESSION_STORAGE";
  console.log(march1, march2, march3, march4, storage);
})();
