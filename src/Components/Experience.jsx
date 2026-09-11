/**
 * @copyright 2025 Tejas Mistry
 * @license Apache-2.0
 */

const experiences = [
  {
    role: "Data Engineer, Statistical Research",
    company: "Syracuse University, Syracuse, NY",
    period: "July 2025 – Present",
    stack: ["Python", "SQL", "Microsoft Fabric", "Data Factory", "OneLake", "Fabric Notebooks", "Power BI", "DAX", "Medallion Architecture"],
    description: "Maintain and enhance 6 Microsoft Fabric Data Factory ELT pipelines integrating PeopleSoft SIS, Blackboard LMS, and administrative systems into OneLake, processing 2M+ historical records. Develop Python and SQL transformations to standardize enrollment, course, and term data, and design 10+ Gold-layer fact and dimension tables for reusable Power BI semantic models. Improve production reliability by resolving schema and data-type changes and adding validation checks to prevent incompatible records from reaching institutional reports."
  },
  
  {
  role: "Data Science Intern",
  company: "Bandhouse Music Group Co, Nashville, TN",
  period: "May 2024 – September 2024",
  stack: ["Python", "Pandas", "ETL Pipelines", "Statistical Analysis", "A/B Testing", "Regression", "Clustering"],
  description: "Engineered Python-based data transformation pipelines 40+ aggregating artist performance data from 5+ streaming and social platforms into unified analytical datasets standardized across campaign reporting workflows. Ran A/B tests and statistical analyses on 3,000+ user interactions, delivering a statistically significant 6% lift in user retention at 95% confidence."
},
  {
    role: "Jr. Data Engineer ",
    company: "J&J Hospitality Pvt. Ltd., Mumbai, India",
    period: "May 2022 – July 2023",
    stack: ["Python", "PySpark", "AWS Glue", "Apache Airflow", "Snowflake", "Amazon S3", "Snowpipe", "dbt", "SQL", "Power BI"],
    description: "Designed and maintained batch ETL pipelines using Airflow, AWS Glue, and Snowpipe to ingest purchasing, supplier, and inventory data into Snowflake, reducing refresh latency from 4 hours to 1 hour and ingestion latency from 90 to 10 minutes. Built dbt star-schema models and PySpark transformations within Glue to validate 680K+ structured records, and delivered Power BI dashboards for real-time monitoring of inventory and operational KPIs."
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
