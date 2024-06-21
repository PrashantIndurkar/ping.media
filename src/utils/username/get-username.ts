export function generateUsernameFromEmail(email: string): string {
  return email.split("@")[0];
}
