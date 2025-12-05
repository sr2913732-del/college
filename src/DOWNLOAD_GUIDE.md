# MyHIMCS Portal - Complete Download & Setup Guide

## 📥 How to Download the Complete Source Code

### Method 1: Manual Download from Figma Make (Recommended)

Since this project is built in **Figma Make**, you can download all files directly:

1. **In Figma Make Interface:**
   - Look for the "Export" or "Download" button in the top-right corner
   - Click on it to download a ZIP file containing all project files
   - The ZIP will include all React components, styles, and assets

2. **What You'll Get:**
   - Complete React/TypeScript application
   - All component files (.tsx)
   - Styling files (globals.css)
   - Configuration files
   - Asset files (images from Figma)

---

## 📂 Complete Project Structure

```
MyHIMCS-Portal/
│
├── App.tsx                          # Main application entry point
├── package.json                     # Dependencies (auto-generated)
├── tsconfig.json                    # TypeScript configuration
├── vite.config.ts                   # Vite bundler config (if using Vite)
│
├── styles/
│   └── globals.css                  # Global styles and Tailwind
│
├── components/
│   ├── LoginPage.tsx                # Student login page
│   ├── RegisterPage.tsx             # Student registration
│   ├── StudentDashboard.tsx         # Main student dashboard
│   ├── AdminDashboard.tsx           # Legacy admin dashboard
│   ├── About.tsx                    # About section component
│   ├── Benefits.tsx                 # Benefits section (legacy)
│   ├── FAQ.tsx                      # FAQ component
│   ├── ImageSlider.tsx              # Image slider component
│   ├── Notifications.tsx            # Notifications component
│   ├── Suggestions.tsx              # Feedback/suggestions component
│   │
│   ├── admin/
│   │   ├── AdminDashboard.tsx       # Multi-role admin dashboard
│   │   └── AdminLogin.tsx           # Admin authentication
│   │
│   ├── student/
│   │   ├── Dashboard.tsx            # Student main dashboard
│   │   ├── Profile.tsx              # Student profile management
│   │   ├── Library.tsx              # Library services
│   │   ├── Marksheet.tsx            # Marksheet application
│   │   ├── Degree.tsx               # Degree certificate application
│   │   ├── NoDues.tsx               # No dues certificate
│   │   ├── CautionMoney.tsx         # Caution money withdrawal
│   │   ├── Hygiene.tsx              # Hygiene grievance portal
│   │   └── YourActivity.tsx         # Application activity tracking
│   │
│   ├── modules/
│   │   ├── ProfileModule.tsx        # Profile dashboard module
│   │   ├── LibraryModule.tsx        # Library dashboard module
│   │   ├── MarksheetModule.tsx      # Marksheet module
│   │   ├── DegreeModule.tsx         # Degree module
│   │   ├── NoDuesModule.tsx         # No Dues module
│   │   ├── CautionMoneyModule.tsx   # Caution Money module
│   │   ├── HygieneModule.tsx        # Hygiene module
│   │   ├── ActiveApplicationsModule.tsx  # Active applications
│   │   └── BusNavigationModule.tsx  # Navigation module
│   │
│   ├── figma/
│   │   └── ImageWithFallback.tsx    # Image fallback component
│   │
│   └── ui/                          # Shadcn UI components (35+ components)
│       ├── accordion.tsx
│       ├── alert-dialog.tsx
│       ├── alert.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── input.tsx
│       ├── select.tsx
│       ├── table.tsx
│       ├── tabs.tsx
│       └── ... (30+ more UI components)
│
├── guidelines/
│   └── Guidelines.md                # Development guidelines
│
├── DFD_MyHIMCS_Portal.md           # Data Flow Diagrams documentation
├── IMAGES_SETUP.md                 # Image setup instructions
├── Attributions.md                 # Credits and attributions
└── DOWNLOAD_GUIDE.md               # This file
```

---

## 🛠️ Setting Up the Project Locally

### Prerequisites

Before you start, make sure you have the following installed:

```bash
# Node.js (v16 or higher)
node --version

# npm (comes with Node.js) or yarn
npm --version
```

### Step 1: Extract the Downloaded Files

```bash
# Unzip the downloaded file
unzip MyHIMCS-Portal.zip

# Navigate to the project directory
cd MyHIMCS-Portal
```

### Step 2: Create package.json

Create a `package.json` file in the root directory:

