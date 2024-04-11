import { installGlobals } from "@remix-run/node";

installGlobals();

import { server } from "../mocks/node.js";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
