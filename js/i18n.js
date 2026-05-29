const translations = {
    en: {
        nav_home: "Home",
        nav_pub: "Publications",
        hero_label: "IAI-USTC · Quantum AI Group · 2021–2026",
        title: "IAI-USTC",
        title_accent: "Quantum",
        subtitle: "Quantum AI Group — Institute of Artificial Intelligence, Hefei Comprehensive National Science Center",
        about_heading: "About",
        about_name_zh: "合肥综合性国家科学中心人工智能研究院 · 量子人工智能团队",
        about_name_en: "Institute of Artificial Intelligence, Hefei Comprehensive National Science Center · Quantum AI Group",
        about_github: "View on GitHub →",
        about_pub: "View our publications →",
        projects_heading: "Projects",
        projects_subheading: "Open Source",
        project1_desc: "Sparse-state quantum circuit simulator with native QRAM support and Register Level Programming.",
        project2_desc: "A unified, non-commercial quantum computing aggregation framework.",
        project3_desc: "Coding agent skill for quantum programming with UnifiedQuantum.",
        project4_desc: "Large-scale physics-consistent quantum dataset with verification-aware RL framework for quantum mechanics.",
        project5_desc: "Estimation and analysis tool for quantum circuit resource costs including gate count, depth, and fidelity.",
        project_link: "→",
        team_heading: "Team",
        team_subheading: "Researchers",
        contact_heading: "Contact",
        footer_copy: "© 2021–2026 IAI-USTC-Quantum",
        footer_github: "GitHub",
        footer_institution: "IAI-USTC",
        pub_heading: "Publications",
        pub_description: "Peer-reviewed research from our group",
        lang_en: "EN",
        lang_zh: "中文"
    },
    zh: {
        nav_home: "首页",
        nav_pub: "发表论文",
        hero_label: "IAI-USTC · 量子人工智能团队 · 2021–2026",
        title: "IAI-USTC",
        title_accent: "Quantum",
        subtitle: "量子人工智能团队 — 合肥综合性国家科学中心人工智能研究院",
        about_heading: "关于",
        about_name_zh: "合肥综合性国家科学中心人工智能研究院 · 量子人工智能团队",
        about_name_en: "Institute of Artificial Intelligence, Hefei Comprehensive National Science Center · Quantum AI Group",
        about_github: "访问 GitHub →",
        about_pub: "查看发表论文 →",
        projects_heading: "项目",
        projects_subheading: "开源项目",
        project1_desc: "具有原生 QRAM 支持和寄存器级编程范式的稀疏态量子电路模拟器。",
        project2_desc: "统一的非商业性量子计算聚合框架。",
        project3_desc: "面向 Coding Agent 的 UnifiedQuantum 量子编程 Skill。",
        project4_desc: "大规模物理一致性量子数据集，配合验证感知强化学习框架。",
        project5_desc: "量子电路资源成本估算与分析工具，支持门数量、电路深度和保真度评估。",
        project_link: "→",
        team_heading: "团队",
        team_subheading: "研究人员",
        contact_heading: "联系",
        footer_copy: "© 2021–2026 IAI-USTC-Quantum",
        footer_github: "GitHub",
        footer_institution: "IAI-USTC",
        pub_heading: "发表论文",
        pub_description: "我们团队的同行评审研究成果",
        lang_en: "EN",
        lang_zh: "中文"
    }
};

function switchLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    document.querySelectorAll('.nav-lang button').forEach(btn => btn.classList.remove('active'));
    const btn = document.getElementById('lang-' + lang);
    if (btn) btn.classList.add('active');
    localStorage.setItem('preferred-lang', lang);
}
