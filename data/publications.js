// ─── Publication data ───
// Add new entries to the top of the `publications` array.
// Fields: year (number), title, authors, venue, citations (number), doi (string, optional), arxiv (string, optional)
// doi/arXiv: include whichever exists. Leave undefined if not available.

const publications = [

    // ── 2026 ──
    {
        year: 2026,
        title: "Low-Overhead and High-Fidelity Preparation of Logical Non-Clifford States with Multilevel Transversal Injection",
        authors: ["J Zhang", "TH Wei", "XN Zhuang", "ZY Chen", "WC Kong", "YC Wu", "GP Guo"],
        venue: "Physical Review Letters 136, 080603",
        citations: 1,
        doi: "10.1103/PhysRevLett.136.080603"
    },
    {
        year: 2026,
        title: "Variational quantum nonlinear solver for nonlinear dynamics: Implementation and investigation",
        authors: ["TY Ma", "CC Ye", "MH Dou", "ZY Chen"],
        venue: "Physics of Fluids 38, 4",
        citations: 0,
        doi: "10.1063/5.0251597"
    },
    {
        year: 2026,
        title: "HiMA: Hierarchical Quantum Microarchitecture for Qubit-Scaling and Quantum Process-Level Parallelism",
        authors: ["Q Zhou", "ZH Mei", "HQ Shi", "LL Guo", "XY Yang", "YJ Wang", "XF Xu", "C Xue"],
        venue: "Future Generation Computer Systems, 108484",
        citations: 0,
        doi: "10.1016/j.future.2026.108484"
    },
    {
        year: 2026,
        title: "Statistics-informed parameterized quantum circuit: towards practical quantum state preparation and learning via maximum entropy principle",
        authors: ["XN Zhuang", "ZY Chen", "C Xue", "XF Xu", "C Wang", "HY Liu", "MY Tan", "TP Sun"],
        venue: "npj Quantum Information 12, 2026",
        citations: 0,
        doi: "10.1038/s41534-026-2026"
    },

    // ── 2025 ──
    {
        year: 2025,
        title: "Demonstrating a universal logical gate set in error-detecting surface codes on a superconducting quantum processor",
        authors: ["J Zhang", "ZY Chen", "YJ Wang", "BH Lu", "HF Zhang", "JN Li", "P Duan", "YC Wu"],
        venue: "npj Quantum Information 11, 177",
        citations: 8,
        doi: "10.1038/s41534-025-00999-9"
    },
    {
        year: 2025,
        title: "Quantum homotopy analysis method with quantum-compatible linearization for nonlinear partial differential equations",
        authors: ["C Xue", "XF Xu", "XN Zhuang", "TP Sun", "YJ Wang", "MY Tan", "CC Ye", "HY Liu"],
        venue: "Science China Physics, Mechanics & Astronomy 68, 104702",
        citations: 6,
        doi: "10.1007/s11433-025-2607"
    },
    {
        year: 2025,
        title: "Simulation of open quantum systems on universal quantum computers",
        authors: ["HY Liu", "X Lin", "ZY Chen", "C Xue", "TP Sun", "QS Li", "XN Zhuang", "YJ Wang"],
        venue: "Quantum 9, 1765",
        citations: 11,
        doi: "10.22331/q-2025-1765"
    },
    {
        year: 2025,
        title: "Quantum computational insurance and actuarial science",
        authors: ["HY Liu", "XN Zhuang", "C Wang", "QS Li", "MH Dou", "ZY Chen", "C Xue", "YC Wu"],
        venue: "Science China Information Sciences 68, 1–15",
        citations: 2,
        doi: "10.1007/s11432-025-2607"
    },

    // ── 2024 ──
    {
        year: 2024,
        title: "A hybrid quantum-classical framework for computational fluid dynamics",
        authors: ["CC Ye", "NB An", "TY Ma", "MH Dou", "W Bai", "DJ Sun", "ZY Chen", "GP Guo"],
        venue: "Physics of Fluids 36, 12",
        citations: 28,
        doi: "10.1063/5.0234511"
    },
    {
        year: 2024,
        title: "Enabling large-scale and high-precision fluid simulations on near-term quantum computers",
        authors: ["ZY Chen", "TY Ma", "CC Ye", "L Xu", "W Bai", "L Zhou", "MY Tan", "XN Zhuang", "XF Xu"],
        venue: "Computer Methods in Applied Mechanics and Engineering 432, 117428",
        citations: 34,
        doi: "10.1016/j.cma.2024.117428"
    },
    {
        year: 2024,
        title: "An efficient quantum algorithm for independent component analysis",
        authors: ["XF Xu", "XN Zhuang", "C Xue", "ZY Chen", "YC Wu", "GP Guo"],
        venue: "New Journal of Physics 26, 073030",
        citations: 3,
        doi: "10.1088/1367-2630/ad5707"
    },

    // ── 2023 ──
    {
        year: 2023,
        title: "An improved QFT-based quantum comparator and extended modular arithmetic using one ancilla qubit",
        authors: ["Y Yuan", "C Wang", "B Wang", "ZY Chen", "MH Dou", "YC Wu", "GP Guo"],
        venue: "New Journal of Physics 25, 103011",
        citations: 39,
        doi: "10.1088/1367-2630/ad09e5"
    },
    {
        year: 2023,
        title: "Quantum encoding and analysis on continuous time stochastic process with financial applications",
        authors: ["XN Zhuang", "ZY Chen", "C Xue", "YC Wu", "GP Guo"],
        venue: "Quantum 7, 1127",
        citations: 13,
        doi: "10.22331/q-2023-1127"
    },
    {
        year: 2023,
        title: "Can variational quantum algorithms demonstrate quantum advantages? Time really matters",
        authors: ["HY Liu", "ZY Chen", "TP Sun", "C Xue", "YC Wu", "GP Guo"],
        venue: "arXiv:2307.04089",
        citations: 8,
        arxiv: "2307.04089"
    },

    // ── 2022 ──
    {
        year: 2022,
        title: "Quantum approach to accelerate finite volume method on steady computational fluid dynamics problems",
        authors: ["ZY Chen", "C Xue", "SM Chen", "BH Lu", "YC Wu", "JC Ding", "SH Huang", "GP Guo"],
        venue: "Quantum Information Processing 21, 137",
        citations: 60,
        doi: "10.1007/s11128-022-03603-3"
    },
    {
        year: 2022,
        title: "Quantum computational quantitative trading: high-frequency statistical arbitrage algorithm",
        authors: ["XN Zhuang", "ZY Chen", "YC Wu", "GP Guo"],
        venue: "New Journal of Physics 24, 073036",
        citations: 15,
        doi: "10.1088/1367-2630/ac8662"
    },
    {
        year: 2022,
        title: "Effects of quantum noise on quantum approximate optimization algorithm",
        authors: ["C Xue", "ZY Chen", "YC Wu", "GP Guo"],
        venue: "Chinese Physics Letters 38, 3, 030302",
        citations: 130,
        doi: "10.1088/0256-307X/38/3/030302"
    },

    // ── 2021 ──
    {
        year: 2021,
        title: "A quantum circuit simulator and its applications on Sunway TaihuLight supercomputer",
        authors: ["Z Wang", "Z Chen", "S Wang", "W Li", "Y Gu", "G Guo", "Z Wei"],
        venue: "Scientific Reports 11, 355",
        citations: 32,
        doi: "10.1038/s41598-020-79452-2"
    },

    // ── 2019 ──
    {
        year: 2019,
        title: "VQNet: Library for a quantum-classical hybrid neural network",
        authors: ["ZY Chen", "C Xue", "SM Chen", "GP Guo"],
        venue: "arXiv:1901.09133",
        citations: 12,
        arxiv: "1901.09133"
    },

    // ── 2018 ──
    {
        year: 2018,
        title: "64-qubit quantum circuit simulation",
        authors: ["ZY Chen", "Q Zhou", "C Xue", "X Yang", "GC Guo", "GP Guo"],
        venue: "Science Bulletin 63, 15, 964–971",
        citations: 202,
        doi: "10.1016/j.scienceb.2018.08.001"
    },
];
