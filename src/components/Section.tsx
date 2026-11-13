import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  title: string
  children: ReactNode
}

/** 각 구역의 공통 틀(제목 + 내용) */
function Section({ id, title, children }: SectionProps) {
  return (
    <section className="section" id={id} aria-labelledby={`${id}-title`}>
      <h2 className="section__title" id={`${id}-title`}>
        {title}
      </h2>
      {children}
    </section>
  )
}

export default Section
