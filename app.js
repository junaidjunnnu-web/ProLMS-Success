// ProLMS Premium — Complete JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Demo login (remove in production)
    showLoginForm();
    
    // Update time
    updateTime();
    setInterval(updateTime, 1000);
    
    // Initialize Bootstrap modals
    var courseModal = new bootstrap.Modal(document.getElementById('courseModal'));
});

// Demo login form
function showLoginForm() {
    const loginBody = document.getElementById('loginBody');
    loginBody.innerHTML = `
        <form class="form-premium">
            <div class="mb-3">
                <input type="email" class="form-control" placeholder="student@prolms.com" required>
            </div>
            <div class="mb-3">
                <input type="password" class="form-control" placeholder="password" required>
            </div>
            <button type="button" class="btn btn-gold w-100" onclick="loginDemo()">Enter Demo</button>
        </form>
        <div class="demo-hint">
            <i class="fas fa-magic me-1"></i> Try: student@prolms.com / any password
        </div>
    `;
}

// Demo login
function loginDemo() {
    document.getElementById('loginScreen').classList.add('d-none');
    document.getElementById('mainApp').classList.remove('d-none');
    document.getElementById('sidebarUser').textContent = 'Demo Student';
    showDashboard();
}

// Dashboard (default view)
function showDashboard() {
    showSection('overview');
    updateActiveNav('overview');
}

// Show courses
function showCourses() {
    showSection('coursesSection');
    loadCourses();
    updateActiveNav('courses');
}

// Show assignments
function showAssignmentsSection() {
    showSection('assignmentsSection');
    loadAssignments();
    updateActiveNav('assignments');
}

// Navigation helper
function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(sec => {
        sec.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Update active nav link
function updateActiveNav(nav) {
    document.querySelectorAll('.sidebar-nav a').forEach(link => {
        link.classList.remove('sidebar-link-active');
    });
    document.querySelector(`[data-nav="${nav}"]`).classList.add('sidebar-link-active');
}

// Sidebar toggle
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
    document.getElementById('mainContent').classList.toggle('expanded');
}

// Logout
function logout() {
    document.getElementById('mainApp').classList.add('d-none');
    document.getElementById('loginScreen').classList.remove('d-none');
    showLoginForm();
}

// Load courses (demo data)
function loadCourses() {
    const coursesList = document.getElementById('coursesList');
    const courses = [
        {title: "Flutter Development", progress: 45, videos: 12, track: "Mobile"},
        {title: "React Native Mastery", progress: 72, videos: 18, track: "Mobile"},
        {title: "Advanced JavaScript", progress: 28, videos: 15, track: "Frontend"},
        {title: "Node.js & Express", progress: 60, videos: 20, track: "Backend"}
    ];
    
    coursesList.innerHTML = courses.map(course => `
        <div class="col-lg-6 col-xl-4 col-xxl-3">
            <div class="course-card h-100" onclick="openCourseModal('${course.title}', ${course.progress}, ${course.videos})">
                <h5>${course.title}</h5>
                <div class="course-meta">
                    <i class="fas fa-play-circle me-1"></i> ${course.videos} videos • ${course.track}
                </div>
                <div class="progress mt-2" style="height: 6px;">
                    <div class="progress-bar" style="width: ${course.progress}%"></div>
                </div>
                <span class="badge mt-2">${course.progress}% Complete</span>
            </div>
        </div>
    `).join('');
}

// Open course modal
function openCourseModal(title, progress, videos) {
    document.getElementById('courseTitleModal').innerHTML = `<i class="fas fa-book me-2"></i> ${title}`;
    document.getElementById('progressPercent').textContent = progress + '%';
    document.getElementById('courseProgressCircle').style.setProperty('--progress', progress + '%');
    
    // Load demo materials
    document.getElementById('courseMaterials').innerHTML = `
        <div class="col-12 col-md-6 col-lg-4">
            <div class="youtube-card">
                <div class="ratio ratio-16x9">
                    <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowfullscreen></iframe>
                </div>
                <h6 class="mt-2 mb-1">Flutter Basics</h6>
            </div>
        </div>
    `;
    
    var courseModal = new bootstrap.Modal(document.getElementById('courseModal'));
    courseModal.show();
}

// Load assignments (demo)
function loadAssignments() {
    document.getElementById('assignmentsList').innerHTML = `
        <div class="assignments-placeholder">
            <i class="fas fa-tasks fa-3x mb-3 opacity-50"></i>
            <h5>No assignments due</h5>
            <p class="mb-0">Check your enrolled courses for tasks.</p>
        </div>
    `;
}

// Update current time
function updateTime() {
    const now = new Date();
    document.getElementById('currentTime').textContent = 
        now.toLocaleDateString('en-US', {weekday: 'short', month: 'short', day: 'numeric'}) + 
        ' | ' + now.toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit'});
}
