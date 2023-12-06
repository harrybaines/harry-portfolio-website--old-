import CALogo from "../public/images/c+a.svg";
import YordasLogo from "../public/images/yordas.svg";

export const workData = [
  {
    id: 1,
    date: "2022 - Present",
    title: "Full Stack Software Engineer",
    companyName: "Cassidy and Ashton",
    companyURL: "https://cassidyashton.co.uk",
    companyLogo: CALogo,
    skills: [
      "React",
      "TypeScript",
      "RTK",
      "RTK Query",
      "Express",
      "Supabase",
      "Prisma",
      "Postgres",
      "Docker",
      "ChakraUI",
    ],
    description:
      "Implemented a full-stack timesheet, project and leave management system using modern technologies. Supports clients, staff and project dashboards, and fee forecasting. Used by ~60 employees on a daily basis.",
  },
  {
    id: 2,
    date: "2020 - 2022",
    title: "Software Engineer / Data Scientist",
    companyName: "Yordas Digital",
    companyURL: "https://www.yordasgroup.com/",
    companyLogo: YordasLogo,
    skills: [
      "Django",
      "Flask",
      "Celery",
      "Selenium",
      "Docker",
      "Redis",
      "Jupyter Notebooks",
      "Streamlit",
    ],
    description:
      "Implemented a full-stack SDS authoring app in Django, supervised two student internship projects, developed developer template repos and automation scripts, and deployed ML-based time series forecasting models.",
  },
  {
    id: 3,
    date: "2020",
    title: "Data Scientist Internship",
    companyName: "Yordas Digital",
    companyURL: "https://www.yordasgroup.com/",
    companyLogo: YordasLogo,
    skills: [
      "Python",
      "nltk",
      "sklearn",
      "scipy",
      "mysql",
      "sqlalchemy",
      "numpy",
      "pandas",
      "Flask",
      "gunicorn",
      "seaborn",
    ],
    description:
      "Implemented and deployed a smart search engine using NLP techniques to search across a database of 20K+ complex chemical phrases.",
  },
  {
    date: "2018 - 2020",
    title: "Part-Time Software Engineer",
    companyName: "Cassidy and Ashton",
    companyURL: "https://cassidyashton.co.uk",
    companyLogo: CALogo,
    skills: [
      "React",
      "Redux",
      "Express",
      "Postgres",
      "Firebase",
      "Heroku",
      "Python",
      "Git/GitHub",
    ],
    description:
      "Designed, developed and deployed a full-stack timesheet web app from scratch, eliminating the need for paper timesheets.",
  },
];
