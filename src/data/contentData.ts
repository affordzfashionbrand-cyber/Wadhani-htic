import { Mentor, Project, FAQItem } from '../types';

export const LOGOS = {
  mainHeader: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOREgM13awofSwbjoMFIx7Jm3Yzsw3f-khZ03grU9komHpgMFTmWfhllzIE4vvzGbpQbX01c-2kf4uB8swV3MV6s_ftGrllVeRxoADLjKDql-SjCsK6koxQpP7-F4jimJAUA3IrW37gdCB_SocMlVCEl7Q7w0axx1eaH2ka0PbQ_3Ay_v0XnrwMG3kNE71FLBhgrXmmOaiWnj807bj-UwOxuG-278d6i2277q4kefkWy_6SHqDId0CO1dXTtiro0CjbQ',
  footerLogo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC40SMpaqpi_FG-k9abaTdxSwC49kez30oFNzPJqm_CB-46fCff0FyVRegnpj2JT6BMHBzadjqJSsjN3S0Jaihpc5m1MSCiaJF8yRg2NarMUBK6VPDa-Yu6_gW8kt7S8Hz6Ah2y_X7s7KBwqRLIT1mfoM74ZzSV5LPqXUIlabKmdLotM7cCjcHMFD8lM7J4TvcdzSSJ62mU-nJ4i724xoxwaohYN3LERnWlbptZeAbhn-uCgJSN2zd2x-aa9N2K2Q_6zQ',
  iitmLogo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLevNtNn-VbfD7dtkn94kpBXwq5qLy7ae9fFmdOzfnn2U_oFNai3lRGAC145-R-GkjSijXKyNSJuKCduCkVcfgn6sem-NmA79E2JEDol_ij8wGr1boGIXjOF-gjLFGJUEVfe1J20Y2Wg679TouvDD-JB2nlBHjyWtlnM2oRXvaCvlopdZxrQDt5d4MoAmxt_tlwC818nFcaObOeWH3wQg2gG7ChzAwIkOMEvk6h6XEyFjG-lbAw0l3E5bnk4l4_rqeKg',
  wadhwaniLogo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBq6_vqHEnAgOkQeqYnMzmtO8rI4ZMQfUUh-eOj6bJVUOTmWIdRj9dhgrYnimFY9MQW_E7YdBdGBdek0-ogLP3PARBi32tU1E6wXQCOcmSKvO4i9fqLuzEXd3Ro6YxogdcXzPK1dvCeYEje23R2KjGgNEsFTiGkBhQHxwsYVIZ8xJLaStXwduWKkYEpGMjGs0WagMRtFPpTg6hUNqURRhsEMrnXpIBblYjeUsrCV_TW3SfBPnmBXHhVKULJSIa63bcCOg',
  facilityImage: 'https://lh3.googleusercontent.com/aida/AEtjO1XyVEyytgSwasiC3dEgtgZG4bulSriaulmS0rxRd01cd7fMQwUKW7rFJoGlWCodIxHC4PzYU1bzXN9PuCsLJ5dK_QKEiD2DL0EID5TVYtYcTvIMTWMFQ42VeD_sTgqJ_xdztqPx8TnPLfUoN7Z8B1kXzSyOzqpgdO1dJGX69D2H1zrdA0zrZHOLrKThIi6LIlU53_9LtUlZCAmJuqw7O81wywfAAZLSS-l8Orsx36FgjQpbH_Lq8liAtQ',
  cleanroomImage: 'https://lh3.googleusercontent.com/aida/AEtjO1VQjbAB22HNnEtbfzJ4yucudaFGZx5tw9R6ewmmu6iJbo4nZ04lpJRdgvRkzDohm7qd-X_gFZySDIjpSUM8y4xhjBNSAQkYxV5folp_5IjX26XkPB1colIZbRuz5--ACv-4nYNGYs7X-vtlcRvR6KCwu_E80Z6b88Vvo11C6zjUAJ89k-1n-ZFeK4CueyMqo3BjOMwBD2cG1_rcFrZJgs8IqvmK3Mde1GnrTlSX4ZDlF7rZzs7RcnK1TXY'
};

