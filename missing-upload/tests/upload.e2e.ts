import { test } from '@e2e-dev/web';

test('upload a fixture that is not there', async ({ app, screen }) => {
  await app.open();
  // typo, there is no fixtures/ folder
  await screen.getByLabel('Avatar').setInputFiles('fixtures/avatar.png');
});