```json
{
  "name": "myhimcs-portal",
  "version": "1.0.0",
  "description": "Student Services Portal for HIMCS",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.294.0",
    "recharts": "^2.10.3",
    "sonner": "^1.2.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.1.0",
    "react-hook-form": "^7.55.0",
    "date-fns": "^3.0.0",
    "react-day-picker": "^8.10.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@typescript-eslint/eslint-plugin": "^6.14.0",
    "@typescript-eslint/parser": "^6.14.0",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.16",
    "eslint": "^8.55.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "postcss": "^8.4.32",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.2.2",
    "vite": "^5.0.8"
  }
}
```

### Step 3: Install Dependencies

```bash
# Using npm
npm install

# OR using yarn
yarn install

# OR using pnpm
pnpm install
```

### Step 4: Create Configuration Files

**Create `vite.config.ts`:**

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
});
```

**Create `tsconfig.json`:**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

**Create `postcss.config.js`:**

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

**Create `index.html`:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>MyHIMCS - Student Services Portal</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/main.tsx"></script>
  </body>
</html>
```

**Create `main.tsx`:**

```typescript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### Step 5: Handle Figma Assets

The project uses assets imported from Figma. You need to:

1. **Replace Figma asset imports** with local image files:

```typescript
// Old (from Figma)
import collegeLogo from "figma:asset/cd3b27340c6ef6d210b3d3bdc4e7911da0e8e5f8.png";

// New (local)
import collegeLogo from "./assets/college-logo.png";
```

2. **Create an `assets` folder:**

```bash
mkdir assets
```

3. **Download or add your images:**
   - College logo
   - Campus background
   - Any other images used in the project

### Step 6: Run the Development Server

```bash
# Start the development server
npm run dev

# The app will be available at http://localhost:5173
```

---

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod
```

### Option 3: GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# Deploy
npm run deploy
```

### Option 4: Traditional Web Hosting

```bash
# Build the project
npm run build

# Upload the 'dist' folder to your web hosting via FTP/cPanel
```

---

## 🔧 Important Modifications Needed

### 1. Replace Mock Data with Real Backend

The current project uses mock data. You need to:

- Set up a backend (Node.js/Express, Django, etc.)
- Set up a database (MySQL, PostgreSQL, MongoDB)
- Replace mock functions with actual API calls

### 2. Authentication System

Replace mock authentication with:
- JWT tokens
- Session management
- Password hashing (bcrypt)
- Email verification

### 3. File Upload System

Implement real file upload:
- Use cloud storage (AWS S3, Cloudinary, etc.)
- Handle file validation
- Store file references in database

### 4. Payment Gateway Integration

Integrate actual payment gateway:
- Razorpay, PayU, or Paytm for India
- Configure API keys
- Handle payment callbacks

### 5. Email/SMS Notifications

Set up notification services:
- Email: SendGrid, AWS SES, or Nodemailer
- SMS: Twilio, AWS SNS, or MSG91

---

## 📦 Additional Files Needed for Production

### 1. `.env` file (Environment Variables)

```env
# API Configuration
VITE_API_URL=http://localhost:3000/api
VITE_API_KEY=your_api_key_here

# Payment Gateway
VITE_RAZORPAY_KEY=your_razorpay_key

# Firebase (if using)
VITE_FIREBASE_API_KEY=your_firebase_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain

# Email Service
VITE_EMAIL_SERVICE_KEY=your_email_key

# Google Maps API
VITE_GOOGLE_MAPS_KEY=your_google_maps_key
```

### 2. `.gitignore` file

```gitignore
# Dependencies
node_modules/
.pnp
.pnp.js

# Testing
coverage/

# Production
build/
dist/
*.local

