import { IconWorld, IconBrandGithub } from "@tabler/icons-react";
import { Link, useParams } from "react-router";
import { Myprojects } from "../../data/projectsData";

function SingleCard() {
  const { projectsnumber } = useParams();
  let singleData;
  const projectData = Myprojects.filter(
    (project) => project.projectsName === projectsnumber,
  );

  if (projectData.length === 0)
    return (
      <>
        <div className="flex h-screen w-full items-center justify-center">
          <div className="text-3xl">
            This is project not exits "{projectsnumber}"
          </div>
        </div>
      </>
    );
  singleData = projectData[0];
  const icons = [
    {
      Icon: <IconBrandGithub />,
      name: "Github",
      links: `${singleData.ProjectsGithub}`,
    },
    {
      Icon: <IconWorld />,
      name: "Website",
      links: `${singleData.ProjectsWebsite}`,
    },
  ];
  return (
    <>
      <div className="flex h-fit w-full flex-col">
        <div className="mb-4 h-1/2">
          <h1 id="BoldJetBrains" className="px-5 text-[32px]">
            {singleData.projectsName}
          </h1>
          <div className="relative flex h-full w-full py-5">
            <div className="flex h-122 w-full justify-center rounded-2xl bg-gray-200/50 px-10 pt-10">
              <img
                src={singleData.ProjectsImg}
                alt={`${singleData.ProjectsImg}`}
                className="h-full w-full rounded-t-2xl shadow-[0_-4px_25px_var(--color-black)]/20"
              />
            </div>
          </div>
        </div>{" "}
        <div className="flex h-10 w-full">
          {icons.map((icons, index) => (
            <div
              className="flex w-full items-center justify-center border-2 border-dashed border-black/20"
              key={index}
            >
              <Link
                to={icons.links}
                className="flex h-full w-full items-center justify-center gap-2 opacity-50 hover:opacity-100"
              >
                {icons.Icon} {icons.name}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-10 px-5 py-5">
          <div>
            <p className="leading-9">{singleData.ProjectsDescription}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleCard;
