import { useMemo, useState } from 'react'
import Header from './components/Header'
import WebtoonSection from './components/WebtoonSection'
import type { Webtoon } from './data/mockWebtoons'
import { webtoons } from './data/mockWebtoons'
import MinsuFirstChance from './pages/MinsuFirstChance'

const mainTabs = ['신작', '인기 TOP 10', '요일별', '완결작', '급상승']
const weekdays = ['월', '화', '수', '목', '금', '토', '일']
const MINSU_ID = 'minsu-basketball-01'
const VIEWED_STORAGE_KEY = 'webtoon9.viewedWebtoons'

function loadViewedIds(): Array<string | number> {
  try {
    const raw = localStorage.getItem(VIEWED_STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export default function App() {
  const [query, setQuery] = useState('')
  const [activeTab, setActiveTab] = useState('신작')
  const [weekday, setWeekday] = useState('월')
  const [openedWebtoonId, setOpenedWebtoonId] = useState<string | number | null>(null)
  const [viewedIds, setViewedIds] = useState<Array<string | number>>(() => loadViewedIds())

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
  const viewedWebtoons = webtoons.filter((item) => viewedIds.includes(item.id))

  const rememberViewed = (item: Webtoon) => {
    setViewedIds((current) => {
      const next = [item.id, ...current.filter((id) => id !== item.id)].slice(0, 8)
      try {
        localStorage.setItem(VIEWED_STORAGE_KEY, JSON.stringify(next))
      } catch {
        // localStorage unavailable: keep the in-memory list for this session.
      }
      return next
    })
  }

  const openWebtoon = (item: Webtoon) => {
    if (item.id === MINSU_ID) {
      rememberViewed(item)
      setOpenedWebtoonId(item.id)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const minsu = webtoons.find((item) => item.id === MINSU_ID)

  if (openedWebtoonId === MINSU_ID) {
    return <MinsuFirstChance onBack={() => setOpenedWebtoonId(null)} />
  }

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

      <section className="hero hero-minsu">
        <div>
          <span className="eyebrow">오늘의 추천 · 월요일 신작</span>
          <h1>민수의 첫 번째 기회</h1>
          <p>우연한 장거리 슛에서 시작된 민수의 농구부 도전.</p>
          <button
            type="button"
            onClick={() => {
              if (minsu) openWebtoon(minsu)
            }}
          >
            1화 보기
          </button>
        </div>
        <img
          className="hero-cover-image"
          src={`${import.meta.env.BASE_URL}webtoons/minsu-first-chance/scene-03.webp`}
          alt=""
        />
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

      {viewedWebtoons.length > 0 ? (
        <section className="viewed-mini-section" aria-label="내가 본 웹툰">
          <div className="viewed-mini-head">
            <h2>내가 본 웹툰</h2>
            <span>이어보기</span>
          </div>

          <div className="viewed-mini-row">
            {viewedWebtoons.map((item) => (
              <button
                type="button"
                className="viewed-mini-card"
                key={item.id}
                onClick={() => openWebtoon(item)}
              >
                <div className="viewed-mini-thumb">
                  {item.coverImage ? (
                    <img
                      src={`${import.meta.env.BASE_URL}${item.coverImage}`}
                      alt=""
                    />
                  ) : (
                    <span>9</span>
                  )}
                </div>
                <div className="viewed-mini-copy">
                  <strong>{item.title}</strong>
                  <span>1화 · 이어보기</span>
                </div>
              </button>
            ))}
          </div>
        </section>
      ) : null}

      <WebtoonSection title={`${weekday}요일 연재`} items={weekdayItems} onOpen={openWebtoon} />
      <WebtoonSection title="신작" items={byCategory('신작')} large onOpen={openWebtoon} />
      <WebtoonSection title="인기 TOP 10" items={top10} showRank onOpen={openWebtoon} />
      <WebtoonSection title="급상승" items={byCategory('급상승')} onOpen={openWebtoon} />
      <WebtoonSection title="완결작" items={byCategory('완결')} onOpen={openWebtoon} />
      <WebtoonSection title="짧게 보기" items={byCategory('짧게 보기')} onOpen={openWebtoon} />
      <WebtoonSection title="애니메이션" items={byCategory('애니메이션')} onOpen={openWebtoon} />

      <WebtoonSection
        title="내 취향 추천"
        items={[...filtered].sort((a, b) => (b.rank ?? 99) - (a.rank ?? 99)).slice(0, 6)}
        onOpen={openWebtoon}
      />

      <WebtoonSection
        title="찜"
        items={filtered.filter((_, index) => index % 3 === 0).slice(0, 6)}
        onOpen={openWebtoon}
      />

      <WebtoonSection
        title="최근 본 작품"
        items={filtered.slice(0, 6)}
        onOpen={openWebtoon}
      />

      <footer>
        <strong>WEBTOON9</strong>
        <span>v0.15</span>
      </footer>
    </div>
  )
}
