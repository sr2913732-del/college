# Data Flow Diagrams (DFD) for MyHIMCS Student Services Portal

## System Overview
MyHIMCS is a comprehensive student services portal for Hindustan Institute of Management and Computer Studies (HIMCS) that provides integrated access to various college services including Library Management, No Dues Certificate, Marksheet/Degree Applications, Caution Money Withdrawal, and Hygiene Grievance Portal.

---

## Level 0 DFD (Context Diagram)

### External Entities:
1. **Student** - Primary user who accesses various services
2. **Admin/Staff** - Department administrators (Registrar, Library, Accounts, HODs, Director)
3. **College Database** - Central data repository
4. **Payment Gateway** - External system for processing payments
5. **Email/SMS System** - Notification service

### System: MyHIMCS Student Services Portal

```
                                    ┌─────────────────────────────────┐
                                    │                                 │
        Student Credentials         │                                 │    Application Status
    ──────────────────────────────> │                                 │ ──────────────────────>
                                    │                                 │    Notifications
        Application Requests        │                                 │
    ──────────────────────────────> │         MyHIMCS Student         │ <──────────────────────
                                    │         Services Portal         │    Admin Credentials
        Payment Information         │                                 │    Admin Actions
                                    │                                 │ ──────────────────────>
        Feedback/Suggestions        │                                 │    Reports
                                    │                                 │ ──────────────────────>
                                    │                                 │
                                    └─────────────────────────────────┘
                                               ↑         ↓
                                               │         │
                                      Student/Admin     Student/Admin
                                         Data            Data
                                               │         │
                                               ↓         ↑
                                    ┌─────────────────────────────────┐
                                    │     College Database            │
                                    │   (Student Records, Apps)       │
                                    └─────────────────────────────────┘
```

### Data Flows:
- **Student → Portal**: Login credentials, application requests, payment info, feedback
- **Portal → Student**: Authentication status, application status, notifications, documents
- **Admin/Staff → Portal**: Login credentials, approval/rejection actions
- **Portal → Admin/Staff**: Application lists, student records, reports
- **Portal ↔ Database**: CRUD operations on student data, applications
- **Portal → Payment Gateway**: Payment processing requests
- **Portal → Notification System**: Email/SMS alerts

---

## Level 1 DFD (First Level Decomposition)

### Processes:
1. **Process 1.0: Authentication & Authorization**
2. **Process 2.0: Student Services Management**
3. **Process 3.0: Application Processing**
4. **Process 4.0: Payment Processing**
5. **Process 5.0: Admin Management**
6. **Process 6.0: Notification Management**

### Data Stores:
- **D1: Student Database**
- **D2: Application Records**
- **D3: Payment Records**
- **D4: Admin Users**
- **D5: Department Dues**
- **D6: Library Records**

```
                    ┌─────────────┐
                    │   Student   │
                    └──────┬──────┘
                           │
                           │ Login Credentials
                           ↓
                    ┌─────────────────────────┐
                    │  1.0 Authentication &   │
                    │     Authorization       │──────> Auth Token
                    └────────┬────────────────┘
                             │
                    ┌────────┴─────────┐
                    │                  │
        ┌───────────↓──────────┐   ┌──↓──────────────────┐
        │  2.0 Student Services│   │  3.0 Application    │
        │     Management       │   │     Processing      │
        └───┬──────────────┬───┘   └──┬──────────────┬───┘
            │              │           │              │
            ↓              ↓           ↓              ↓
        ┌───────┐      ┌───────┐  ┌───────┐      ┌───────┐
        │  D1:  │      │  D6:  │  │  D2:  │      │  D5:  │
        │Student│      │Library│  │  App  │      │ Dues  │
        │  DB   │      │Records│  │Records│      │Records│
        └───────┘      └───────┘  └───┬───┘      └───────┘
                                      │
                                      │ Application Data
                                      ↓
                              ┌────────────────────┐
                              │  4.0 Payment       │
                              │     Processing     │
                              └────────┬───────────┘
                                       │
                                       ↓
                                   ┌───────┐
                                   │  D3:  │
                                   │Payment│
                                   │Records│
                                   └───────┘
                    
        ┌─────────────┐
        │ Admin/Staff │──────────┐
        └─────────────┘          │
                                 │ Admin Credentials
                                 ↓
                        ┌────────────────────┐
                        │  5.0 Admin         │
                        │     Management     │
                        └────────┬───────────┘
                                 │
                                 │ Approval/Rejection
                                 ↓
                         ┌───────────────────┐
                         │  6.0 Notification │
                         │     Management    │──────> Email/SMS
                         └───────────────────┘
```

### Data Flow Details:

**Process 1.0: Authentication & Authorization**
- Input: Login credentials (student/admin)
- Output: Auth token, user session
- Data Store: D1 (Student DB), D4 (Admin Users)

**Process 2.0: Student Services Management**
- Input: Service requests (Library, Profile, Activity)
- Output: Service data, status updates
- Data Store: D1, D6

**Process 3.0: Application Processing**
- Input: Application submissions (Marksheet, Degree, Caution Money, No Dues)
- Output: Application status, documents
- Data Store: D2, D5

**Process 4.0: Payment Processing**
- Input: Payment information (dues, fines)
- Output: Payment confirmation
- Data Store: D3, D5

**Process 5.0: Admin Management**
- Input: Admin actions (approve, reject, review)
- Output: Updated application status
- Data Store: D2, D4

**Process 6.0: Notification Management**
- Input: Event triggers (application submitted, approved, rejected)
- Output: Email/SMS notifications
- Data Store: D2, D1

---

## Level 2 DFD (Detailed Decomposition)

### Decomposition of Process 2.0: Student Services Management

```
                           ┌─────────────┐
                           │   Student   │
                           └──────┬──────┘
                                  │
                    ┌─────────────┼─────────────┐
                    │             │             │
                    ↓             ↓             ↓
         ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
         │ 2.1 Profile  │  │ 2.2 Library  │  │ 2.3 Activity │
         │ Management   │  │ Management   │  │   Tracking   │
         └──────┬───────┘  └──────┬───────┘  └──────┬───────┘
                │                 │                 │
                ↓                 ↓                 ↓
         ┌────────────┐    ┌────────────┐   ┌────────────┐
         │ D1: Student│    │D6: Library │   │D2: App     │
         │   Database │    │   Records  │   │  Records   │
         └────────────┘    └────────────┘   └────────────┘
```

**Sub-processes:**
- **2.1 Profile Management**: View/update student profile
- **2.2 Library Management**: Issue/return books, pay fines
- **2.3 Activity Tracking**: View application history and status

---

### Decomposition of Process 3.0: Application Processing

