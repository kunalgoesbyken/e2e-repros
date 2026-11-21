import { test } from '@e2e-dev/web';
import { expect } from 'e2e';

test('opens the page', async ({ app, screen }) => {
  await app.open();
  await expect(screen.getByRole('heading', { name: 'repro' })).toBeVisible();
});
