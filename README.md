<div align="center">

# Employee Management System (EMS)

**Full-Stack Employee Records, Role-Based Access & Event-Driven Audit Management**

### 🟡 Status: In Development

[![Project Status](https://img.shields.io/badge/Status-In%20Development-F5A623?style=for-the-badge)](#development-status)

*Project under active development.*

</div>

---

## Table of Contents

- [Project Overview](#project-overview)
- [Development Status](#development-status)
- [Screenshots](#screenshots)
- [Key Features](#key-features)
- [System Architecture](#system-architecture)
- [Technology Stack](#technology-stack)
- [Repository Structure](#repository-structure)
- [Local Development](#local-development)
- [1. Clone the Repository](#1-clone-the-repository)
- [2. Run with Docker Compose](#2-run-with-docker-compose)
- [3. Run Locally Without Docker](#3-run-locally-without-docker)
- [Database Design](#database-design)
- [API Overview](#api-overview)
- [Employee Event Processing](#employee-event-processing)
- [Authentication and Permissions](#authentication-and-permissions)
- [Testing](#testing)
- [Security Considerations](#security-considerations)
- [Development Roadmap](#development-roadmap)
- [Current Limitations](#current-limitations)
- [Future Improvements](#future-improvements)
- [Project Goal](#project-goal)

---

## Project Overview

**Employee Management System (EMS)** is an in-development, full-stack web application designed to organize employee records, departments, and workforce information through a centralized interface.

The planned final application uses **React + Vite** for the frontend, **Node.js + Express** for REST APIs, **MySQL** for persistent storage, and **Apache Kafka** for asynchronous employee lifecycle audit events.

The repository currently contains a styled React starter page, Express API with health/readiness endpoints, an initial MySQL schema, Docker Compose configuration, and supporting planning documentation. **Authentication, employee CRUD, dashboard analytics, and Kafka processing are still to be implemented.**

> **Portfolio project:** The goal is to demonstrate full-stack application development, SQL data modeling, secure access control, REST APIs, event-driven architecture, Docker-based local development, automated testing, and documented software development stages.

---

## Development Status

> 🟡 **Status: In Development** — This project is not yet production-ready and has not been publicly deployed.

| Component | Current state | Notes |
|---|---|---|
| React + Vite starter | ✅ Included | Basic styled starter interface |
| Node.js + Express starter | ✅ Included | App bootstrap and health/readiness routes |
| MySQL initial schema | ✅ Included | Migration file defining five core tables |
| Docker Compose | ✅ Included | Starter services: MySQL, backend, frontend |
| Environment examples | ✅ Included | Example environment-variable files |
| Requirements / system design | 🟡 Partial | Planning documents and placeholders |
| Backend health test | ✅ Included | Basic automated test file |
| Login / logout / session restoration | ⏳ Planned | Authentication not implemented |
| ADMIN / HR_MANAGER / VIEWER RBAC | ⏳ Planned | Permission enforcement not implemented |
| Employee CRUD / search / filters | ⏳ Planned | API and UI work remaining |
| Workforce dashboard / audit page | ⏳ Planned | Live metrics and audit display not implemented |
| Transactional outbox + Apache Kafka | ⏳ Planned | Publisher and consumer not implemented |
| Complete test suite / CI | ⏳ Planned | Additional tests and GitHub Actions pending |

**Legend:** ✅ Included in starter · 🟡 Partial · ⏳ Planned

---

## Screenshots

Application screenshots will be added as development progresses. The project currently has a starter interface, but the dashboard, employee management screens, and audit log page are **not yet complete**.

Planned screenshots:

- Login and role-based access
- Dashboard and employee summary metrics
- Employee directory with search and filters
- Add/Edit Employee forms
- Employee detail view
- Audit history and Kafka event processing

> Screenshots will only be added after the corresponding features are implemented and captured from the application.

---

## Key Features

### Currently available

- **React + Vite starter** with an initial responsive design.
- **Express API foundation** with `/api/health` and `/api/ready` routes.
- **MySQL schema** for users, departments, employees, outbox events, and audit logs.
- **Docker Compose starter environment** for the frontend, backend, and MySQL.
- **Environment configuration examples** and initial development documentation.
- **Basic backend health-check test**.

### Planned for the complete application

- **Secure login and logout** with protected sessions.
- **Role-based authorization** for administrators, HR managers, and viewers.
- **Employee management** with create, view, update, and soft-deactivate operations.
- **Search, pagination, sorting, and department/status filtering**.
- **Department administration** and assignment of employees to departments.
- **Live SQL-powered dashboard** showing workforce metrics.
- **Apache Kafka events** for employee creation, updates, and deactivation.
- **Transactional outbox** for reliable event publication.
- **Idempotent audit consumer** that writes employee activity history to MySQL.
- **Automated unit/integration tests and CI checks**.

---

## System Architecture

### Target architecture (planned end state)

```text
┌───────────────────────────────────────────────────────────────┐
│                      Web Browser                              │
│                                                               │
│                    React + Vite SPA                           │
│       Login • Dashboard • Employees • Departments • Audit     │
└──────────────────────────────┬────────────────────────────────┘
                               │ HTTP / REST / JSON
                               ▼
┌───────────────────────────────────────────────────────────────┐
│                    Node.js + Express API                      │
│                                                               │
│           Authentication • RBAC • Employee Services           │
│           Department APIs • Dashboard • Audit API             │
└──────────────────────────────┬────────────────────────────────┘
                               │ SQL transactions
                               ▼
┌───────────────────────────────────────────────────────────────┐
│                           MySQL                               │
│                                                               │
│    users • departments • employees • outbox_events             │
│                         audit_logs                            │
└──────────────────────────────┬────────────────────────────────┘
                               │ Pending outbox events
                               ▼
┌───────────────────────────────────────────────────────────────┐
│                   Outbox Publisher Worker                     │
└──────────────────────────────┬────────────────────────────────┘
                               │ KafkaJS
                               ▼
┌───────────────────────────────────────────────────────────────┐
│                      Apache Kafka                             │
│                    employee.events.v1                         │
└──────────────────────────────┬────────────────────────────────┘
                               │ Event consumption
                               ▼
┌───────────────────────────────────────────────────────────────┐
│                    Audit Consumer Worker                      │
│              Idempotent inserts into MySQL audit_logs         │
└───────────────────────────────────────────────────────────────┘
```

> **Implementation note:** The current Compose configuration runs only MySQL, Express, and React. Kafka and both workers are planned, not active services in the starter.

---

## Technology Stack

### Frontend

- React
- JavaScript (ES modules)
- Vite
- CSS
- React Router (dependency included)

### Backend

- Node.js
- Express
- JavaScript
- `mysql2`
- Zod
- Helmet, CORS, Cookie Parser

### Database

- MySQL 8.x
- SQL migrations
- Relational constraints and indexes

### Event Processing (planned)

- Apache Kafka
- KafkaJS
- Transactional outbox publisher
- Audit consumer worker

### Development & Testing

- Docker and Docker Compose
- Node.js built-in test runner (starter health test)
- Git / GitHub
- IntelliJ IDEA, WebStorm, VS Code, or another editor
- GitHub Actions (planned)

---

## Repository Structure

```text
employee-management-system-starter/
├── backend/
│   ├── migrations/
│   │   └── 001_init.sql
│   ├── scripts/                  # Future migration/seed utilities
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── controllers/          # Future controllers
│   │   ├── events/               # Future Kafka events
│   │   ├── middleware/           # Future auth/error middleware
│   │   ├── repositories/         # Future data access
│   │   ├── routes/
│   │   │   └── health.js
│   │   ├── schemas/              # Future validation
│   │   ├── services/             # Future business logic
│   │   ├── workers/              # Future outbox/consumer
│   │   ├── app.js
│   │   └── server.js
│   ├── tests/
│   │   └── health.test.js
│   ├── Dockerfile
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   ├── src/
│   │   ├── api/                 # Future API client
│   │   ├── components/          # Future UI components
│   │   ├── contexts/            # Future auth context
│   │   ├── hooks/
│   │   ├── pages/               # Future application pages
│   │   ├── styles/
│   │   │   └── main.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── Dockerfile
│   ├── index.html
│   ├── package.json
│   └── .env.example
│
├── docs/
│   ├── API_REFERENCE.md
│   ├── DATABASE_SCHEMA.md
│   ├── DEPLOYMENT.md
│   ├── REQUIREMENTS.md
│   ├── SECURITY.md
│   ├── SYSTEM_DESIGN.md
│   ├── TEST_PLAN.md
│   └── WATERFALL_SDLC.md
│
├── compose.yml
├── .env.example
├── .gitignore
├── LICENSE
└── README.md
```

*Some directories contain `.gitkeep` placeholders until their features are implemented.*

---

## Local Development

### Prerequisites

Install:

- **Node.js** (supported LTS release) and npm
- **Git**
- **Docker Desktop** (recommended for the easiest local setup)
- **IntelliJ IDEA / WebStorm / VS Code** (any editor is fine)

For a setup without Docker, a local **MySQL 8.x** installation is also required.

### 1. Clone the Repository

```bash
git clone <your-github-repository-url>
cd <your-repository-folder>
```

Replace the placeholder with your actual repository URL and folder name after publishing to GitHub.

### 2. Run with Docker Compose

Copy the root environment example and replace development secrets with strong local values:

**Windows PowerShell:**

```powershell
Copy-Item .env.example .env
```

**macOS/Linux:**

```bash
cp .env.example .env
```

Edit `.env`, then run from the **repository root**:

```bash
docker compose up --build -d
docker compose ps
```

Local addresses:

| Service | URL |
|---|---|
| Frontend | `http://localhost:5173` |
| Backend health | `http://localhost:4000/api/health` |
| Backend readiness | `http://localhost:4000/api/ready` |

View logs:

```bash
docker compose logs -f backend
```

Stop the environment:

```bash
docker compose down
```

**Database note:** Docker initializes the SQL schema when the MySQL data volume is created **for the first time**. Changing the SQL file afterward does not automatically migrate an existing database. Avoid `docker compose down -v` unless you deliberately want to remove local database data.

### 3. Run Locally Without Docker

First, start MySQL 8 and apply `backend/migrations/001_init.sql` to your development database. Update the backend `.env` values to match your local database credentials.

**Backend (terminal 1):**

```bash
cd backend
npm install
npm run dev
```

Before starting, copy `backend/.env.example` to `backend/.env` and configure the credentials. The Express API listens on port **4000** by default.

**Frontend (terminal 2, from repository root):**

```bash
cd frontend
npm install
npm run dev
```

Copy `frontend/.env.example` to `frontend/.env` if needed. Vite runs at `http://localhost:5173` by default.

**IntelliJ IDEA:** Open the **repository root** as your project and use the built-in terminal for these commands. No VS Code-specific setup is required.

---

## Database Design

The starter includes `backend/migrations/001_init.sql`, which defines five related tables:

| Table | Purpose |
|---|---|
| `users` | Application accounts, password hashes, and assigned roles |
| `departments` | Department lookup and organization |
| `employees` | Employee profile, department, hire date, status, and soft-deletion field |
| `outbox_events` | Durable queue of events awaiting publication to Kafka |
| `audit_logs` | Immutable-oriented employee lifecycle event history |

The SQL schema includes relevant primary keys, uniqueness constraints, foreign keys, and indexes. **The application endpoints that manipulate these records are still under development.**

---

## API Overview

### Implemented in the starter

```http
GET /api/health
GET /api/ready
```

`/api/health` indicates that the Express server is running. `/api/ready` checks database readiness.

### Planned API endpoints (not yet implemented)

```http
POST   /api/auth/login
POST   /api/auth/logout
GET    /api/auth/me

GET    /api/employees
GET    /api/employees/:id
POST   /api/employees
PATCH  /api/employees/:id
DELETE /api/employees/:id

GET    /api/departments
POST   /api/departments

GET    /api/dashboard/summary
GET    /api/audit
```

These routes represent the planned API contract, **not currently working endpoints**.

---

## Employee Event Processing

**Planned:** Kafka will process employee lifecycle notifications separately from HTTP requests.

```text
HR/Admin updates employee
          ↓
Express validates request + checks permissions
          ↓
MySQL transaction writes employee change + outbox event
          ↓
Outbox publisher sends to Apache Kafka
          ↓
Kafka topic: employee.events.v1
          ↓
Audit consumer validates and deduplicates event
          ↓
MySQL audit_logs
          ↓
Authorized audit history UI
```

Planned event types:

- `employee.created`
- `employee.updated`
- `employee.deactivated`

The outbox design is intended to reduce event-loss risk if Kafka is temporarily unavailable. Consumer idempotency is intended to prevent duplicate audit records when events are delivered more than once. **Neither behavior is implemented or verified in the starter.**

---

## Authentication and Permissions

The planned security model defines three roles:

| Action | ADMIN | HR_MANAGER | VIEWER |
|---|:---:|:---:|:---:|
| View employee records and dashboard | ✅ | ✅ | ✅ |
| Create/edit/deactivate employees | ✅ | ✅ | ❌ |
| View audit logs | ✅ | ✅ | ❌ |
| Manage departments | ✅ | ❌ | ❌ |
| Manage user roles | ✅ | ❌ | ❌ |

Planned safeguards include bcrypt password hashing, HttpOnly session cookies, role checks on backend routes, restricted user provisioning, input validation, and CSRF protection where appropriate.

> **Current state:** The role policy is documented, but authentication and authorization are not yet functional.

---

## Testing

The starter includes a basic Node.js test for backend health behavior.

To run the backend test suite:

```bash
cd backend
npm install
npm test
```

To build the frontend:

```bash
cd frontend
npm install
npm run build
```

These commands are provided for local verification. **No test-pass, CI, performance, or end-to-end integration results are claimed here.**

### Planned additional coverage

- Authentication success/failure and session expiration
- Role-based access controls
- Employee form and API validation
- Employee create/update/deactivate behavior
- Search, filtering, sorting, and pagination
- Transactional outbox consistency
- Kafka retry behavior and duplicate-event handling
- Frontend loading, empty, and error states

---

## Security Considerations

- Store credentials and secrets in local `.env` files, never in Git.
- Use **synthetic demo employee data**, not real employee personal information.
- Protect employee routes with authentication and authorization before accepting real usage.
- Use parameterized SQL and server-side validation for database operations.
- Use Secure/HttpOnly cookies, appropriate SameSite settings, and CSRF protection for deployment.
- Avoid exposing MySQL and Kafka directly to the public internet.
- Do not treat the starter as a production-ready HR records system.

---

## Development Roadmap

| Milestone | Status |
|---|---|
| Starter repository, React, Express, SQL, Compose | ✅ Included |
| Finish requirements, SDLC plan, and ERD documentation | 🟡 In progress |
| Database migrations and administrator seed script | ⏳ Planned |
| Secure authentication and role-based permissions | ⏳ Planned |
| Employee and department REST APIs | ⏳ Planned |
| Employee list, forms, detail pages, and filters | ⏳ Planned |
| Dashboard metrics and recent activity | ⏳ Planned |
| Kafka broker, outbox publisher, and audit consumer | ⏳ Planned |
| Audit trail interface | ⏳ Planned |
| Automated tests and GitHub Actions workflow | ⏳ Planned |
| Deployment hardening, screenshots, and verified demo | ⏳ Planned |

---

## Current Limitations

- Only starter pages and health/readiness routes are implemented.
- No login, user sessions, or protected employee management workflows exist yet.
- No complete employee CRUD API or UI is available yet.
- Dashboard and audit pages have not been built.
- Kafka is not part of the current Compose environment.
- SQL tables are initialized in Docker on first volume creation; full migration management is still planned.
- Production deployment and end-to-end application tests have not been verified.

---

## Future Improvements

After completing the first working release, potential enhancements include:

- Employee onboarding workflows
- More detailed organization and reporting dashboards
- Exportable employee reports
- Stronger accessibility and mobile UX checks
- Observability for outbox backlog and Kafka consumer lag
- Enhanced audit filtering and retention controls
- Optional cloud deployment with hardened configuration

These are **future ideas**, not existing capabilities.

---

## Project Goal

EMS is being developed to demonstrate how a carefully designed full-stack application can bring together traditional employee management workflows and reliable event-driven audit processing.

**React + JavaScript + Node.js + Express + MySQL + Apache Kafka + Docker + Software Development Lifecycle Documentation**

> 🟡 **Status: In Development** — Features, documentation, and verified demonstrations will be updated as milestones are completed.