```
                              ┌─────────────┐
                              │   Student   │
                              └──────┬──────┘
                                     │
                     ┌───────────────┼───────────────┐
                     │               │               │
                     ↓               ↓               ↓
          ┌──────────────────┐ ┌──────────────┐ ┌──────────────────┐
          │ 3.1 Academic     │ │ 3.2 Financial│ │ 3.3 Grievance    │
          │ Services         │ │ Services     │ │ Management       │
          │ (Marksheet/      │ │ (No Dues/    │ │ (Hygiene         │
          │  Degree)         │ │  Caution $)  │ │  Complaints)     │
          └────────┬─────────┘ └──────┬───────┘ └────────┬─────────┘
                   │                  │                  │
                   ↓                  ↓                  ↓
         ┌─────────────────┐  ┌──────────────┐  ┌──────────────┐
         │ 3.1.1 Validate  │  │ 3.2.1 Check  │  │ 3.3.1 Submit │
         │ No Dues Status  │  │ Dues Status  │  │  Complaint   │
         └────────┬────────┘  └──────┬───────┘  └──────┬───────┘
                  │                  │                  │
                  ↓                  ↓                  ↓
         ┌─────────────────┐  ┌──────────────┐  ┌──────────────┐
         │ 3.1.2 Submit    │  │ 3.2.2 Process│  │ 3.3.2 Track  │
         │ Application     │  │ Payment      │  │  Resolution  │
         └────────┬────────┘  └──────┬───────┘  └──────┬───────┘
                  │                  │                  │
                  ↓                  ↓                  ↓
         ┌─────────────────┐  ┌──────────────┐  ┌──────────────┐
         │ 3.1.3 Select    │  │ 3.2.3 Update │  │ 3.3.3 Notify │
         │ Delivery Method │  │ Records      │  │  Student     │
         │ (Collect/       │  │              │  │              │
         │  Courier)       │  │              │  │              │
         └────────┬────────┘  └──────┬───────┘  └──────┬───────┘
                  │                  │                  │
                  └─────────┬────────┴──────────────────┘
                            ↓
                    ┌──────────────┐
                    │ D2: Application│
                    │    Records    │
                    └───────┬───────┘
                            │
                            ↓
                    ┌──────────────┐
                    │ D5: Department│
                    │     Dues      │
                    └───────────────┘
```

**Sub-processes:**

**3.1 Academic Services (Marksheet/Degree)**
- **3.1.1 Validate No Dues Status**: Check if student has cleared all dues
- **3.1.2 Submit Application**: Accept application with student details
- **3.1.3 Select Delivery Method**: Choose between college pickup or courier

**3.2 Financial Services (No Dues/Caution Money)**
- **3.2.1 Check Dues Status**: Verify department-wise dues
- **3.2.2 Process Payment**: Handle payment for pending dues
- **3.2.3 Update Records**: Update payment and clearance records

**3.3 Grievance Management (Hygiene Portal)**
- **3.3.1 Submit Complaint**: Accept and categorize complaints
- **3.3.2 Track Resolution**: Monitor complaint status
- **3.3.3 Notify Student**: Send updates on complaint resolution

---

### Decomposition of Process 5.0: Admin Management

```
                         ┌─────────────────┐
                         │  Admin/Staff    │
                         └────────┬────────┘
                                  │
                  ┌───────────────┼───────────────┐
                  │               │               │
                  ↓               ↓               ↓
       ┌────────────────┐  ┌────────────────┐  ┌────────────────┐
       │ 5.1 Application│  │ 5.2 Student    │  │ 5.3 Reports &  │
       │    Review      │  │    Records     │  │    Analytics   │
       └────────┬───────┘  └────────┬───────┘  └────────┬───────┘
                │                   │                   │
                ↓                   ↓                   ↓
       ┌────────────────┐  ┌────────────────┐  ┌────────────────┐
       │ 5.1.1 View     │  │ 5.2.1 Search   │  │ 5.3.1 Generate │
       │ Applications   │  │ Students       │  │ Statistics     │
       └────────┬───────┘  └────────┬───────┘  └────────┬───────┘
                │                   │                   │
                ↓                   ↓                   ↓
       ┌────────────────┐  ┌────────────────┐  ┌────────────────┐
       │ 5.1.2 Verify   │  │ 5.2.2 View     │  │ 5.3.2 Export   │
       │ Documents      │  │ Details        │  │ Reports        │
       └────────┬───────┘  └────────┬───────┘  └────────┬───────┘
                │                   │                   │
                ↓                   ↓                   ↓
       ┌────────────────┐  ┌────────────────┐  ┌────────────────┐
       │ 5.1.3 Approve/ │  │ 5.2.3 Update   │  │ 5.3.3 Dashboard│
       │ Reject         │  │ Records        │  │ Visualization  │
       └────────┬───────┘  └────────┬───────┘  └────────┬───────┘
                │                   │                   │
                └─────────┬─────────┴───────────────────┘
                          ↓
                  ┌──────────────┐
                  │ D2: Application│
                  │    Records    │
                  └───────┬───────┘
                          │
                          ↓
                  ┌──────────────┐
                  │ D1: Student  │
                  │   Database   │
                  └──────────────┘
```

**Sub-processes:**

**5.1 Application Review**
- **5.1.1 View Applications**: Display pending applications
- **5.1.2 Verify Documents**: Check uploaded documents and details
- **5.1.3 Approve/Reject**: Take action on applications

**5.2 Student Records**
- **5.2.1 Search Students**: Find student by ID, name, or course
- **5.2.2 View Details**: Display complete student information
- **5.2.3 Update Records**: Modify student information

**5.3 Reports & Analytics**
- **5.3.1 Generate Statistics**: Calculate application metrics
- **5.3.2 Export Reports**: Download reports in various formats
- **5.3.3 Dashboard Visualization**: Display charts and graphs

---

## Data Dictionary

### Data Flows:

| Data Flow Name | Source | Destination | Description |
|----------------|--------|-------------|-------------|
| Login Credentials | Student/Admin | Authentication Process | Email/ID and password |
| Auth Token | Authentication Process | Student/Admin | JWT or session token |
| Application Request | Student | Application Processing | Form data for services |
| Application Status | Application Processing | Student | Pending/Approved/Rejected |
| Payment Info | Student | Payment Processing | Amount, method, account details |
| Payment Confirmation | Payment Processing | Student | Transaction ID, receipt |
| Admin Action | Admin | Admin Management | Approve/Reject with remarks |
| Notification | Notification Management | Student/Admin | Email/SMS alerts |
| Student Data | Database | Various Processes | Profile, academic records |
| Application Record | Application Processing | Database | Complete application details |

### Data Stores:

| Store ID | Name | Description | Content |
|----------|------|-------------|---------|
| D1 | Student Database | Master student records | Student ID, Name, Email, Course, Semester, Batch, Contact Info |
| D2 | Application Records | All submitted applications | App ID, Type, Status, Date, Documents, Student ID |
| D3 | Payment Records | Payment transactions | Transaction ID, Amount, Method, Date, Student ID |
| D4 | Admin Users | Administrator credentials | Admin ID, Role, Department, Permissions |
| D5 | Department Dues | Departmental dues status | Department, Student ID, Amount, Status, Last Updated |
| D6 | Library Records | Library transactions | Book ID, Issue Date, Return Date, Fine, Student ID |

### Entities:

**Student:**
- Student ID (Primary Key)
- Name
- Email
- College ID
- Roll Number
- Course (MCA/MBA)
- Semester
- Year
- Batch
- Contact Number
- Address

**Admin/Staff:**
- Admin ID (Primary Key)
- Name
- Role (Registrar, Library, Accounts, HOD, Director)
- Department
- Email
- Permissions

**Application:**
- Application ID (Primary Key)
- Student ID (Foreign Key)
- Application Type (Marksheet/Degree/Caution Money/No Dues)
- Status (Pending/Approved/Rejected)
- Submission Date
- Processing Date
- Delivery Method (Collect/Courier)
- Documents (Uploads)
- Remarks

