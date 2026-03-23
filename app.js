/**
 * ProLMS Premium — client-side demo LMS
 * ⚠️ Passwords in localStorage are for learning/demo only — never use in production.
 */

const STORAGE_USERS = 'prolmsUsers';

let users = JSON.parse(localStorage.getItem(STORAGE_USERS)) || [];

/**
 * 21 courses — each includes youtubeLessons: { title, id } (YouTube video ID only)
 * Replace `id` with IDs from any video URL: youtube.com/watch?v=THIS_PART
 */
let courses = [
    {
        id: 1,
        title: 'HTML5 & CSS3 Complete',
        teacher: 'Junaid Expert',
        progress: 75,
        materials: ['HTML5-Guide.pdf', 'CSS3-Cheatsheet.pdf', 'Responsive-Design.mp4'],
        youtubeLessons: [
            { title: 'HTML Crash Course For Absolute Beginners', id: 'pQN-pnXPaR8' },
            { title: 'CSS Crash Course', id: '1Rs2ND1ryYc' },
            { title: 'Responsive Web Design Intro', id: 'srvUrASNj0s' },
        ],
        assignments: [{ title: 'Responsive Portfolio', due: '2026-03-25', submitted: false }],
        quizzes: [{ title: 'HTML/CSS Fundamentals', questions: 20, score: 88 }],
        exams: [{ title: 'Web Layout Exam', questions: 30, duration: '45min' }],
        projects: [{ title: 'Multi-page Website', due: '2026-04-05', submitted: false }],
    },
    {
        id: 2,
        title: 'JavaScript ES6+ Modern',
        teacher: 'CodeMaster Junaid',
        progress: 60,
        materials: ['ES6-Features.pdf', 'Async-JS.mp4', 'DOM-Manipulation.pdf'],
        youtubeLessons: [
            { title: 'JavaScript Crash Course', id: 'hdI2bqOjy3c' },
            { title: 'Async JavaScript', id: '_YxoOh0oPu0' },
            { title: 'DOM Manipulation', id: '0ik6X4DJKCc' },
        ],
        assignments: [{ title: 'Interactive Todo App', due: '2026-03-28', submitted: true }],
        quizzes: [{ title: 'JS Core Concepts', questions: 25, score: 92 }],
        exams: [{ title: 'JavaScript Midterm', questions: 40, duration: '60min' }],
        projects: [{ title: 'Weather Dashboard', due: '2026-04-10', submitted: false }],
    },
    {
        id: 3,
        title: 'React.js - Hooks & Context',
        teacher: 'React Pro',
        progress: 45,
        materials: ['React-Hooks.pdf', 'Context-API.mp4', 'State-Management.pdf'],
        youtubeLessons: [
            { title: 'React JS Crash Course', id: 'w7ejDZLYHXs' },
            { title: 'React Hooks Tutorial', id: 'TNhaISOUy6Q' },
            { title: 'Context API', id: '35lXWvCuM8o' },
        ],
        assignments: [{ title: 'React Counter App', due: '2026-04-01', submitted: false }],
        quizzes: [{ title: 'React Fundamentals', questions: 15, score: null }],
        exams: [{ title: 'React Components Exam', questions: 25, duration: '40min' }],
        projects: [{ title: 'E-commerce Cart', due: '2026-04-20', submitted: false }],
    },
    {
        id: 4,
        title: 'Node.js & Express API',
        teacher: 'Backend Guru',
        progress: 30,
        materials: ['Node-Basics.pdf', 'Express-Routes.mp4', 'REST-API.pdf'],
        youtubeLessons: [
            { title: 'Node.js Crash Course', id: 'BfMWHNrw_tU' },
            { title: 'Express JS Tutorial', id: 'SccSCuHhOw0' },
            { title: 'REST API Design', id: 'fgTGADljAeg' },
        ],
        assignments: [{ title: 'CRUD API', due: '2026-04-05', submitted: false }],
        quizzes: [{ title: 'Node.js Basics', questions: 20, score: null }],
        exams: [{ title: 'Backend API Exam', questions: 30, duration: '50min' }],
        projects: [{ title: 'Blog REST API', due: '2026-04-25', submitted: false }],
    },
    {
        id: 5,
        title: 'MySQL Database Mastery',
        teacher: 'DB Admin Junaid',
        progress: 85,
        materials: ['MySQL-Queries.pdf', 'Joins-Explained.mp4', 'Normalization.pdf'],
        youtubeLessons: [
            { title: 'MySQL Tutorial for Beginners', id: '7S_tz1z_5bA' },
            { title: 'SQL Joins Explained', id: '9yeOJ0ZMUYw' },
            { title: 'Database Normalization', id: 'ztHopE5Wnpc' },
        ],
        assignments: [{ title: 'Student Database', due: '2026-03-22', submitted: true }],
        quizzes: [{ title: 'SQL Queries', questions: 30, score: 95 }],
        exams: [{ title: 'MySQL Certification', questions: 50, duration: '75min' }],
        projects: [{ title: 'E-commerce DB Design', due: '2026-04-02', submitted: false }],
    },
    {
        id: 6,
        title: 'MongoDB NoSQL Complete',
        teacher: 'NoSQL Expert',
        progress: 55,
        materials: ['Mongo-Basics.pdf', 'Mongoose-ODM.mp4', 'Aggregation.pdf'],
        youtubeLessons: [
            { title: 'MongoDB Tutorial', id: 'pWbMrx5rVBE' },
            { title: 'Mongoose Crash Course', id: 'DLDLXpojRuQ' },
            { title: 'NoSQL Explained', id: 'ruz-vK8IesE' },
        ],
        assignments: [{ title: 'Blog Schema Design', due: '2026-03-30', submitted: false }],
        quizzes: [{ title: 'MongoDB Queries', questions: 20, score: 82 }],
        exams: [{ title: 'NoSQL Exam', questions: 35, duration: '55min' }],
        projects: [{ title: 'Social Media DB', due: '2026-04-12', submitted: false }],
    },
    {
        id: 7,
        title: 'Database Design & ERD',
        teacher: 'DB Architect',
        progress: 70,
        materials: ['ER-Diagrams.pdf', 'Normalization-Guide.mp4', 'DB-Optimization.pdf'],
        youtubeLessons: [
            { title: 'ER Diagrams Tutorial', id: 'QpdhBUYk7Kk' },
            { title: 'Database Design Course', id: 'ztHopE5Wnpc' },
            { title: 'SQL vs NoSQL', id: 'ZS_kXvOeQ5Y' },
        ],
        assignments: [{ title: 'Hospital ERD', due: '2026-03-27', submitted: true }],
        quizzes: [{ title: 'DB Design Principles', questions: 25, score: 90 }],
        exams: [{ title: 'Database Theory', questions: 40, duration: '60min' }],
        projects: [{ title: 'Banking System DB', due: '2026-04-08', submitted: false }],
    },
    {
        id: 8,
        title: 'Python for Data Science',
        teacher: 'Python Master',
        progress: 40,
        materials: ['Pandas-Tutorial.pdf', 'NumPy-Guide.mp4', 'DataViz-Matplotlib.pdf'],
        youtubeLessons: [
            { title: 'Python for Beginners', id: 'rfscVS0vtbw' },
            { title: 'Pandas Tutorial', id: 'vmEHCJyCFgg' },
            { title: 'NumPy Tutorial', id: '8JfDAm9y_7s' },
        ],
        assignments: [{ title: 'Data Analysis Report', due: '2026-04-03', submitted: false }],
        quizzes: [{ title: 'Python Data Science', questions: 20, score: null }],
        exams: [{ title: 'Python DS Exam', questions: 30, duration: '45min' }],
        projects: [{ title: 'Sales Dashboard', due: '2026-04-18', submitted: false }],
    },
    {
        id: 9,
        title: 'C++ Programming Advanced',
        teacher: 'C++ Expert',
        progress: 25,
        materials: ['OOP-Cpp.pdf', 'STL-Guide.mp4', 'Memory-Management.pdf'],
        youtubeLessons: [
            { title: 'C++ Tutorial for Beginners', id: 'vLnPxdvZ4Kw' },
            { title: 'C++ OOP', id: 'wN0x9eZLix4' },
            { title: 'STL Overview', id: '2olsKfvJMmQ' },
        ],
        assignments: [{ title: 'Linked List Implementation', due: '2026-04-07', submitted: false }],
        quizzes: [{ title: 'C++ Core', questions: 35, score: null }],
        exams: [{ title: 'C++ Advanced Exam', questions: 50, duration: '90min' }],
        projects: [{ title: 'Student Management System', due: '2026-04-22', submitted: false }],
    },
    {
        id: 10,
        title: 'PHP & Laravel Framework',
        teacher: 'Web Dev Pro',
        progress: 50,
        materials: ['Laravel-Routes.pdf', 'Eloquent-ORM.mp4', 'Blade-Templates.pdf'],
        youtubeLessons: [
            { title: 'PHP For Beginners', id: 'OK_JFVr2dJ4' },
            { title: 'Laravel From Scratch', id: 'MFh0Fd7BsjE' },
            { title: 'Laravel REST API', id: 'MTahW_z0gY4' },
        ],
        assignments: [{ title: 'User Authentication', due: '2026-03-29', submitted: false }],
        quizzes: [{ title: 'PHP Laravel', questions: 25, score: null }],
        exams: [{ title: 'Backend PHP Exam', questions: 40, duration: '60min' }],
        projects: [{ title: 'LMS Backend (This Project!)', due: '2026-04-15', submitted: false }],
    },
    {
        id: 11,
        title: 'Git & GitHub Mastery',
        teacher: 'DevOps Junaid',
        progress: 90,
        materials: ['Git-Workflows.pdf', 'GitHub-Actions.mp4', 'Branching.pdf'],
        youtubeLessons: [
            { title: 'Git & GitHub Crash Course', id: 'RGOj5yH7evk' },
            { title: 'Git Branching', id: 'wM7k7l3rUbE' },
            { title: 'GitHub Actions', id: 'R8_veQiYBjI' },
        ],
        assignments: [{ title: 'Portfolio Repo Setup', due: '2026-03-20', submitted: true }],
        quizzes: [{ title: 'Git Commands', questions: 20, score: 98 }],
        exams: [{ title: 'Version Control Exam', questions: 25, duration: '35min' }],
        projects: [{ title: 'Open Source Contribution', due: '2026-04-01', submitted: false }],
    },
    {
        id: 12,
        title: 'Docker & Containerization',
        teacher: 'Cloud Expert',
        progress: 35,
        materials: ['Dockerfile-Guide.pdf', 'Compose-YAML.mp4', 'Containers.pdf'],
        youtubeLessons: [
            { title: 'Docker Tutorial', id: 'pTFZFxd4hOI' },
            { title: 'Docker Compose', id: 'HG6yIjZapSA' },
            { title: 'Kubernetes Intro', id: 'X48VuDVv0do' },
        ],
        assignments: [{ title: 'Multi-container App', due: '2026-04-10', submitted: false }],
        quizzes: [{ title: 'Docker Basics', questions: 15, score: null }],
        exams: [{ title: 'Containerization Exam', questions: 30, duration: '45min' }],
        projects: [{ title: 'Microservices Docker', due: '2026-04-28', submitted: false }],
    },
    {
        id: 13,
        title: 'Tailwind CSS Advanced',
        teacher: 'UI/UX Designer',
        progress: 80,
        materials: ['Tailwind-Config.pdf', 'Custom-Components.mp4', 'Design-System.pdf'],
        youtubeLessons: [
            { title: 'Tailwind CSS Crash Course', id: 'dFgzHOX84xQ' },
            { title: 'Tailwind v3', id: '4gUHskpgsI4' },
            { title: 'Build a Landing Page', id: 'oG6AIBvZg_8' },
        ],
        assignments: [{ title: 'Dashboard UI', due: '2026-03-23', submitted: true }],
        quizzes: [{ title: 'CSS Frameworks', questions: 20, score: 94 }],
        exams: [{ title: 'Modern CSS Exam', questions: 25, duration: '40min' }],
        projects: [{ title: 'SaaS Landing Page', due: '2026-04-03', submitted: false }],
    },
    {
        id: 14,
        title: 'Flutter Mobile Development',
        teacher: 'Mobile Dev',
        progress: 20,
        materials: ['Dart-Basics.pdf', 'Flutter-Widgets.mp4', 'State-Management.pdf'],
        youtubeLessons: [
            { title: 'Flutter Course for Beginners', id: 'VPvVD8t02U8' },
            { title: 'Dart Language Tour', id: 'Ej_Pcr4uC2Q' },
            { title: 'Flutter Widgets', id: 'TpWl8rDvKro' },
        ],
        assignments: [{ title: 'Todo Mobile App', due: '2026-04-12', submitted: false }],
        quizzes: [{ title: 'Flutter Basics', questions: 20, score: null }],
        exams: [{ title: 'Mobile Dev Exam', questions: 35, duration: '55min' }],
        projects: [{ title: 'Fitness Tracker App', due: '2026-05-01', submitted: false }],
    },
    {
        id: 15,
        title: 'Cybersecurity & Ethical Hacking',
        teacher: 'Security Expert',
        progress: 15,
        materials: ['SQL-Injection.pdf', 'XSS-Attacks.mp4', 'Encryption.pdf'],
        youtubeLessons: [
            { title: 'Cyber Security Full Course', id: 'inWWhrCbtfc' },
            { title: 'Ethical Hacking Intro', id: '3Kq1MIfTWCE' },
            { title: 'OWASP Top 10', id: 'j5ghqT3cLek' },
        ],
        assignments: [{ title: 'Security Audit Report', due: '2026-04-15', submitted: false }],
        quizzes: [{ title: 'Cybersecurity Basics', questions: 25, score: null }],
        exams: [{ title: 'Security Certification', questions: 60, duration: '90min' }],
        projects: [{ title: 'Secure Login System', due: '2026-05-05', submitted: false }],
    },
    {
        id: 16,
        title: 'Blockchain & Smart Contracts',
        teacher: 'Web3 Developer',
        progress: 10,
        materials: ['Solidity-Basics.pdf', 'Ethereum-Guide.mp4', 'Web3-JS.pdf'],
        youtubeLessons: [
            { title: 'Blockchain Explained', id: 'SSo_EIwHSd4' },
            { title: 'Solidity Tutorial', id: 'M576WGiKEdY' },
            { title: 'Ethereum Development', id: 'coQ5dg8wM2o' },
        ],
        assignments: [{ title: 'Simple Smart Contract', due: '2026-04-20', submitted: false }],
        quizzes: [{ title: 'Blockchain Fundamentals', questions: 20, score: null }],
        exams: [{ title: 'Web3 Exam', questions: 30, duration: '50min' }],
        projects: [{ title: 'NFT Marketplace', due: '2026-05-10', submitted: false }],
    },
    {
        id: 17,
        title: 'Big Data Analytics',
        teacher: 'Data Engineer',
        progress: 65,
        materials: ['Hadoop-Intro.pdf', 'Spark-Tutorial.mp4', 'Data-Pipelines.pdf'],
        youtubeLessons: [
            { title: 'Big Data Explained', id: 'bBu7BESWuWw' },
            { title: 'Apache Spark Intro', id: 'TOtEm7bP32A' },
            { title: 'Hadoop Ecosystem', id: 'mafw2KtDksE' },
        ],
        assignments: [{ title: 'Log Analysis Pipeline', due: '2026-03-26', submitted: true }],
        quizzes: [{ title: 'Big Data Concepts', questions: 25, score: 87 }],
        exams: [{ title: 'Data Engineering Exam', questions: 40, duration: '70min' }],
        projects: [{ title: 'Real-time Analytics', due: '2026-04-30', submitted: false }],
    },
    {
        id: 18,
        title: 'Machine Learning Basics',
        teacher: 'AI Specialist',
        progress: 30,
        materials: ['ML-Algorithms.pdf', 'Scikit-Learn.mp4', 'Neural-Networks.pdf'],
        youtubeLessons: [
            { title: 'Machine Learning for Everybody', id: 'i_LwzRVP7bg' },
            { title: 'Scikit-Learn Tutorial', id: '0Lt9w-BxKFQ' },
            { title: 'Neural Networks', id: 'aircAruvnKk' },
        ],
        assignments: [{ title: 'Image Classifier', due: '2026-04-08', submitted: false }],
        quizzes: [{ title: 'ML Fundamentals', questions: 20, score: null }],
        exams: [{ title: 'AI Basics Exam', questions: 35, duration: '60min' }],
        projects: [{ title: 'Chatbot ML Model', due: '2026-05-02', submitted: false }],
    },
    {
        id: 19,
        title: 'Linux System Administration',
        teacher: 'DevOps Pro',
        progress: 55,
        materials: ['Bash-Scripting.pdf', 'System-Monitoring.mp4', 'Security-Hardening.pdf'],
        youtubeLessons: [
            { title: 'Linux for Beginners', id: 'sWbUDq4S6pA' },
            { title: 'Bash Scripting', id: 'tK9Oc6AEnR4' },
            { title: 'Linux Commands', id: 'CV_-t8na0gg' },
        ],
        assignments: [{ title: 'Automation Script', due: '2026-03-31', submitted: false }],
        quizzes: [{ title: 'Linux Commands', questions: 40, score: 91 }],
        exams: [{ title: 'SysAdmin Certification', questions: 60, duration: '90min' }],
        projects: [{ title: 'Server Monitoring Tool', due: '2026-04-18', submitted: false }],
    },
    {
        id: 20,
        title: 'Computer Networks & OSI',
        teacher: 'Network Engineer',
        progress: 70,
        materials: ['OSI-Model.pdf', 'TCP-IP.mp4', 'Network-Security.pdf'],
        youtubeLessons: [
            { title: 'Networking for Beginners', id: 'IPvXjDk0KjA' },
            { title: 'OSI Model Explained', id: 'LANAcIK2Fd8' },
            { title: 'TCP/IP', id: 'PpsEaqJV_A0' },
        ],
        assignments: [{ title: 'Network Diagram', due: '2026-03-24', submitted: true }],
        quizzes: [{ title: 'Networking Protocols', questions: 30, score: 89 }],
        exams: [{ title: 'CCNA Prep Exam', questions: 50, duration: '75min' }],
        projects: [{ title: 'Home Network Setup', due: '2026-04-06', submitted: false }],
    },
    {
        id: 21,
        title: 'Parallel Computing MPI',
        teacher: 'HPC Expert',
        progress: 40,
        materials: ['MPI-Tutorial.pdf', 'OpenMP-Guide.mp4', 'Parallel-Algorithms.pdf'],
        youtubeLessons: [
            { title: 'Parallel Computing Intro', id: 'cMWnUJiK24w' },
            { title: 'MPI Tutorial', id: '9z9RhIjxKzY' },
            { title: 'OpenMP Basics', id: 'nEjpzHOjyh0' },
        ],
        assignments: [{ title: 'Matrix Multiplication MPI', due: '2026-04-11', submitted: false }],
        quizzes: [{ title: 'Parallel Programming', questions: 25, score: null }],
        exams: [{ title: 'HPC Exam', questions: 40, duration: '65min' }],
        projects: [{ title: 'Monte Carlo Simulation', due: '2026-04-28', submitted: false }],
    },
];

