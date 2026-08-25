import { useMemo, useState } from 'react'
import Header from './components/Header'
import WebtoonSection from './components/WebtoonSection'
import type { Webtoon } from './data/mockWebtoons'
import { webtoons } from './data/mockWebtoons'
import MinsuFirstChance from './pages/MinsuFirstChance'

const mainTabs = ['신작', '인기 TOP 10', '요일별', '완결작', '급상승'] as const
const weekdays = ['월', '화', '수', '목', '금', '토', '일']
const MINSU_ID = 'minsu-basketball-01'
const VIEWED_STORAGE_KEY = 'webtoon9.viewedWebtoons'

type MainTab = (typeof mainTabs)[number]
type Page = 'home' | MainTab

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
  const [page, setPage] = useState<Page>('home')
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

  const openPage = (tab: MainTab) => {
    setPage(tab)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goHome = () => {
    setPage('home')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const minsu = webtoons.find((item) => item.id === MINSU_ID)

  if (openedWebtoonId === MINSU_ID) {
    return <MinsuFirstChance onBack={() => setOpenedWebtoonId(null)} />
  }

  const renderCategoryPage = () => {
    if (page === 'home') return null

    let title = page
    let description = ''
    let content = null

    if (page === '신작') {
      description = '새롭게 공개된 작품만 모아봤어요.'
      content = <WebtoonSection title="신작 전체" items={byCategory('신작')} large onOpen={openWebtoon} />
    }

    if (page === '인기 TOP 10') {
      description = '지금 가장 많이 보는 인기 작품이에요.'
      content = <WebtoonSection title="인기 TOP 10" items={top10} showRank large onOpen={openWebtoon} />
    }

    if (page === '요일별') {
      description = '요일을 선택해서 연재작을 찾아보세요.'
      content = (
        <>
          <div className="category-weekday-tabs">
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
          <WebtoonSection title={`${weekday}요일 연재`} items={weekdayItems} large onOpen={openWebtoon} />
        </>
      )
    }

    if (page === '완결작') {
      description = '기다리지 않고 끝까지 볼 수 있는 완결 작품이에요.'
      content = <WebtoonSection title="완결작 전체" items={byCategory('완결')} large onOpen={openWebtoon} />
    }

    if (page === '급상승') {
      description = '최근 빠르게 관심이 높아진 작품이에요.'
      content = <WebtoonSection title="급상승 전체" items={byCategory('급상승')} large onOpen={openWebtoon} />
    }

    return (
      <main className="category-page">
        <button type="button" className="category-back" onClick={goHome}>
          ← 홈으로
        </button>

        <header className="category-page-header">
          <span>WEBTOON9</span>
          <h1>{title}</h1>
          <p>{description}</p>
        </header>

        <div className="category-page-content">
          {content}
        </div>
      </main>
    )
  }

  if (page !== 'home') {
    return (
      <div className="app-shell category-shell">
        <Header query={query} onQueryChange={setQuery} />

        <nav className="main-tabs" aria-label="메인 메뉴">
          {mainTabs.map((tab) => (
            <button
              type="button"
              key={tab}
              className={page === tab ? 'active' : ''}
              onClick={() => openPage(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>

        {renderCategoryPage()}
      </div>
    )
  }

  return (
    <div className="app-shell">
      <Header query={query} onQueryChange={setQuery} />

      <nav className="main-tabs" aria-label="메인 메뉴">
        {mainTabs.map((tab) => (
          <button
            type="button"
            key={tab}
            className=""
            onClick={() => openPage(tab)}
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
          <button type="button" onClick={() => openPage('요일별')}>
            전체보기
          </button>
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

      <footer>
        <strong>WEBTOON9</strong>
        <span>v0.16</span>
      </footer>
    </div>
  )
}
