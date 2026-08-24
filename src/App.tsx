import { useMemo, useState } from 'react'
import Header from './components/Header'
import WebtoonSection from './components/WebtoonSection'
import { webtoons } from './data/mockWebtoons'

const mainTabs = ['신작', '인기 TOP 10', '요일별', '완결작', '급상승']
const weekdays = ['월', '화', '수', '목', '금', '토', '일']

export default function App() {
  const [query, setQuery] = useState('')
  const [activeTab, setActiveTab] = useState('신작')
  const [weekday, setWeekday] = useState('월')

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) return webtoons
    return webtoons.filter(
      (item) =>
        item.title.toLowerCase().includes(normalized) ||
        item.subtitle.toLowerCase().includes(normalized),
    )
  }, [query])

  const byCategory = (category: string) =>
    filtered.filter((item) => item.category === category)

  const weekdayItems = filtered.filter((item) => item.weekday === weekday)
  const top10 = filtered.filter((item) => item.rank && item.rank <= 10)

  return (
    <div className="app-shell">
      <Header query={query} onQueryChange={setQuery} />

      <nav className="main-tabs" aria-label="메인 메뉴">
        {mainTabs.map((tab) => (
          <button
            type="button"
            key={tab}
            className={activeTab === tab ? 'active' : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>

      <section className="hero">
        <div>
          <span className="eyebrow">오늘의 추천</span>
          <h1>오늘 딱 한 편만 본다면</h1>
          <p>WEBTOON9가 골라주는 오늘의 추천 작품.</p>
          <button type="button">지금 보기</button>
        </div>
        <div className="hero-mark">9</div>
      </section>

      <section className="weekday-panel">
        <div className="section-head">
          <h2>요일별 웹툰</h2>
        </div>
        <div className="weekday-tabs">
          {weekdays.map((day) => (
            <button
              type="button"
              key={day}
              className={weekday === day ? 'active' : ''}
              onClick={() => setWeekday(day)}
            >
              {day}
            </button>
          ))}
        </div>
        <div className="weekday-title">{weekday}요일 연재</div>
      </section>

      <WebtoonSection title={`${weekday}요일 연재`} items={weekdayItems} />
      <WebtoonSection title="신작" items={byCategory('신작')} large />
      <WebtoonSection title="인기 TOP 10" items={top10} showRank />
      <WebtoonSection title="급상승" items={byCategory('급상승')} />
      <WebtoonSection title="완결작" items={byCategory('완결')} />
      <WebtoonSection title="짧게 보기" items={byCategory('짧게 보기')} />
      <WebtoonSection title="애니메이션" items={byCategory('애니메이션')} />

      <WebtoonSection
        title="내 취향 추천"
        items={[...filtered].sort((a, b) => (b.rank ?? 99) - (a.rank ?? 99)).slice(0, 6)}
      />

      <WebtoonSection
        title="찜"
        items={filtered.filter((_, index) => index % 3 === 0).slice(0, 6)}
      />

      <WebtoonSection
        title="최근 본 작품"
        items={filtered.slice(0, 6)}
      />

      <footer>
        <strong>WEBTOON9</strong>
        <span>v0.1 prototype</span>
      </footer>
    </div>
  )
}