let currentUser = null;
let courseModalInstance = null;

function getCourseModal() {
    const el = document.getElementById('courseModal');
    if (!courseModalInstance) {
        courseModalInstance = new bootstrap.Modal(el, { backdrop: true });
    }
    return courseModalInstance;
}

window.addEventListener('DOMContentLoaded', () => {
    showLoginForm();
    const totalEl = document.getElementById('totalCourses');
    if (totalEl) totalEl.textContent = courses.length;
    updateDashboardStats();
    initCourseTabs();
    document.querySelectorAll('.stat-card--clickable').forEach((el) => {
        el.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                el.click();
            }
        });
    });
});

function updateDashboardStats() {
    const completed = courses.filter((c) => c.progress >= 100).length;
    const dueSoon = courses.reduce((n, c) => {
        return n + c.assignments.filter((a) => !a.submitted).length;
    }, 0);
    const elC = document.getElementById('completed');
    const elD = document.getElementById('dueSoon');
    if (elC) elC.textContent = completed;
    if (elD) elD.textContent = dueSoon;
}

function showLoginForm() {
    const body = document.getElementById('loginBody');
    if (!body) return;
    body.innerHTML = `
        <div class="form-premium">
            <input type="text" id="loginUser" class="form-control mb-3" placeholder="Username" autocomplete="username">
            <input type="password" id="loginPass" class="form-control mb-3" placeholder="Password" autocomplete="current-password">
            <select id="loginRole" class="form-select mb-3">
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="admin">Admin</option>
            </select>
            <button type="button" onclick="login()" class="btn btn-gold w-100 mb-2 py-2">
                <i class="fas fa-sign-in-alt me-2"></i> Enter dashboard
            </button>
            <button type="button" onclick="showRegisterForm()" class="btn btn-outline-gold w-100 py-2">
                <i class="fas fa-user-plus me-2"></i> Create account
            </button>
            <p class="demo-hint mb-0">New here? Use <strong>Create account</strong> first.</p>
        </div>
    `;
}

