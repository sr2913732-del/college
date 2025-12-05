# HIMCS SWS - Complete Project Details Document
## (HIMCS Single Window System - Student Services Portal)

---

## 1. PROJECT OVERVIEW

### 1.1 Project Name
**HIMCS SWS (HIMCS Single Window System) - Student Services Portal**

### 1.2 Organization
**Hindustan Institute of Management and Computer Studies (HIMCS)**
- Location: Kosi Kalan, Farah, Mathura - 281122, Uttar Pradesh
- Contact: +91-9319155553
- Email: info@himcs.edu.in
- Website: https://himcs.edu.in

### 1.3 Project Description
HIMCS SWS is a comprehensive web-based student services portal that serves as a single window system for students to access various college services. The system provides an integrated platform for managing Library services, No Dues clearance, Academic documents (Marksheet/Degree) applications, Caution Money withdrawal, and Hygiene/Grievance portal. It includes complete login/registration functionality for students and a multi-role admin dashboard for staff members.

### 1.4 Project Vision
To create a unified, efficient, and user-friendly digital platform that streamlines all student services and administrative processes, reducing paperwork and providing real-time tracking of applications and services.

### 1.5 Project Objectives
1. Digitize all student service requests and administrative workflows
2. Provide single-point access to all college services for students
3. Enable real-time tracking and monitoring of applications
4. Automate No Dues clearance process across departments
5. Streamline document application and approval processes
6. Improve transparency and accountability in service delivery
7. Reduce processing time for student requests
8. Maintain comprehensive records and generate reports for administration

### 1.6 Target Users
- **Students**: MCA and MBA students
- **Administrators**: 
  - Registrar Section
  - Library Section
  - Account Section
  - HOD MBA Section
  - HOD MCA Section
  - Super Admin (Director)

---

## 2. SYSTEM FEATURES AND MODULES

### 2.1 AUTHENTICATION SYSTEM

#### 2.1.1 Student Login
**File**: `/components/LoginPage.tsx`

**Features**:
- Email/College ID based login
- Password authentication
- Remember me functionality
- Forgot password option
- Secure session management
- Professional UI with background image and overlay
- Responsive design

**Input Fields**:
- Email ID / College ID (Required)
- Password (Required)
- Remember Me (Checkbox)

**Navigation Options**:
- Register as New Student
- Admin & Staff Login

#### 2.1.2 Student Registration
**File**: `/components/RegisterPage.tsx`

**Features**:
- Comprehensive student registration form
- Email verification
- Form validation
- Success confirmation
- Automatic redirection to login

**Input Fields**:
- Personal Information:
  - Full Name (Required)
  - Father's Name (Required)
  - Email ID (Required)
  - Mobile Number (Required)
  - Address (Required)

- Academic Information:
  - College ID (Required)
  - Roll Number (Required)
  - Course (MCA/MBA) (Required)
  - Semester (Required)
  - Year (Required)
  - Batch (Required)

- Security:
  - Password (Required)
  - Confirm Password (Required)

#### 2.1.3 Admin Login
**File**: `/components/admin/AdminLogin.tsx`

**Features**:
- Role-based authentication
- Separate login for different departments
- Secure credential management
- Department-specific access control

**Available Roles**:
1. Registrar Section
2. Library Section
3. Account Section
4. HOD MBA Section
5. HOD MCA Section
6. Super Admin (Director)

---

### 2.2 STUDENT DASHBOARD

#### 2.2.1 Dashboard Overview
**File**: `/components/student/Dashboard.tsx`

**Features**:
- Professional header with college logo
- Top info bar with contact information
- Sticky navigation menu
- Hero banner with student information
- Service tiles layout
- Quick stats cards
- Image slider with announcements
- Footer with contact and location
- Responsive mobile menu

**Navigation Menu Items**:
- Home
- Your Activity
- About
- Suggestions
- FAQ
- Services (Dropdown)
- Profile
- Notifications
- Logout

**Quick Access Services**:
1. Library Service
2. Academic Services (Marksheet & Degree)
3. Financial Services (Caution Money & No Dues)
4. Grievance Portal
5. Bus Navigation

**Dashboard Information Cards**:
- Welcome message with student name
- College ID display
- Course and semester information
- Quick statistics
- Recent activity summary

#### 2.2.2 Profile Module
**File**: `/components/student/Profile.tsx`

**Features**:
- Complete student profile view
- Personal information display
- Academic details
- Contact information
- Profile picture upload
- Editable fields
- Save changes functionality

**Information Displayed**:
- Personal Details:
  - Full Name
  - Father's Name
  - Date of Birth
  - Gender
  - Email ID
  - Mobile Number
  - Address

- Academic Details:
  - College ID
  - Roll Number
  - Course (MCA/MBA)
  - Semester
  - Year
  - Batch
  - Admission Year

---

### 2.3 LIBRARY MANAGEMENT MODULE

**File**: `/components/student/Library.tsx`

#### 2.3.1 Features
- View issued books
- Book reissue functionality
- Online fine payment
- Book search and availability check
- Book reservation
- Due date tracking
- Fine calculation
- Payment history

#### 2.3.2 Issued Books Section
**Display Information**:
- Book Title
- Author Name
- ISBN/Book Code
- Issue Date
- Due Date
- Days Remaining/Overdue
- Fine Amount (if overdue)
- Book Status

**Actions**:
- Reissue Book (if eligible)
- Pay Fine Online
- Return Book Request

#### 2.3.3 Fine Payment
**Features**:
- Online payment integration
- Fine calculation based on overdue days
- Payment confirmation
- Receipt generation
- Payment history

**Fine Structure**:
- Rs. 5 per day for regular books
- Rs. 10 per day for reference books
- Maximum fine cap: Rs. 500 per book

