
import jest from "jest";
import { expect } from '@jest/globals';

function log() {
  return "Hello via Bun!";
}

describe("index.ts tests", () => {
  it('should return "Hello via Bun!"', () => {
    const result = log();
    expect(result).toBe("Hello via Bun!");
  });
});