function showRegisterForm() {
    const body = document.getElementById('loginBody');
    if (!body) return;
    body.innerHTML = `
        <div class="form-premium">
            <input type="text" id="regName" class="form-control mb-2" placeholder="Full name" autocomplete="name">
            <input type="text" id="regUsername" class="form-control mb-2" placeholder="Username" autocomplete="username">
            <input type="password" id="regPassword" class="form-control mb-3" placeholder="Password" autocomplete="new-password">
            <select id="regRole" class="form-select mb-3">
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="admin">Admin</option>
            </select>
            <button type="button" onclick="registerUser()" class="btn btn-gold w-100 mb-2 py-2">Create account</button>
            <button type="button" onclick="showLoginForm()" class="btn btn-outline-gold w-100 py-2">← Back to login</button>
        </div>
    `;
}

function registerUser() {
    const name = document.getElementById('regName').value.trim();
    const username = document.getElementById('regUsername').value.toLowerCase().trim();
    const password = document.getElementById('regPassword').value;
    const role = document.getElementById('regRole').value;

    if (!name || !username || !password || name.length < 2) {
        alert('Please fill all fields (name at least 2 characters).');
        return;
    }
    if (users.some((u) => u.username === username)) {
        alert('Username already exists.');
        return;
    }

    const newUser = { id: Date.now(), name, username, password, role };
    users.push(newUser);
    localStorage.setItem(STORAGE_USERS, JSON.stringify(users));
    alert(`Welcome, ${name}! You can log in now.`);
    showLoginForm();
}