#### 2.3.4 Book Search and Reservation
**Search Filters**:
- Book Title
- Author Name
- ISBN
- Category/Subject
- Availability Status

**Reservation Features**:
- Check book availability
- Reserve books in advance
- Reservation queue status
- Notification when book available

---

### 2.4 NO DUES CERTIFICATE MODULE

**File**: `/components/student/NoDues.tsx`

#### 2.4.1 Features
- Multi-department dues status
- Online dues clearance
- Department-wise approval tracking
- Final certificate generation
- Payment integration
- Document download

#### 2.4.2 Departments Involved
1. **Library Section**
   - Book return verification
   - Fine clearance
   - Status: Pending/Cleared

2. **Account Section**
   - Fee payment verification
   - Outstanding dues check
   - Status: Pending/Cleared

3. **HOD (MBA/MCA Section)**
   - Academic clearance
   - Project submission verification
   - Status: Pending/Cleared

4. **Registrar Section**
   - Final verification
   - Document clearance
   - Certificate issuance
   - Status: Pending/Cleared

#### 2.4.3 Process Flow
1. Student initiates No Dues request
2. System checks all departments automatically
3. Display pending dues department-wise
4. Student clears pending dues
5. Department heads approve clearance
6. Registrar issues final certificate
7. Certificate available for download

#### 2.4.4 Certificate Details
- Student Information
- Department-wise clearance status
- Issue Date
- Certificate Number
- Digital signature
- QR code for verification

---

### 2.5 MARKSHEET APPLICATION MODULE

**File**: `/components/student/Marksheet.tsx`

#### 2.5.1 Features
- Online marksheet application
- Duplicate/Original certificate request
- Application tracking
- Payment integration
- Document upload
- Download issued marksheet
- Application history

#### 2.5.2 Application Form Fields
**Personal Information**:
- Student Name (Auto-filled)
- College ID (Auto-filled)
- Roll Number (Auto-filled)
- Course (Auto-filled)
- Semester/Year (Selection)

**Marksheet Type**:
- Original Marksheet
- Duplicate Marksheet
- Consolidated Marksheet
- Migration Certificate

**Additional Information**:
- Reason for Application
- Number of Copies Required
- Delivery Mode (Physical/Digital)
- Delivery Address (if physical)

**Required Documents**:
- Fee Payment Receipt
- ID Proof
- Application Form (System Generated)
- Affidavit (for duplicate)

#### 2.5.3 Prerequisites
- No Dues clearance required
- All fee payments must be completed
- Previous semester marksheets verified

#### 2.5.4 Processing
1. Student submits application
2. HOD verification
3. Registrar approval
4. Document generation
5. Quality check
6. Dispatch/Digital delivery

#### 2.5.5 Fees Structure
- Original Marksheet: Rs. 100 per copy
- Duplicate Marksheet: Rs. 200 per copy
- Consolidated Marksheet: Rs. 500
- Migration Certificate: Rs. 500

---

### 2.6 DEGREE CERTIFICATE MODULE

**File**: `/components/student/Degree.tsx`

#### 2.6.1 Features
- Online degree application
- Provisional/Final degree request
- Application tracking
- Payment integration
- Document verification
- Download digital degree
- Application status updates

#### 2.6.2 Application Form Fields
**Personal Information**:
- Student Name (Auto-filled)
- Father's Name (Auto-filled)
- Date of Birth
- College ID (Auto-filled)
- Roll Number (Auto-filled)
- Course (Auto-filled)
- Batch (Auto-filled)

**Degree Type**:
- Provisional Degree Certificate
- Final Degree Certificate
- Transcript

**Additional Information**:
- Convocation Attendance (Yes/No)
- Name on Degree (as per requirements)
- Delivery Mode (Physical/Digital)
- Delivery Address

**Required Documents**:
- No Dues Certificate (Mandatory)
- Fee Payment Receipt
- Passport Size Photograph
- ID Proof
- Convocation Fee Receipt (if applicable)

#### 2.6.3 Prerequisites
- No Dues Certificate (Mandatory)
- All semester marksheets issued
- All fee payments completed
- Course completion verification
- Final examination cleared

#### 2.6.4 Processing Workflow
1. Student submits application
2. No Dues verification
3. HOD recommendation
4. Registrar verification
5. Director approval
6. University processing
7. Degree generation
8. Quality check and dispatch

#### 2.6.5 Fees Structure
- Provisional Degree: Rs. 1,000
- Final Degree: Rs. 2,000
- Transcript: Rs. 500 per copy
- Convocation Fee: Rs. 3,000

---

### 2.7 CAUTION MONEY WITHDRAWAL MODULE

**File**: `/components/student/CautionMoney.tsx`

#### 2.7.1 Features
- Caution money refund application
- Bank details submission
- No Dues prerequisite check
- Application tracking
- Refund processing
- Transaction history

#### 2.7.2 Application Form Fields
**Student Information** (Auto-filled):
- Student Name
- College ID
- Roll Number
- Course
- Batch

**Bank Details**:
- Account Holder Name (Required)
- Account Number (Required)
- Confirm Account Number (Required)
- Bank Name (Required)
- Branch Name (Required)
- IFSC Code (Required)
- Account Type (Savings/Current)

**Caution Money Information**:
- Amount Deposited (Display)
- Deductions (if any)
- Refundable Amount (Display)

**Document Upload**:
- Cancelled Cheque/Bank Passbook
- ID Proof

#### 2.7.3 Prerequisites
- No Dues Certificate (Mandatory)
- Course completion
- All documents submitted
- No pending dues

#### 2.7.4 Refund Processing
1. Student submits application with bank details
2. No Dues verification
3. Accounts section verification
4. Deduction calculation (if any)
5. Approval by competent authority
6. Refund initiation
7. Transaction completion notification

#### 2.7.5 Typical Caution Money Amount
- MCA Course: Rs. 10,000
- MBA Course: Rs. 10,000
- Deductions: Library fines, hostel damages, etc.

