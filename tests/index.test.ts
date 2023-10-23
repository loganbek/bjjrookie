
// import { jest } from "jest";
import { describe, it, expect } from '@jest/globals';

function log() {
  return "Hello via Bun!";
}

describe("index.ts tests", () => {
  it('should return "Hello via Bun!"', () => {
    const result = log();
    expect(result).toBe("Hello via Bun!");
  });
});
