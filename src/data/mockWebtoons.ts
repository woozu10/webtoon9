import { minsuFirstChance } from './minsuFirstChance'

export type Webtoon = {
  id: string | number
  title: string
  subtitle: string
  category: string
  weekday: string
  badge?: string
  rank?: number
  coverImage?: string
  author?: string
}

export const webtoons: Webtoon[] = [
  {
    id: minsuFirstChance.id,
    title: minsuFirstChance.title.ko,
    subtitle: minsuFirstChance.subtitle.ko,
    category: '신작',
    weekday: minsuFirstChance.weekday,
    badge: 'NEW',
    rank: 1,
    coverImage: minsuFirstChance.coverImage,
    author: minsuFirstChance.author,
  },
  { id: 2, title: '9번 교실', subtitle: '아무도 모르는 비밀', category: '급상승', weekday: '화', badge: 'UP', rank: 2 },
  { id: 3, title: '오늘도 레벨업', subtitle: '게임보다 어려운 학교생활', category: '인기', weekday: '수', badge: 'HOT', rank: 3 },
  { id: 4, title: '방과 후 탐정단', subtitle: '사라진 운동화를 찾아라', category: '완결', weekday: '목', rank: 4 },
  { id: 5, title: '3분 히어로', subtitle: '짧고 강한 한 편', category: '짧게 보기', weekday: '금', badge: '3 MIN', rank: 5 },
  { id: 6, title: '우주 급식실', subtitle: '오늘 메뉴는 외계인?', category: '애니메이션', weekday: '토', badge: 'ANIME', rank: 6 },
  { id: 7, title: '우리 반 마법사', subtitle: '평범한 줄 알았는데', category: '추천', weekday: '일', rank: 7 },
  { id: 8, title: '골목의 챔피언', subtitle: '다시 시작하는 한 판', category: '인기', weekday: '월', rank: 8 },
  { id: 9, title: '미래에서 온 친구', subtitle: '내일을 바꾸는 오늘', category: '신작', weekday: '화', badge: 'NEW', rank: 9 },
  { id: 10, title: '제로 아워', subtitle: '마지막 60분', category: '급상승', weekday: '수', badge: 'UP', rank: 10 },
  { id: 11, title: '완벽하지 않은 우리', subtitle: '그래도 함께', category: '완결', weekday: '목' },
  { id: 12, title: '한 컷 모험', subtitle: '5분이면 충분해', category: '짧게 보기', weekday: '금' },
]
