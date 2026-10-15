import Card from "@/components/card/card";
import RowLineConten from "../rowLineConten/rowLineConten";

function Projects() {
  return (
    <>
      <RowLineConten>
        <div className="grid w-full grid-cols-1 gap-8 pb-12 md:grid-cols-2">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </RowLineConten>
    </>
  );
}

export default Projects;
