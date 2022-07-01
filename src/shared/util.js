/* eslint-disable import/prefer-default-export */
/**
 * Check if value is json.
 */
export function isJson(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
