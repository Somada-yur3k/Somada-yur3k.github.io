const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    themeToggle.textContent = isDark ? 'Light Mode' : 'Dark Mode';
});

const roleDisplay = document.getElementById('job-role');
const editRoleBtn = document.getElementById('edit-role-btn');
const skillsCard = document.getElementById('skills-card');
const skillsToggleBtn = document.getElementById('skills-toggle-btn');

if (editRoleBtn && roleDisplay) {
    editRoleBtn.addEventListener('click', () => {
        const currentRole = roleDisplay.textContent.trim();
        const updatedRole = prompt('Update your job role:', currentRole);
        if (updatedRole === null) {
            return;
        }
        const cleanRole = updatedRole.trim();
        if (cleanRole) {
            roleDisplay.textContent = cleanRole;
        }
    });
}

if (skillsCard && skillsToggleBtn) {
    skillsToggleBtn.addEventListener('click', () => {
        const isCollapsed = skillsCard.classList.toggle('collapsed');
        skillsToggleBtn.textContent = isCollapsed ? 'Show Skills' : 'Hide Skills';
    });
}

const profileImage = document.getElementById('profile-image');
const borderColorPicker = document.getElementById('border-color-picker');

if (profileImage && borderColorPicker) {
    borderColorPicker.addEventListener('input', (e) => {
        profileImage.style.borderColor = e.target.value;
    });
}



