import ConrtainerContens from "@/components/conrtainerContens/conrtainerContens";
import Profile from "@/components/Profile/Profile";
import RowLineConten from "@/components/rowLineConten/rowLineConten";
import Footer from "@/components/footer/Footer";
import Card from "@/components/card/card";

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
          <RowLineConten>
            <div className="grid w-full grid-cols-1 gap-8 pb-12 md:grid-cols-2">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </RowLineConten>
          <Footer />
        </ConrtainerContens>
      </main>
    </>
  );
}

export default App;