#### 2.7.6 Processing Time
- 15-30 working days after approval
- Direct bank transfer (NEFT/RTGS)

---

### 2.8 HYGIENE/GRIEVANCE PORTAL MODULE

**File**: `/components/student/Hygiene.tsx`

#### 2.8.1 Features
- Online complaint submission
- Category-wise grievance classification
- Priority level assignment
- Complaint tracking
- Status updates
- Resolution timeline
- Feedback mechanism
- Anonymous complaint option

#### 2.8.2 Grievance Categories
1. **Infrastructure & Facilities**
   - Classroom issues
   - Washroom hygiene
   - Drinking water
   - Electricity
   - Furniture issues

2. **Academic Issues**
   - Teaching quality
   - Syllabus concerns
   - Examination issues
   - Library resources

3. **Administrative Issues**
   - Document processing delays
   - Fee-related concerns
   - Staff behavior
   - Policy-related

4. **Safety & Security**
   - Campus security
   - Harassment complaints
   - Safety concerns

5. **Hostel Issues**
   - Accommodation problems
   - Food quality
   - Mess complaints

6. **Others**
   - General complaints
   - Suggestions

#### 2.8.3 Complaint Form Fields
- Grievance Category (Required)
- Subject (Required)
- Detailed Description (Required)
- Priority (Low/Medium/High/Critical)
- Location/Department
- Date of Incident
- Supporting Documents (Upload)
- Anonymous Filing Option
- Expected Resolution

#### 2.8.4 Priority Levels
- **Critical**: Immediate attention (24 hours)
- **High**: Urgent (2-3 days)
- **Medium**: Normal (5-7 days)
- **Low**: Regular (10-15 days)

#### 2.8.5 Processing Workflow
1. Student submits complaint
2. Automatic ticket number generation
3. Category-wise assignment to department
4. Acknowledgment notification
5. Investigation by concerned department
6. Action taken
7. Resolution update
8. Feedback collection
9. Ticket closure

#### 2.8.6 Tracking Features
- Unique complaint ID
- Current status display
- Timeline of actions
- Resolution updates
- Escalation option
- Reopen request

---

### 2.9 BUS NAVIGATION MODULE

**Component**: Bus Navigation (within Dashboard)

#### 2.9.1 Features
- Real-time bus tracking
- Route information
- Bus schedule display
- Bus availability status
- Route planning
- Notification for bus arrival

#### 2.9.2 Information Displayed
- Bus routes
- Timings
- Current location (if GPS enabled)
- Estimated arrival time
- Bus capacity status
- Route map

---

### 2.10 YOUR ACTIVITY MODULE

**File**: `/components/student/YourActivity.tsx`

#### 2.10.1 Features
- Timeline of all activities
- Application status summary
- Recent transactions
- Notification history
- Action items pending

#### 2.10.2 Activity Types Tracked
1. **Library Activities**
   - Book issue/return
   - Fine payments
   - Reservations

2. **Application Activities**
   - Marksheet applications
   - Degree applications
   - No Dues requests
   - Caution Money withdrawals

3. **Payment Activities**
   - Fee payments
   - Fine payments
   - Application fees

4. **Grievance Activities**
   - Complaints filed
   - Resolutions received

5. **Profile Activities**
   - Profile updates
   - Document uploads

---

### 2.11 ADDITIONAL FEATURES

#### 2.11.1 About Section
**File**: `/components/About.tsx`

**Content**:
- About HIMCS institution
- Vision and mission
- Infrastructure details
- Courses offered
- Faculty information
- Achievements
- Accreditations

#### 2.11.2 Suggestions Module
**File**: `/components/Suggestions.tsx`

**Features**:
- Feedback submission
- Improvement suggestions
- Feature requests
- Rating system
- Anonymous submission option

#### 2.11.3 FAQ Section
**File**: `/components/FAQ.tsx`

**Categories**:
- General Queries
- Login & Registration
- Library Services
- Document Applications
- Fee Payments
- Grievance Portal
- Technical Support

#### 2.11.4 Notifications Module
**File**: `/components/Notifications.tsx`

**Types**:
- System notifications
- Application status updates
- Payment reminders
- Due date alerts
- Announcements
- Emergency notices

#### 2.11.5 Image Slider
**File**: `/components/ImageSlider.tsx`

**Purpose**:
- Campus images
- Event announcements
- Important notices
- Achievements showcase
- Gallery

---

## 3. ADMIN DASHBOARD SYSTEM

### 3.1 ADMIN DASHBOARD OVERVIEW
**File**: `/components/admin/AdminDashboard.tsx`

#### 3.1.1 Role-Based Access Control
The admin dashboard provides different access levels and permissions based on user roles:

1. **Super Admin (Director)**
   - Complete system access
   - View all applications
   - Approve/Reject all requests
   - Generate reports
   - System configuration
   - User management

2. **Registrar Section**
   - Marksheet applications
   - Degree applications
   - No Dues final approval
   - Certificate issuance
   - Student records management

3. **Library Section**
   - Library dues clearance
   - Book issue/return management
   - Fine management
   - Library No Dues approval

4. **Account Section**
   - Fee dues verification
   - Payment verification
   - Caution Money processing
   - Financial No Dues approval
   - Refund processing

5. **HOD MBA Section**
   - MBA student applications
   - Academic clearance
   - Project verification
   - MBA No Dues approval

6. **HOD MCA Section**
   - MCA student applications
   - Academic clearance
   - Project verification
   - MCA No Dues approval

### 3.2 ADMIN DASHBOARD FEATURES

#### 3.2.1 Dashboard Overview Tab
**Statistics Cards**:
- Total Pending Applications
- Today's Applications
- Approved Applications
- Rejected Applications
- Total Students
- Active Grievances

