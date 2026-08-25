# WEBTOON9

사용자가 직접 그린 홈 화면 와이어프레임을 바탕으로 시작한 웹툰 탐색 프로젝트입니다.

## 현재 포함된 기능

- 검색
- 신작
- 인기 TOP 10
- 요일별
- 완결작
- 급상승
- 내 취향 추천
- 짧게 보기
- 애니메이션
- 오늘의 추천
- 찜
- 최근 본 작품
- 모바일 가로 스크롤 카드 UI
- 초기 와이어프레임 이미지 보관

## 실행

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build
```

## 현재 단계

이 저장소는 v0.1 홈 화면 프로토타입입니다.
백엔드, 로그인, 실제 웹툰 데이터, 추천 알고리즘은 아직 연결하지 않았습니다.

## GitHub Pages 배포

이 프로젝트는 `main` 브랜치에 push되면 GitHub Actions가 자동으로 빌드하고 GitHub Pages에 배포합니다.

GitHub에서:

1. `Settings`
2. `Pages`
3. `Build and deployment`
4. `Source`를 **GitHub Actions**로 선택

배포가 완료되면 사이트 주소는 보통 아래 형식입니다.

```text
https://<github-username>.github.io/webtoon9/
```

GitHub의 `Actions` 탭에서 `Deploy WEBTOON9 to GitHub Pages` 작업이 성공했는지 확인할 수 있습니다.


## v0.3 실제 웹툰 콘텐츠

월요일 연재작에 **민수의 첫 번째 기회**를 연결했습니다.

- 원본 저자: **Minseo Jeon**
- 원본 12컷 이미지 사용
- 홈 카드와 오늘의 추천에서 작품을 열 수 있음
- 세로 스크롤 웹툰 뷰어 제공
- 프랑스어 앱의 학습용 표현/퀴즈/쉐도잉/역할극은 포함하지 않음
