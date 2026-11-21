import { web } from '@e2e-dev/web';

export default {
  targets: [
    {
      name: 'web',
      // e.g. read from env vars without Number()
      engine: web({ viewport: { width: '390', height: '844' } as unknown as { width: number; height: number } }),
      app: { url: 'http://127.0.0.1:4399', command: { executable: 'node', args: ['../server.mjs'] } },
    },
  ],
};
