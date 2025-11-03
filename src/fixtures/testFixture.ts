// src/fixtures/testFixture.ts
import { test as base } from "@playwright/test";

export const test = base.extend({
  // Logged-in fixture will be added later
});

export const expect = base.expect;
