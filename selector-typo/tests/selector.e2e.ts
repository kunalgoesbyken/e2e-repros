import { test } from '@e2e-dev/web';

test('css selector with a typo', async ({ app, browser }) => {
  await app.open();
  // missing ]
  await browser.locator('button[type="submit"').tap();
});
