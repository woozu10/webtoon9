import type { Webtoon } from '../data/mockWebtoons'
import WebtoonCard from './WebtoonCard'

type Props = {
  title: string
  items: Webtoon[]
  showRank?: boolean
  large?: boolean
  onOpen?: (item: Webtoon) => void
}

export default function WebtoonSection({
  title,
  items,
  showRank = false,
  large = false,
  onOpen,
}: Props) {
  if (!items.length) return null

  return (
    <section className="section">
      <div className="section-head">
        <h2>{title}</h2>
        <button type="button">전체보기</button>
      </div>
      <div className="card-row">
        {items.map((item) => (
          <WebtoonCard
            key={`${title}-${item.id}`}
            item={item}
            showRank={showRank}
            large={large}
            onOpen={onOpen}
          />
        ))}
      </div>
    </section>
  )
}