function login() {
    const username = document.getElementById('loginUser').value.toLowerCase().trim();
    const password = document.getElementById('loginPass').value;
    const role = document.getElementById('loginRole').value;

    const user = users.find((u) => u.username === username && u.password === password && u.role === role);
    if (!user) {
        alert('Invalid username, password, or role.');
        return;
    }

    currentUser = user;
    document.getElementById('sidebarUser').textContent = user.name;
    document.getElementById('mainApp').classList.remove('d-none');
    document.getElementById('loginScreen').style.display = 'none';
    initDashboardClock();
    showDashboard();
}

function initDashboardClock() {
    const el = document.getElementById('currentTime');
    const tick = () => {
        if (el) el.textContent = new Date().toLocaleString();
    };
    tick();
    setInterval(tick, 1000);
}

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
    document.getElementById('mainContent').classList.toggle('expanded');
}

/** Close drawer after navigating so content is visible (especially on mobile). */
function closeSidebarAfterNav() {
    const sidebar = document.getElementById('sidebar');
    const main = document.getElementById('mainContent');
    if (sidebar) sidebar.classList.remove('active');
    if (main) main.classList.remove('expanded');
}

function setActiveSidebar(navId) {
    document.querySelectorAll('.sidebar-nav a[data-nav]').forEach((el) => {
        el.classList.toggle('sidebar-link-active', el.getAttribute('data-nav') === navId);
    });
}