# Environment
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db
```

---

## 🗄️ Database Schema

You'll need to create database tables for:

### Students Table
```sql
CREATE TABLE students (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  college_id VARCHAR(50) UNIQUE NOT NULL,
  roll_no VARCHAR(50),
  course VARCHAR(50),
  semester VARCHAR(20),
  year VARCHAR(20),
  batch VARCHAR(20),
  phone VARCHAR(15),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Applications Table
```sql
CREATE TABLE applications (
  id INT AUTO_INCREMENT PRIMARY KEY,
  student_id VARCHAR(50),
  type ENUM('marksheet', 'degree', 'caution_money', 'no_dues'),
  status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
  submission_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  processing_date TIMESTAMP NULL,
  documents JSON,
  remarks TEXT,
  FOREIGN KEY (student_id) REFERENCES students(id)
);
```

### Admin Users Table
```sql
CREATE TABLE admin_users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role ENUM('registrar', 'library', 'accounts', 'mba', 'mca', 'super-admin'),
  department VARCHAR(100),
  email VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Department Dues Table
```sql
CREATE TABLE department_dues (
  id INT AUTO_INCREMENT PRIMARY KEY,
  student_id VARCHAR(50),
  department VARCHAR(100),
  amount DECIMAL(10, 2),
  status ENUM('pending', 'paid', 'cleared') DEFAULT 'pending',
  last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (student_id) REFERENCES students(id)
);
```

---

## 📚 Backend API Endpoints (Suggested)

### Authentication
- `POST /api/auth/register` - Student registration
- `POST /api/auth/login` - Student login
- `POST /api/auth/admin-login` - Admin login
- `POST /api/auth/logout` - Logout

### Student Endpoints
- `GET /api/student/profile` - Get student profile
- `PUT /api/student/profile` - Update profile
- `GET /api/student/applications` - Get all applications
- `POST /api/student/applications` - Submit new application

### Application Endpoints
- `POST /api/applications/marksheet` - Apply for marksheet
- `POST /api/applications/degree` - Apply for degree
- `POST /api/applications/caution-money` - Apply for caution money
- `POST /api/applications/no-dues` - Apply for no dues
- `GET /api/applications/:id` - Get application details

### Admin Endpoints
- `GET /api/admin/applications` - Get all applications
- `PUT /api/admin/applications/:id/approve` - Approve application
- `PUT /api/admin/applications/:id/reject` - Reject application
- `GET /api/admin/students` - Get all students
- `GET /api/admin/reports` - Generate reports

### Library Endpoints
- `GET /api/library/books` - Get issued books
- `POST /api/library/issue` - Issue book
- `POST /api/library/return` - Return book
- `POST /api/library/pay-fine` - Pay fine

---

## 🔒 Security Checklist

- [ ] Implement proper authentication with JWT
- [ ] Hash passwords using bcrypt
- [ ] Validate all user inputs
- [ ] Implement CSRF protection
- [ ] Use HTTPS in production
- [ ] Sanitize file uploads
- [ ] Implement rate limiting
- [ ] Add input validation on backend
- [ ] Set up proper CORS policy
- [ ] Encrypt sensitive data
- [ ] Regular security audits
- [ ] Keep dependencies updated

---

## 📱 Features Checklist

### Student Portal
- [x] Login/Registration
- [x] Profile Management
- [x] Library Services
- [x] Marksheet Application
- [x] Degree Application
- [x] No Dues Certificate
- [x] Caution Money Withdrawal
- [x] Hygiene Grievance Portal
- [x] Application Activity Tracking
- [x] Suggestions/Feedback
- [ ] Email Notifications (needs backend)
- [ ] SMS Notifications (needs backend)
- [ ] Payment Integration (needs backend)

### Admin Portal
- [x] Multi-role Dashboard
- [x] Application Review
- [x] Student Records View
- [x] Reports & Analytics UI
- [ ] Backend Integration
- [ ] Database Connectivity
- [ ] Email Notifications

---

## 🆘 Troubleshooting

### Common Issues:

**1. Module not found errors:**
```bash
npm install
# or
rm -rf node_modules package-lock.json
npm install
```

**2. Figma asset import errors:**
- Replace all `figma:asset/...` imports with local file paths
- Add actual image files to the `assets` folder

**3. TypeScript errors:**
```bash
# Regenerate TypeScript config
npx tsc --init
```

**4. Build errors:**
```bash
# Clear cache and rebuild
rm -rf dist
npm run build
```

---

## 📞 Support & Documentation

- **Data Flow Diagrams**: See `/DFD_MyHIMCS_Portal.md`
- **Development Guidelines**: See `/guidelines/Guidelines.md`
- **Image Setup**: See `/IMAGES_SETUP.md`

---

## 🎯 Next Steps

1. ✅ Download the project from Figma Make
2. ✅ Set up local development environment
3. ⚠️ Replace Figma asset imports with local images
4. ⚠️ Set up backend API
5. ⚠️ Set up database
6. ⚠️ Integrate payment gateway
7. ⚠️ Set up email/SMS services
8. ⚠️ Deploy to production server
9. ⚠️ Configure domain and SSL
10. ⚠️ Test thoroughly before launch

---

## 📄 License

This project is built for Hindustan Institute of Management and Computer Studies (HIMCS).

---

**Note**: This is a front-end prototype built in Figma Make. For a production-ready application, you'll need to implement a complete backend system with proper database, authentication, and API integration.

**Good luck with your project! 🚀**
