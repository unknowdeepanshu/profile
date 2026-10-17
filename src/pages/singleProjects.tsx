import ConrtainerContens from "@/components/conrtainerContens/conrtainerContens";
import Header from "@/components/header/header";
import SingleCard from "@/components/singleCard/singleCard";

function SingleProjects() {
  return (
    <>
      <main className="h-screen overflow-hidden">
        <ConrtainerContens>
          <Header />
          <div className="w-full md:px-[10%] xl:px-[25%]">
            <div className="w-full py-2">
              <SingleCard />
            </div>
          </div>
        </ConrtainerContens>
      </main>
    </>
  );
}

export default SingleProjects;
