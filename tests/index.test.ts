import { log } from "../index.ts";

describe("index.ts tests", () => {
  it('should return "Hello via Bun!"', () => {
    const result = log();
    expect(result).toBe("Hello via Bun!");
  });
});
