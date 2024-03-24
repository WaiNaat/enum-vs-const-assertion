import { SeasonObject } from './asConst';
import { SeasonEnumType } from './enum';
const march1 = SeasonObject.SPRING;
const march2 = 'SPRING';
const march3 = SeasonEnumType.SPRING;
const march4 = 'SPRING';
const storage = "SESSION_STORAGE";
console.log(march1, march2, march3, march4, storage);
