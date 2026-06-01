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
        nav_research: "Research",
        pub_heading: "Publications",
        pub_description: "Peer-reviewed research from our group",
        rd_heading: "Research Directions",
        rd_description: "Our key areas of focus in quantum computing",
        rd_featured: "Featured Publications",
        rd_sim_title: "Quantum Simulation",
        rd_sim_desc: "We develop quantum algorithms for simulating complex physical systems, with a particular focus on computational fluid dynamics (CFD) and open quantum systems. Our work bridges classical numerical methods with quantum computing, enabling large-scale and high-precision fluid simulations on near-term quantum processors. Key contributions include quantum approaches to the Navier–Stokes equations, variational quantum simulation of dissipative dynamics, and hybrid quantum-classical frameworks for nonlinear PDEs.",
        rd_ml_title: "Quantum Machine Learning & AI",
        rd_ml_desc: "We explore the intersection of quantum computing and artificial intelligence, developing quantum-enhanced models that achieve practical speedups. Our research spans quantum neural networks, quantum vision transformers, and quantum-enhanced fine-tuning of large language models. We also investigate the fundamental capabilities and limitations of quantum deep learning, and develop physics-consistent datasets for advancing scientific reasoning in quantum mechanics.",
        rd_arch_title: "Quantum Architecture & QRAM",
        rd_arch_desc: "We design and implement novel quantum computing architectures, with emphasis on quantum random access memory (QRAM) and efficient quantum circuit simulation. Our work includes demonstrating coherent quantum routers for bucket-brigade QRAM on superconducting processors, developing hardware-efficient QRAM designs with native gate sets, and building high-performance simulators like SparQSim that leverage state sparsity for scalable simulation.",
        rd_ec_title: "Quantum Error Correction & Hardware",
        rd_ec_desc: "We advance the practical realization of fault-tolerant quantum computing through error correction and hardware optimization. Our research covers universal logical gate sets in error-detecting surface codes, low-overhead preparation of logical non-Clifford states, pulse-level calibration and crosstalk mitigation in superconducting circuits, and intelligent chip mapping and scheduling strategies.",
        rd_algo_title: "Quantum Algorithms & Applications",
        rd_algo_desc: "We design novel quantum algorithms for a range of applications beyond simulation, including financial engineering, signal processing, and combinatorial optimization. Our contributions include quantum approaches to quantitative trading and stochastic process analysis, efficient quantum algorithms for independent component analysis and feature selection, advances in quantum Fourier transform-based arithmetic, and generalized quantum matrix transformation frameworks.",
        lang_en: "EN",
        lang_zh: "中文"
    },
    zh: {
        nav_home: "首页",
        nav_research: "研究方向",
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
        rd_heading: "研究方向",
        rd_description: "我们在量子计算领域的核心研究方向",
        rd_featured: "代表性论文",
        rd_sim_title: "量子模拟",
        rd_sim_desc: "我们致力于开发用于模拟复杂物理系统的量子算法，尤其聚焦于计算流体力学（CFD）与开放量子系统。我们的工作将经典数值方法与量子计算相结合，使得在近期量子处理器上实现大规模、高精度的流体模拟成为可能。主要贡献包括量子化的 Navier–Stokes 方程求解方法、耗散动力学的变分量子模拟，以及面向非线性偏微分方程的混合量子-经典框架。",
        rd_ml_title: "量子机器学习与人工智能",
        rd_ml_desc: "我们探索量子计算与人工智能的交叉领域，开发具有实际加速效果的量子增强模型。研究涵盖量子神经网络、量子视觉 Transformer、量子增强的大语言模型微调等方向。同时，我们深入研究量子深度学习的基本能力与局限性，并开发面向量子力学科学推理的物理一致性数据集。",
        rd_arch_title: "量子架构与量子随机存取存储",
        rd_arch_desc: "我们设计并实现新型量子计算架构，重点聚焦量子随机存取存储（QRAM）与高效量子电路模拟。主要工作包括在超导处理器上演示桶旅式 QRAM 的相干量子路由器、设计基于原生门集的高效 QRAM 硬件方案，以及构建利用态稀疏性实现可扩展模拟的高性能模拟器 SparQSim。",
        rd_ec_title: "量子纠错与量子硬件",
        rd_ec_desc: "我们通过纠错与硬件优化推动容错量子计算的实际落地。研究覆盖差错检测表面码上的通用逻辑门集、低开销的非 Clifford 逻辑态制备、超导电路中的脉冲级校准与串扰抑制，以及智能的芯片映射与调度策略。",
        rd_algo_title: "量子算法与应用",
        rd_algo_desc: "我们设计面向模拟之外多种应用场景的新型量子算法，涵盖金融工程、信号处理与组合优化等领域。主要贡献包括面向量化交易与随机过程分析的量子方法、独立成分分析与特征选择的高效量子算法、基于量子傅里叶变换的算术运算改进，以及广义量子矩阵变换框架。",
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
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}