function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach((s) => s.classList.remove('active'));
    const target = document.getElementById(sectionId);
    if (target) target.classList.add('active');
}

function showDashboard() {
    showSection('overview');
    updateDashboardStats();
    setActiveSidebar('overview');
    closeSidebarAfterNav();
}

function showCourses() {
    showSection('coursesSection');
    loadCourses();
    setActiveSidebar('courses');
    closeSidebarAfterNav();
}

function showAssignmentsSection() {
    showSection('assignmentsSection');
    loadAllAssignments();
    setActiveSidebar('assignments');
    closeSidebarAfterNav();
}

function loadCourses() {
    const container = document.getElementById('coursesList');
    if (!container) return;
    container.innerHTML = courses
        .map(
            (course) => `
        <div class="col-lg-6 col-xl-4 mb-4">
            <div class="course-card h-100" onclick="openCourseModal(${course.id})">
                <div class="d-flex justify-content-between align-items-start mb-2 gap-2">
                    <h5 class="mb-0 flex-grow-1">${escapeHtml(course.title)}</h5>
                    <span class="badge">${course.progress}%</span>
                </div>
                <div class="course-meta">
                    <div class="mb-1"><i class="fas fa-user me-2"></i>${escapeHtml(course.teacher)}</div>
                    <div class="small">
                        <i class="fab fa-youtube me-1"></i>${course.youtubeLessons?.length || 0} videos ·
                        <i class="fas fa-file-alt ms-2 me-1"></i>${course.materials.length} files ·
                        <i class="fas fa-tasks ms-2 me-1"></i>${course.assignments.length} tasks
                    </div>
                </div>
                <div class="progress">
                    <div class="progress-bar" style="width: ${course.progress}%"></div>
                </div>
            </div>
        </div>
    `
        )
        .join('');
}

