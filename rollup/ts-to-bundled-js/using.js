const SeasonObject = {
    SPRING: 'SPRING',
    SUMMER: 'SUMMER',
    AUTUMN: 'AUTUMN',
    WINTER: 'WINTER',
};

var SeasonEnumType;
(function (SeasonEnumType) {
    SeasonEnumType["SPRING"] = "SPRING";
    SeasonEnumType["SUMMER"] = "SUMMER";
    SeasonEnumType["AUTUMN"] = "AUTUMN";
    SeasonEnumType["WINTER"] = "WINTER";
})(SeasonEnumType || (SeasonEnumType = {}));

const march1 = SeasonObject.SPRING;
const march2 = 'SPRING';
const march3 = SeasonEnumType.SPRING;
const march4 = 'SPRING';
const storage = "SESSION_STORAGE";
console.log(march1, march2, march3, march4, storage);
