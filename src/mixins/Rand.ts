export function randomInt(from: number, to: number) {
  return Math.floor(Math.random() * (to - from) + from);
}

export function randomFloat(from: number, to: number) {
  return (Math.random() * (to - from)) + from;
}