function escapeHtml(text) {
    const d = document.createElement('div');
    d.textContent = text;
    return d.innerHTML;
}

function loadAllAssignments() {
    const list = document.getElementById('assignmentsList');
    if (!list) return;
    const rows = [];
    courses.forEach((c) => {
        c.assignments.forEach((a) => {
            rows.push({ course: c, assignment: a });
        });
    });
    if (!rows.length) {
        list.innerHTML = '<p class="assignments-placeholder">No assignments.</p>';
        return;
    }
    list.innerHTML = rows
        .map(
            ({ course, assignment: a }) => `
        <div class="assignment-card ${a.submitted ? 'completed' : 'pending'} mb-3">
            <div class="d-flex justify-content-between flex-wrap gap-2">
                <div>
                    <h6 class="mb-1">${escapeHtml(a.title)}</h6>
                    <small class="text-muted-custom"><i class="fas fa-book me-1"></i>${escapeHtml(course.title)}</small>
                </div>
                <div class="text-end">
                    <small class="text-muted-custom d-block"><i class="fas fa-calendar me-1"></i>Due: ${a.due}</small>
                    ${a.submitted ? '<span class="badge bg-success mt-2">Submitted</span>' : '<span class="badge bg-warning text-dark mt-2">Pending</span>'}
                </div>
            </div>
        </div>
    `
        )
        .join('');
}

function openCourseModal(courseId) {
    const course = courses.find((c) => c.id === courseId);
    if (!course) return;

    document.getElementById('courseTitleModal').innerHTML = `<i class="fas fa-book me-2"></i>${escapeHtml(course.title)}`;
    document.getElementById('progressPercent').textContent = `${course.progress}%`;
    const circle = document.getElementById('courseProgressCircle');
    circle.style.setProperty('--progress', `${course.progress}%`);

    const minis = document.querySelectorAll('#courseModal .modal-body .stat-mini');
    if (minis[0])
        minis[0].innerHTML = `<i class="fab fa-youtube d-block mb-1"></i><span class="d-block small">${course.youtubeLessons?.length || 0} Videos</span>`;
    if (minis[1])
        minis[1].innerHTML = `<i class="fas fa-file-pdf d-block mb-1"></i><span class="d-block small">${course.materials.length} Files</span>`;
    if (minis[2])
        minis[2].innerHTML = `<i class="fas fa-tasks d-block mb-1"></i><span class="d-block small">${course.assignments.length} Tasks</span>`;
    if (minis[3])
        minis[3].innerHTML = `<i class="fas fa-question-circle d-block mb-1"></i><span class="d-block small">${course.quizzes.length} Quizzes</span>`;

    loadCourseContent(course);
    resetModalTabs();
    getCourseModal().show();
}

