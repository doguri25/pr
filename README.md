# AI 워크 스마트 모바일 랜딩 페이지

밝은 톤의 모바일 우선 개인 브랜딩 랜딩 페이지입니다. `HTML/CSS/JS`만 사용하며, 3가지 주제 카드와 하단 고정 `커피챗` CTA(구글 폼)를 제공합니다.

## 기능
- 모바일 우선 반응형 레이아웃
- `주제 살펴보기` 클릭 시 섹션으로 부드러운 이동(사용자 설정에 따라 애니메이션 완화)
- 화면 진입 시 주제 카드 등장 애니메이션( `prefers-reduced-motion` 고려)
- `커피챗 하러 가기`는 구글 폼을 **새 탭**에서 열도록 설정

## 프로젝트 구조
- `index.html`: 랜딩 페이지 마크업(히어로/주제 카드/커피챗 CTA/푸터)
- `styles.css`: 파스텔 톤 테마 + 카드/버튼 스타일 + 반응형
- `script.js`: 스무스 스크롤, 카드 등장(IntersectionObserver), 구글 폼 URL 연결

## 로컬에서 실행하기
1. 프로젝트 폴더로 이동
   ```bash
   cd /Users/doguri/Documents/pr
   ```
2. 정적 서버 실행
   ```bash
   python3 -m http.server 8080
   ```
3. 브라우저에서 열기
   - `http://127.0.0.1:8080/`

## 커피챗(구글 폼) URL 변경하기
현재 구글 폼 URL은 아래 2곳에서 동일하게 유지됩니다.
- `script.js`의 `GOOGLE_FORM_URL`
- `index.html`의 `#coffeeChatSticky` 링크 `href`

## 문구/콘텐츠 수정하기
- 히어로 문구/CTA: `index.html`의 `hero` 섹션
- 3가지 주제 카드 제목/설명/포인트: `index.html`의 `#topics` 섹션
- 푸터 링크/텍스트: `index.html`의 `footer`

