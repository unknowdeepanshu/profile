import Card from "@/components/card/card";
import ConrtainerContens from "@/components/conrtainerContens/conrtainerContens";
import Header from "@/components/header/header";
import { Myprojects } from "@/components/projects/projectsData";
import RowLineConten from "@/components/rowLineConten/rowLineConten";

function Projects() {
  return (
    <>
      <ConrtainerContens>
        <Header />
        <div className="flex flex-col flex-wrap px-5 pb-10">
          {Myprojects.map((data, index) => {
            return (
              <RowLineConten>
                <Card
                  key={index}
                  img={data.ProjectsImg}
                  description={data.ProjectsDescription}
                  name={data.projectsName}
                  currentstatus={data.ProjectsStatus}
                  className="h-80"
                />
              </RowLineConten>
            );
          })}
        </div>
      </ConrtainerContens>
    </>
  );
}

export default Projects;
