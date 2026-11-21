import { test } from '@e2e-dev/web';

test('which browser runs', async ({ app, browser }) => {
  await app.open();
  console.log(await browser.evaluate(() => navigator.userAgent));
});
