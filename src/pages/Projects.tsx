import Card from "@/components/card/card";
import ConrtainerContens from "@/components/conrtainerContens/conrtainerContens";
import Header from "@/components/header/header";
import { Myprojects } from "@/data/projectsData";
import RowLineConten from "@/components/rowLineConten/rowLineConten";
function Projects() {
  return (
    <>
      <main className="h-screen overflow-hidden">
        <ConrtainerContens>
          <Header />
          <div className="h-screen overflow-auto">
            <div className="flex flex-col flex-wrap pb-31 sm:px-5">
              {Myprojects.map((data, index) => {
                return (
                  <RowLineConten>
                    <Card
                      key={index}
                      img={data.ProjectsImg}
                      description={data.ProjectsDescription}
                      name={data.projectsName}
                      currentstatus={data.ProjectsStatus}
                      className="h-120"
                    />
                  </RowLineConten>
                );
              })}
            </div>
          </div>
        </ConrtainerContens>
      </main>
    </>
  );
}

export default Projects;
