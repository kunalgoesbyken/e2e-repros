import { test } from 'e2e';

// EXPECTED_BANNER is not set, so the assertion is ''
test('assert with an unset env var', async ({ app, agent }) => {
  await app.open();
  await agent.assert(process.env.EXPECTED_BANNER ?? '');
});

test('waitFor with an empty condition', async ({ app, agent }) => {
  await app.open();
  await agent.waitFor('   ');
});

test('assert with undefined', async ({ app, agent }) => {
  await app.open();
  await agent.assert(process.env.EXPECTED_BANNER as string);
});

test('act with an empty instruction, for comparison', async ({ app, agent }) => {
  await app.open();
  await agent.act('');
});
