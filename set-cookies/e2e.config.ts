import { web } from '@e2e-dev/web';

export default {
  targets: [
    {
      name: 'web',
      engine: web(),
      app: { url: 'http://127.0.0.1:4399', command: { executable: 'node', args: ['../server.mjs'] } },
    },
  ],
};
