/**
 * @returns boolean
 */
export function isTweetPage() {
  const currPath = window.location.pathname;
  const parts = currPath.split('/');
  return parts.length === 4 && parts.includes('status')
}