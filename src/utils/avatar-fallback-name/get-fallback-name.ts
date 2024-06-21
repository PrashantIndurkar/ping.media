// getOnlyTwoCharsFromNameForAvatar
export function getAvatarFallbackName(name: string): string {
  return name?.split(" ")[0].slice(0, 2).toUpperCase();
}
