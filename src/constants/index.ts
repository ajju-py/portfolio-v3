import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TProject,
  TCertification,
  TSkillCategory,
  TEducation,
} from "../types";

import {
  rhel,
  aws,
  podman,
  terraform,
  ansible,
  bash,
  python,
  linux,
  docker,
  git,
  typescript,
  reactjs,
  threejs,
  redhatCompany,
  academicCompany,
  infosysCompany,
  awslabCompany,
  linuxlabCompany,
  projectAws,
  projectLinux,
  projectBuildingPassport,
  projectEsp32,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "experience",
    title: "Journey",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services: TService[] = [
  {
    title: "Linux Systems Administration",
    subtitle: "RHEL 9.x · SELinux · Firewalld · systemd",
    icon: rhel,
    description:
      "Administering enterprise Red Hat Enterprise Linux and Fedora environments with strict security baselines, LVM storage, user permissions, and persistent system logging.",
  },
  {
    title: "Containers & Podman",
    subtitle: "Rootless Containers · OCI · Volumes",
    icon: podman,
    description:
      "Building and managing containerized workloads with Podman and Docker, focusing on rootless user namespaces, custom bridge networks, and reproducible Containerfiles.",
  },
  {
    title: "Infrastructure Automation",
    subtitle: "Terraform IaC · Bash · Ansible · Git",
    icon: terraform,
    description:
      "Automating repetitive system tasks, server provisioning, and cloud resource declarations through modular Bash shell scripts and declarative Terraform HCL manifests.",
  },
  {
    title: "Cloud Practice & Security",
    subtitle: "AWS CLI · S3 · IAM · Local Emulators",
    icon: aws,
    description:
      "Practicing cloud-native workflows using the AWS CLI, Python/Boto3, and local emulator testbeds, evaluating security baselines, IAM concepts, and configuration audits.",
  },
];

export const skillsCategorized: TSkillCategory[] = [
  {
    category: "Linux & Operating Systems",
    badge: "Hands-on · Systems",
    description:
      "Practical administration on Red Hat Enterprise Linux (RHEL 9.x) and Fedora, managing security policies, services, storage, and diagnostics.",
    skills: [
      "Red Hat Enterprise Linux (RHEL 9.x)",
      "Fedora Linux",
      "Linux Command Line (CLI)",
      "User, Group & File Permissions",
      "Storage & LVM Partitioning",
      "systemd & systemctl Service Units",
      "journalctl System Log Analysis",
      "SELinux Enforcing Mode & Policies",
      "firewalld Rules & Zone Management",
      "SSH Key-Based Hardening",
      "Cron & systemd Timer Scheduling",
      "Structured Service Troubleshooting",
    ],
  },
  {
    category: "Containers & Cloud-Native",
    badge: "Hands-on · Cloud-Native",
    description:
      "Practical container creation and lifecycle management using Podman, OCI standards, and cloud-native workflows.",
    skills: [
      "Podman (Rootless)",
      "Docker Fundamentals",
      "OCI Container Images",
      "Containerfile & Dockerfile Authoring",
      "Container Lifecycle Management",
      "Container Networking Fundamentals",
      "Persistent Storage Volumes (:Z)",
      "Container Registries",
      "OpenShift & Kubernetes Fundamentals",
    ],
  },
  {
    category: "Cloud & Infrastructure",
    badge: "Active Learning Area",
    isLearningArea: true,
    description:
      "Developing hands-on cloud skills using the AWS CLI, Terraform IaC, and local AWS-compatible test environments.",
    skills: [
      "Amazon Web Services (AWS)",
      "AWS CLI Automation & Profiles",
      "Amazon S3 Fundamentals",
      "AWS IAM Fundamentals & Policies",
      "Amazon EC2 Fundamentals",
      "AWS Lambda Fundamentals",
      "Terraform Infrastructure as Code",
      "Terraform State Management",
      "Local AWS Service Emulation (Floci)",
      "Python / Boto3 Cloud Scripts",
    ],
  },
  {
    category: "Automation & Development Tools",
    badge: "Hands-on",
    description:
      "Writing reusable shell scripts and declarative configurations to eliminate manual system toil and maintain reproducibility.",
    skills: [
      "Git & GitHub Workflows",
      "Bash Shell Scripting",
      "Python for Infrastructure Experiments",
      "Ansible Playbook Fundamentals",
      "Linux Troubleshooting Utilities",
      "Node.js & npm Tooling",
      "Markdown Technical Documentation",
      "WSL2 Ubuntu Environment",
    ],
  },
  {
    category: "Networking & Security",
    badge: "Hands-on & Coursework",
    description:
      "Protocol fundamentals, network packet flow, access control principles, and packet-level inspection.",
    skills: [
      "TCP/IP & UDP Fundamentals",
      "DNS & HTTP/HTTPS Protocols",
      "IP Addressing & Subnetting",
      "Linux Networking & Diagnostics",
      "Identity & Access Management (IAM)",
      "Least-Privilege Security Principles",
      "SELinux Context Enforcement",
      "Wireshark Packet Analysis",
      "802.11 Protocol Analysis (ESP32 Lab)",
    ],
  },
  {
    category: "Web & Application Development",
    badge: "Secondary Skillset",
    description:
      "Modern full-stack web and UI development to build administrative dashboards and interfaces for software systems.",
    skills: [
      "React JS & TypeScript",
      "Next.js App Router",
      "Node.js & Express",
      "MongoDB & Mongoose",
      "JWT & Role-Based Access Control",
      "Tailwind CSS & Responsive UI",
      "Three.js & WebGL Visuals",
      "Vite Build Tooling",
    ],
  },
];

export const technologies: TTechnology[] = [
  {
    name: "Red Hat Linux",
    icon: rhel,
    category: "OS",
  },
  {
    name: "AWS CLI",
    icon: aws,
    category: "Cloud",
  },
  {
    name: "Podman",
    icon: podman,
    category: "Containers",
  },
  {
    name: "Terraform",
    icon: terraform,
    category: "IaC",
  },
  {
    name: "Ansible",
    icon: ansible,
    category: "Automation",
  },
  {
    name: "Bash",
    icon: bash,
    category: "Scripting",
  },
  {
    name: "Python",
    icon: python,
    category: "Scripting",
  },
  {
    name: "Linux",
    icon: linux,
    category: "OS",
  },
  {
    name: "Docker",
    icon: docker,
    category: "Containers",
  },
  {
    name: "Git",
    icon: git,
    category: "Dev Tools",
  },
  {
    name: "TypeScript",
    icon: typescript,
    category: "Web",
  },
  {
    name: "React JS",
    icon: reactjs,
    category: "Web",
  },
  {
    name: "Three JS",
    icon: threejs,
    category: "3D",
  },
];

export const experiences: TExperience[] = [
  {
    title: "Linux Systems Administration & Hardening",
    companyName: "Red Hat Enterprise Linux (RHEL 9.x)",
    icon: redhatCompany,
    iconBg: "#ee0000",
    date: "2025 – Present",
    type: "lab",
    points: [
      "Extensive hands-on systems administration across Red Hat Enterprise Linux 9 and Fedora environments.",
      "Configured storage with LVM, managed systemd services, firewalld zones, and enforced SELinux in enforcing mode.",
      "Automated user management, permission verification, and audit logging using structured Bash scripts.",
      "Performed system diagnostics, troubleshooting service startup failures with journalctl and dmesg.",
    ],
  },
  {
    title: "Container Development with Podman",
    companyName: "Cloud-Native Infrastructure Track",
    icon: redhatCompany,
    iconBg: "#892ca0",
    date: "2025 – Present",
    type: "lab",
    points: [
      "Completed comprehensive container training focused on building and running rootless containers with Podman.",
      "Authored optimized Containerfiles, configured private registries, and managed persistent volumes with SELinux context flags (:Z).",
      "Configured user-defined container bridge networks for isolated multi-container communication.",
      "Packaged container startup definitions using systemd for automated boot recovery and lifecycle supervision.",
    ],
  },
  {
    title: "Local Cloud & IaC Engineering Practice",
    companyName: "Self-Directed Infrastructure Labs",
    icon: awslabCompany,
    iconBg: "#1b2330",
    date: "2025 – Present",
    type: "lab",
    points: [
      "Constructed a local AWS-compatible experimentation environment using the AWS CLI, Terraform, and a local emulator.",
      "Authored declarative Terraform HCL scripts declaring S3 bucket configurations, tags, and lifecycle policies.",
      "Conducted security audits checking IAM evaluation boundaries, container socket mounts, and state file persistence.",
      "Wrote Python verification scripts utilizing Boto3 to programmatically interact with local cloud storage endpoints.",
    ],
  },
  {
    title: "Networking and Web Technology Specialization",
    companyName: "Infosys Springboard",
    icon: infosysCompany,
    iconBg: "#003366",
    date: "2025",
    type: "milestone",
    points: [
      "Completed structured coursework covering TCP/IP protocol suite, HTTP/HTTPS web architecture, and subnetting.",
      "Analyzed network packet flows, DNS resolution lifecycles, and client-server socket communication.",
      "Applied network inspection techniques using Wireshark and Linux CLI diagnostic utilities.",
    ],
  },
  {
    title: "B.Tech in Computer Science and Engineering",
    companyName: "Maharashtra Institute of Technology",
    icon: academicCompany,
    iconBg: "#1e293b",
    date: "Sept 2024 – Present (In Progress)",
    type: "education",
    points: [
      "Pursuing formal undergraduate engineering degree (Third year, fifth semester; expected graduation 2027).",
      "Focusing on operating systems, computer networking, distributed systems, and software engineering principles.",
      "Actively volunteering in Red Hat Academy Day hands-on Linux & DevOps workshop sessions.",
    ],
  },
  {
    title: "Diploma in Computer Engineering",
    companyName: "Marathwada Institute of Technology",
    icon: academicCompany,
    iconBg: "#1e293b",
    date: "Dec 2020 – July 2023",
    type: "education",
    points: [
      "Built rigorous core computer engineering foundations in computer architecture, C, data structures, and Linux fundamentals.",
      "Secured 1st Rank in Inter-Departmental Technical Quiz Competition.",
      "Graduated with distinction and gained admission to B.Tech Computer Science degree program.",
    ],
  },
];

export const certifications: TCertification[] = [
  {
    id: "rhel-admin-curriculum",
    title: "Linux Systems Administration & Security",
    subtitle: "RHEL 9.x Enterprise Administration",
    issuer: "Red Hat Academy Curriculum",
    year: "2025–2026",
    type: "training",
    highlight: true,
    icon: redhatCompany,
    iconBg: "#ee0000",
    status: "Curriculum Track",
    description:
      "Comprehensive hands-on curriculum covering Red Hat Enterprise Linux system configuration, LVM storage management, service management with systemd, firewalld network zones, and SELinux enforcement.",
    skillsCovered: [
      "RHEL 9 System Administration",
      "SELinux Enforcing Mode",
      "firewalld & Network Isolation",
      "LVM Storage & File Systems",
      "systemd Services & journalctl",
      "User Permissions & SSH Hardening",
    ],
  },
  {
    id: "podman-containers-curriculum",
    title: "Containers & Cloud-Native Development",
    subtitle: "Podman & Container Workflows",
    issuer: "Red Hat Academy Curriculum",
    year: "2025–2026",
    type: "training",
    highlight: true,
    icon: redhatCompany,
    iconBg: "#892ca0",
    status: "Curriculum Track",
    description:
      "Hands-on container curriculum covering container fundamentals, Containerfile authoring, rootless Podman execution, persistent storage volumes with SELinux flags (:Z), and multi-container networking.",
    skillsCovered: [
      "Podman Rootless Architecture",
      "Containerfile / Image Building",
      "Container Lifecycle Management",
      "Persistent Storage Volumes (:Z)",
      "Container Networking",
      "OpenShift Fundamentals",
    ],
  },
  {
    id: "infosys-networking",
    title: "Networking and Web Technology",
    subtitle: "Protocol Architecture & Inspection",
    issuer: "Infosys Springboard",
    year: "2025",
    verifyUrl: "https://infyspringboard.onwingspan.com/",
    type: "certification",
    highlight: false,
    icon: infosysCompany,
    iconBg: "#003366",
    status: "Course Completion",
    description:
      "Comprehensive training covering computer networking architectures, TCP/IP stack protocols, routing, HTTP/HTTPS web communication standards, and fundamental diagnostic methodologies.",
    skillsCovered: [
      "TCP/IP Suite",
      "HTTP / HTTPS Architecture",
      "IP Addressing & Subnetting",
      "DNS / DHCP Operations",
      "Network Diagnostics & Wireshark",
    ],
  },
  {
    id: "rhce-training",
    title: "RHCE Training — Ansible Automation",
    subtitle: "Configuration Management as Code",
    issuer: "Red Hat Academy Curriculum",
    year: "2025–2026",
    type: "training",
    highlight: false,
    icon: redhatCompany,
    iconBg: "#1e1e24",
    status: "Curriculum Track",
    description:
      "Structured curriculum covering Ansible orchestration, automated RHEL administration, tasks delegation, Jinja2 templates, and configuration as code.",
    skillsCovered: [
      "Ansible Playbooks",
      "System Roles",
      "Multi-Host Orchestration",
      "Configuration as Code",
    ],
  },
  {
    id: "csc-cybersecurity",
    title: "Cybersecurity Professional Basic",
    subtitle: "Foundational Security Principles",
    issuer: "CSC Academy",
    year: "2020",
    type: "certification",
    highlight: false,
    icon: linuxlabCompany,
    iconBg: "#0f172a",
    status: "Foundational Credential",
    description:
      "Foundational credential covering principles of information security, defensive network configurations, and risk mitigation methodologies.",
    skillsCovered: [
      "Cybersecurity Hygiene",
      "Threat Vector Identification",
      "Access Control Principles",
    ],
  },
];

export const education: TEducation[] = [
  {
    degree: "B.Tech in Computer Science and Engineering — In Progress",
    institution: "Maharashtra Institute of Technology",
    location: "Chhatrapati Sambhaji Nagar, Maharashtra, India",
    period: "Sept 2024 – July 2027 (Expected)",
    icon: academicCompany,
    iconBg: "#0f172a",
    description:
      "Undergraduate computer science engineering degree focusing on operating systems, computer networks, cloud computing, distributed systems, and software engineering principles. Currently in third year, fifth semester.",
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Marathwada Institute of Technology Engineering College",
    location: "Satara, Maharashtra, India",
    period: "Dec 2020 – July 2023",
    icon: academicCompany,
    iconBg: "#0f172a",
    description:
      "Technical diploma establishing strong foundations in computer architecture, C programming, data structures, database management systems, and Linux basics.",
    achievement: "Secured 1st Rank in Inter-Departmental Technical Quiz Competition.",
  },
];

export const projects: TProject[] = [
  {
    id: "local-aws-lab",
    name: "Local AWS Infrastructure Lab",
    category: "Cloud Engineering",
    categoryBadge: "Featured Cloud Lab",
    isPrimary: true,
    description:
      "A reproducible local cloud experimentation environment for practicing AWS CLI workflows, storage operations, infrastructure provisioning with Terraform, and Boto3 Python scripts without relying exclusively on a live AWS account.",
    shortDescription:
      "Local cloud experimentation environment exercising AWS CLI workflows, S3 storage operations, and Terraform provisioning with documented parity limits.",
    problem:
      "Practicing real cloud-native infrastructure automation requires hands-on command execution without incurring unpredictable cloud billing or accidentally leaving billable cloud resources running.",
    contribution:
      "Configured a local AWS-compatible emulator within a WSL2 Ubuntu environment. Established CLI authentication endpoints, authored Terraform HCL definitions for Amazon S3 storage, tested Boto3 programmatic access, and documented API parity boundaries.",
    technologies: [
      "AWS CLI",
      "Terraform",
      "Python / Boto3",
      "Amazon S3",
      "Floci Emulator",
      "Podman & WSL2",
      "Linux",
    ],
    implementationDetails: [
      "Configured local AWS CLI profile with custom endpoint-url mapping to local Floci daemon at http://localhost:4566.",
      "Authored declarative Terraform scripts creating practice S3 bucket 'ajay-aws-practice-001' with custom tags and versioning.",
      "Verified endpoint health checks and exercised bucket list, upload, and policy commands.",
      "Wrote Python verification scripts utilizing Boto3 to programmatically interact with the emulator.",
      "Explicitly documented differences between emulator behavior and AWS production IAM and encryption semantics.",
    ],
    challenges:
      "Local emulators do not emulate all advanced AWS production IAM evaluation semantics, KMS encryption hierarchies, or managed VPC routing. Identified these limitations and documented where cloud parity ends.",
    lessonsLearned:
      "Gained practical understanding of Terraform provider syntax, state file management, AWS CLI JSON output querying with JMESPath, and the discipline of infrastructure-as-code.",
    image: projectAws,
    sourceCodeLink: "https://github.com/ajju-py",
    hasCode: true,
    tags: [
      { name: "aws-cli", color: "blue-text-gradient" },
      { name: "terraform", color: "pink-text-gradient" },
      { name: "python-boto3", color: "green-text-gradient" },
      { name: "local-cloud", color: "orange-text-gradient" },
    ],
  },
  {
    id: "cloudops-sentinel",
    name: "CloudOps Sentinel — Infrastructure Audit & Validation",
    category: "Cloud Security",
    categoryBadge: "Security Audit Lab",
    isPrimary: true,
    description:
      "A systematic infrastructure security audit and validation suite evaluating security baselines, IAM policy enforcement, container socket isolation, and state persistence across practice environments.",
    shortDescription:
      "Automated infrastructure security validation suite testing container socket isolation, IAM evaluation boundaries, and state security across local cloud environments.",
    problem:
      "Local cloud and containerized development setups often disable security guardrails for developer convenience, risking severe security gaps if configurations are migrated unchecked to production.",
    contribution:
      "Conducted a systematic audit against the local AWS practice environment. Evaluated IAM enforcement, container socket mounts, and state storage security, developing an automated test suite with 21 passing test assertions.",
    technologies: [
      "Python",
      "Bash Scripting",
      "AWS Security Audit",
      "IAM Policies",
      "Container Security",
      "Linux Diagnostics",
    ],
    implementationDetails: [
      "Observed and documented that IAM policy enforcement was disabled by default in local Floci emulator configuration.",
      "Identified that Lambda in-container execution was restricted because /var/run/docker.sock was deliberately not mounted, preventing container breakout.",
      "Audited local Terraform state storage risks and outlined remote state locking recommendations with S3 and DynamoDB.",
      "Ran 21 automated validation tests (21 passed, 0 failed) verifying API responses, port listeners, and permission boundaries.",
      "Authored a technical remediation guide contrasting local development convenience against production cloud security posture.",
    ],
    challenges:
      "Balancing developer testing agility with realistic security enforcement, and clearly distinguishing local emulator artifacts from production security baselines.",
    lessonsLearned:
      "Reinforced that passing tests validate specific assertions but do not guarantee complete system security; highlighted the necessity of defense-in-depth and principle of least privilege.",
    image: projectAws,
    sourceCodeLink: "https://github.com/ajju-py",
    hasCode: true,
    tags: [
      { name: "cloud-security", color: "pink-text-gradient" },
      { name: "iam-audit", color: "blue-text-gradient" },
      { name: "container-isolation", color: "green-text-gradient" },
      { name: "21-tests-passed", color: "orange-text-gradient" },
    ],
  },
  {
    id: "linux-container-lab",
    name: "Linux Container Operations Lab",
    category: "Containers & Linux",
    categoryBadge: "Certified Practice Lab",
    isPrimary: true,
    description:
      "A practical environment for working with Linux container images, container lifecycle management, image execution, rootless namespaces, and Podman-based workflows.",
    shortDescription:
      "Hands-on container environment using rootless Podman, custom Containerfiles, persistent storage volumes with SELinux (:Z) labels, and isolated bridge networks.",
    problem:
      "Running containers with default root privileges introduces root escalation vulnerabilities, while improper persistent volume labeling triggers SELinux access denials.",
    contribution:
      "Configured rootless container workflows using Podman. Built optimized Containerfiles, configured private registries, managed persistent volume mounts with correct SELinux (:Z) labels, and managed container lifecycles with systemd.",
    technologies: [
      "Podman (Rootless)",
      "OCI Images",
      "Containerfile",
      "RHEL 9.x",
      "SELinux (:Z)",
      "systemd Quadlets",
      "Linux CLI",
    ],
    implementationDetails: [
      "Configured rootless Podman execution mapping non-root user namespaces to eliminate host root escalation vectors.",
      "Authored multi-stage Containerfiles producing lightweight, security-hardened container images.",
      "Configured persistent host volume mounts with strict SELinux ':Z' relabeling flags to satisfy kernel security.",
      "Established user-defined container bridge networks enabling internal service discovery without host port exposure.",
      "Packaged container startup definitions using systemd for automated boot recovery and process supervision.",
    ],
    challenges:
      "Diagnosing SELinux context mislabeling during container volume mounting without resorting to permissive mode or disabling security.",
    lessonsLearned:
      "Mastered Linux kernel namespaces, cgroups resource limitation, SELinux container integration, and the operational advantages of daemonless rootless containers.",
    image: projectLinux,
    sourceCodeLink: "https://github.com/ajju-py",
    hasCode: true,
    tags: [
      { name: "podman", color: "blue-text-gradient" },
      { name: "rootless-containers", color: "green-text-gradient" },
      { name: "selinux", color: "orange-text-gradient" },
      { name: "rhel-9", color: "pink-text-gradient" },
    ],
  },
  {
    id: "building-passport",
    name: "Building Passport — Ghar Ki Pehchan",
    category: "Full-Stack Development",
    categoryBadge: "Verified Prototype",
    isPrimary: false,
    description:
      "A building information management platform prototype designed around structured building records and role-specific workflows for property owners, civil engineers, and administrators.",
    shortDescription:
      "Role-aware building record platform featuring Next.js, TypeScript, MongoDB, JWT authentication, and bcryptjs password encryption.",
    problem:
      "Building records, structural certificates, and municipal compliance documents are often fragmented across physical paperwork, making verification difficult.",
    contribution:
      "Contributed to building the Next.js and TypeScript frontend application, integrating authentication workflows, role-aware routing, and MongoDB document structure for property metadata.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "MongoDB",
      "JWT Auth",
      "bcryptjs",
      "Role-Based Access Control",
    ],
    implementationDetails: [
      "Developed role-aware routing distinguishing property owners, inspecting engineers, and municipal admins.",
      "Implemented document upload and property specification forms with schema validation.",
      "Connected REST API endpoints to MongoDB database collections for building audit histories.",
      "Created responsive dashboards presenting structural compliance status and verification badges.",
    ],
    challenges:
      "Managing complex permission states across different user roles while keeping the UI responsive and straightforward.",
    lessonsLearned:
      "Hands-on experience with modern full-stack web architecture, TypeScript strict typing across data contracts, and client-server state synchronization.",
    image: projectBuildingPassport,
    sourceCodeLink: "https://github.com/ajju-py/Building-passport-Ghar-ki-pehchan",
    hasCode: true,
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "typescript", color: "pink-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "rbac-auth", color: "orange-text-gradient" },
    ],
  },
  {
    id: "esp32-wireless-lab",
    name: "Wireless Networking & Protocol Lab (ESP32)",
    category: "Networking & Security",
    categoryBadge: "Defensive Hardware Lab",
    isPrimary: false,
    description:
      "A controlled hardware laboratory on embedded ESP32 microcontrollers to study 802.11 Wi-Fi protocol behavior, packet injection scenarios, and defensive mitigations.",
    shortDescription:
      "Controlled hardware lab capturing raw 802.11 management frames with ESP32 and analyzing WPA3 Protected Management Frames (PMF) in Wireshark.",
    problem:
      "Understanding wireless Denial-of-Service and frame vulnerabilities requires observing raw 802.11 management frames in an isolated test environment.",
    contribution:
      "Constructed an isolated test environment using ESP32 hardware to analyze 802.11 de-authentication frame handling. Monitored traffic in Wireshark and evaluated defensive mitigations like 802.11w Protected Management Frames (PMF).",
    technologies: [
      "ESP32 Microcontroller",
      "802.11 Protocol",
      "Wireshark",
      "Packet Inspection",
      "Embedded C",
      "Network Security",
    ],
    implementationDetails: [
      "Configured ESP32 firmware in promiscuous mode to capture raw 802.11 beacon, probe, and management frames.",
      "Observed network behavior during simulated frame dissociation within an isolated, shielded testbed.",
      "Exported PCAP traces to Wireshark to dissect frame headers and reason code payloads.",
      "Researched and documented technical mitigation strategies, emphasizing WPA3 PMF (802.11w) protection.",
    ],
    challenges:
      "Ensuring tests remained strictly confined within an isolated laboratory testbed without leaking radio frequency disruption to external networks.",
    lessonsLearned:
      "Deepened practical understanding of the lower layers of the OSI model, wireless protocol security, and packet-level forensic analysis.",
    image: projectEsp32,
    sourceCodeLink: "https://github.com/ajju-py",
    hasCode: false,
    tags: [
      { name: "esp32", color: "pink-text-gradient" },
      { name: "wireshark", color: "blue-text-gradient" },
      { name: "802.11-protocol", color: "green-text-gradient" },
      { name: "defensive-lab", color: "orange-text-gradient" },
    ],
  },
];