**Department Dues:**
- Dues ID (Primary Key)
- Student ID (Foreign Key)
- Department Name
- Amount
- Status (Cleared/Pending/Paid)
- Last Updated Date

---

## System Features Covered in DFD

### Student Features:
1. **Authentication**: Login/Register with email verification
2. **Profile Management**: View and update personal information
3. **Library Services**: Issue/return books, view fines, make payments
4. **Academic Services**: 
   - Apply for Marksheet (with correction option)
   - Apply for Degree Certificate (with correction option)
   - Choose delivery method (self-collect or courier)
5. **Financial Services**:
   - View No Dues status (11 departments)
   - Pay pending dues online
   - Download No Dues Certificate
   - Apply for Caution Money withdrawal (with bank details)
6. **Grievance Portal**: Submit and track hygiene complaints
7. **Activity Tracking**: View all submitted applications and their status
8. **Notifications**: Receive email/SMS updates
9. **Suggestions**: Submit feedback about portal

### Admin Features:
1. **Multi-role Access**: 
   - Registrar Section
   - Library Section
   - Account Section
   - MBA Section (HOD)
   - MCA Section (HOD)
   - Super Admin (Director)
2. **Application Management**: Review, approve, or reject applications
3. **Student Records**: Search and view student information
4. **Department Dues**: Update and manage departmental dues
5. **Reports & Analytics**: Generate statistics and export reports
6. **Dashboard**: View pending applications and system metrics
7. **Document Verification**: Verify uploaded documents

---

## Security & Data Protection

### Authentication:
- Secure login with password encryption
- Role-based access control (RBAC)
- Session management with tokens
- Remember me functionality with secure cookies

### Data Protection:
- All student information encrypted
- Secure file upload for documents
- HTTPS for all communications
- Data backup and recovery
- Compliance with data protection regulations

### Authorization:
- Students can only access their own data
- Admins have department-specific permissions
- Super Admin has full system access
- Audit trail for all admin actions

---

## Integration Points

### Internal Systems:
- College Database (Student Records)
- Academic Management System
- Library Management System
- Accounts Department System

### External Systems:
- Payment Gateway (for online payments)
- Email Service (for notifications)
- SMS Gateway (for alerts)
- Document Storage (cloud-based)

---

## Application Flow Summary

### Student Application Workflow:
1. Student logs in → **Authentication Process**
2. Student selects service → **Service Selection**
3. System checks prerequisites (No Dues) → **Validation**
4. Student fills application form → **Data Entry**
5. Student uploads required documents → **Document Upload**
6. Student submits application → **Application Submission**
7. System stores application → **Database Update**
8. System sends notification → **Email/SMS**
9. Admin reviews application → **Admin Processing**
10. Admin approves/rejects → **Status Update**
11. Student receives notification → **Email/SMS**
12. Student downloads/collects document → **Completion**

### Admin Workflow:
1. Admin logs in → **Authentication**
2. Admin views pending applications → **Dashboard**
3. Admin selects application → **Review**
4. Admin verifies documents → **Verification**
5. Admin checks student eligibility → **Validation**
6. Admin takes action (Approve/Reject) → **Decision**
7. System updates application status → **Database Update**
8. System sends notification to student → **Email/SMS**
9. Admin generates reports → **Analytics**

---

## Conclusion

The MyHIMCS Student Services Portal is a comprehensive system that streamlines all student services into a single digital platform. The three-level DFD provides:

- **Level 0**: High-level view of the entire system with external entities
- **Level 1**: Breakdown into major functional modules
- **Level 2**: Detailed sub-processes for critical operations

This hierarchical approach ensures:
1. Complete coverage of all system functions
2. Clear understanding of data flows
3. Identification of data stores and their usage
4. Proper separation of concerns
5. Scalable architecture for future enhancements

The system is designed to be secure, efficient, and user-friendly for both students and administrative staff.

---

# ENTITY RELATIONSHIP (ER) DIAGRAM

## ER Diagram Overview

The Entity Relationship Diagram for HIMCS SWS (Single Window System) illustrates the database schema and relationships between various entities in the system. This diagram represents 14 core entities with their attributes and relationships.

---

## ENTITY DETAILS WITH ATTRIBUTES

### ENTITY 1: STUDENTS
**Primary Key:** student_id
**Description:** Stores all student information

**Attributes:**
- student_id (PK) - INT, Auto-increment
- college_id (UNIQUE) - VARCHAR(20)
- email (UNIQUE) - VARCHAR(100)
- password - VARCHAR(255), Encrypted
- name - VARCHAR(100)
- father_name - VARCHAR(100)
- date_of_birth - DATE
- gender - ENUM('Male', 'Female', 'Other')
- mobile - VARCHAR(15)
- address - TEXT
- roll_no - VARCHAR(20)
- course - ENUM('MCA', 'MBA')
- semester - VARCHAR(10)
- year - VARCHAR(10)
- batch - VARCHAR(20)
- admission_year - YEAR
- photo - VARCHAR(255), file path
- status - ENUM('Active', 'Inactive', 'Graduated')
- created_at - TIMESTAMP
- updated_at - TIMESTAMP

