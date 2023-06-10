import Menu from "@/components/menu"
import Navbar from "@/components/navbar"
import HomePage from "@/components/homepage"
import AboutPage from "@/components/aboutpage"

export default function Home() {

  return (
    <>
      <header>
        <Navbar />
        <Menu />
      </header>
      <main className="container mx-48">
        <HomePage />
        <AboutPage />
      </main>
    </>
  )
}