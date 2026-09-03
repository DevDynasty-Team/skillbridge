# SkillBridge — Final LocalStorage MVP

This version separates every major JSX component into its own file and CSS file.

## Included

- Public Home page
- Register
- Login
- Role-based dashboard
- Student dashboard
- Industry dashboard
- Academician dashboard
- Skill assessment
- Student opportunities
- Portfolio
- Student applications
- Industry opportunity posting
- Industry posted opportunities
- Industry application management
- LocalStorage persistence

## LocalStorage keys

- `users`
- `userRole`
- `userName`
- `userEmail`
- `userCollege`
- `userDepartment`
- `companyName`
- `studentProfile`
- `portfolio`
- `opportunities`
- `applications`

## Install

Make sure React Router is installed:

```bash
npm install react-router-dom
```

Then import the global stylesheet once in `main.jsx`:

```jsx
import "./index.css";
```

The data is intentionally stored in browser LocalStorage for this MVP. It can later be replaced with Supabase without changing the overall UI structure.

SOBUJ SOBUJ INTERFACE ACE BOLE SONDEHO KORLE CHOLBE NA KINTU 🤣🤣🤣🤣



src/ │ ├── components/
     │ ├── Navbar.jsx
     │ ├── Navbar.css 
     │ ├── Navbar2.jsx 
     │ └── Navbar2.css 
     │ ├── pages/ 
     │ ├── Home.jsx 
     │ ├── Home.css 
     │ ├── Login.jsx 
     │ ├── Login.css 
     │ ├── Register.jsx 
     │ └── Register.css 
     │ ├── dashboards/ 
     │ ├── Dashboard.jsx 
     │ ├── Dashboard.css 
     │ ├── StudentDashboard.jsx 
     │ ├── StudentDashboard.css 
     │ ├── IndustryDashboard.jsx 
     │ ├── IndustryDashboard.css 
     │ ├── AcademicianDashboard.jsx 
     │ └── AcademicianDashboard.css 
     │ ├── student/ 
     │ ├── SkillAssessment.jsx 
     │ ├── SkillAssessment.css 
     │ ├── Opportunities.jsx 
     │ ├── Opportunities.css 
     │ ├── Portfolio.jsx 
     │ ├── Portfolio.css 
     │ ├── StudentApplications.jsx 
     │ └── StudentApplications.css 
     │ ├── industry/ 
     │ ├── PostOpportunity.jsx 
     │ ├── PostOpportunity.css 
     │ ├── IndustryPosts.jsx 
     │ ├── IndustryPosts.css 
     │ ├── IndustryApplications.jsx 
     │ └── IndustryApplications.css 
     │ └── App.jsx
