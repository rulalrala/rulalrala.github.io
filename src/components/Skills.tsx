import type { SkillGroup } from '../profile.ts'
import Section from './Section.tsx'

type SkillsProps = {
  groups: SkillGroup[]
}

function Skills({ groups }: SkillsProps) {
  return (
    <Section id="skills" title="기술 스택">
      <dl className="skills">
        {groups.map((group) => (
          <div className="skills__group" key={group.category}>
            <dt className="skills__category">{group.category}</dt>
            <dd className="skills__items">
              <ul className="tags">
                {group.items.map((item) => (
                  <li className="tag" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}

export default Skills
