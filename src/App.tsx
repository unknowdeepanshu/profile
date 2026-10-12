import ConrtainerContens from "@/components/conrtainerContens/conrtainerContens"
import Profile from "@/components/Profile/Profile"
import RowLineConten from "@/components/rowLineConten/rowLineConten"

function App() {

  return (
    <>
      <main className="xl:px-[25%] md:px-[10%] relative">
        <ConrtainerContens >
          <RowLineConten>
            <Profile />
          </RowLineConten>
        </ConrtainerContens >
      </main>
    </>
  )
}

export default App
