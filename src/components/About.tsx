import Section from './Section.tsx'

type AboutProps = {
  paragraphs: string[]
}

function About({ paragraphs }: AboutProps) {
  return (
    <Section id="about" title="소개">
      {paragraphs.map((text) => (
        <p className="about__text" key={text}>
          {text}
        </p>
      ))}
    </Section>
  )
}

export default About
