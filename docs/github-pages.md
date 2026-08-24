# GitHub Pages 배포 방법

## 1. 프로젝트 파일 업로드

압축파일 자체가 아니라 압축을 푼 뒤 `webtoon9` 폴더 안의 파일과 폴더를 GitHub repository 최상위에 업로드합니다.

특히 아래 파일이 반드시 보여야 합니다.

- `.github/workflows/deploy.yml`
- `src/`
- `index.html`
- `package.json`
- `vite.config.ts`

## 2. GitHub Pages 설정

GitHub repository에서:

`Settings` → `Pages` → `Build and deployment` → `Source` → `GitHub Actions`

## 3. 배포 확인

`Actions` 탭에서:

`Deploy WEBTOON9 to GitHub Pages`

워크플로가 초록색 체크로 완료될 때까지 기다립니다.

## 4. 사이트 주소

일반적으로:

`https://<github-username>.github.io/webtoon9/`

형식으로 접속합니다.

## 5. 이후 업데이트

`main` 브랜치에 파일을 올리거나 수정할 때마다 자동으로 새 버전이 배포됩니다.
