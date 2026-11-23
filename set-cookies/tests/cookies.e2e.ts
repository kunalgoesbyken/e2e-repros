import { test } from 'e2e';

test('sameSite in lowercase', async ({ app, browser }) => {
  await app.open();
  await browser.setCookies([{ name: 'session', value: 'abc', domain: '127.0.0.1', sameSite: 'lax' as 'Lax' }]);
});

test('no url and no domain', async ({ app, browser }) => {
  await app.open();
  await browser.setCookies([{ name: 'session', value: 'abc' } as never]);
});

test('url plus domain and path', async ({ app, browser }) => {
  await app.open();
  await browser.setCookies([{ name: 'session', value: 'abc', url: 'http://127.0.0.1:4399/', domain: 'example.org', path: '/admin' } as never]);
  const [cookie] = await browser.cookies();
  console.log(`stored: domain ${cookie?.domain} path ${cookie?.path}`);
});
