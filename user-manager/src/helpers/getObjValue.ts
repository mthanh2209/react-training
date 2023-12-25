export const getObjValue = <T, Key extends keyof T>(
  obj: T,
  key: Key
): T[Key] => {
  return obj[key];
};
