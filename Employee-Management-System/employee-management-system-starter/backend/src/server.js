import 'dotenv/config';
import { createApp } from './app.js';
import { closePool } from './config/db.js';
const port = Number(process.env.PORT || 4000);
const server = createApp().listen(port, '0.0.0.0', () => {
  console.log(`EMS API listening on port ${port}`);
});
async function shutdown() {
  server.close(async () => { await closePool(); process.exit(0); });
  setTimeout(() => process.exit(1), 10000).unref();
}
process.once('SIGTERM', shutdown);
process.once('SIGINT', shutdown);
