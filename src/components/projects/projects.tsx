import Card from "@/components/card/card";
import RowLineConten from "../rowLineConten/rowLineConten";
import { Myprojects } from "./projectsData";

function Projects() {
  return (
    <>
      <RowLineConten>
        <div className="grid w-full grid-cols-1 gap-8 pb-12 md:grid-cols-2">
          {Myprojects.map((data, index) => {
            if (index <= 3)
              return (
                <Card
                  key={index}
                  img={data.ProjectsImg}
                  description={data.ProjectsDescription}
                  name={data.projectsName}
                  currentstatus={data.ProjectsStatus}
                />
              );
          })}
        </div>
      </RowLineConten>
    </>
  );
}

export default Projects;
