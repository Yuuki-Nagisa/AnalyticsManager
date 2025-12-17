// types.ts
export type CourseDataType = [string, string, string[],string];

export interface AllCoursesData {
  [key: string]: CourseDataType;
}