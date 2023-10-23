import { log } from "../index.ts";

describe("index.ts tests", () => {
  it('should log "Hello via Bun!"', () => {
    const consoleSpy = jest.spyOn(console, "log");
    log();
    expect(consoleSpy).toHaveBeenCalledWith("Hello via Bun!");
    consoleSpy.mockRestore();
  });
});
