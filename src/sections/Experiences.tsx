import { Timeline } from '@/components/Timeline';
import { TimelineItem } from '@/components/TimelineItem';
import { 
  TechCorpIcon, 
  InnovateSoftIcon, 
  WebSolutionsIcon, 
  StartupLabsIcon 
} from '@/components/CompanyIcons';

export const ExperiencesSection = () => {
  return (
    <section id="experiences" className="py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-serif mb-4 text-center">Experiences</h2>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Mon parcours professionnel en développement et les compétences acquises au fil des années.
        </p>
        
        <div className="max-w-4xl mx-auto">
          <Timeline>
            <TimelineItem 
              date="2022 - Present"
              title="Lead Frontend Developer"
              company="TechCorp"
              icon={<TechCorpIcon className="size-5" />}
              description={
                <div>
                  <p>
                    Responsible for leading the frontend team in developing responsive,
                    high-performance web applications using React, Next.js, and TypeScript.
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Implemented CI/CD pipelines to streamline deployment processes</li>
                    <li>Reduced loading times by 40% through code optimization</li>
                    <li>Mentored junior developers and conducted code reviews</li>
                  </ul>
                </div>
              }
            />
            
            <TimelineItem 
              date="2020 - 2022"
              title="Senior Frontend Developer"
              company="InnovateSoft"
              icon={<InnovateSoftIcon className="size-5" />}
              description={
                <div>
                  <p>
                    Worked on building complex single-page applications with modern JavaScript frameworks.
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Led the migration from Angular to React, improving developer productivity</li>
                    <li>Developed reusable component library used across multiple projects</li>
                    <li>Implemented state management patterns with Redux and Context API</li>
                  </ul>
                </div>
              }
            />
            
            <TimelineItem 
              date="2018 - 2020"
              title="Full-Stack Developer"
              company="WebSolutions"
              icon={<WebSolutionsIcon className="size-5" />}
              description={
                <div>
                  <p>
                    Developed end-to-end solutions for clients across various industries.
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Built RESTful APIs using Node.js and Express</li>
                    <li>Designed database schemas and optimized queries for MongoDB and PostgreSQL</li>
                    <li>Implemented frontend interfaces using Vue.js and Vuex</li>
                  </ul>
                </div>
              }
            />
            
            <TimelineItem 
              date="2016 - 2018"
              title="Junior Developer"
              company="StartupLabs"
              icon={<StartupLabsIcon className="size-5" />}
              description={
                <div>
                  <p>
                    Started my career working on various web development projects.
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Developed responsive websites using HTML, CSS, and JavaScript</li>
                    <li>Gained experience with PHP and WordPress development</li>
                    <li>Collaborated with designers to implement UI/UX improvements</li>
                  </ul>
                </div>
              }
              isLast
            />
          </Timeline>
        </div>
      </div>
    </section>
  );
};
