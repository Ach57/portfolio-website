import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
    );

    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: { trigger: card, start: "top bottom-=100" },
        },
      );
    });
  }, []);

  const renderProjects = (projectList) =>
    projectList.map((project, index) => (
      <div
        key={index}
        ref={(el) => (cardRefs.current[index] = el)}
        className={project.containerClass}
      >
        <div className={project.imageWrapperClass}>
          <img src={project.imgPath} alt={project.alt} />
        </div>

        {project.textWrapperClass ? (
          // First project: h2 + p wrapped in a text-content div
          <div className={project.textWrapperClass}>
            <h2>{project.title}</h2>
            <p className={project.pClass}>{project.description}</p>
          </div>
        ) : (
          // List projects: h2 + p directly in the card
          <>
            <h2>{project.title}</h2>
            <p className={project.pClass}>{project.description}</p>
          </>
        )}
      </div>
    ));

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* First project renders alone */}
          {renderProjects(projects.slice(0, 1))}

          {/* Remaining projects go in the list wrapper */}
          <div className="project-list-wrapper overflow-hidden">
            {renderProjects(projects.slice(1))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