**Charts and Graphs**:
- Applications trend (Line chart)
- Category-wise distribution (Pie chart)
- Monthly statistics (Bar chart)
- Department-wise workload

#### 3.2.2 Applications Management

**Application List View**:
- Application ID
- Student ID
- Student Name
- Application Type
- Submission Date
- Current Status
- No Dues Status
- Priority
- Actions

**Filter Options**:
- Application Type
- Status (Pending/Approved/Rejected)
- Date Range
- Course (MCA/MBA)
- Department
- Priority

**Search Functionality**:
- Search by Student ID
- Search by Student Name
- Search by Application ID

**Actions Available**:
- View Details
- Approve Application
- Reject Application
- Request More Information
- Download Documents
- Print Application
- Send Notification

#### 3.2.3 Application Details View

**Student Information**:
- Personal Details
- Academic Details
- Contact Information
- Photo

**Application Information**:
- Application Type
- Submission Date
- Current Status
- Processing Timeline
- Documents Attached

**No Dues Status**:
- Library Status
- Accounts Status
- HOD Status
- Registrar Status

**Action Panel**:
- Approve Button
- Reject Button
- Hold Button
- Request Documents
- Add Comments
- View History

#### 3.2.4 Approval Workflow

**Marksheet Application Approval**:
1. HOD Verification
2. Registrar Approval
3. Document Generation
4. Quality Check
5. Dispatch

**Degree Application Approval**:
1. No Dues Verification
2. HOD Recommendation
3. Registrar Verification
4. Director Approval
5. University Processing
6. Degree Issuance

**Caution Money Approval**:
1. No Dues Verification
2. Accounts Verification
3. Deduction Calculation
4. Approval by Authority
5. Refund Processing

**No Dues Approval**:
1. Library Clearance
2. Accounts Clearance
3. HOD Clearance
4. Registrar Final Approval
5. Certificate Generation

#### 3.2.5 Grievance Management (Admin View)

**Features**:
- View all grievances
- Assign to departments
- Track resolution status
- Set priority levels
- Update status
- Close tickets
- Generate reports

**Grievance List View**:
- Complaint ID
- Student ID
- Category
- Priority
- Status
- Submission Date
- Assigned To
- Actions

**Resolution Process**:
1. View grievance details
2. Assign to concerned department
3. Investigation
4. Action taken
5. Update resolution
6. Notify student
7. Close ticket

#### 3.2.6 Reports and Analytics

**Available Reports**:
1. **Application Reports**
   - Monthly application statistics
   - Department-wise analysis
   - Processing time reports
   - Approval/Rejection ratios

2. **Financial Reports**
   - Fee collection reports
   - Dues pending reports
   - Refund reports
   - Fine collection reports

3. **Library Reports**
   - Book issue/return statistics
   - Overdue books report
   - Fine collection report
   - Popular books report

4. **Grievance Reports**
   - Category-wise grievances
   - Resolution time analysis
   - Department-wise workload
   - Student satisfaction reports

5. **Student Reports**
   - Active students list
   - Course-wise distribution
   - Batch-wise reports
   - Alumni reports

**Report Features**:
- Date range selection
- Export to PDF
- Export to Excel
- Print functionality
- Email reports
- Scheduled reports

#### 3.2.7 Notifications and Alerts (Admin)

**Notification Types**:
- New application alerts
- Pending approval reminders
- Critical grievances
- System alerts
- Deadline reminders

#### 3.2.8 Document Management

**Features**:
- Upload documents
- Download applications
- Bulk document processing
- Digital signatures
- Document verification
- Archive management

#### 3.2.9 User Management (Super Admin Only)

**Features**:
- Add/Remove admin users
- Role assignment
- Permission management
- Password reset
- Activity logs
- Audit trail

---

## 4. TECHNICAL ARCHITECTURE

### 4.1 Technology Stack

#### 4.1.1 Frontend
- **Framework**: React 18+
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4.0
- **Icons**: Lucide React
- **State Management**: React Hooks (useState)
- **Routing**: Component-based routing (state-based navigation)
- **Image Handling**: Custom ImageWithFallback component

#### 4.1.2 UI Components
- Custom reusable components
- shadcn/ui component library
- Responsive design system
- Accessibility features

#### 4.1.3 Assets
- College logo images
- Campus background images
- SVG icons
- Imported Figma assets

### 4.2 Component Structure

#### 4.2.1 Main Components
```
/App.tsx - Main application component
/components/
  ├── LoginPage.tsx
  ├── RegisterPage.tsx
  ├── About.tsx
  ├── FAQ.tsx
  ├── Suggestions.tsx
  ├── Notifications.tsx
  ├── ImageSlider.tsx
  ├── student/
  │   ├── Dashboard.tsx
  │   ├── Profile.tsx
  │   ├── YourActivity.tsx
  │   ├── Library.tsx
  │   ├── NoDues.tsx
  │   ├── Marksheet.tsx
  │   ├── Degree.tsx
  │   ├── CautionMoney.tsx
  │   └── Hygiene.tsx
  ├── admin/
  │   ├── AdminLogin.tsx
  │   └── AdminDashboard.tsx
  ├── modules/
  │   ├── LibraryModule.tsx
  │   ├── NoDuesModule.tsx
  │   ├── MarksheetModule.tsx
  │   ├── DegreeModule.tsx
  │   ├── CautionMoneyModule.tsx
  │   ├── HygieneModule.tsx
  │   ├── ProfileModule.tsx
  │   ├── ActiveApplicationsModule.tsx
  │   └── BusNavigationModule.tsx
  └── ui/ (Reusable UI components)
```

### 4.3 State Management

#### 4.3.1 Application State
- Current page/view
- User authentication status
- User role (student/admin)
- Student data
- Active module
- Form data
- Application status

