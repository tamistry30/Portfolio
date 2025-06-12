/**
 * @copyright 2025 Tejas Mistry
 * @license Apache-2.0
 */

import ProjectCard from "./ProjectCard";

const works = [
  {
    title: 'Airfare Prediction and Optimization',
    tags: ['PySpark', 'Apache Spark', 'GBT', 'Random Forest', 'MLlib'],
    projectLink: 'https://github.com/tamistry30/Airfare-Prediction-Optimization-PySpark' 
  },
  {
    title: 'NVIDIA GPU Market Analysis & Visualization',
    tags: ['R', 'ggplot2', 'Adobe Illustrator', 'Data Storytelling', 'EDA', 'Tech Market Insights'],
    projectLink: 'https://github.com/tamistry30/nvidia-gpu-visualization' // update with the exact project repo if available
  },
  {
    title: 'Cryptocurrency Market Analysis',
    tags: ['Python','Scikit-learn', 'Pandas', 'KMeans', 'Matplotlib', 'Seaborn', 'Volatility Analysis'],
    projectLink: 'https://github.com/tamistry30/cryptocurrency-analysis'
  },
  {
    title: 'Dubai Emirates Visual Analytics',
    tags: ['Tableau', 'Power BI', 'EDA', 'Geospatial Analysis', 'Dashboards'],
    projectLink: 'https://github.com/tamistry30/Dubai-Emirates-Visual-Analytics',
    description: 'Developed interactive dashboards using Tableau and Power BI to explore demographic, economic, and tourism trends across Emirates in the UAE.'
  },
  {
  title: "Energy Consumption Forecasting",
  tags: [
    "R",
    "XGBoost",
    "ARIMA",
    "Time Series",
    "Shiny App",
    "Data Cleaning",
    "Weather Data Integration",
    "Energy Analytics"
  ],
  projectLink: "https://github.com/tamistry30/Energy-Consumption-Analysis",
  description: "Developed predictive models using XGBoost and ARIMA to forecast hourly energy consumption in South Carolina. Integrated weather and usage data, and deployed visual insights via an interactive Shiny dashboard."
}
  
];

const Projects = () => {
  return (
    <section id="work" className="">
      <div className="container">
        <h2 className="text-2xl font-semibold text-white mb-6 mt-14 reveal-up">Featured Capstone Projects</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
