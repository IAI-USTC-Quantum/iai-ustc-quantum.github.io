const projects = [
    {
        name: "QRAM-Simulator",
        url: "https://iai-ustc-quantum.github.io/QRAM-Simulator/",
        badges: ["C++", "Python", "Paper"],
        descriptionKey: "project1_desc",
    },
    {
        name: "UnifiedQuantum",
        url: "https://github.com/IAI-USTC-Quantum/UnifiedQuantum",
        badges: ["Python", "C++"],
        descriptionKey: "project2_desc",
    },
    {
        name: "QuantumQA",
        url: "https://github.com/IAI-USTC-Quantum/QuantumQA",
        badges: ["Paper", "Dataset"],
        descriptionKey: "project4_desc",
    },
    {
        name: "quantum-computing.skill",
        url: "https://github.com/IAI-USTC-Quantum/quantum-computing.skill",
        badges: ["Skill"],
        descriptionKey: "project3_desc",
    },
    {
        name: "Quantum-Resource-Estimator",
        url: "https://github.com/IAI-USTC-Quantum/Quantum-Resource-Estimator",
        badges: ["Python"],
        descriptionKey: "project5_desc",
    }
];

const members = ["Agony5757", "TMYTiMidlY", "YunJ1e", "RichardSun2019", "yowakkojay", "qsxustc"];

function renderProjects() {
    const list = document.getElementById('projects-list');
    if (!list) return;
    list.innerHTML = projects.map(p => `
        <a class="project-card" href="${p.url}" target="_blank" rel="noopener">
            <div class="project-card-left">
                <h3>${p.name}</h3>
                <p data-i18n="${p.descriptionKey}">${translations.en[p.descriptionKey] || ''}</p>
            </div>
            <div class="project-card-right">
                ${p.badges.map(b => `<span class="badge">${b}</span>`).join('')}
            </div>
            <span class="project-card-arrow" data-i18n="project_link">→</span>
        </a>
    `).join('');
}

function renderTeam() {
    const grid = document.getElementById('team-grid');
    if (!grid) return;
    grid.innerHTML = members.map(m => `
        <a href="https://github.com/${m}" class="member-pill" target="_blank" rel="noopener">@${m}</a>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderTeam();
});
