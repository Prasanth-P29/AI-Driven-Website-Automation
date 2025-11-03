// src/utils/helpers.ts
export async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
await delay(1000); // Example usage of the helper function