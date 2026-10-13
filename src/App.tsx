import ConrtainerContens from "@/components/conrtainerContens/conrtainerContens";
import Profile from "@/components/Profile/Profile";
import RowLineConten from "@/components/rowLineConten/rowLineConten";
import Footer from "@/components/footer/Footer";

function App() {
  return (
    <>
      <main>
        <ConrtainerContens>
          <RowLineConten>
            <Profile />
          </RowLineConten>
          <RowLineConten>
            <h1 id="instrument-serif-regular" className="text-start text-2xl">
              PROJECTS
            </h1>
          </RowLineConten>
          <Footer />
        </ConrtainerContens>
      </main>
    </>
  );
}

export default App;
