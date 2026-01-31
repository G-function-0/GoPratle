# GoPratle – Requirement Posting Assignment

This project implements a simple multi-step requirement posting flow for an event marketplace.  
Users can create an event requirement, select whom they want to hire, and submit dynamic details based on that selection.  
All created requirements are stored in MongoDB and listed on the home page.

---

## Tech Stack

**Frontend**
- Next.js
- React Hook Form
- Tailwind CSS (minimal usage)

**Backend**
- Node.js
- Express
- MongoDB (Atlas)

---

## Features

- 3-step requirement creation flow
  - Event details
  - Hire type selection (Planner / Performer / Crew)
  - Dynamic details based on hire type
- Backend API to create and fetch requirements
- Home page listing all created requirements
- Redirect to home after successful submission

---

## How to Run the Project

### Backend

```bash
cd backend
npm install
node root.js
```

Backend runs on:
http://localhost:1001


### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:
http://localhost:3000


## API Endpoints

-POST /api/requirements
Creates a new requirement

-GET /api/requirements
Fetches all requirements


## Notes

-No authentication is implemented (out of scope for assignment)
-Styling is intentionally minimal to focus on logic and flow
-The codebase is structured to be easy to extend for future features