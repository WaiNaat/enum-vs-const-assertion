export const SeasonObject = {
  SPRING: 'SPRING',
  SUMMER: 'SUMMER',
  AUTUMN: 'AUTUMN',
  WINTER: 'WINTER',
} as const;

export type SeasonObjectType = keyof typeof SeasonObject;
