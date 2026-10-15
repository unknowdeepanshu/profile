import ConrtainerContens from "@/components/conrtainerContens/conrtainerContens";
import Profile from "@/components/Profile/Profile";
import RowLineConten from "@/components/rowLineConten/rowLineConten";
import Footer from "@/components/footer/Footer";
import Projects from "@/components/projects/projects";
import Header from "@/components/header/header";

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
          <Footer />
        </ConrtainerContens>
      </main>
    </>
  );
}

export default App;
