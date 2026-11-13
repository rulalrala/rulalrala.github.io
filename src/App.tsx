import { profile } from './profile.ts'
import Header from './components/Header.tsx'
import About from './components/About.tsx'
import Skills from './components/Skills.tsx'
import Projects from './components/Projects.tsx'
import Contact from './components/Contact.tsx'
import './App.css'

const currentYear = new Date().getFullYear()

function App() {
  return (
    <div className="page">
      <Header name={profile.name} tagline={profile.tagline} />
      <main>
        <About paragraphs={profile.about} />
        <Skills groups={profile.skills} />
        <Projects projects={profile.projects} />
        <Contact contact={profile.contact} />
      </main>
      <footer className="footer">© {currentYear} {profile.name}</footer>
    </div>
  )
}

export default App
