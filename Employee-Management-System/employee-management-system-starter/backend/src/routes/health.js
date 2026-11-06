import { Router } from 'express';
import { getPool } from '../config/db.js';
const router = Router();
router.get('/health', (_req, res) => res.json({ status: 'ok', service: 'employee-management-api' }));
router.get('/ready', async (_req, res) => {
  try { await getPool().query('SELECT 1'); res.json({ status: 'ready', database: 'ok' }); }
  catch { res.status(503).json({ status: 'not_ready', database: 'unavailable' }); }
});
export default router;
