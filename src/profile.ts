// 페이지에 보이는 모든 내용은 이 파일에서 관리합니다.
// 컴포넌트는 여기 있는 값을 읽어서 그리기만 합니다.

export type SkillGroup = {
  category: string
  items: string[]
}

export type Project = {
  name: string
  description: string
  tech: string[]
  /** 저장소나 배포 주소. 없으면 생략 */
  link?: string
}

export type Contact = {
  github: string
  email: string
}

export type Profile = {
  name: string
  tagline: string
  about: string[]
  skills: SkillGroup[]
  projects: Project[]
  contact: Contact
}

export const profile: Profile = {
  name: '이서원',
  tagline: '큰 그림을 설계하고 끝까지 파고드는, 그러면서도 사람을 먼저 생각하는 개발자',

  // 배열의 한 항목이 한 문단
  about: [
    '안녕하세요, 이서원입니다. 무언가를 시작하기 전에 전체 구조부터 그려 보는 편입니다. 왜 이렇게 동작하는지 원리를 이해해야 직성이 풀리고, 한번 세운 목표는 계획을 세워 끝까지 밀고 나갑니다.',
    '감보다는 근거를, 익숙한 방식보다는 더 나은 방식을 찾으려 합니다. 혼자 깊이 몰입하는 시간을 좋아하고, 스스로 정한 기준이 높아서 "이 정도면 됐다"에서 한 번 더 고민합니다.',
    '그렇다고 차갑기만 한 사람은 아닙니다. 말수가 많지는 않아도 함께하는 사람의 이야기를 끝까지 듣고, 필요한 순간에 조용히 손을 내미는 쪽입니다. 논리로 문제를 풀되, 그 결과를 쓰는 사람이 편안하기를 바라는 마음으로 코드를 씁니다.',
  ],

  // TODO: 실제로 다룰 수 있는 기술로 정리하기
  skills: [
    { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'] },
    { category: 'Tools', items: ['Git', 'GitHub', 'Vite', 'VS Code'] },
  ],

  // TODO: 실제 프로젝트로 교체하기 (link 는 선택)
  projects: [
    {
      name: '자기소개 페이지',
      description: 'Vite + React + TypeScript로 만든 한 페이지짜리 자기소개 사이트입니다.',
      tech: ['React', 'TypeScript', 'CSS'],
      link: 'https://github.com/rulalrala/my-profile', // TODO: 실제 저장소 주소 확인
    },
    {
      // TODO: 실제 프로젝트가 생기면 교체하기
      name: 'React 상태 관리 연습',
      description:
        'useState로 클릭 카운터를 만들며 상태 업데이트가 어떻게 묶여서 반영되는지, 이전 값을 받는 함수형 업데이트가 왜 필요한지 직접 확인했습니다.',
      tech: ['React', 'TypeScript'],
    },
  ],

  contact: {
    github: 'https://github.com/rulalrala', // TODO: GitHub 주소 확인
    email: 'you@example.com', // TODO: 공개할 이메일 주소로 바꾸기
  },
}
