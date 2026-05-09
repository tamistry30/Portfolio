/**
 * @copyright 2025 Tejas Mistry
 * @license Apache-2.0
 */
import Skills from "./Skills";

const aboutItems = [
  {
    label: 'Years of Experience',
    number: 2
  },
  {
    label: 'Pipelines Built',
    number: 10
  },
  {
    label: 'Domains',
    number: 3
  },
];

const About = () => {
  return (
    <section 
      id="about"
      className="section"
    >
      <div className="container">
        <h2 className="text-2xl font-semibold text-white mb-6 mt-14">About Me</h2>
        <div className="bg-zinc-800 p-7 rounded-2xl md:p-12 mb-0">
          <p className="text-zinc-300 mb-4 md:mb-6 md:text-xl md:max-w-[60ch]">
            Hi, I'm <span className="text-sky-400 font-semibold">Tejas Mistry</span>, a Data Engineer with 2+ years of experience building batch ETL/ELT pipelines, cloud data warehouses, and distributed processing systems on AWS. I have designed and maintained production pipelines using <span className="text-sky-400">Apache Airflow</span>, <span className="text-sky-400">AWS Glue</span>, <span className="text-sky-400">Snowflake</span>, <span className="text-sky-400">Redshift</span>, and <span className="text-sky-400">dbt</span>, reducing data refresh latency by 75% and delivering reliable, analytics-ready data for BI reporting and research workflows. I hold an M.S. in Applied Data Science from <span className="text-sky-400 font-semibold">Syracuse University</span> and bring hands-on experience across hospitality, entertainment, and academic domains. I am currently seeking full-time <span className="text-sky-400">Data Engineer</span> or <span className="text-sky-400">Analytics Engineer</span> roles where I can build scalable data infrastructure that drives real business decisions.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {
              aboutItems.map(({label, number}, key) => (
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                  </div>
                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              ))
            }
          </div>
        </div>
        {/* <Skills /> */}
      </div>
    </section>
  )
}

export default About