#### 4.3.2 Component-Level State
- Form inputs
- Modal visibility
- Dropdown states
- Loading states
- Error messages
- Success notifications

### 4.4 Data Flow

#### 4.4.1 Authentication Flow
1. User enters credentials
2. Validation check
3. Role-based routing
4. Session initialization
5. Dashboard loading

#### 4.4.2 Application Submission Flow
1. Student fills form
2. Client-side validation
3. Document upload
4. Prerequisite check
5. Submit to backend (simulated)
6. Confirmation display
7. Track application

#### 4.4.3 Approval Flow
1. Admin views application
2. Verification of details
3. No Dues check
4. Approve/Reject action
5. Status update
6. Notification to student
7. Document generation (if approved)

---

## 5. DATABASE SCHEMA

### 5.1 Users Table (students)
```
Table: students
Fields:
- student_id (Primary Key, Auto-increment)
- college_id (Unique, VARCHAR)
- email (Unique, VARCHAR)
- password (Encrypted, VARCHAR)
- name (VARCHAR)
- father_name (VARCHAR)
- date_of_birth (DATE)
- gender (ENUM: Male/Female/Other)
- mobile (VARCHAR)
- address (TEXT)
- roll_no (VARCHAR)
- course (ENUM: MCA/MBA)
- semester (VARCHAR)
- year (VARCHAR)
- batch (VARCHAR)
- admission_year (YEAR)
- photo (VARCHAR - file path)
- status (ENUM: Active/Inactive)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
```

### 5.2 Admin Users Table
```
Table: admin_users
Fields:
- admin_id (Primary Key, Auto-increment)
- username (Unique, VARCHAR)
- password (Encrypted, VARCHAR)
- name (VARCHAR)
- email (VARCHAR)
- role (ENUM: registrar/library/accounts/mba/mca/super-admin)
- department (VARCHAR)
- designation (VARCHAR)
- status (ENUM: Active/Inactive)
- created_at (TIMESTAMP)
- last_login (TIMESTAMP)
```

### 5.3 Library Books Table
```
Table: library_books
Fields:
- book_id (Primary Key, Auto-increment)
- isbn (VARCHAR)
- title (VARCHAR)
- author (VARCHAR)
- publisher (VARCHAR)
- category (VARCHAR)
- total_copies (INT)
- available_copies (INT)
- rack_no (VARCHAR)
- status (ENUM: Available/Unavailable)
```

### 5.4 Library Issues Table
```
Table: library_issues
Fields:
- issue_id (Primary Key, Auto-increment)
- student_id (Foreign Key -> students)
- book_id (Foreign Key -> library_books)
- issue_date (DATE)
- due_date (DATE)
- return_date (DATE, NULL if not returned)
- fine_amount (DECIMAL)
- fine_paid (BOOLEAN)
- status (ENUM: Issued/Returned/Overdue)
- reissue_count (INT)
- created_at (TIMESTAMP)
```

### 5.5 No Dues Table
```
Table: no_dues_requests
Fields:
- request_id (Primary Key, Auto-increment)
- student_id (Foreign Key -> students)
- request_date (DATE)
- library_status (ENUM: Pending/Cleared)
- library_cleared_by (Foreign Key -> admin_users)
- library_cleared_date (TIMESTAMP)
- accounts_status (ENUM: Pending/Cleared)
- accounts_cleared_by (Foreign Key -> admin_users)
- accounts_cleared_date (TIMESTAMP)
- hod_status (ENUM: Pending/Cleared)
- hod_cleared_by (Foreign Key -> admin_users)
- hod_cleared_date (TIMESTAMP)
- registrar_status (ENUM: Pending/Cleared)
- registrar_cleared_by (Foreign Key -> admin_users)
- registrar_cleared_date (TIMESTAMP)
- overall_status (ENUM: Pending/Cleared/Rejected)
- certificate_no (VARCHAR)
- issued_date (DATE)
- remarks (TEXT)
```

### 5.6 Marksheet Applications Table
```
Table: marksheet_applications
Fields:
- application_id (Primary Key, Auto-increment)
- student_id (Foreign Key -> students)
- application_type (ENUM: Original/Duplicate/Consolidated/Migration)
- semester (VARCHAR)
- year (VARCHAR)
- number_of_copies (INT)
- delivery_mode (ENUM: Physical/Digital)
- delivery_address (TEXT)
- reason (TEXT)
- documents_uploaded (JSON - array of file paths)
- fee_paid (BOOLEAN)
- payment_reference (VARCHAR)
- no_dues_verified (BOOLEAN)
- hod_status (ENUM: Pending/Approved/Rejected)
- hod_remarks (TEXT)
- hod_approved_by (Foreign Key -> admin_users)
- hod_approved_date (TIMESTAMP)
- registrar_status (ENUM: Pending/Approved/Rejected)
- registrar_remarks (TEXT)
- registrar_approved_by (Foreign Key -> admin_users)
- registrar_approved_date (TIMESTAMP)
- overall_status (ENUM: Pending/Processing/Approved/Rejected/Dispatched)
- dispatch_date (DATE)
- tracking_number (VARCHAR)
- application_date (TIMESTAMP)
- updated_at (TIMESTAMP)
```

