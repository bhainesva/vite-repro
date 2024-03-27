
Steps:
1. Clone and cd into repo
2. pnpm install
3. pnpm build
4. cd apps/lib-user
5. pnpm install
6. pnpm dev

Error: 

```
Error: The following dependencies are imported but could not be resolved:

  vite-repro (imported by /Users/bhaines/tmp/vite-repro/apps/lib-user/src/main.tsx)

Are they installed?
    at file:///Users/bhaines/tmp/vite-repro/apps/lib-user/node_modules/.pnpm/vite@5.2.6/node_modules/vite/dist/node/chunks/dep-BBHrJRja.js:52506:23
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async file:///Users/bhaines/tmp/vite-repro/apps/lib-user/node_modules/.pnpm/vite@5.2.6/node_modules/vite/dist/node/chunks/dep-BBHrJRja.js:51972:38
```