function resetModalTabs() {
    document.querySelectorAll('#courseTabs .nav-link').forEach((l, i) => {
        l.classList.toggle('active', i === 0);
    });
    document.querySelectorAll('#courseModal .tab-pane').forEach((p, i) => {
        p.classList.toggle('active', i === 0);
    });
}

function loadCourseContent(course) {
    const yt = course.youtubeLessons || [];
    const ytBlock =
        yt.length > 0
            ? `
        <div class="col-12">
            <h6 class="text-muted-custom mb-3"><i class="fab fa-youtube me-2 text-danger"></i>YouTube lessons (embedded)</h6>
            <div class="row g-3">
                ${yt
                    .map((v) => {
                        const safeId = String(v.id).replace(/[^a-zA-Z0-9_-]/g, '');
                        return `
                    <div class="col-lg-6">
                        <div class="youtube-card">
                            <h6 class="mb-2">${escapeHtml(v.title)}</h6>
                            <div class="ratio ratio-16x9">
                                <iframe src="https://www.youtube.com/embed/${safeId}" title="${escapeHtml(v.title)}"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen loading="lazy"></iframe>
                            </div>
                            <a class="btn btn-sm btn-outline-light mt-2" href="https://www.youtube.com/watch?v=${safeId}" target="_blank" rel="noopener">
                                Open on YouTube
                            </a>
                        </div>
                    </div>`;
                    })
                    .join('')}
            </div>
        </div>`
            : '<div class="col-12 mb-2"><p class="text-muted-custom small">No YouTube videos — add <code>youtubeLessons</code> in <code>app.js</code>.</p></div>';

    const filesBlock = course.materials
        .map(
            (m, i) => `
            <div class="col-md-6 col-lg-4">
                <div class="material-card">
                    <i class="fas fa-file-pdf fa-2x mb-2" style="color: var(--gold);"></i>
                    <h6>${escapeHtml(m)}</h6>
                    <button type="button" class="btn btn-sm btn-outline-light mt-2 js-download-demo" data-name="${escapeHtml(m)}">
                        <i class="fas fa-download"></i> Download
                    </button>
                </div>
            </div>
        `
        )
        .join('');

    document.getElementById('courseMaterials').innerHTML = `
            ${ytBlock}
            <div class="col-12 mt-2"><h6 class="text-muted-custom mb-2"><i class="fas fa-file-alt me-2"></i>Downloadable materials</h6></div>
            ${filesBlock}
    `;

    document.getElementById('courseMaterials').querySelectorAll('.js-download-demo').forEach((btn) => {
        btn.addEventListener('click', () => downloadDemo(btn.getAttribute('data-name')));
    });

    document.getElementById('courseAssignments').innerHTML = course.assignments
        .map(
            (a, i) => `
        <div class="col-md-6 col-lg-4">
            <div class="assignment-card ${a.submitted ? 'completed' : 'pending'}">
                <h6>${escapeHtml(a.title)}</h6>
                <small class="text-muted-custom">Due: ${a.due}</small>
                ${a.submitted ? '<div class="mt-2"><span class="badge bg-success">Submitted</span></div>' : `<button type="button" class="btn btn-sm btn-gold mt-2 js-submit-assignment" data-course-id="${course.id}" data-index="${i}">Submit</button>`}
            </div>
        </div>
    `
        )
        .join('');

    document.getElementById('courseAssignments').querySelectorAll('.js-submit-assignment').forEach((btn) => {
        btn.addEventListener('click', () => {
            const id = Number(btn.getAttribute('data-course-id'));
            const idx = Number(btn.getAttribute('data-index'));
            submitAssignmentByIndex(id, idx);
        });
    });

    document.getElementById('courseQuizzes').innerHTML = course.quizzes
        .map(
            (q, i) => `
        <div class="col-md-6 col-lg-4">
            <div class="quiz-card ${q.score != null ? 'completed' : ''}">
                <h6>${escapeHtml(q.title)}</h6>
                <small class="text-muted-custom">${q.questions} questions</small>
                ${q.score != null ? `<div class="mt-2"><span class="badge bg-warning text-dark">Score: ${q.score}%</span></div>` : `<button type="button" class="btn btn-sm btn-warning mt-2 js-start-quiz" data-course-id="${course.id}" data-index="${i}">Start quiz</button>`}
            </div>
        </div>
    `
        )
        .join('');

    document.getElementById('courseQuizzes').querySelectorAll('.js-start-quiz').forEach((btn) => {
        btn.addEventListener('click', () => {
            const id = Number(btn.getAttribute('data-course-id'));
            const idx = Number(btn.getAttribute('data-index'));
            startQuizByIndex(id, idx);
        });
    });

    document.getElementById('courseExams').innerHTML = course.exams
        .map(
            (e, i) => `
        <div class="col-md-6 col-lg-4">
            <div class="exam-card">
                <h6>${escapeHtml(e.title)}</h6>
                <small class="text-danger"><i class="fas fa-stopwatch me-1"></i>${e.duration}</small>
                <button type="button" class="btn btn-sm btn-danger mt-2 js-start-exam" data-course-id="${course.id}" data-index="${i}">Take exam</button>
            </div>
        </div>
    `
        )
        .join('');

    document.getElementById('courseExams').querySelectorAll('.js-start-exam').forEach((btn) => {
        btn.addEventListener('click', () => {
            const id = Number(btn.getAttribute('data-course-id'));
            const idx = Number(btn.getAttribute('data-index'));
            startExamByIndex(id, idx);
        });
    });

    document.getElementById('courseProjects').innerHTML = course.projects
        .map(
            (p, i) => `
        <div class="col-md-6 col-lg-4">
            <div class="project-card">
                <h6>${escapeHtml(p.title)}</h6>
                <small class="text-muted-custom"><i class="fab fa-github me-1"></i>Due: ${p.due}</small>
                <div class="mt-2">
                    ${p.submitted ? '<span class="badge bg-success">Submitted</span>' : `<button type="button" class="btn btn-sm btn-success js-submit-project" data-course-id="${course.id}" data-index="${i}">Submit project</button>`}
                </div>
            </div>
        </div>
    `
        )
        .join('');

    document.getElementById('courseProjects').querySelectorAll('.js-submit-project').forEach((btn) => {
        btn.addEventListener('click', () => {
            const id = Number(btn.getAttribute('data-course-id'));
            const idx = Number(btn.getAttribute('data-index'));
            submitProjectByIndex(id, idx);
        });
    });
}

