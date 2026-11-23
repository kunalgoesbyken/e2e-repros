# e2e repros

small repros for bugs in [e2e](https://github.com/e2e-inc/e2e), one folder per bug. each folder has its own `e2e.config.ts` and test, and they share `server.mjs` (a tiny page on 127.0.0.1:4399).

```sh
npm install
npx playwright install chromium   # if you don't have it yet
cd <folder> && npx e2e run
```

| folder | what you see | expected |
| --- | --- | --- |
| `browser-name` | `web({ browser: 'Firefox' })` loads, the test passes, user agent is HeadlessChrome | `INVALID_CONFIG` at config load |
| `viewport` | `viewport: { width: '390', height: '844' }` fails the test with `ENGINE_FAILURE: connection failed: browser.newContext: viewport.width: expected integer`, exit 3 | `INVALID_CONFIG` at config load |
| `missing-upload` | `setInputFiles('fixtures/avatar.png')` with no such file is `ENGINE_FAILURE: ENOENT ...`, exit 3 | `INVALID_ARGUMENT`, exit 1 |
| `selector-typo` | `browser.locator('button[type="submit"').tap()` is `ENGINE_FAILURE: locate failed: ...`, exit 3 | a test error (`INVALID_LOCATOR`), exit 1 |
| `judgment-instruction` | `agent.assert('')` (an unset env var), `agent.waitFor('   ')` and `agent.assert(undefined)` each send the judge a call and pass. `agent.act('')` is `INVALID_ARGUMENT` | `INVALID_ARGUMENT` before any model call, like `act` |
| `fill-non-string` | `fill(process.env.SIGNUP_EMAIL)` (unset) and `fill(123456)` are `ENGINE_FAILURE: elementHandle.fill: value: expected string`, exit 3. `pressSequentially(123456)` is `INVALID_ARGUMENT` | `INVALID_ARGUMENT`, exit 1 |
| `set-cookies` | `sameSite: 'lax'` is `ENGINE_FAILURE`, exit 3; no `url` or `domain` is `ERROR: Cannot read properties of undefined (reading 'replace')`; `url` + `domain` + `path` passes and stores `domain 127.0.0.1 path /` | `INVALID_ARGUMENT` naming the field, nothing set |
| `set-viewport` | `setViewport({ width: 585.5, height: 844 })` and `setViewport({ width: 800 })` are `ENGINE_FAILURE ... got 800xundefined`, exit 3 | `INVALID_ARGUMENT`, exit 1 |
| `project-id` | `projectId: 12345` in a JS config: `WORKER_CRASH`, `The "data" argument must be of type string ... Received type number (12345)`, exit 3, and `report.json` has `project.id: 12345` | `INVALID_CONFIG` when the config loads, exit 2 |

versions: e2e 0.24.0, @e2e-dev/web 0.16.1, ai 7, node 26.3.0. `judgment-instruction` uses a stub model that logs each call to `model-calls.log`, so it needs no API key.
