export const isLetter = (string: string): boolean => 
  string.length === 1 && (string.toUpperCase() !== string || string.toLowerCase() !== string) 
