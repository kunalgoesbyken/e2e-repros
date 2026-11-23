import { test } from 'e2e';

// SIGNUP_EMAIL is not set
test('fill with an unset env var', async ({ app, screen }) => {
  await app.open();
  await screen.getByLabel('Email').fill(process.env.SIGNUP_EMAIL as string);
});

test('fill with a number', async ({ app, screen }) => {
  await app.open();
  await screen.getByLabel('Email').fill(123456 as unknown as string);
});

test('pressSequentially with a number, for comparison', async ({ app, screen }) => {
  await app.open();
  await screen.getByLabel('Email').pressSequentially(123456 as unknown as string);
});
