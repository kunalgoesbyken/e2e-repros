import { test } from 'e2e';

test('a fractional width', async ({ app, browser }) => {
  await app.open();
  await browser.setViewport({ width: 390 * 1.5 + 0.5, height: 844 });
});

test('a missing height', async ({ app, browser }) => {
  await app.open();
  await browser.setViewport({ width: 800 } as never);
});
