/**
 * @copyright 2025 Tejas Mistry
 * @license Apache-2.0
 */
import Skills from "./Skills";

const aboutItems = [
  {
    label: 'Years of Experience',
    number: '2+'
  },
  {
    label: 'Pipelines Built',
    number: '10+'
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
          <p className="text-zinc-300 mb-4 md:mb-6 md:text-xl ">
            Hi, I'm <span className="text-sky-400 font-semibold">Tejas Mistry</span>, a data science graduate from <span className="text-sky-400 font-semibold">Syracuse University</span>. I started out curious about data and ended up building the systems that power it. From automating inventory pipelines at a hospitality company in Mumbai to engineering research data workflows at Syracuse University, I have spent 2+ years turning messy, siloed data into clean, dependable infrastructure that teams actually rely on. I work primarily with <span className="text-sky-400">AWS</span>, <span className="text-sky-400">Python</span>, <span className="text-sky-400">SQL</span>, <span className="text-sky-400">Snowflake</span>, and <span className="text-sky-400">dbt</span> and take ownership of every pipeline I ship from design to deployment. When I'm not building pipelines I'm exploring new tools, hitting the gym, or figuring out the next problem worth solving. I'm currently seeking full-time <span className="text-sky-400">Data Engineer</span>, <span className="text-sky-400">Data Analyst</span>, or <span className="text-sky-400">Data Scientist</span> roles in the U.S.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {
              aboutItems.map(({ label, number, suffix }, key) => (
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                    <span className="text-sky-400 font-semibold md:text-3xl">{suffix}</span>
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
