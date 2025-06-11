/**
 * @copyright 2025 Tejas Mistry
 * @license Apache-2.0
 */

import Skills from "./Skills";

const aboutItems = [
  /** 
  {
    label: 'Project done',
    number: 45
  },
  {
    label: 'Years of experience',
    number: 10
  } */
];


const About = () => {
  return (
    <section 
      id="about"
      className="section"
    >

      <div className="container">
      <h2 className="text-2xl font-semibold text-white mb-6 mt-14 ">About Me</h2>
        <div className="bg-zinc-800 p-7 rounded-2xl md:p-12 mb-0 ">
          <p className="text-zinc-300 mv-4 md:mb-4 md:text-xl md:max-w-[60ch]:">
          Hi, I'm Tejas Mistry, a data science graduate from Syracuse University with hands-on experience in machine learning, big data, and cloud analytics. I've built predictive models using PySpark, LSTM, and ARIMA, and developed dashboards and automation tools that improved business performance during my internships. Proficient in Python, SQL, and cloud platforms like Azure, AWS, and GCP, I enjoy turning complex datasets into meaningful insights. I'm currently seeking full-time opportunities in data analytics, science, or engineering, and I'm always exploring new tools and techniques to drive real-world impact in this fast-evolving field.
          </p>


          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {
              aboutItems.map(({label, number},key) => (
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