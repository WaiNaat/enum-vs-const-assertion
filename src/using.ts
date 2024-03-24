import { SeasonObject, SeasonObjectType } from './asConst';
import { SeasonEnumType } from './enum';
import { ConstEnum } from './constEnum';

const march1: SeasonObjectType = SeasonObject.SPRING;
const march2: SeasonObjectType = 'SPRING';

const march3: SeasonEnumType = SeasonEnumType.SPRING;
// @ts-expect-error: Type '"SPRING"' is not assignable to type 'SeasonEnumType'.
const march4: SeasonEnumType = 'SPRING';

const storage: ConstEnum = ConstEnum.SESSION_STORAGE;

console.log(march1, march2, march3, march4, storage);
