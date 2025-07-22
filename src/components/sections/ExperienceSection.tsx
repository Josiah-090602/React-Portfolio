import type { experienceType } from "@/types";

export default function ExperienceSection() {
  const experiences: experienceType[] = [
    {
      id: 1,

      title: "System Analyst",
      company: "OnDemand Innovation, LLC",
      period: "January 2025 - Present ",
      description:
        " Collaborating with stakeholders to gather requirements and analyze system needs for various projects.",
      location: "Remote",
    },
    {
      id: 2,
      title: "Quality Assurance Tester (Part-time)",
      company: "OnDemand Innovation, LLC",
      period: "July - September 2024",
      description:
        " Worked alongside QA teams on multiple projects to ensure software met quality standards.",
      location: "Remote",
    },
    {
      id: 3,
      title: "StudentIntern",
      company: "OnDemand Innovation, LLC",
      period: "Feb 24 - May 2024",
      description:
        " Contributed to building key frontend pages to some System Projects",
      location: "Remote",
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center bg-background"
    >
      <div className="max-w-4xl mx-auto px-6 py-20 w-full ">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-foreground mb-8 font-montserrat tracking-tight">
            My Experience
          </h2>
          <div className="w-16 h-px bg-foreground mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground font-poppins font-light">
            My professional journey and work experience
          </p>
        </div>

        <div className="relative w-full">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border"></div>

          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="relative flex items-start mb-16 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-6 w-4 h-4 bg-foreground rounded-full border-4 border-background z-10"></div>

              {/* Content */}
              <div className="ml-20 flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-medium text-foreground mb-1 font-montserrat">
                      {experience.title}
                    </h3>
                    <h4 className="text-xl text-muted-foreground font-montserrat font-light">
                      {experience.company}
                    </h4>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-foreground font-medium font-poppins">
                      {experience.period}
                    </p>
                    <p className="text-muted-foreground font-poppins font-light">
                      {experience.location}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 font-poppins font-extralight leading-relaxed text-md">
                  {experience.description}
                </p>

                <div className="flex flex-wrap gap-5">
                  {/* <TechStackIcon items={experience.technologies} /> */}
                  {/* <TechStackIcon items={experience.technologies.map} /> */}
                  {/* {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-muted text-foreground text-sm font-light rounded-sm"
                    >
                     
                    </span>
                  ))} */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