function initCourseTabs() {
    document.addEventListener('click', (e) => {
        const link = e.target.closest('#courseTabs .nav-link');
        if (!link || !link.getAttribute('href')?.startsWith('#')) return;
        e.preventDefault();
        const href = link.getAttribute('href');
        document.querySelectorAll('#courseTabs .nav-link').forEach((l) => l.classList.remove('active'));
        link.classList.add('active');
        document.querySelectorAll('#courseModal .tab-pane').forEach((p) => p.classList.remove('active'));
        const pane = document.querySelector(`#courseModal ${href}`);
        if (pane) pane.classList.add('active');
    });
}

function downloadDemo(name) {
    alert(`Demo: "${name}" would download here. Host real files on your server or use direct links.`);
}

function submitAssignmentByIndex(courseId, index) {
    const course = courses.find((c) => c.id === courseId);
    const a = course.assignments[index];
    if (!a || a.submitted) return;
    a.submitted = true;
    a.score = Math.floor(Math.random() * 15) + 85;
    alert(`Submitted: "${a.title}"`);
    updateDashboardStats();
    openCourseModal(courseId);
}

function startQuizByIndex(courseId, index) {
    const course = courses.find((c) => c.id === courseId);
    const q = course.quizzes[index];
    if (!q) return;
    q.score = Math.floor(Math.random() * 20) + 75;
    q.completed = true;
    alert(`Quiz complete: "${q.title}"\nScore: ${q.score}%`);
    openCourseModal(courseId);
}

function startExamByIndex(courseId, index) {
    const course = courses.find((c) => c.id === courseId);
    const ex = course.exams[index];
    if (!ex) return;
    alert(`Starting exam: "${ex.title}"\n${ex.questions} questions · ${ex.duration}\n(Full timer UI would go here.)`);
}

function submitProjectByIndex(courseId, index) {
    const course = courses.find((c) => c.id === courseId);
    const p = course.projects[index];
    if (!p || p.submitted) return;
    p.submitted = true;
    p.github = `https://github.com/${currentUser?.username || 'student'}/${p.title.toLowerCase().replace(/\s+/g, '-')}`;
    alert(`Project submitted: "${p.title}"`);
    openCourseModal(courseId);
}

function logout() {
    document.getElementById('loginScreen').style.display = 'flex';
    document.getElementById('mainApp').classList.add('d-none');
    document.getElementById('sidebar').classList.remove('active');
    document.getElementById('mainContent').classList.remove('expanded');
    currentUser = null;
    showLoginForm();
}
