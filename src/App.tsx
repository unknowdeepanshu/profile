import ConrtainerContens from "@/components/conrtainerContens/conrtainerContens"
import Profile from "@/components/Profile/Profile"
import RowLineConten from "@/components/rowLineConten/rowLineConten"

function App() {

  return (
    <>
      <main className="px-96 relative">
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
