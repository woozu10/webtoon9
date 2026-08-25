type Props = {
  query: string
  onQueryChange: (value: string) => void
}

export default function Header({ query, onQueryChange }: Props) {
  return (
    <header className="header">
      <div>
        <div className="brand">WEBTOON9</div>
        <div className="brand-sub">오늘 뭐 볼까?</div>
      </div>

      <label className="search">
        <span aria-hidden="true">⌕</span>
        <input
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="작품 검색"
          aria-label="웹툰 검색"
        />
      </label>
    </header>
  )
}
