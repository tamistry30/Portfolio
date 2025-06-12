/**
 * @copyright 2025 Tejas Mistry
 * @license Apache-2.0
 */

const experiences = [
  {
  role: "Data Scientist Intern",
  company: "Bandhouse Music Group, Nashville, TN",
  period: "May 2024 – Aug 2024",
  stack: ["Python", "Spotify API", "ETL Pipelines", "EDA", "Tableau", "Statistical Analysis"],
  description: "Built and automated Python-based data pipelines to collect and clean engagement data from Spotify, YouTube, and Instagram. Performed EDA and statistical testing to uncover user trends, boosting engagement by 15%. Created Tableau dashboards for real-time insights and delivered recommendations that led to a 10% growth in streaming performance."
},
  {
    role: "Data Analyst Intern",
    company: "Aromagasms Cafe, Mumbai, India",
    period: "Feb 2023 – May 2023",
    stack: ["Python", "SQL", "Statistics", "Data Cleaning", "Inventory Analytics"],
    description: "Automated order and inventory management processes, performed statistical analysis to uncover key drivers of customer satisfaction, and developed Python and SQL scripts to streamline reporting and improve operational efficiency."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section mt-1">
      <div className="container">
        <h2 className="text-2xl font-semibold text-white mb-8">Experience</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-zinc-800 p-5 rounded-2xl shadow-lg hover:scale-[1.02] transition-all">
              <h3 className="text-lg font-semibold text-white mb-1">{exp.role}</h3>
              <p className="text-sm text-zinc-400 mb-2">{exp.company} • {exp.period}</p>
              <p className="text-sm text-zinc-300 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.stack.map((tag, i) => (
                  <span key={i} className="bg-zinc-700 text-sm px-2 py-1 rounded-md text-zinc-300">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



export default Experience