**Color Code:** BLUE (#3B82F6)

---

### ENTITY 2: ADMIN_USERS
**Primary Key:** admin_id
**Description:** Stores administrator and staff credentials

**Attributes:**
- admin_id (PK) - INT, Auto-increment
- username (UNIQUE) - VARCHAR(50)
- password - VARCHAR(255), Encrypted
- name - VARCHAR(100)
- email - VARCHAR(100)
- role - ENUM('registrar', 'library', 'accounts', 'mba', 'mca', 'super-admin')
- department - VARCHAR(50)
- designation - VARCHAR(50)
- status - ENUM('Active', 'Inactive')
- created_at - TIMESTAMP
- last_login - TIMESTAMP

**Color Code:** PURPLE (#8B5CF6)

---

### ENTITY 3: LIBRARY_BOOKS
**Primary Key:** book_id
**Description:** Master catalog of library books

**Attributes:**
- book_id (PK) - INT, Auto-increment
- isbn - VARCHAR(20)
- title - VARCHAR(255)
- author - VARCHAR(100)
- publisher - VARCHAR(100)
- category - VARCHAR(50)
- publication_year - YEAR
- total_copies - INT
- available_copies - INT
- rack_no - VARCHAR(20)
- status - ENUM('Available', 'Unavailable', 'Maintenance')
- added_date - DATE
- updated_at - TIMESTAMP

**Color Code:** GREEN (#10B981)

---

### ENTITY 4: LIBRARY_ISSUES
**Primary Key:** issue_id
**Foreign Keys:** student_id, book_id
**Description:** Tracks book issues and returns

**Attributes:**
- issue_id (PK) - INT, Auto-increment
- student_id (FK) - INT → STUDENTS
- book_id (FK) - INT → LIBRARY_BOOKS
- issue_date - DATE
- due_date - DATE
- return_date - DATE, NULL if not returned
- fine_amount - DECIMAL(10,2)
- fine_paid - BOOLEAN, Default FALSE
- status - ENUM('Issued', 'Returned', 'Overdue', 'Lost')
- reissue_count - INT, Default 0
- issued_by - INT (FK) → ADMIN_USERS
- returned_to - INT (FK) → ADMIN_USERS, NULL
- created_at - TIMESTAMP
- updated_at - TIMESTAMP

**Color Code:** TEAL (#14B8A6)

---

### ENTITY 5: NO_DUES_REQUESTS
**Primary Key:** request_id
**Foreign Keys:** student_id, multiple admin_users (for clearance)
**Description:** Manages No Dues certificate requests and approvals

**Attributes:**
- request_id (PK) - INT, Auto-increment
- student_id (FK) - INT → STUDENTS
- request_date - DATE

**Library Department:**
- library_status - ENUM('Pending', 'Cleared', 'Rejected')
- library_cleared_by (FK) - INT → ADMIN_USERS, NULL
- library_cleared_date - TIMESTAMP, NULL
- library_remarks - TEXT

**Accounts Department:**
- accounts_status - ENUM('Pending', 'Cleared', 'Rejected')
- accounts_cleared_by (FK) - INT → ADMIN_USERS, NULL
- accounts_cleared_date - TIMESTAMP, NULL
- accounts_remarks - TEXT

**HOD Department:**
- hod_status - ENUM('Pending', 'Cleared', 'Rejected')
- hod_cleared_by (FK) - INT → ADMIN_USERS, NULL
- hod_cleared_date - TIMESTAMP, NULL
- hod_remarks - TEXT

**Registrar Department:**
- registrar_status - ENUM('Pending', 'Cleared', 'Rejected')
- registrar_cleared_by (FK) - INT → ADMIN_USERS, NULL
- registrar_cleared_date - TIMESTAMP, NULL
- registrar_remarks - TEXT

**Overall Status:**
- overall_status - ENUM('Pending', 'Partially Cleared', 'Cleared', 'Rejected')
- certificate_no - VARCHAR(50), UNIQUE
- issued_date - DATE, NULL
- created_at - TIMESTAMP
- updated_at - TIMESTAMP

**Color Code:** AMBER (#F59E0B)

---

### ENTITY 6: MARKSHEET_APPLICATIONS
**Primary Key:** application_id
**Foreign Keys:** student_id, hod_approved_by, registrar_approved_by
**Description:** Manages marksheet certificate applications

**Attributes:**
- application_id (PK) - INT, Auto-increment
- student_id (FK) - INT → STUDENTS
- application_type - ENUM('Original', 'Duplicate', 'Consolidated', 'Migration')
- semester - VARCHAR(10)
- year - VARCHAR(10)
- number_of_copies - INT, Default 1
- delivery_mode - ENUM('Physical', 'Digital', 'Both')
- delivery_address - TEXT, NULL
- reason - TEXT
- documents_uploaded - JSON, array of file paths
- fee_amount - DECIMAL(10,2)
- fee_paid - BOOLEAN, Default FALSE
- payment_reference - VARCHAR(100), NULL
- no_dues_verified - BOOLEAN, Default FALSE

**HOD Approval:**
- hod_status - ENUM('Pending', 'Approved', 'Rejected')
- hod_remarks - TEXT, NULL
- hod_approved_by (FK) - INT → ADMIN_USERS, NULL
- hod_approved_date - TIMESTAMP, NULL

**Registrar Approval:**
- registrar_status - ENUM('Pending', 'Approved', 'Rejected')
- registrar_remarks - TEXT, NULL
- registrar_approved_by (FK) - INT → ADMIN_USERS, NULL
- registrar_approved_date - TIMESTAMP, NULL

**Overall Status:**
- overall_status - ENUM('Pending', 'Processing', 'Approved', 'Rejected', 'Dispatched', 'Completed')
- dispatch_date - DATE, NULL
- tracking_number - VARCHAR(50), NULL
- application_date - TIMESTAMP
- updated_at - TIMESTAMP

**Color Code:** INDIGO (#6366F1)

---

### ENTITY 7: DEGREE_APPLICATIONS
**Primary Key:** application_id
**Foreign Keys:** student_id, hod_approved_by, registrar_approved_by, director_approved_by
**Description:** Manages degree certificate applications

**Attributes:**
- application_id (PK) - INT, Auto-increment
- student_id (FK) - INT → STUDENTS
- degree_type - ENUM('Provisional', 'Final', 'Transcript')
- convocation_attendance - BOOLEAN, Default FALSE
- name_on_degree - VARCHAR(100)
- delivery_mode - ENUM('Physical', 'Digital', 'Both')
- delivery_address - TEXT, NULL
- documents_uploaded - JSON, array of file paths
- no_dues_certificate_no - VARCHAR(50) (FK) → NO_DUES_REQUESTS
- fee_amount - DECIMAL(10,2)
- fee_paid - BOOLEAN, Default FALSE
- payment_reference - VARCHAR(100), NULL
- convocation_fee_paid - BOOLEAN, Default FALSE
- convocation_payment_ref - VARCHAR(100), NULL

**HOD Approval:**
- hod_status - ENUM('Pending', 'Recommended', 'Not Recommended')
- hod_remarks - TEXT, NULL
- hod_approved_by (FK) - INT → ADMIN_USERS, NULL
- hod_approved_date - TIMESTAMP, NULL

**Registrar Verification:**
- registrar_status - ENUM('Pending', 'Verified', 'Rejected')
- registrar_remarks - TEXT, NULL
- registrar_approved_by (FK) - INT → ADMIN_USERS, NULL
- registrar_approved_date - TIMESTAMP, NULL

**Director Approval:**
- director_status - ENUM('Pending', 'Approved', 'Rejected')
- director_remarks - TEXT, NULL
- director_approved_by (FK) - INT → ADMIN_USERS, NULL
- director_approved_date - TIMESTAMP, NULL

**University Processing:**
- university_status - ENUM('Pending', 'Sent to University', 'Approved', 'Issued')
- degree_number - VARCHAR(50), UNIQUE, NULL
- issue_date - DATE, NULL

**Overall Status:**
- overall_status - ENUM('Pending', 'Processing', 'Approved', 'Rejected', 'Issued', 'Dispatched', 'Completed')
- dispatch_date - DATE, NULL
- tracking_number - VARCHAR(50), NULL
- application_date - TIMESTAMP
- updated_at - TIMESTAMP

**Color Code:** VIOLET (#7C3AED)

---

### ENTITY 8: CAUTION_MONEY_DEPOSITS
**Primary Key:** deposit_id
**Foreign Keys:** student_id
**Description:** Tracks caution money deposits made by students

**Attributes:**
- deposit_id (PK) - INT, Auto-increment
- student_id (FK) - INT → STUDENTS
- amount_deposited - DECIMAL(10,2)
- deposit_date - DATE
- receipt_no - VARCHAR(50), UNIQUE
- payment_method - ENUM('Cash', 'Cheque', 'DD', 'Online')
- transaction_reference - VARCHAR(100), NULL
- status - ENUM('Active', 'Refund Requested', 'Refunded', 'Forfeited')
- created_at - TIMESTAMP
- updated_at - TIMESTAMP

**Color Code:** ORANGE (#F97316)

---

### ENTITY 9: CAUTION_MONEY_REFUNDS
**Primary Key:** refund_id
**Foreign Keys:** student_id, deposit_id, accounts_verified_by, approved_by
**Description:** Manages caution money refund requests

**Attributes:**
- refund_id (PK) - INT, Auto-increment
- student_id (FK) - INT → STUDENTS
- deposit_id (FK) - INT → CAUTION_MONEY_DEPOSITS
- no_dues_certificate_no - VARCHAR(50) (FK) → NO_DUES_REQUESTS

**Bank Details:**
- bank_account_name - VARCHAR(100)
- bank_account_number - VARCHAR(30)
- confirm_account_number - VARCHAR(30)
- bank_name - VARCHAR(100)
- branch_name - VARCHAR(100)
- ifsc_code - VARCHAR(11)
- account_type - ENUM('Savings', 'Current')
- documents_uploaded - JSON, array of file paths

**Refund Calculation:**
- amount_deposited - DECIMAL(10,2)
- deductions - DECIMAL(10,2), Default 0.00
- deduction_details - TEXT, NULL
- refundable_amount - DECIMAL(10,2)

**Accounts Verification:**
- accounts_status - ENUM('Pending', 'Verified', 'Rejected')
- accounts_remarks - TEXT, NULL
- accounts_verified_by (FK) - INT → ADMIN_USERS, NULL
- accounts_verified_date - TIMESTAMP, NULL

**Final Approval:**
- approval_status - ENUM('Pending', 'Approved', 'Rejected')
- approved_by (FK) - INT → ADMIN_USERS, NULL
- approved_date - TIMESTAMP, NULL

**Refund Processing:**
- refund_processed - BOOLEAN, Default FALSE
- transaction_reference - VARCHAR(100), NULL
- transaction_date - DATE, NULL
- refund_mode - ENUM('NEFT', 'RTGS', 'Cheque'), NULL

**Overall Status:**
- overall_status - ENUM('Pending', 'Verified', 'Approved', 'Processing', 'Completed', 'Rejected')
- application_date - TIMESTAMP
- updated_at - TIMESTAMP

**Color Code:** ROSE (#F43F5E)

---

### ENTITY 10: GRIEVANCES
**Primary Key:** grievance_id
**Foreign Keys:** student_id, assigned_to_admin, resolved_by
**Description:** Manages student grievances and complaints

**Attributes:**
- grievance_id (PK) - INT, Auto-increment
- ticket_number - VARCHAR(20), UNIQUE
- student_id (FK) - INT → STUDENTS, NULL if anonymous
- is_anonymous - BOOLEAN, Default FALSE

**Grievance Details:**
- category - ENUM('Infrastructure', 'Academic', 'Administrative', 'Safety', 'Hostel', 'Other')
- subject - VARCHAR(255)
- description - TEXT
- location - VARCHAR(100), NULL
- incident_date - DATE, NULL
- priority - ENUM('Low', 'Medium', 'High', 'Critical')
- documents_uploaded - JSON, array of file paths

**Assignment:**
- assigned_to_department - VARCHAR(50), NULL
- assigned_to_admin (FK) - INT → ADMIN_USERS, NULL
- assigned_date - TIMESTAMP, NULL

**Status Tracking:**
- status - ENUM('Submitted', 'Assigned', 'In Progress', 'Resolved', 'Closed', 'Reopened')
- resolution_description - TEXT, NULL
- resolved_by (FK) - INT → ADMIN_USERS, NULL
- resolved_date - TIMESTAMP, NULL
- closure_date - TIMESTAMP, NULL

**Feedback:**
- feedback_rating - INT, NULL (1 to 5)
- feedback_comments - TEXT, NULL
- feedback_date - TIMESTAMP, NULL

**Escalation:**
- escalated - BOOLEAN, Default FALSE
- escalated_date - TIMESTAMP, NULL
- escalated_to (FK) - INT → ADMIN_USERS, NULL

**Timestamps:**
- submission_date - TIMESTAMP
- updated_at - TIMESTAMP

**Color Code:** RED (#EF4444)

---

### ENTITY 11: PAYMENTS
**Primary Key:** payment_id
**Foreign Keys:** student_id
**Description:** Tracks all payment transactions

**Attributes:**
- payment_id (PK) - INT, Auto-increment
- student_id (FK) - INT → STUDENTS
- payment_type - ENUM('Library Fine', 'Application Fee', 'Caution Money', 'Course Fee', 'Hostel Fee', 'Exam Fee', 'Other')
- reference_type - VARCHAR(50) (e.g., 'library_issue', 'marksheet_app')
- reference_id - INT (links to specific record)
- amount - DECIMAL(10,2)
- payment_method - ENUM('Online', 'Cash', 'Cheque', 'DD', 'NEFT', 'RTGS', 'UPI')
- payment_reference - VARCHAR(100), NULL
- transaction_id - VARCHAR(100), UNIQUE, NULL
- bank_name - VARCHAR(100), NULL
- payment_date - TIMESTAMP
- status - ENUM('Success', 'Failed', 'Pending', 'Refunded')
- receipt_generated - BOOLEAN, Default FALSE
- receipt_path - VARCHAR(255), NULL
- processed_by (FK) - INT → ADMIN_USERS, NULL
- remarks - TEXT, NULL
- created_at - TIMESTAMP

**Color Code:** EMERALD (#10B981)

---

### ENTITY 12: NOTIFICATIONS
**Primary Key:** notification_id
**Foreign Keys:** student_id or admin_id (polymorphic)
**Description:** Manages all system notifications

**Attributes:**
- notification_id (PK) - INT, Auto-increment
- user_id - INT (can be student_id or admin_id)
- user_type - ENUM('Student', 'Admin')
- notification_type - ENUM('Application Update', 'Payment', 'Grievance', 'System', 'Alert', 'Reminder')
- title - VARCHAR(255)
- message - TEXT
- reference_type - VARCHAR(50), NULL
- reference_id - INT, NULL
- priority - ENUM('Low', 'Medium', 'High', 'Urgent')
- is_read - BOOLEAN, Default FALSE
- sent_via - JSON, array ('Email', 'SMS', 'Push', 'In-App')
- email_sent - BOOLEAN, Default FALSE
- sms_sent - BOOLEAN, Default FALSE
- created_at - TIMESTAMP
- read_at - TIMESTAMP, NULL

**Color Code:** CYAN (#06B6D4)

---

### ENTITY 13: ACTIVITY_LOGS
**Primary Key:** log_id
**Foreign Keys:** student_id or admin_id (polymorphic)
**Description:** Audit trail of all system activities

**Attributes:**
- log_id (PK) - INT, Auto-increment
- user_id - INT (can be student_id or admin_id)
- user_type - ENUM('Student', 'Admin', 'System')
- activity_type - VARCHAR(100) (e.g., 'LOGIN', 'APPLICATION_SUBMIT', 'APPROVAL')
- activity_description - TEXT
- reference_type - VARCHAR(50), NULL
- reference_id - INT, NULL
- ip_address - VARCHAR(45)
- user_agent - VARCHAR(255), NULL
- session_id - VARCHAR(100), NULL
- status - ENUM('Success', 'Failed', 'Error')
- timestamp - TIMESTAMP

**Color Code:** SLATE (#64748B)

---

### ENTITY 14: SYSTEM_SETTINGS
**Primary Key:** setting_id
**Foreign Keys:** updated_by
**Description:** Stores system configuration and settings

**Attributes:**
- setting_id (PK) - INT, Auto-increment
- setting_key - VARCHAR(100), UNIQUE
- setting_value - TEXT
- setting_type - VARCHAR(50) (e.g., 'STRING', 'NUMBER', 'BOOLEAN', 'JSON')
- category - VARCHAR(50) (e.g., 'GENERAL', 'PAYMENT', 'NOTIFICATION', 'SECURITY')
- description - TEXT
- is_public - BOOLEAN, Default FALSE
- updated_by (FK) - INT → ADMIN_USERS
- updated_at - TIMESTAMP

**Color Code:** GRAY (#6B7280)

---

## RELATIONSHIPS AND CARDINALITY

### 1. STUDENTS ↔ LIBRARY_ISSUES
**Relationship:** "Borrows/Issues"
**Type:** One-to-Many (1:M)
**Description:** One student can issue multiple books
- students.student_id (1) → library_issues.student_id (M)
**Participation:** Partial (Student may not have issued any books)

---

### 2. LIBRARY_BOOKS ↔ LIBRARY_ISSUES
**Relationship:** "Is Issued In"
**Type:** One-to-Many (1:M)
**Description:** One book can be issued multiple times (over time)
- library_books.book_id (1) → library_issues.book_id (M)
**Participation:** Partial (Books may not be currently issued)

---

### 3. STUDENTS ↔ NO_DUES_REQUESTS
**Relationship:** "Applies For"
**Type:** One-to-Many (1:M)
**Description:** One student can have multiple No Dues requests
- students.student_id (1) → no_dues_requests.student_id (M)
**Participation:** Partial (Not all students apply for No Dues)

---

### 4. ADMIN_USERS ↔ NO_DUES_REQUESTS
**Relationship:** "Clears/Approves"
**Type:** One-to-Many (Multiple) (1:M for each department)
**Description:** Admin users clear No Dues for different departments
- admin_users.admin_id (1) → no_dues_requests.library_cleared_by (M)
- admin_users.admin_id (1) → no_dues_requests.accounts_cleared_by (M)
- admin_users.admin_id (1) → no_dues_requests.hod_cleared_by (M)
- admin_users.admin_id (1) → no_dues_requests.registrar_cleared_by (M)
**Participation:** Partial (Admins may not have cleared any dues)

---

### 5. STUDENTS ↔ MARKSHEET_APPLICATIONS
**Relationship:** "Submits"
**Type:** One-to-Many (1:M)
**Description:** One student can submit multiple marksheet applications
- students.student_id (1) → marksheet_applications.student_id (M)
**Participation:** Partial (Not all students apply for marksheets)

---

### 6. ADMIN_USERS ↔ MARKSHEET_APPLICATIONS
**Relationship:** "Approves"
**Type:** One-to-Many (Multiple) (1:M)
**Description:** Admin users approve marksheet applications
- admin_users.admin_id (1) → marksheet_applications.hod_approved_by (M)
- admin_users.admin_id (1) → marksheet_applications.registrar_approved_by (M)
**Participation:** Partial

---

### 7. STUDENTS ↔ DEGREE_APPLICATIONS
**Relationship:** "Applies For"
**Type:** One-to-Many (1:M)
**Description:** One student can apply for multiple degree certificates
- students.student_id (1) → degree_applications.student_id (M)
**Participation:** Partial

---

### 8. ADMIN_USERS ↔ DEGREE_APPLICATIONS
**Relationship:** "Processes"
**Type:** One-to-Many (Multiple) (1:M)
**Description:** Admin users process degree applications at different levels
- admin_users.admin_id (1) → degree_applications.hod_approved_by (M)
- admin_users.admin_id (1) → degree_applications.registrar_approved_by (M)
- admin_users.admin_id (1) → degree_applications.director_approved_by (M)
**Participation:** Partial

---

### 9. NO_DUES_REQUESTS ↔ DEGREE_APPLICATIONS
**Relationship:** "Required For"
**Type:** One-to-One (1:1)
**Description:** Degree application requires valid No Dues certificate
- no_dues_requests.certificate_no (1) → degree_applications.no_dues_certificate_no (1)
**Participation:** Mandatory for Degree Applications

---

### 10. STUDENTS ↔ CAUTION_MONEY_DEPOSITS
**Relationship:** "Deposits"
**Type:** One-to-Many (1:M)
**Description:** One student can have multiple caution money deposits
- students.student_id (1) → caution_money_deposits.student_id (M)
**Participation:** Mandatory (All students must deposit caution money)

---

### 11. STUDENTS ↔ CAUTION_MONEY_REFUNDS
**Relationship:** "Requests Refund"
**Type:** One-to-Many (1:M)
**Description:** One student can request multiple refunds
- students.student_id (1) → caution_money_refunds.student_id (M)
**Participation:** Partial

---

### 12. CAUTION_MONEY_DEPOSITS ↔ CAUTION_MONEY_REFUNDS
**Relationship:** "Refunded Through"
**Type:** One-to-One (1:1)
**Description:** Each deposit has one refund request
- caution_money_deposits.deposit_id (1) → caution_money_refunds.deposit_id (1)
**Participation:** Partial (Not all deposits are refunded)

---

### 13. NO_DUES_REQUESTS ↔ CAUTION_MONEY_REFUNDS
**Relationship:** "Required For"
**Type:** One-to-One (1:1)
**Description:** Refund requires valid No Dues certificate
- no_dues_requests.certificate_no (1) → caution_money_refunds.no_dues_certificate_no (1)
**Participation:** Mandatory for Refunds

---

### 14. ADMIN_USERS ↔ CAUTION_MONEY_REFUNDS
**Relationship:** "Processes"
**Type:** One-to-Many (Multiple) (1:M)
**Description:** Admin users verify and approve refunds
- admin_users.admin_id (1) → caution_money_refunds.accounts_verified_by (M)
- admin_users.admin_id (1) → caution_money_refunds.approved_by (M)
**Participation:** Partial

---

### 15. STUDENTS ↔ GRIEVANCES
**Relationship:** "Submits"
**Type:** One-to-Many (1:M)
**Description:** One student can submit multiple grievances
- students.student_id (1) → grievances.student_id (M)
**Participation:** Partial (NULL for anonymous grievances)

---

### 16. ADMIN_USERS ↔ GRIEVANCES
**Relationship:** "Handles/Resolves"
**Type:** One-to-Many (Multiple) (1:M)
**Description:** Admin users are assigned and resolve grievances
- admin_users.admin_id (1) → grievances.assigned_to_admin (M)
- admin_users.admin_id (1) → grievances.resolved_by (M)
- admin_users.admin_id (1) → grievances.escalated_to (M)
**Participation:** Partial

---

### 17. STUDENTS ↔ PAYMENTS
**Relationship:** "Makes"
**Type:** One-to-Many (1:M)
**Description:** One student makes multiple payments
- students.student_id (1) → payments.student_id (M)
**Participation:** Partial

---

### 18. ADMIN_USERS ↔ PAYMENTS
**Relationship:** "Processes"
**Type:** One-to-Many (1:M)
**Description:** Admin users process and verify payments
- admin_users.admin_id (1) → payments.processed_by (M)
**Participation:** Partial

---

### 19. STUDENTS/ADMIN_USERS ↔ NOTIFICATIONS
**Relationship:** "Receives"
**Type:** One-to-Many (1:M) - Polymorphic
**Description:** Users receive multiple notifications
- students.student_id (1) → notifications.user_id (M) [when user_type='Student']
- admin_users.admin_id (1) → notifications.user_id (M) [when user_type='Admin']
**Participation:** Partial

---

### 20. STUDENTS/ADMIN_USERS ↔ ACTIVITY_LOGS
**Relationship:** "Performs"
**Type:** One-to-Many (1:M) - Polymorphic
**Description:** Users have multiple activity logs
- students.student_id (1) → activity_logs.user_id (M) [when user_type='Student']
- admin_users.admin_id (1) → activity_logs.user_id (M) [when user_type='Admin']
**Participation:** Mandatory (All actions are logged)

---

### 21. ADMIN_USERS ↔ SYSTEM_SETTINGS
**Relationship:** "Updates"
**Type:** One-to-Many (1:M)
**Description:** Admin users update system settings
- admin_users.admin_id (1) → system_settings.updated_by (M)
**Participation:** Partial

---

### 22. ADMIN_USERS ↔ LIBRARY_ISSUES
**Relationship:** "Issues/Returns Books"
**Type:** One-to-Many (Multiple) (1:M)
**Description:** Library staff issue and accept book returns
- admin_users.admin_id (1) → library_issues.issued_by (M)
- admin_users.admin_id (1) → library_issues.returned_to (M)
**Participation:** Partial

---

## ER DIAGRAM VISUAL REPRESENTATION

### LEGEND:
- **Rectangle** = Entity
- **Oval** = Attribute
- **Diamond** = Relationship
- **Line with 1** = One
- **Line with M** = Many
- **Bold Underline** = Primary Key
- **Dashed Underline** = Foreign Key

### COLOR CODING FOR ENTITIES:

| Entity | Color | Hex Code |
|--------|-------|----------|
| STUDENTS | Blue | #3B82F6 |
| ADMIN_USERS | Purple | #8B5CF6 |
| LIBRARY_BOOKS | Green | #10B981 |
| LIBRARY_ISSUES | Teal | #14B8A6 |
| NO_DUES_REQUESTS | Amber | #F59E0B |
| MARKSHEET_APPLICATIONS | Indigo | #6366F1 |
| DEGREE_APPLICATIONS | Violet | #7C3AED |
| CAUTION_MONEY_DEPOSITS | Orange | #F97316 |
| CAUTION_MONEY_REFUNDS | Rose | #F43F5E |
| GRIEVANCES | Red | #EF4444 |
| PAYMENTS | Emerald | #10B981 |
| NOTIFICATIONS | Cyan | #06B6D4 |
| ACTIVITY_LOGS | Slate | #64748B |
| SYSTEM_SETTINGS | Gray | #6B7280 |

---

## COMPLETE ER DIAGRAM STRUCTURE

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                     HIMCS SWS - ER DIAGRAM                                  │
│                  (Entity Relationship Diagram)                              │
└─────────────────────────────────────────────────────────────────────────────┘

CORE ENTITIES AND RELATIONSHIPS:

[STUDENTS] (Blue)
    │
    ├─── (1:M) Issues Books ────> [LIBRARY_ISSUES] (Teal)
    │                                      │
    │                                      └─── (M:1) Contains ────> [LIBRARY_BOOKS] (Green)
    │
    ├─── (1:M) Applies For ────> [NO_DUES_REQUESTS] (Amber)
    │                                      │
    │                                      ├─── (M:1) Cleared By ────> [ADMIN_USERS] (Purple)
    │                                      │         (library_cleared_by)
    │                                      │
    │                                      ├─── (M:1) Cleared By ────> [ADMIN_USERS] (Purple)
    │                                      │         (accounts_cleared_by)
    │                                      │
    │                                      ├─── (M:1) Cleared By ────> [ADMIN_USERS] (Purple)
    │                                      │         (hod_cleared_by)
    │                                      │
    │                                      └─── (M:1) Cleared By ────> [ADMIN_USERS] (Purple)
    │                                                (registrar_cleared_by)
    │
    ├─── (1:M) Submits ────> [MARKSHEET_APPLICATIONS] (Indigo)
    │                                      │
    │                                      ├─── (M:1) Approved By HOD ────> [ADMIN_USERS] (Purple)
    │                                      │
    │                                      └─── (M:1) Approved By Registrar ────> [ADMIN_USERS] (Purple)
    │
    ├─── (1:M) Applies For ────> [DEGREE_APPLICATIONS] (Violet)
    │                                      │
    │                                      ├─── (1:1) Requires ────> [NO_DUES_REQUESTS] (Amber)
    │                                      │
    │                                      ├─── (M:1) Recommended By HOD ────> [ADMIN_USERS] (Purple)
    │                                      │
    │                                      ├─── (M:1) Verified By Registrar ────> [ADMIN_USERS] (Purple)
    │                                      │
    │                                      └─── (M:1) Approved By Director ────> [ADMIN_USERS] (Purple)
    │
    ├─── (1:M) Deposits ────> [CAUTION_MONEY_DEPOSITS] (Orange)
    │                                      │
    │                                      └─── (1:1) Refunded Through ────> [CAUTION_MONEY_REFUNDS] (Rose)
    │                                                                                  │
    │                                                                                  ├─── (1:1) Requires ────> [NO_DUES_REQUESTS] (Amber)
    │                                                                                  │
    │                                                                                  ├─── (M:1) Verified By ────> [ADMIN_USERS] (Purple)
    │                                                                                  │
    │                                                                                  └─── (M:1) Approved By ────> [ADMIN_USERS] (Purple)
    │
    ├─── (1:M) Requests Refund ────> [CAUTION_MONEY_REFUNDS] (Rose)
    │
    ├─── (1:M) Submits ────> [GRIEVANCES] (Red)
    │                              │
    │                              ├─── (M:1) Assigned To ────> [ADMIN_USERS] (Purple)
    │                              │
    │                              ├─── (M:1) Resolved By ────> [ADMIN_USERS] (Purple)
    │                              │
    │                              └─── (M:1) Escalated To ────> [ADMIN_USERS] (Purple)
    │
    ├─── (1:M) Makes ────> [PAYMENTS] (Emerald)
    │                              │
    │                              └─── (M:1) Processed By ────> [ADMIN_USERS] (Purple)
    │
    ├─── (1:M) Receives ────> [NOTIFICATIONS] (Cyan)
    │                              [Polymorphic: user_type = 'Student']
    │
    └─── (1:M) Performs ────> [ACTIVITY_LOGS] (Slate)
                                   [Polymorphic: user_type = 'Student']


[ADMIN_USERS] (Purple)
    │
    ├─── (1:M) Issues Books ────> [LIBRARY_ISSUES] (Teal)
    │                                   (issued_by, returned_to)
    │
    ├─── (1:M) Clears Dues ────> [NO_DUES_REQUESTS] (Amber)
    │
    ├─── (1:M) Approves ────> [MARKSHEET_APPLICATIONS] (Indigo)
    │
    ├─── (1:M) Processes ────> [DEGREE_APPLICATIONS] (Violet)
    │
    ├─── (1:M) Verifies ────> [CAUTION_MONEY_REFUNDS] (Rose)
    │
    ├─── (1:M) Handles ────> [GRIEVANCES] (Red)
    │
    ├─── (1:M) Processes ────> [PAYMENTS] (Emerald)
    │
    ├─── (1:M) Receives ────> [NOTIFICATIONS] (Cyan)
    │                              [Polymorphic: user_type = 'Admin']
    │
    ├─── (1:M) Performs ────> [ACTIVITY_LOGS] (Slate)
    │                              [Polymorphic: user_type = 'Admin']
    │
    └─── (1:M) Updates ────> [SYSTEM_SETTINGS] (Gray)

```

---

## ENTITY GROUPING AND MODULES

### AUTHENTICATION MODULE:
- STUDENTS
- ADMIN_USERS
- ACTIVITY_LOGS

### LIBRARY MODULE:
- LIBRARY_BOOKS
- LIBRARY_ISSUES
- PAYMENTS (for fines)

### NO DUES MODULE:
- NO_DUES_REQUESTS
- ADMIN_USERS (for multi-department clearance)

### ACADEMIC DOCUMENTS MODULE:
- MARKSHEET_APPLICATIONS
- DEGREE_APPLICATIONS
- NO_DUES_REQUESTS (prerequisite)
- ADMIN_USERS (for approvals)

### FINANCIAL MODULE:
- CAUTION_MONEY_DEPOSITS
- CAUTION_MONEY_REFUNDS
- PAYMENTS
- NO_DUES_REQUESTS (prerequisite)

### GRIEVANCE MODULE:
- GRIEVANCES
- ADMIN_USERS (for resolution)

### NOTIFICATION MODULE:
- NOTIFICATIONS
- STUDENTS
- ADMIN_USERS

### AUDIT MODULE:
- ACTIVITY_LOGS
- STUDENTS
- ADMIN_USERS

### CONFIGURATION MODULE:
- SYSTEM_SETTINGS
- ADMIN_USERS

---

## KEY CONSTRAINTS AND RULES

### REFERENTIAL INTEGRITY:
1. All foreign keys must reference valid primary keys
2. Cascade delete for dependent records where appropriate
3. Set NULL on delete for optional references

### BUSINESS RULES:
1. **No Dues Prerequisite**: 
   - Degree applications require valid No Dues certificate
   - Caution Money refunds require valid No Dues certificate
   - All four departments (Library, Accounts, HOD, Registrar) must clear

2. **Library Rules**:
   - Maximum 3 active book issues per student
   - Books must be returned before issue_date + 14 days
   - Fine calculation: Rs. 5/day for regular, Rs. 10/day for reference books

3. **Application Processing**:
   - HOD approval required before Registrar
   - Registrar approval required before Director (for Degree)
   - Payment must be completed before processing

4. **Caution Money**:
   - Refund only possible after No Dues clearance
   - Deductions must be documented
   - One active deposit per student

5. **Grievance Priority**:
   - Critical: 24 hours resolution
   - High: 2-3 days
   - Medium: 5-7 days
   - Low: 10-15 days

### DATA INTEGRITY:
1. Email and college_id must be unique for students
2. Username must be unique for admin users
3. Transaction IDs must be unique
4. Certificate numbers must be unique
5. Ticket numbers must be unique for grievances

---

## NORMALIZATION STATUS

The database schema is normalized to **Third Normal Form (3NF)**:

### 1NF (First Normal Form):
✓ All attributes contain atomic values
✓ No repeating groups
✓ Each row is unique (Primary Keys defined)

### 2NF (Second Normal Form):
✓ In 1NF
✓ All non-key attributes fully dependent on Primary Key
✓ No partial dependencies

### 3NF (Third Normal Form):
✓ In 2NF
✓ No transitive dependencies
✓ All non-key attributes depend only on Primary Key

**Denormalization Applied For**:
- `refundable_amount` in CAUTION_MONEY_REFUNDS (calculated field for performance)
- `overall_status` in applications (derived from department statuses for quick querying)

---

## INDEXES RECOMMENDED

### Primary Indexes (Automatically Created):
- All Primary Keys (student_id, admin_id, application_id, etc.)

### Foreign Key Indexes:
- All foreign key columns for faster joins

### Additional Indexes for Performance:
```sql
-- Student searches
CREATE INDEX idx_students_college_id ON students(college_id);
CREATE INDEX idx_students_email ON students(email);
CREATE INDEX idx_students_course ON students(course);

-- Application searches
CREATE INDEX idx_marksheet_status ON marksheet_applications(overall_status);
CREATE INDEX idx_degree_status ON degree_applications(overall_status);
CREATE INDEX idx_nodues_status ON no_dues_requests(overall_status);

-- Date-based searches
CREATE INDEX idx_applications_date ON marksheet_applications(application_date);
CREATE INDEX idx_grievance_date ON grievances(submission_date);
CREATE INDEX idx_payment_date ON payments(payment_date);

-- Composite indexes
CREATE INDEX idx_library_student_status ON library_issues(student_id, status);
CREATE INDEX idx_notification_user ON notifications(user_id, user_type, is_read);
```

---

## STORAGE ESTIMATES

### Approximate Record Sizes:

| Table | Avg Size/Record | Expected Records | Total Storage |
|-------|-----------------|------------------|---------------|
| STUDENTS | 1 KB | 2,000 | 2 MB |
| ADMIN_USERS | 512 B | 50 | 25 KB |
| LIBRARY_BOOKS | 512 B | 10,000 | 5 MB |
| LIBRARY_ISSUES | 256 B | 5,000/year | 1.25 MB/year |
| NO_DUES_REQUESTS | 1 KB | 500/year | 500 KB/year |
| MARKSHEET_APPLICATIONS | 2 KB | 1,000/year | 2 MB/year |
| DEGREE_APPLICATIONS | 2 KB | 400/year | 800 KB/year |
| CAUTION_MONEY_DEPOSITS | 256 B | 2,000 | 512 KB |
| CAUTION_MONEY_REFUNDS | 1 KB | 400/year | 400 KB/year |
| GRIEVANCES | 1 KB | 500/year | 500 KB/year |
| PAYMENTS | 512 B | 5,000/year | 2.5 MB/year |
| NOTIFICATIONS | 512 B | 50,000/year | 25 MB/year |
| ACTIVITY_LOGS | 512 B | 100,000/year | 50 MB/year |
| SYSTEM_SETTINGS | 512 B | 100 | 50 KB |

**Total Estimated Storage (Per Year)**: ~90 MB (excluding file uploads)
**File Storage** (Documents, Photos): ~1-2 GB/year

---

## BACKUP AND RECOVERY STRATEGY

### Backup Schedule:
- **Full Backup**: Daily at 2:00 AM
- **Incremental Backup**: Every 6 hours
- **Transaction Log Backup**: Every hour
- **Retention**: 30 days

### Critical Tables (Priority Backup):
1. STUDENTS
2. MARKSHEET_APPLICATIONS
3. DEGREE_APPLICATIONS
4. PAYMENTS
5. NO_DUES_REQUESTS

---

## CONCLUSION

This Entity Relationship Diagram provides a comprehensive view of the HIMCS SWS database schema, covering:

1. **14 Core Entities** with complete attribute definitions
2. **22 Major Relationships** with proper cardinality
3. **Color-coded visualization** for easy understanding
4. **Normalization** up to 3NF for data integrity
5. **Business rules** and constraints
6. **Performance optimization** through indexing
7. **Storage and backup** considerations

The ER diagram is designed to support all functional requirements of the HIMCS Single Window System while maintaining data integrity, security, and performance.

---

**Document Last Updated**: November 26, 2025
**Version**: 2.0 (Added Complete ER Diagram)