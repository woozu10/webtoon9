import { useEffect, useState } from 'react'
import { minsuFirstChance } from '../data/minsuFirstChance'

type Props = {
  onBack: () => void
}

type EpisodeReview = {
  id: string
  rating: number
  text: string
  createdAt: string
}

const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`
const REVIEW_STORAGE_KEY = 'webtoon9.minsu-first-chance.episode-1.reviews'

function loadReviews(): EpisodeReview[] {
  try {
    const raw = localStorage.getItem(REVIEW_STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export default function MinsuFirstChance({ onBack }: Props) {
  const [episodeOpen, setEpisodeOpen] = useState(false)
  const [rating, setRating] = useState(0)
  const [reviewText, setReviewText] = useState('')
  const [reviews, setReviews] = useState<EpisodeReview[]>([])
  const [showReviews, setShowReviews] = useState(true)
  const [reviewSaved, setReviewSaved] = useState(false)

  useEffect(() => {
    setReviews(loadReviews())
  }, [])

  const saveReview = () => {
    const text = reviewText.trim()
    if (!rating || !text) return

    const newReview: EpisodeReview = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      rating,
      text,
      createdAt: new Date().toISOString(),
    }

    const nextReviews = [newReview, ...reviews]
    localStorage.setItem(REVIEW_STORAGE_KEY, JSON.stringify(nextReviews))
    setReviews(nextReviews)
    setRating(0)
    setReviewText('')
    setReviewSaved(true)
    setShowReviews(true)
  }

  const formatReviewDate = (value: string) => {
    const date = new Date(value)
    if (Number.isNaN(date.getTime())) return ''
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  if (!episodeOpen) {
    return (
      <main className="reader-page episode-entry-page">
        <div className="reader-toolbar episode-entry-toolbar">
          <button type="button" className="reader-back" onClick={onBack}>
            ← WEBTOON9
          </button>
        </div>

        <header className="episode-entry-header">
          <span className="reader-day">월요일 연재 · 신작</span>
          <h1>{minsuFirstChance.title.ko}</h1>
          <p className="reader-fr-title">{minsuFirstChance.title.fr}</p>
          <p className="reader-summary">{minsuFirstChance.subtitle.ko}</p>
          <div className="reader-meta">
            <span>{minsuFirstChance.author}</span>
            <span>스포츠</span>
            <span>학교</span>
            <span>성장</span>
          </div>
        </header>

        <section className="episode-entry-section">
          <div className="episode-entry-section-head">
            <h2>회차</h2>
            <span>1개</span>
          </div>

          <button
            type="button"
            className="episode-entry-card"
            onClick={() => {
              setEpisodeOpen(true)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <img
              src={assetUrl('webtoons/minsu-first-chance/scene-01.webp')}
              alt="민수의 첫 번째 기회 1화"
            />
            <div className="episode-entry-copy">
              <strong>1화</strong>
              <span>민수의 첫 번째 기회</span>
              <small>
                눌러서 보기
                {reviews.length > 0 ? ` · 리뷰 ${reviews.length}` : ''}
              </small>
            </div>
            <span className="episode-entry-arrow" aria-hidden="true">›</span>
          </button>
        </section>
      </main>
    )
  }

  return (
    <main className="reader-page fullscreen-reader-page">
      <div className="reader-toolbar fullscreen-reader-toolbar">
        <button
          type="button"
          className="reader-back"
          onClick={() => {
            setEpisodeOpen(false)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          ← 회차 목록
        </button>
        <span className="reader-progress">1화 · {minsuFirstChance.panels.length}컷</span>
      </div>

      <section className="fullscreen-comic-reader" aria-label={`${minsuFirstChance.title.ko} 웹툰`}>
        {minsuFirstChance.panels.map((panel, index) => (
          <figure className="fullscreen-comic-panel" key={panel}>
            <div className="fullscreen-panel-stage">
              <img
                src={assetUrl(panel)}
                alt={`${minsuFirstChance.title.ko} ${index + 1}컷`}
                loading={index < 2 ? 'eager' : 'lazy'}
              />
            </div>
          </figure>
        ))}
      </section>

      <section className="episode-review-area">
        <div className="episode-review-complete">
          <span>1화 끝</span>
          <h2>이번 화는 어떠셨나요?</h2>
          <p>별점과 감상을 남겨주세요.</p>
        </div>

        <div className="episode-review-form">
          <div className="episode-star-rating" aria-label="별점 선택">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                type="button"
                key={star}
                className={star <= rating ? 'selected' : ''}
                onClick={() => {
                  setRating(star)
                  setReviewSaved(false)
                }}
                aria-label={`${star}점`}
              >
                ★
              </button>
            ))}
          </div>

          <textarea
            value={reviewText}
            onChange={(event) => {
              setReviewText(event.target.value)
              setReviewSaved(false)
            }}
            placeholder="웹툰을 보고 느낀 점을 남겨주세요."
            maxLength={500}
          />

          <div className="episode-review-form-footer">
            <span>{reviewText.length}/500</span>
            <button
              type="button"
              className="episode-review-submit"
              disabled={!rating || !reviewText.trim()}
              onClick={saveReview}
            >
              리뷰 등록
            </button>
          </div>

          {reviewSaved ? (
            <p className="episode-review-saved">리뷰가 등록되었습니다.</p>
          ) : null}
        </div>

        <div className="episode-review-list-area">
          <button
            type="button"
            className="episode-review-toggle"
            onClick={() => setShowReviews((current) => !current)}
          >
            <span>리뷰 보기</span>
            <strong>{reviews.length}</strong>
            <span aria-hidden="true">{showReviews ? '⌃' : '⌄'}</span>
          </button>

          {showReviews ? (
            <div className="episode-review-list">
              {reviews.length === 0 ? (
                <div className="episode-review-empty">
                  아직 리뷰가 없습니다. 첫 리뷰를 남겨보세요.
                </div>
              ) : (
                reviews.map((review) => (
                  <article className="episode-review-item" key={review.id}>
                    <div className="episode-review-item-head">
                      <div className="episode-review-stars" aria-label={`${review.rating}점`}>
                        {'★'.repeat(review.rating)}
                        <span>{'★'.repeat(5 - review.rating)}</span>
                      </div>
                      <time dateTime={review.createdAt}>
                        {formatReviewDate(review.createdAt)}
                      </time>
                    </div>
                    <p>{review.text}</p>
                  </article>
                ))
              )}
            </div>
          ) : null}
        </div>

        <button
          type="button"
          className="episode-review-back"
          onClick={() => {
            setEpisodeOpen(false)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          회차 목록으로
        </button>
      </section>
    </main>
  )
}