### 5.7 Degree Applications Table
```
Table: degree_applications
Fields:
- application_id (Primary Key, Auto-increment)
- student_id (Foreign Key -> students)
- degree_type (ENUM: Provisional/Final/Transcript)
- convocation_attendance (BOOLEAN)
- name_on_degree (VARCHAR)
- delivery_mode (ENUM: Physical/Digital)
- delivery_address (TEXT)
- documents_uploaded (JSON - array of file paths)
- no_dues_certificate_no (VARCHAR)
- fee_paid (BOOLEAN)
- payment_reference (VARCHAR)
- convocation_fee_paid (BOOLEAN)
- hod_status (ENUM: Pending/Recommended/Not Recommended)
- hod_remarks (TEXT)
- hod_approved_by (Foreign Key -> admin_users)
- hod_approved_date (TIMESTAMP)
- registrar_status (ENUM: Pending/Verified/Rejected)
- registrar_remarks (TEXT)
- registrar_approved_by (Foreign Key -> admin_users)
- registrar_approved_date (TIMESTAMP)
- director_status (ENUM: Pending/Approved/Rejected)
- director_remarks (TEXT)
- director_approved_by (Foreign Key -> admin_users)
- director_approved_date (TIMESTAMP)
- university_status (ENUM: Pending/Approved/Issued)
- degree_number (VARCHAR)
- issue_date (DATE)
- overall_status (ENUM: Pending/Processing/Approved/Rejected/Issued)
- dispatch_date (DATE)
- tracking_number (VARCHAR)
- application_date (TIMESTAMP)
- updated_at (TIMESTAMP)
```

### 5.8 Caution Money Table
```
Table: caution_money_deposits
Fields:
- deposit_id (Primary Key, Auto-increment)
- student_id (Foreign Key -> students)
- amount_deposited (DECIMAL)
- deposit_date (DATE)
- receipt_no (VARCHAR)
- status (ENUM: Active/Refund Requested/Refunded)
```

### 5.9 Caution Money Refund Table
```
Table: caution_money_refunds
Fields:
- refund_id (Primary Key, Auto-increment)
- student_id (Foreign Key -> students)
- deposit_id (Foreign Key -> caution_money_deposits)
- bank_account_name (VARCHAR)
- bank_account_number (VARCHAR)
- bank_name (VARCHAR)
- branch_name (VARCHAR)
- ifsc_code (VARCHAR)
- account_type (ENUM: Savings/Current)
- no_dues_certificate_no (VARCHAR)
- documents_uploaded (JSON)
- amount_deposited (DECIMAL)
- deductions (DECIMAL)
- deduction_details (TEXT)
- refundable_amount (DECIMAL)
- accounts_status (ENUM: Pending/Verified/Rejected)
- accounts_remarks (TEXT)
- accounts_verified_by (Foreign Key -> admin_users)
- accounts_verified_date (TIMESTAMP)
- approval_status (ENUM: Pending/Approved/Rejected)
- approved_by (Foreign Key -> admin_users)
- approved_date (TIMESTAMP)
- refund_processed (BOOLEAN)
- transaction_reference (VARCHAR)
- transaction_date (DATE)
- overall_status (ENUM: Pending/Processing/Approved/Rejected/Completed)
- application_date (TIMESTAMP)
- updated_at (TIMESTAMP)
```

### 5.10 Grievances Table
```
Table: grievances
Fields:
- grievance_id (Primary Key, Auto-increment)
- ticket_number (Unique, VARCHAR)
- student_id (Foreign Key -> students, NULL if anonymous)
- is_anonymous (BOOLEAN)
- category (ENUM: Infrastructure/Academic/Administrative/Safety/Hostel/Other)
- subject (VARCHAR)
- description (TEXT)
- location (VARCHAR)
- incident_date (DATE)
- priority (ENUM: Low/Medium/High/Critical)
- documents_uploaded (JSON)
- assigned_to_department (VARCHAR)
- assigned_to_admin (Foreign Key -> admin_users)
- status (ENUM: Submitted/Assigned/InProgress/Resolved/Closed/Reopened)
- resolution_description (TEXT)
- resolved_by (Foreign Key -> admin_users)
- resolved_date (TIMESTAMP)
- feedback_rating (INT - 1 to 5)
- feedback_comments (TEXT)
- escalated (BOOLEAN)
- submission_date (TIMESTAMP)
- updated_at (TIMESTAMP)
```

### 5.11 Payments Table
```
Table: payments
Fields:
- payment_id (Primary Key, Auto-increment)
- student_id (Foreign Key -> students)
- payment_type (ENUM: Library Fine/Application Fee/Caution Money/Course Fee)
- reference_id (VARCHAR - links to specific application/issue)
- amount (DECIMAL)
- payment_method (ENUM: Online/Cash/Cheque/DD)
- payment_reference (VARCHAR)
- transaction_id (VARCHAR)
- payment_date (TIMESTAMP)
- status (ENUM: Success/Failed/Pending)
- receipt_generated (BOOLEAN)
- receipt_path (VARCHAR)
```

### 5.12 Notifications Table
```
Table: notifications
Fields:
- notification_id (Primary Key, Auto-increment)
- user_id (INT - can be student or admin)
- user_type (ENUM: Student/Admin)
- notification_type (ENUM: Application Update/Payment/Grievance/System/Alert)
- title (VARCHAR)
- message (TEXT)
- reference_id (VARCHAR)
- reference_type (VARCHAR)
- is_read (BOOLEAN)
- priority (ENUM: Low/Medium/High)
- created_at (TIMESTAMP)
- read_at (TIMESTAMP)
```

### 5.13 Activity Logs Table
```
Table: activity_logs
Fields:
- log_id (Primary Key, Auto-increment)
- user_id (INT)
- user_type (ENUM: Student/Admin)
- activity_type (VARCHAR)
- activity_description (TEXT)
- reference_id (VARCHAR)
- ip_address (VARCHAR)
- timestamp (TIMESTAMP)
```

### 5.14 System Settings Table
```
Table: system_settings
Fields:
- setting_id (Primary Key, Auto-increment)
- setting_key (Unique, VARCHAR)
- setting_value (TEXT)
- setting_type (VARCHAR)
- description (TEXT)
- updated_by (Foreign Key -> admin_users)
- updated_at (TIMESTAMP)
```

---

## 6. USER INTERFACE DESIGN

