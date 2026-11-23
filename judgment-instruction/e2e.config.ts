import { appendFileSync } from 'node:fs';
import { web } from '@e2e-dev/web';

// a stand-in judge with no provider behind it: it logs each call and answers
// "holds", the way a judge with nothing to refute tends to
const judge = {
  specificationVersion: 'v4',
  provider: 'stub',
  modelId: 'always-holds',
  supportedUrls: {},
  async doGenerate() {
    appendFileSync('model-calls.log', 'judge called\n');
    return {
      content: [{ type: 'text', text: JSON.stringify({ protocolVersion: 'agent-judgment-2', verdict: 'holds', explanation: 'nothing contradicts it' }) }],
      finishReason: { unified: 'stop', raw: 'stop' },
      usage: { inputTokens: { total: 1, noCache: 1, cacheRead: 0, cacheWrite: 0 }, outputTokens: { total: 1, text: 1, reasoning: 0 }, totalTokens: 2 },
      warnings: [],
    };
  },
  async doStream() {
    throw new Error('no streaming');
  },
};

export default {
  targets: [
    {
      name: 'web',
      engine: web(),
      app: { url: 'http://127.0.0.1:4399', command: { executable: 'node', args: ['../server.mjs'] } },
    },
  ],
  agents: { default: { model: judge, judge } },
};
