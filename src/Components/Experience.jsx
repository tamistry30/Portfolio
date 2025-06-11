/**
 * @copyright 2025 Tejas Mistry
 * @license Apache-2.0
 */

const experiences = [
  {
    role: "Data Analyst Intern",
    company: "Bandhouse Music Group, Nashville, Tennessee",
    period: "Jan 2025 – Jun 2025",
    stack: ["Python", "Data Analysis", "Tableau", "APIs", "Google Sheets", "SQL", "Streaming Analytics"],
    description: "Worked on streaming and social media analytics using Python and SQL, built interactive Tableau dashboards for artist insights, and automated data collection pipelines via Google Sheets API to support marketing strategy."
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