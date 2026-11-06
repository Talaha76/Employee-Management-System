import { useEffect, useState } from 'react';
import { BriefcaseBusiness, Database, Server, ShieldCheck, Activity } from 'lucide-react';
const base = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000/api';
export default function App() {
  const [api, setApi] = useState('Checking…');
  useEffect(() => { fetch(`${base}/health`).then(r => { if (!r.ok) throw Error(); return r.json(); }).then(() => setApi('Online')).catch(() => setApi('Offline')); }, []);
  return <div className="shell">
    <aside className="sidebar"><div className="brand"><BriefcaseBusiness size={25}/> PeopleOps <span>EMS</span></div>
      <p className="sidecaption">STARTER WORKSPACE</p><div className="navitem active"><Activity size={18}/> Overview</div>
      <div className="navitem muted"><Database size={18}/> Employees <small>Coming soon</small></div>
      <div className="navitem muted"><ShieldCheck size={18}/> Audit Logs <small>Coming soon</small></div>
      <p className="sidefoot">React · Express · MySQL<br/>Kafka integration planned</p>
    </aside>
    <main className="content"><header><div><div className="eyebrow">PROJECT FOUNDATION</div><h1>Employee Management System</h1><p>Starter workspace — infrastructure first, features next.</p></div><span className="badge">v0.1 Starter</span></header>
      <section className="hero"><span className="tag">✓ Scaffold ready</span><h2>Build a better people platform.</h2><p>This starter contains a React frontend, an Express health API, and a MySQL schema. Authentication, employee management, Kafka auditing, and dashboards are the next phases.</p></section>
      <section className="grid"><article className="card"><Server size={23}/><h3>Backend API</h3><div className="line"><span>Status</span><b className={api==='Online'?'good':'warn'}>{api}</b></div><code>GET /api/health</code></article><article className="card"><Database size={23}/><h3>MySQL foundation</h3><p>Five schema tables are included in the initial migration.</p><code>backend/migrations/001_init.sql</code></article><article className="card"><ShieldCheck size={23}/><h3>Security & events</h3><p>Roles and outbox/audit tables are modeled; services are not implemented yet.</p><code>Future phases</code></article></section>
      <div className="notice"><strong>Next step:</strong> implement seeded accounts and login/session management before employee CRUD. See <code>README.md</code> for setup and the phase plan.</div>
    </main></div>;
}