### 6.1 Design Principles
- **Professional**: Government portal-inspired design (NAD.gov.in style)
- **Responsive**: Mobile-first approach
- **Accessible**: WCAG compliance
- **Consistent**: Uniform design language
- **Intuitive**: User-friendly navigation

### 6.2 Color Scheme
- **Primary**: Blue (#1E3A8A, #2563EB)
- **Secondary**: Indigo (#4F46E5)
- **Accent**: Orange (#F97316)
- **Success**: Green (#10B981)
- **Warning**: Amber (#F59E0B)
- **Error**: Red (#EF4444)
- **Neutral**: Gray scale

### 6.3 Typography
- Default typography from `/styles/globals.css`
- Clean, readable fonts
- Hierarchical text sizing
- Proper contrast ratios

### 6.4 Layout Components

#### 6.4.1 Header
- College logo
- Navigation menu
- User profile
- Notifications bell
- Logout button

#### 6.4.2 Hero Banner
- Background image with overlay
- Welcome message
- Quick stats
- Call-to-action buttons

#### 6.4.3 Service Tiles
- Color-coded modules
- Icon representations
- Brief descriptions
- Hover effects
- Click navigation

#### 6.4.4 Footer
- About institution
- Quick links
- Contact information
- Location map
- Social media links
- Copyright information

### 6.5 Animations and Transitions
- Smooth page transitions
- Hover effects
- Loading states
- Success/Error animations
- Modal animations
- Fade-in effects

### 6.6 Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

---

## 7. KEY WORKFLOWS

### 7.1 Student Registration and Login Workflow
1. New student clicks "Register"
2. Fills registration form with personal and academic details
3. Submits form
4. Receives confirmation email (simulated)
5. Redirected to login page
6. Logs in with credentials
7. Accesses student dashboard

### 7.2 Library Book Management Workflow
1. Student logs into dashboard
2. Navigates to Library Service
3. Views issued books
4. Checks due dates and fines
5. Pays fine online (if applicable)
6. Requests reissue for books
7. Searches for new books
8. Reserves books for issue

### 7.3 Marksheet Application Workflow
**Student Side**:
1. Student navigates to Academic Services > Marksheet
2. Selects marksheet type
3. Fills application form
4. Uploads required documents
5. Pays application fee
6. Submits application
7. Receives acknowledgment
8. Tracks application status

**Admin Side**:
1. HOD receives notification
2. Reviews application
3. Verifies details
4. Approves/Rejects
5. If approved, forwards to Registrar
6. Registrar performs final approval
7. Marksheet generated
8. Dispatched to student
9. Student notified

### 7.4 No Dues Clearance Workflow
1. Student initiates No Dues request
2. System automatically checks all departments
3. Library section checks for books and fines
4. Library clears if no pending
5. Accounts section checks fee dues
6. Accounts clears if no pending
7. HOD checks academic clearance
8. HOD provides clearance
9. Registrar performs final verification
10. No Dues certificate generated
11. Certificate available for download

### 7.5 Caution Money Refund Workflow
1. Student navigates to Caution Money module
2. Verifies No Dues certificate
3. Enters bank account details
4. Uploads required documents
5. Submits refund request
6. Accounts section verifies details
7. Calculates deductions (if any)
8. Approval from authority
9. Refund processed via NEFT/RTGS
10. Student receives confirmation
11. Transaction completed

### 7.6 Grievance Submission and Resolution Workflow
**Submission**:
1. Student navigates to Grievance Portal
2. Selects grievance category
3. Fills complaint details
4. Sets priority level
5. Uploads supporting documents
6. Submits complaint
7. Receives ticket number

**Resolution**:
1. Admin receives grievance notification
2. Assigns to concerned department
3. Department investigates
4. Action taken
5. Resolution updated in system
6. Student notified
7. Student provides feedback
8. Ticket closed

---

## 8. SECURITY FEATURES

### 8.1 Authentication
- Secure login mechanism
- Password encryption
- Session management
- Role-based access control
- Logout functionality

### 8.2 Data Protection
- Input validation
- SQL injection prevention
- XSS protection
- CSRF protection
- Secure file upload

### 8.3 Privacy
- Data encryption
- Secure communication (HTTPS)
- Privacy policy compliance
- Data retention policies
- Anonymous grievance option

---

## 9. FUTURE ENHANCEMENTS

### 9.1 Planned Features
1. **Mobile Application**: Native Android/iOS apps
2. **SMS Notifications**: Real-time SMS alerts
3. **Email Integration**: Automated email notifications
4. **Payment Gateway**: Multiple payment options
5. **Biometric Authentication**: Fingerprint/Face ID login
6. **Chatbot Support**: AI-powered help desk
7. **Online Fee Payment**: Semester fee payment module
8. **Exam Portal Integration**: Results and exam schedules
9. **Attendance Tracking**: Student attendance module
10. **Placement Portal**: Job postings and applications
11. **Alumni Portal**: Alumni network and engagement
12. **Document Verification**: QR code-based verification
13. **Multi-language Support**: Hindi and English
14. **Dark Mode**: Theme switching option
15. **Offline Mode**: Progressive Web App features

### 9.2 Technical Improvements
1. Backend API development
2. Database implementation
3. Cloud hosting
4. CDN integration
5. Performance optimization
6. Automated testing
7. CI/CD pipeline
8. Backup and recovery system

---

## 10. SYSTEM REQUIREMENTS

### 10.1 For End Users (Students/Admin)

#### Minimum Requirements:
- **Browser**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Internet**: 2 Mbps or higher
- **Device**: Any device with modern browser
- **Screen Resolution**: 320px width minimum

#### Recommended:
- **Browser**: Latest version of Chrome/Firefox
- **Internet**: 5 Mbps or higher
- **Device**: Desktop/Laptop for admin, Mobile/Desktop for students
- **Screen Resolution**: 1366x768 or higher

### 10.2 For Development

#### Frontend Development:
- **Node.js**: v16+ 
- **npm/yarn**: Latest version
- **Code Editor**: VS Code recommended
- **Browser DevTools**: Chrome DevTools

#### Backend Development (Future):
- **Server**: Node.js/Python/Java
- **Database**: MySQL/PostgreSQL
- **Web Server**: Apache/Nginx

---

## 11. PROJECT FILES AND STRUCTURE

### 11.1 Main Application File
- `/App.tsx` - Root component with routing logic

### 11.2 Component Files

#### Authentication Components:
- `/components/LoginPage.tsx`
- `/components/RegisterPage.tsx`
- `/components/admin/AdminLogin.tsx`

#### Student Dashboard Components:
- `/components/student/Dashboard.tsx`
- `/components/student/Profile.tsx`
- `/components/student/YourActivity.tsx`

#### Service Module Components:
- `/components/student/Library.tsx`
- `/components/student/NoDues.tsx`
- `/components/student/Marksheet.tsx`
- `/components/student/Degree.tsx`
- `/components/student/CautionMoney.tsx`
- `/components/student/Hygiene.tsx`

#### Admin Components:
- `/components/admin/AdminDashboard.tsx`

#### Additional Components:
- `/components/About.tsx`
- `/components/FAQ.tsx`
- `/components/Suggestions.tsx`
- `/components/Notifications.tsx`
- `/components/ImageSlider.tsx`

#### Module Components:
- `/components/modules/LibraryModule.tsx`
- `/components/modules/NoDuesModule.tsx`
- `/components/modules/MarksheetModule.tsx`
- `/components/modules/DegreeModule.tsx`
- `/components/modules/CautionMoneyModule.tsx`
- `/components/modules/HygieneModule.tsx`
- `/components/modules/ProfileModule.tsx`
- `/components/modules/ActiveApplicationsModule.tsx`
- `/components/modules/BusNavigationModule.tsx`

#### UI Components (Reusable):
Located in `/components/ui/` directory with 40+ reusable components

### 11.3 Styling Files
- `/styles/globals.css` - Global styles and Tailwind configuration

### 11.4 Asset Files
- College logos
- Campus background images
- SVG icons

---

## 12. DATA ENTITIES AND RELATIONSHIPS

### 12.1 Core Entities
1. Students
2. Admin Users
3. Applications (Marksheet, Degree, Caution Money)
4. Library (Books, Issues)
5. No Dues
6. Grievances
7. Payments
8. Notifications

### 12.2 Key Relationships
- Student → Multiple Applications
- Student → Multiple Library Issues
- Student → Multiple Grievances
- Student → Multiple Payments
- Application → Student (One-to-One)
- Application → Multiple Approvals (Admin Users)
- No Dues Request → Multiple Department Clearances
- Grievance → Student
- Grievance → Admin (Assignment)
- Payment → Student
- Payment → Application/Issue/Request

---

## 13. BUSINESS RULES

### 13.1 Library Rules
- Maximum 3 books per student
- Issue period: 14 days
- Maximum 1 reissue allowed
- Fine: Rs. 5 per day for regular books
- Fine: Rs. 10 per day for reference books

### 13.2 Application Rules
- No Dues certificate mandatory for Degree application
- No Dues certificate mandatory for Caution Money refund
- All fees must be paid before document application
- Maximum processing time: 15 working days

### 13.3 No Dues Rules
- All four departments must clear
- Library books must be returned
- All fines must be paid
- Fee dues must be cleared
- Academic clearance required

### 13.4 Caution Money Rules
- Refundable only after course completion
- No Dues certificate mandatory
- Deductions for damages/fines
- Refund via bank transfer only
- Processing time: 15-30 days

### 13.5 Grievance Rules
- Anonymous complaints allowed
- Priority based on severity
- Maximum resolution time based on priority
- Escalation after deadline
- Feedback mandatory after resolution

---

## 14. CONTACT INFORMATION

### 14.1 Institution Details
**Hindustan Institute of Management and Computer Studies (HIMCS)**

**Address**:
Hindustan Institute of Management & Computer Studies
Kosi Kalan, Farah
Mathura - 281122
Uttar Pradesh, India

**Contact**:
- Phone: +91-9319155553
- Email: info@himcs.edu.in
- Website: https://himcs.edu.in

### 14.2 Technical Support
- Email: support@himcs.edu.in
- Working Hours: Monday to Friday, 9:00 AM - 5:00 PM

---

## 15. DOCUMENT REVISION HISTORY

| Version | Date | Description | Author |
|---------|------|-------------|--------|
| 1.0 | November 26, 2025 | Initial comprehensive project documentation | Development Team |

---

## 16. APPENDIX

### 16.1 Abbreviations
- HIMCS: Hindustan Institute of Management and Computer Studies
- SWS: Single Window System
- MCA: Master of Computer Applications
- MBA: Master of Business Administration
- HOD: Head of Department
- UI: User Interface
- UX: User Experience
- API: Application Programming Interface
- NEFT: National Electronic Funds Transfer
- RTGS: Real Time Gross Settlement

### 16.2 Glossary
- **No Dues Certificate**: Official document certifying that student has no pending dues from any department
- **Caution Money**: Refundable security deposit paid during admission
- **Marksheet**: Academic transcript showing marks obtained in examinations
- **Convocation**: Graduation ceremony
- **IFSC Code**: Indian Financial System Code for bank branches
- **Grievance**: Formal complaint or concern raised by student

---

## END OF DOCUMENT

**Note**: This document contains complete functional and technical details of the HIMCS SWS project. It can be used as a reference for creating Software Requirements Specification (SRS), technical documentation, user manuals, or for communicating project scope to stakeholders and development teams.

**Document Status**: Complete and Ready for SRS Creation

**Last Updated**: November 26, 2025
