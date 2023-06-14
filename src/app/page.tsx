import Menu from "@/components/menu"
import Navbar from "@/components/navbar"
import HomePage from "@/pages/HomePage"
import AboutPage from "@/pages/AboutPage"
import ProjectsPage from "@/pages/ProjectsPage"
import BottomNav from "@/components/bottomNav"
import ContactPage from "@/pages/ContactPage"

export default function Home() {

  return (
    <>
      <header>
        <Navbar />
        <Menu />
        <BottomNav />
      </header>
      <main className="container">
        <HomePage />
        <AboutPage />
        <ProjectsPage />
        <ContactPage />
      </main>
    </>
  )
}