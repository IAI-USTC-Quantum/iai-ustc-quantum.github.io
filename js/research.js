const researchDirections = [
    {
        id: "quantum-simulation",
        titleKey: "rd_sim_title",
        taglineKey: "rd_sim_tagline",
        descKey: "rd_sim_desc",
        themeKeys: [
            "rd_sim_theme_1",
            "rd_sim_theme_2",
            "rd_sim_theme_3",
            "rd_sim_theme_4"
        ],
        featured: [
            {
                title: "Enabling large-scale and high-precision fluid simulations on near-term quantum computers",
                authors: ["ZY Chen", "TY Ma", "CC Ye", "L Xu", "W Bai", "L Zhou", "MY Tan", "XN Zhuang", "XF Xu"],
                venue: "Computer Methods in Applied Mechanics and Engineering 432, 117428",
                doi: "10.1016/j.cma.2024.117428",
                pubDate: "2024-10",
                summaryKey: "rd_sim_p1_summary"
            },
            {
                title: "A hybrid quantum-classical framework for computational fluid dynamics",
                authors: ["CC Ye", "NB An", "TY Ma", "MH Dou", "W Bai", "DJ Sun", "ZY Chen", "GP Guo"],
                venue: "Physics of Fluids 36, 12",
                doi: "10.1063/5.0234511",
                pubDate: "2024-12",
                summaryKey: "rd_sim_p2_summary"
            },
            {
                title: "Simulation of open quantum systems on universal quantum computers",
                authors: ["HY Liu", "X Lin", "ZY Chen", "C Xue", "TP Sun", "QS Li", "XN Zhuang", "YJ Wang"],
                venue: "Quantum 9, 1765",
                doi: "10.22331/q-2025-1765",
                pubDate: "2025-10",
                summaryKey: "rd_sim_p3_summary"
            },
            {
                title: "Quantum approach to accelerate finite volume method on steady computational fluid dynamics problems",
                authors: ["ZY Chen", "C Xue", "SM Chen", "BH Lu", "YC Wu", "JC Ding", "SH Huang", "GP Guo"],
                venue: "Quantum Information Processing 21, 137",
                doi: "10.1007/s11128-022-03603-3",
                pubDate: "2022-04",
                summaryKey: "rd_sim_p4_summary"
            }
        ]
    },
    {
        id: "quantum-ml",
        titleKey: "rd_ml_title",
        taglineKey: "rd_ml_tagline",
        descKey: "rd_ml_desc",
        themeKeys: [
            "rd_ml_theme_1",
            "rd_ml_theme_2",
            "rd_ml_theme_3",
            "rd_ml_theme_4"
        ],
        featured: [
            {
                title: "End-to-end quantum vision transformer: towards practical quantum speedup in large-scale models",
                authors: ["C Xue", "ZY Chen", "XN Zhuang", "YJ Wang", "TP Sun", "JC Wang", "HY Liu", "YC Wu", "GP Guo"],
                venue: "arXiv:2402.18940",
                arxiv: "2402.18940",
                pubDate: "2024-02",
                summaryKey: "rd_ml_p1_summary"
            },
            {
                title: "Quantum-enhanced LLM efficient fine tuning",
                authors: ["X Kong", "L Li", "ZY Chen", "C Xue", "XF Xu", "HY Liu", "YC Wu", "Y Fang", "H Fang", "K Chen", "GP Guo"],
                venue: "arXiv:2503.12790",
                arxiv: "2503.12790",
                pubDate: "2025-03",
                summaryKey: "rd_ml_p2_summary"
            },
            {
                title: "Quantum Deep Learning: A Comprehensive Review",
                authors: ["Y Ji", "ZY Chen", "M Roth", "DA Kreplin", "C Schiffer", "M King", "O Anton", "MS Alam", "GP Guo"],
                venue: "arXiv:2603.06644",
                arxiv: "2603.06644",
                pubDate: "2026-03",
                summaryKey: "rd_ml_p3_summary"
            },
            {
                title: "QuantumQA: Enhancing Scientific Reasoning via Physics-Consistent Dataset and Verification-Aware Reinforcement Learning",
                authors: ["SX Qu", "TP Sun", "YJ Wang", "HY Liu", "C Xue", "XF Xu", "H Fang", "Y Yang", "YC Wu", "GP Guo", "ZY Chen"],
                venue: "ACL 2026",
                arxiv: "2604.18176",
                pubDate: "2026-04",
                summaryKey: "rd_ml_p4_summary"
            }
        ]
    },
    {
        id: "quantum-architecture",
        titleKey: "rd_arch_title",
        taglineKey: "rd_arch_tagline",
        descKey: "rd_arch_desc",
        themeKeys: [
            "rd_arch_theme_1",
            "rd_arch_theme_2",
            "rd_arch_theme_3",
            "rd_arch_theme_4"
        ],
        featured: [
            {
                title: "Demonstrating Coherent Quantum Routers for Bucket-Brigade Quantum Random Access Memory on a Superconducting Processor",
                authors: ["S Zhang", "YJ Wang", "P Wang", "RZ Zhao", "XY Yang", "ZA Zhao", "TL Wang", "ZY Chen", "P Duan", "YC Wu", "GP Guo"],
                venue: "arXiv:2505.13958",
                arxiv: "2505.13958",
                pubDate: "2025-05",
                summaryKey: "rd_arch_p1_summary"
            },
            {
                title: "Hardware-Efficient Quantum Random Access Memory Design with a Native Gate Set on Superconducting Platforms",
                authors: ["YJ Wang", "S Zhang", "TP Sun", "ZA Zhao", "XF Xu", "XN Zhuang", "HY Liu", "C Xue", "P Duan", "YC Wu", "ZY Chen", "GP Guo"],
                venue: "Advanced Quantum Technologies 3, 2400519",
                doi: "10.1002/qute.202400519",
                pubDate: "2025-01",
                summaryKey: "rd_arch_p2_summary"
            },
            {
                title: "SparQSim: An Efficient Quantum Algorithm Simulator Leveraging State Sparsity",
                authors: ["TP Sun", "YJ Wang", "ZY Chen", "C Xue", "HY Liu", "XN Zhuang", "XF Xu", "YC Wu", "GP Guo"],
                venue: "Chinese Physics B, 2026",
                arxiv: "2504.02455",
                pubDate: "2026-05",
                summaryKey: "rd_arch_p3_summary"
            },
            {
                title: "HiMA: Hierarchical Quantum Microarchitecture for Qubit-Scaling and Quantum Process-Level Parallelism",
                authors: ["Q Zhou", "ZH Mei", "HQ Shi", "LL Guo", "XY Yang", "YJ Wang", "XF Xu", "C Xue"],
                venue: "Future Generation Computer Systems, 108484",
                doi: "10.1016/j.future.2026.108484",
                pubDate: "2026-03",
                summaryKey: "rd_arch_p4_summary"
            }
        ]
    },
    {
        id: "quantum-error-correction",
        titleKey: "rd_ec_title",
        taglineKey: "rd_ec_tagline",
        descKey: "rd_ec_desc",
        themeKeys: [
            "rd_ec_theme_1",
            "rd_ec_theme_2",
            "rd_ec_theme_3",
            "rd_ec_theme_4"
        ],
        featured: [
            {
                title: "Demonstrating a universal logical gate set in error-detecting surface codes on a superconducting quantum processor",
                authors: ["J Zhang", "ZY Chen", "YJ Wang", "BH Lu", "HF Zhang", "JN Li", "P Duan", "YC Wu"],
                venue: "npj Quantum Information 11, 177",
                doi: "10.1038/s41534-025-00999-9",
                pubDate: "2025-07",
                summaryKey: "rd_ec_p1_summary"
            },
            {
                title: "Low-Overhead and High-Fidelity Preparation of Logical Non-Clifford States with Multilevel Transversal Injection",
                authors: ["J Zhang", "TH Wei", "XN Zhuang", "ZY Chen", "WC Kong", "YC Wu", "GP Guo"],
                venue: "Physical Review Letters 136, 080603",
                doi: "10.1103/mjsj-hxyj",
                pubDate: "2026-02",
                summaryKey: "rd_ec_p2_summary"
            },
            {
                title: "Universal Scalable Characterization and Correction of Pulse Distortions in Controlled Quantum Systems",
                authors: ["LL Guo", "P Duan", "S Zhang", "XX Yang", "C Zhang", "L Du", "HF Zhang", "HR Tao", "TL Wang", "ZL Jia", "ZY Chen", "GP Guo"],
                venue: "Physical Review Applied 21 (6), 064060",
                doi: "10.1103/PhysRevApplied.21.064060",
                pubDate: "2024-06",
                summaryKey: "rd_ec_p3_summary"
            },
            {
                title: "CAMEL: Physically Inspired Crosstalk-Aware Mapping and Gate Scheduling for Frequency-Tunable Quantum Chips",
                authors: ["BH Lu", "P Wang", "ZY Chen", "HY Liu", "TP Sun", "P Duan", "YC Wu", "GP Guo"],
                venue: "IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD), 2025",
                doi: "10.1109/TCAD.2024.3507580",
                pubDate: "2025-01",
                summaryKey: "rd_ec_p4_summary"
            }
        ]
    },
    {
        id: "quantum-algorithms",
        titleKey: "rd_algo_title",
        taglineKey: "rd_algo_tagline",
        descKey: "rd_algo_desc",
        themeKeys: [
            "rd_algo_theme_1",
            "rd_algo_theme_2",
            "rd_algo_theme_3",
            "rd_algo_theme_4"
        ],
        featured: [
            {
                title: "Quantum computational quantitative trading: high-frequency statistical arbitrage algorithm",
                authors: ["XN Zhuang", "ZY Chen", "YC Wu", "GP Guo"],
                venue: "New Journal of Physics 24, 073036",
                doi: "10.1088/1367-2630/ac8662",
                pubDate: "2022-07",
                summaryKey: "rd_algo_p1_summary"
            },
            {
                title: "Quantum Encoding and Analysis on Continuous Time Stochastic Process with Financial Applications",
                authors: ["XN Zhuang", "ZY Chen", "C Xue", "YC Wu", "GP Guo"],
                venue: "Quantum 7, 1127",
                doi: "10.22331/q-2023-1127",
                pubDate: "2023-10",
                summaryKey: "rd_algo_p2_summary"
            },
            {
                title: "A Unified Poisson Summation Framework for Generalized Quantum Matrix Transformations",
                authors: ["C Wang", "XN Zhuang", "MH Dou", "ZY Chen", "GP Guo"],
                venue: "arXiv:2604.02874",
                arxiv: "2604.02874",
                pubDate: "2026-04",
                summaryKey: "rd_algo_p3_summary"
            },
            {
                title: "An improved QFT-based quantum comparator and extended modular arithmetic using one ancilla qubit",
                authors: ["Y Yuan", "C Wang", "B Wang", "ZY Chen", "MH Dou", "YC Wu", "GP Guo"],
                venue: "New Journal of Physics 25, 103011",
                doi: "10.1088/1367-2630/ad09e5",
                pubDate: "2023-10",
                summaryKey: "rd_algo_p4_summary"
            }
        ]
    }
];
