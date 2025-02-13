import React from "react";
import {  CgWorkAlt } from "react-icons/cg";
import {  FaMicrosoft } from "react-icons/fa";
import project3 from "@/public/project3.jpeg";
import project1 from "@/public/project1.webp"
import project2 from "@/public/project2.webp"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

interface JobItem {
  title: string;
  years: string;
  description: string;
  icon: React.ReactNode; 
  date: string;
  skill?: string;  
  skills?: string; 
}

export const experiencesData: JobItem[] =[
  {
    title: "Technical Expert, Microsoft",
    years: "4 yrs 9 mos",
    description:
      "Project managed development of Internal Group Program Management tool (PVM), provided technical support for 48 internal users and three external vendors companies. Responsible for group hardware, software budgets, including procurement, installation and deployment of infrastructure.",
      skill: "Skills: ",
      skills:"Problem solving",
    icon: React.createElement(FaMicrosoft),
    date: "1997 - 2001",
  },
  {
    title: "Support Analyst, Microsoft",
    years: "6 mos",
    description:
      "Monitored vendor applications, resolved issues, and escalated complex cases. Provided weekly metrics, implemented monitoring for new apps, and managed Dublin handovers. Oversaw 4 Tier 1 Analysts and ensured seamless global support transitions.",
    icon: React.createElement(FaMicrosoft),
    date: "2001 - 2002"
  },
  {
    title: "Senior Support Analyst, Microsoft",
    years: "2 yrs 5 mos",
    description:
      "Served as System Engineer (Program Manager) in the SDLC for BGIT core applications, leading requirements gathering, prototyping, testing, and deployment. Created operational documentation, defined SLAs, and implemented support and escalation processes. Managed post-release tasks, including bug fixes, feature enhancements, and compliance (SOX, privacy). Supported SQL/IIS systems and resolved network issues using a 24x7 global support model across Dublin, East Asia, and Redmond.",
    icon: React.createElement(FaMicrosoft),
    date: "2002-2004",
  },
  {
    title: "Senior Deployment Engineer, Sureskills(Dell)",
    years: "3 mos",
    description:
      "Responsible for the configuration of DHCP and Clustered Distributed File Services prior to the migration of user data and desktop role out. Performed a consultancy role on additional hardware requirements and assisted in any high/immediate priority calls. Troubleshoot any application issues arising from deployment, liaising with appropriate test and packaging teams to resolve issue's within.",
    icon: React.createElement(CgWorkAlt),
    date: "2004 - 2005",
  },
  {
    title: "Senior Windows Engineer, HP",
    years: "5 mos",
    description:
      "Responsible for configuration and installation of new DEV domain for developer testing, including DC Hardware install and configuration. Installation of additional TEST domain for Transformation user testing. Recommended amendments to design documentation. Creation of AD user, machine accounts, group policies and server builds utilising AD group membership policies.",
    icon: React.createElement(CgWorkAlt),
    date: "2005",
  },
  {
    title: "Global Support Manager, Pelagon (Microsoft Gold Partner)",
    years: "5 yrs 2 mos",
    description:"System design, documentation scope of work requirements for disaster recovery design and implementation of global geographically dispersed clustered systems.Implementation and action of cloud migration from physical Data Centre to virtual cloud VM's to reduce operational costs. By moving capex to opex.Daily manage Support Team operations and SLA'sManage Infrastructure Team, change management and general infrastructure operations.",
    skill: "Skills: ",
    skills:"Problem solving",
    icon: React.createElement(CgWorkAlt),
    date: "2005 - 2010",
  },
  {
    title: "Owner, bemorethananumber.com",
    years: "7 mos",
    description:"We bring over a decade of experience with top US multinationals (Microsoft, Dell, HP), specializing in digital-press, bi-di language testing, global support, and hosting infrastructure. Expertise includes Six Sigma project management, SOX compliance, and leadership in 24/7 team environments. Proficient in early SQL 2008, Windows 2008, cloud adoption, and cost reduction strategies. Skilled in minimizing downtime during software upgrades, clustering front/back-end systems, and automating disaster recovery in global enterprises.",
    icon: React.createElement(CgWorkAlt),
    date: "2010",
  },
  {
    title: "L3 Analyst, Microsoft",
    years: "9 mos, Dublin",
    description:"I have to admit it is not easy returning to a company that you have left previously but I was welcomed with open arms. And for that I am forever grateful.My role was to assist internal groups in the adoption and support of Visual Studio Team Foundation (VSTF). We promoted this application internally and proved that this can not only work for SMB's but also enterprise clients in a load balanced frontend and back end SQL cluster environment. Azure is a proven model also. A very eniovable role and a great team experience. I do miss them.",
    skill: "Skills: ",
    skills:"Problem solving",
    icon: React.createElement(CgWorkAlt),
    date: "2010 - 2011",
  },
  {
    title: "EMEA - Regional Support Manager, Quark",
    years: "7 mos, Dublin",
    description:"Responsible for representing the support organization, monitoring support requirements for the EMEA region and prioritize cases with India Support Team. Working closely with Sales and Professional Technical services teams enabling sales for that geography, identify and allocate required support resources. Representing all product lines supported by Quark. In all three verticals: Enterprise, Desktop and SMB. Account Management and System & processes",
    skill: "Skills: ",
    skills:"Problem solving",
    icon: React.createElement(CgWorkAlt),
    date: "2011 - 2012",
  },
  {
    title: "Founder, bemorethananumber.com",
    years: "6 yrs 6 mos, Dublin",
    description:"Cloud infrastructure consulation/migrations, azure dogfood testing - SQL 2017. ADR, Office 365.",
    icon: React.createElement(CgWorkAlt),
    date: "2012 - 2018",
  },
  {
    title: "L3 Analyst, Microsoft",
    years: "6yrs 3 mos, Dublin",
    description:"As a Service Reliability Engineer, I support Visual Studio Team Foundation (DevOps Server 2019) and its integration with SharePoint, SCVMM, MTM, and SQL Always On in enterprise environments. I manage 24/7 incident coordination, prioritizing and resolving global issues, and collaborating with Problem Management on recurring problems. My role includes handling production deployments, Azure migrations, and troubleshooting across networking, security, and application layers, ensuring smooth operations in a dynamic, fast-paced environment.",
    skill: "Skills: ",
    skills:"Problem solving",
    icon: React.createElement(FaMicrosoft),
    date: "2012 - 2018",
  },
  {
    title: "L3 Analyst/Azure DevOps Server SME, Microsoft",
    years: "3yrs 4 mos, Ireland",
    description:"Just a title change",
    skill: "Skills: ",
    skills:"Problem solving . Agile Methodologies",
    icon: React.createElement(FaMicrosoft),
    date: "2018 - 2021",
  },
  {
    title: "Disaster Recovery Manager, Marsh McLennan (Contract)",
    years: "2 mos, Dublin",
    description:"• Led the implementation of active/active SQL DR and geographically dispersed clustering, eliminating annual BCDR testing.• Automated infrastructure restoration and backups using AWS and Azure scripting, saving time and resources.• roposed legal changes to contracts regarding ADR, ensuring compliance and risk mitigation",
    skill: "Skills: ",
    skills:"ADRs",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
];

export const projectsData = [
  {
    title: "Come out of retirement",
    description:
      "I hit 50 yrs young cashed in the pension, traveled the world with the girl of my dreams, and now use my experience to assist companies and individuals with AGI/ChatGPT & automation.",
    tags: ["Microsoft Technologies", "AWS", "AI","Graphic Design"],
    imageUrl: project1,
  },
  {
    title: "Automated Disaster Recovery",
    description:
      "Expert in automated disaster recovery, Windows DevOps, and cloud project management, ensuring resilient and efficient operations.",
    tags: ["Project Managment","Cloud","Team Lead", "Windows DevOps"],
    imageUrl: project2,
  },
  {
    title: "Marsh McLennon",
    description:
      "Implemented active active SQL geo dispersed clustering so we could fail over data centers rather than an application by application DR test - reducing man hours and DR downtime.",
    tags: ["ADRs"],
    imageUrl: project3,
  },
] as const;

export const skillsData = [
  "AWS",
  "Graphic Design",
  "AI",
  "Windows DevOps",
  "ADR",
  "Cloud Computing",
  "SaaS",
  "Disaster Recovery",
  "Testing",
  "CRM",
  "Architecture",
  "MS sql Server",
  "SQL",
  "Windows",
  ".NET",
  "Web services",
  "Scrum",
  "ITIL",
  "Troubleshooting",
  "Project Management",
  "Team Leader",
  "Problem solving"
] as const;
