import { web } from '@e2e-dev/web';

export default {
  targets: [
    {
      name: 'web',
      // typo, the browser is 'firefox'
      engine: web({ browser: 'Firefox' as 'firefox' }),
      app: { url: 'http://127.0.0.1:4399', command: { executable: 'node', args: ['../server.mjs'] } },
    },
  ],
};
