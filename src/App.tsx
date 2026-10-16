import ConrtainerContens from "@/components/conrtainerContens/conrtainerContens";
import Profile from "@/components/Profile/Profile";
import RowLineConten from "@/components/rowLineConten/rowLineConten";
import Footer from "@/components/footer/Footer";
import Projects from "@/components/projects/projects";
import Header from "@/components/header/header";
import Buttons from "./ui/Button";
import { NavLink } from "react-router";
function App() {
  return (
    <>
      <main className="h-screen">
        <ConrtainerContens>
          <Header />
          <RowLineConten>
            <Profile />
          </RowLineConten>
          <RowLineConten>
            <h1 id="instrument-serif-regular" className="text-start text-2xl">
              PROJECTS
            </h1>
          </RowLineConten>
          <Projects />
          <RowLineConten>
            <div className="flex justify-center">
              <Buttons className="border-2 bg-white p-4 text-black hover:bg-neutral-100">
                <NavLink to={"/projecs"}>View projects</NavLink>
              </Buttons>
            </div>
          </RowLineConten>
          <Footer />
        </ConrtainerContens>
      </main>
    </>
  );
}

export default App;
