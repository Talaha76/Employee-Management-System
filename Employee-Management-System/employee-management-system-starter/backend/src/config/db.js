import mysql from 'mysql2/promise';
let pool;
export function getPool() {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.MYSQL_HOST || 'localhost',
      port: Number(process.env.MYSQL_PORT || 3306),
      database: process.env.MYSQL_DATABASE || 'employee_management',
      user: process.env.MYSQL_USER || 'employee_app',
      password: process.env.MYSQL_PASSWORD,
      waitForConnections: true,
      connectionLimit: 10,
      timezone: 'Z'
    });
  }
  return pool;
}
export async function closePool() { if (pool) await pool.end(); pool = undefined; }
