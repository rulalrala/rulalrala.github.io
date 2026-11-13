import type { Contact as ContactInfo } from '../profile.ts'
import Section from './Section.tsx'

type ContactProps = {
  contact: ContactInfo
}

function Contact({ contact }: ContactProps) {
  return (
    <Section id="contact" title="연락처">
      <ul className="contact">
        <li>
          <a className="contact__link" href={contact.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a className="contact__link" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        </li>
      </ul>
    </Section>
  )
}

export default Contact