export const MENTORS: Mentor[] = [
  {
    id: 'mohana',
    name: 'Dr. Mohanasankar Sivaprakasam',
    role: 'Faculty-in-Charge · HTIC',
    title: 'Professor, Dept. of EE, IIT Madras',
    affiliation: 'Healthcare Technology Innovation Centre',
    bio: 'Pioneer in biomedical device translation, leading translational R&D and clinical engineering at HTIC.',
    category: 'leadership',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZOslVmamGtmqCdNJWTaqmZQqckkJg6SrR_eJQLMDWOE9gzVBg1TbFm-ROUgJ7bLTncwlQl_ecrQHOKl4247e1BajrnkW8lZRxMFzGx1VLLO_AMKPynaT0a6TWgDnKoVG81OsyTy2225uosqxFg2RTPFXoI23hrB7snGHcpdLcUGdfd4ZWe6u2CLEAAGm5d5nwUslD8bG9NtMKIL-xPmK5ztK2Fe2_HjyFG2UjI0xoDSOe1Wn-ZCFdUmehDhKP_KNpCA',
    tags: [
      { label: 'Medical Device R&D', icon: 'biotech' },
      { label: 'Clinical Translation', icon: 'local_hospital' },
      { label: 'Biomedical Tech', icon: 'precision_manufacturing' }
    ]
  },
  {
    id: 'ravi',
    name: 'Dr. Ravishankar Ramanathan',
    role: 'CEO · HTIC Incubator',
    title: 'Chief Executive Officer, HTIC',
    affiliation: 'IIT Madras Research Park',
    bio: 'Leading executive operations, commercial translation, startup incubation acceleration, and clinical partnerships.',
    category: 'leadership',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpmbABQ3djqydOmL2Uo0P5Aaead3N_ut4-3fIQ2Y1IgJSj_mtO1QW2HWEoW1_Syytx_50F5HOcFOtCUpxzoKWxMPrMaoj4wgRagro--fON8ZMkQTatNEX7ZzRszuojSujFtciLX6m3a1Vv1A7RVc1PAPgD1BkWsvirJ2_dmyicTHgaWCak4QTEgkWAcLDeR87P5D6cckXWmb5sWfga_e0ZC-wf0o9elrSICzkkM2jmur3sX68hti1nwo4IYR2pXMrenw',
    tags: [
      { label: 'Incubation', icon: 'corporate_fare' },
      { label: 'Startup Scale', icon: 'rocket_launch' },
      { label: 'Commercialization', icon: 'handshake' }
    ]
  },
  {
    id: 'jayaraj',
    name: 'Dr. Jayaraj Joseph',
    role: 'Chief Technologist · HTIC',
    title: 'Chief Technologist, HTIC · EE, IIT Madras',
    affiliation: 'Dept. of Electrical Engineering',
    bio: 'Directing bio-instrumentation R&D, cardiovascular sensor telemetry, non-invasive arterial stiffness meters (ARTSENS), and medical hardware prototyping benches.',
    category: 'instrumentation',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBH6g3ARSa5oEQRvwLtsLfE72F3XdyweHHv_1TSHpq62ZVbUdeId4nNwG6w8XN92NsPKD7zou-1hqCJzRa7EqpqUExRzfKxfVurJijhvx5BGR4YMDwQ-jp5sH6S5XrmzY0ffKiNXdfxZE6O0gaV7JiEZhJEK-IteCQI9j219YvN_aYqsK0ZnWAVTZSkF0rZ957KuIk1FHb-LMapR8fOQ_2qr5Vj5E2W7A7b8XWnj4N0QZiHfmSpwoqvFuqOvzyBcV2O9Q',
    tags: [
      { label: 'Cardiovascular Telemetry', icon: 'monitor_heart' },
      { label: 'ARTSENS / Bio-Sensors', icon: 'sensors' },
      { label: 'Medical Hardware R&D', icon: 'memory' }
    ]
  },
  {
    id: 'boby',
    name: 'Prof. Boby George',
    role: 'Head · Dept of MST, IIT Madras',
    title: 'Professor, Dept. of EE & Head, Dept. of MST, IIT Madras',
    affiliation: 'Dept. of Medical Sciences & Technology',
    bio: 'Leading advanced research in measurement science, sensor interface electronics, and translational biomedical & industrial instrumentation systems.',
    category: 'faculty',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA46Epat9fG7j1Fwvzpu8KRovXL4LgKwM3UY3dYwivh342vWtm3hA2q0UVmQLg1BuWk5wxygbpMVfPJb15BkURWUUqwvf0Az-sGEOYyRelgeSF7BbvNO0PcUZRmK8d1e-ZigqyoyNPuWep6AUJl0b_rYdOkSRRj82LNzNdNwJFPkfPvp7cbNjpmzsHVbtZIUnVQDU0qKkHWZ6gS60GYlqd0meE7NtFuw17Awz7js6HkZMSq6KW2Y3cmkJRSPABFT8D9vQ',
    tags: [
      { label: 'Measurement Science', icon: 'straighten' },
      { label: 'Sensor Interface Electronics', icon: 'sensors' },
      { label: 'Biomedical Instrumentation', icon: 'biotech' }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'surgibot',
    code: 'IITM-SRG-01',
    title: 'Minimally Invasive Tele-Operated Surgical System (SurgiBot IITM)',
    category: 'Surgical Robotics',
    categorySlug: 'robotics',
    badge: 'TRL 6: Cadaveric Trials',
    trl: 6,
    trlPhase: 'Pre-Clinical Operational Phase',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAB_jCJvAOo0zX8jSguwuptNZ5-LikOIUwEj0OzZhov4515lupOYTPribVuNSvCqPf15S0Jv4lzd_3kVO0mzBY97h7cNi_27cLA_ZiSKK_3TQR2dNCPV4ZH9E3nZtDJcVeMq3NbaRhR0EGY5VaaorOVa5VRWR5o0xsKHhSvqbDAaOhNdflXDcFNgUo1hqv477Gnen_s9mzo40e6vWpFPMSnXIKfYDqYm4Z-t10swuZ7dGAuEZOZSgDi',
    description: 'Next-generation robotic laparoscopic master-slave console offering sub-millimeter precision and multi-axis haptic feedback, designed to slash robotic surgery costs by 75% across tier-2 and tier-3 hospital networks.',
    keyArchitecture: 'Sub-millimeter haptic feedback, 3D 4K endoscope',
    electricalSafety: 'IEC 60601-1-12 Dual Shielding Verified',
    clinicalPartners: 'AIIMS New Delhi & Madras Medical College',
    principalInvestigator: 'Dr. Mohanasankar Sivaprakasam & HTIC Team',
    specs: [
      { label: 'Degrees of Freedom', value: '7-DoF articulated robotic slave arms with wrist tremor compensation' },
      { label: 'Haptic Latency', value: '< 8 milliseconds over high-speed real-time optical Ethernet' },
      { label: 'Imaging System', value: 'Stereoscopic Dual 4K Ultra-HD with indocyanine green (ICG) fluorescence' },
      { label: 'Sterility & Autoclaving', value: 'Quick-disconnect modular trocars compatible with autoclave standard ISO 17665' },
      { label: 'Target Procedure Cost', value: '₹35,000 to ₹45,000 (compared to ₹1,80,000+ for imported systems)' }
    ],
    clinicalHighlights: [
      'Successful 12-hour continuous multi-organ cadaveric validation trials at AIIMS New Delhi',
      'Ergonomic testing conducted across 24 senior laparoscopic gastrointestinal surgeons',
      'Dual safety hardware interlock for involuntary motion suppression during power fluctuations',
      'Animal model trials completed with zero post-operative anastomotic leakage'
    ],
    regulatoryStatus: 'Pre-submission consultation completed with CDSCO Central Licensing Authority. Investigational Medical Device Dossier (Form MD-22) in active review.'
  },
  {
    id: 'pulsecare',
    code: 'IITM-CV-88',
    title: 'Continuous Hemodynamic & Arterial Stiffness Telemetry (PulseCare)',
    category: 'Cardiovascular Telemetry',
    categorySlug: 'cardiovascular',
    badge: 'TRL 7: Multicentre Validation',
    trl: 7,
    trlPhase: 'Hospital Clinical Cohort Verification',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQE56o1QqtgOTv6jzQQHU27ygZrt04YHWNcSahhkPml4fXQm7575NOGMIQMugU777yjA_2DSeNax-gzGNVapK7Ngg39RAmG6QqawEzd_3JZ9f1IkJ4cdN_8E2HgLHX6gsO4uWxwzmeKWstl6zSUjRINqlfKMe13E9DbKtNQyA1ylznhRsdA56Yk-vcAiZfd8_kiAAq7K8Z3L4O7xtJAFAO3_yyBI8J1WfDC2529mJ4WO9mp-e__qlX',
    description: 'Non-invasive, cuffless optical pulse wave velocity monitor providing continuous real-time vascular age, central aortic blood pressure, and cardiovascular risk prediction.',
    keyArchitecture: 'Dual-wavelength photoplethysmography + transit-time micro-ultrasound',
    electricalSafety: 'IEC 60601-1 Type BF Defibrillator-proof patient isolation',
    clinicalPartners: 'Sri Ramachandra Institute & Apollo Hospitals',
    principalInvestigator: 'Dr. Jayaraj Joseph & HTIC Telemetry Group',
    specs: [
      { label: 'Quality Standard', value: 'ISO 13485 Pilot Line Complete' },
      { label: 'Regulatory Filing', value: 'CDSCO Class B MDR Lodged' },
      { label: 'Measurement Accuracy', value: 'Blood Pressure ±3.2 mmHg (AAMI / ESH / ISO 81060-2 compliant)' },
      { label: 'Arterial Elasticity Index', value: 'Carotid-femoral Pulse Wave Velocity (cfPWV) correlation r = 0.94' },
      { label: 'Cohort Size Validated', value: '1,200+ ICU and cardiac OPD patients' }
    ],
    clinicalHighlights: [
      'Multi-centre prospective clinical study published in leading biomedical journals',
      'Replaces painful invasive arterial line catheterization in 70% of stable ICU admissions',
      'Integrated cellular IoT telemetry with secure AES-256 cloud hospital dashboard integration'
    ],
    regulatoryStatus: 'Manufacturing License MD-5 application in progress under Medical Device Rules (MDR 2017).'
  },
  {
    id: 'microfluidics',
    code: 'IITM-MF-04',
    title: 'Rapid Microfluidic Molecular Diagnostics for Sepsis & AMR',
    category: 'Microfluidics & Bio-MEMS',
    categorySlug: 'microfluidics',
    badge: 'TRL 5: Clinical Lab Testbed',
    trl: 5,
    trlPhase: 'Validated in Simulated Biological Media',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsQGdJD_1W_TJcygFL8bdu2UPYXLW0ObPMF44_32gicu2CHh0oxiQqEk2TZgsJ6FpY9NVtYCMC7PyvdRdncwAsm_GTTub-OBKMIamylN-EiISlQKDO0-_1JpxRZ-WY2S7IPw77rAtVtyx6virAHd8xliyKEIXUlMruBzityLZ1APqZMQaOeOl9Xo8uv9SaBtLQZWp9rMiGSS_pAf7SAaPmoa6aM8kGZkoSrD6YSfDHhfQMUR5Ysp-y',
    description: 'Disposable lab-on-a-chip cartridge and portable optical reader detecting critical blood pathogens and phenotypic antibiotic resistance profiles directly from whole blood.',
    keyArchitecture: 'Centrifugal microfluidic disc with surface-enhanced Raman & isothermal amplification',
    electricalSafety: 'CE-IVD and IEC 61010-2-101 laboratory diagnostic compliance',
    clinicalPartners: 'Christian Medical College (CMC) Vellore & National Institute of Epidemiology',
    principalInvestigator: 'Dept. of Biotechnology & Microfluidics Labs, IIT Madras',
    specs: [
      { label: 'Turnaround Time', value: '< 45 minutes from whole blood puncture to AST report' },
      { label: 'Analytical Sensitivity', value: '> 98.4% concordance with 48-hour blood culture gold standard' },
      { label: 'Cartridge Shelf Life', value: 'Lyophilized reagents stable for 12 months at 25°C to 35°C' },
      { label: 'Target Pathogens', value: 'Klebsiella pneumoniae, Pseudomonas aeruginosa, E. coli, MRSA' },
      { label: 'Sample Volume Required', value: 'Only 250 µL whole blood (finger-prick or pediatric draw)' }
    ],
    clinicalHighlights: [
      'Rapid AMR resistance profiling enables targeted antibiotics 40 hours faster than standard culture',
      'Demonstrated 0% cross-reactivity against 30 common clinical commensals',
      'Ruggedized portable reader designed for rural district healthcare primary centres'
    ],
    regulatoryStatus: 'Pre-clinical analytic verification complete. Multicentric diagnostic validation protocol drafted with ICMR.'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'cleanroom',
    question: 'What criteria must MedTech prototypes meet to access the ISO Class 7/8 Cleanrooms?',
    answer: 'Hardware prototypes should generally demonstrate Technology Readiness Level 3 (proof-of-concept components verified) or higher. Teams must complete safety compliance protocols, material biocompatibility checklists, and cleanroom gowning/ESD certification provided during onboarding.'
  },
  {
    id: 'ip',
    question: 'How does WIN CoE handle Intellectual Property (IP) co-developed with IIT Madras?',
    answer: 'Intellectual property co-developed at WIN CoE is administered through the Centre for Industrial Consultancy and Sponsored Research (IC&SR), IIT Madras. Joint inventorship agreements are drafted prior to lab execution, guaranteeing clear licensing rights, royalty frameworks, and spin-off startup spin-out paths.'
  },
  {
    id: 'grants',
    question: 'Are grants non-dilutive for translational researchers?',
    answer: 'Yes. Core WIN CoE seed funding supported by the Wadhwani Foundation is non-dilutive grant capital designed specifically for translational validation, clinical trial compliance, and regulatory filing support. Equity-bearing incubator support is optional via IITM Incubation Cell.'
  },
  {
    id: 'trials',
    question: 'How are clinical hospital trial partners assigned to projects?',
    answer: 'WIN CoE has established formal institutional MOUs with premier medical colleges and tertiary hospital clusters including AIIMS New Delhi, CMC Vellore, Sri Ramachandra Institute of Higher Education, and Apollo Hospitals. Projects are matched based on clinical specialty and surgical ethics committee approvals.'
  }
];
