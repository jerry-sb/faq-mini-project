# 기아 Biz FAQ 클론 프로젝트

이 프로젝트는 현대오토에버 과제 수행을 위한 클론 프로젝트입니다.
[기아 Biz FAQ 페이지](https://wiblebiz.kia.com/FAQ)를 참고하여, 실제 서비스와 유사한 사용자 경험(UI/UX)을 목표로 구성하였습니다.

Next.js 기반으로 구축하였으며, React Query, React Error Boundary, Tailwind CSS, URL 쿼리 기반 상태 관리 등 최신 React 생태계 도구들을 적극적으로 활용하였습니다.

## 📌 프로젝트 개요

기존의 Kia FAQ 페이지는 내부 상태를 기반으로 렌더링되며, URL 쿼리 파라미터를 직접적으로 활용하지 않았으나, 본 프로젝트는 Next.js App Router 구조를 적극적으로 활용하여 `page.tsx` 단에서 `SearchParams` 기반 상태관리를 구현했습니다.

탭(tab), 카테고리(category), 검색어(question)를 쿼리 파라미터로 받아 해당 조건에 맞는 FAQ 리스트를 `Accordion` 형태로 보여줍니다. 무한 스크롤 구조로 구현되어 있으며, 더보기 버튼 클릭 시 React Query의 `useInfiniteQuery`를 통해 추가 데이터를 패칭하고 기존 리스트와 병합합니다.

페이지 진입 시 쿼리 파라미터 상태가 그대로 컴포넌트에 전달되도록 설계되었으며, `Suspense`를 이용해 비동기 탭 리스트(fetchCategory)를 fallback UI와 함께 처리합니다.

또한 `react-error-boundary`를 활용해 메인 로직 및 컴포넌트 내에 오류가 발생했을 때 사용자에게 모달 형태의 친절한 안내 UI를 제공하여 사용자 경험을 해치지 않도록 구성되어 있습니다.

`next/navigation`의 `useSearchParams`, `useRouter`, `usePathname`를 활용한 커스텀 훅(`useQueryParams.ts`)을 구현하여, 탭/카테고리/검색어에 대한 상태 관리를 통합적으로 수행합니다.


---
## 🚀 프로젝트 실행 방법

```bash
# 의존성 설치
npm install

# 빌드
npm run build

# 프로덕션 실행
npm run start
```

* 기본 주소: [http://localhost:3000](http://localhost:3000)
* API Route 기반 처리 (Next.js App Router의 `route.ts` 사용)
* 별도의 외부 서버 없이 `features/faq/mock/`에 정의된 mock 데이터를 기반으로 App Router 내 Route Handler가 응답 처리

---


## 주요 기술 스택

- **Next.js (App Router)** – 페이지 기반 라우팅과 SSR 지원
- **TypeScript** – 정적 타입으로 안정성 강화
- **Tailwind CSS** – 반응형 UI 및 커스텀 디자인
- **React Query** – FAQ 목록 무한스크롤/캐싱 처리
- **URL Query 기반 상태관리** – 검색 키워드, 탭 필터링을 searchParams로 상태관리
- **React Error Boundary** – 오류 발생 시 사용자 친화적인 예외 화면 제공 및 에러 처리에 대한 관심사 분리

## 📁 디렉토리 구조 

```bash
src/
├── app/                                      # Next.js App Router 기반 디렉토리
│   ├── api/                                  # App Router API 라우트
│   │   └── faq/                              # 실제 핸들러는 features/faq/api에서 작성하고 여긴 경로 export용
│   │       ├── route.ts                      # FAQ 목록 검색 및 페이징 GET API
│   │       └── category/
│   │           └── route.ts                  # 탭 선택에 따른 FAQ 카테고리 목록 GET API
│   ├── fonts/                                # localFont 설정 경로 (전역 변수로 사용)
│   ├── favicon.ico                           # Favicon 설정 경로
│   ├── globals.css                           # Tailwind 전역 스타일 정의 (CSS 변수, 미디어쿼리 등)
│   ├── layout.tsx                            # App 전체 공통 레이아웃 (Header, Footer, QueryProvider 등 포함)
│   └── page.tsx                              # FAQ 메인 페이지 렌더링
│
├── features/                                 # 도메인 단위 기능 및 UI 구조 분리
│   ├── common/                               # 범용 공통 모듈
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── footer/                   # Footer 반응형 컴포넌트 집합
│   │   │   │   │   ├── footer-address.tsx    # 사업자 정보 및 주소 출력
│   │   │   │   │   ├── footer-button.tsx     # 이용약관, 개인정보 처리방침 버튼
│   │   │   │   │   ├── footer-copyright.tsx  # 반응형 Copyright 표시
│   │   │   │   │   └── index.tsx             # Footer 레이아웃 구성 및 export
│   │   │   │   ├── header/                   # Header 반응형 컴포넌트 집합
│   │   │   │   │   ├── header-button.tsx     # 햄버거 토글 버튼 (rotate/transition 적용)
│   │   │   │   │   ├── header-logo.tsx       # picture 태그로 해상도별 최적화 이미지 제공
│   │   │   │   │   ├── header-nav.tsx        # 반응형 nav 스타일링 및 애니메이션 적용
│   │   │   │   │   ├── header-sticky.tsx     # IntersectionObserver로 헤더 고정 여부 감지
│   │   │   │   │   └── index.tsx             # sticky header와 상태 관리 포함 헤더 전체 export
│   │   │   ├── ui/
│   │   │   │   ├── button/
│   │   │   │   │   └── scroll-top-button.tsx # footer 위 영역 감지 → 고정/이동 포지션 처리
│   │   │   │   ├── info/                     # No data, 안내 메시지 등 표시 UI
│   │   │   │   ├── modal/
│   │   │   │   │   ├── error-modal-boundary.tsx # react-error-boundary 적용된 fallback modal
│   │   │   │   │   └── modal.tsx             # 알림용 모달 (애니메이션 전용 상태 분리)
│   │   ├── constants/                        # 공통 상수 (정적 배열 등)
│   │   ├── hooks/
│   │   │   ├── use-query-params.ts           # URL 쿼리 파라미터 커스텀 훅 (router.replace 기반)
│   │   │   └── use-tab-with-search-params.ts # 탭 쿼리 동기화 로직 추상화
│   │   ├── types/                            # 공통 타입 정의
│   │   └── utils/                            # 공통 유틸 함수 (필터링, 필터링 테스트 등)
│
│
│   └── faq/                                  # FAQ 도메인 전용 기능 모듈
│       ├── api/                              # App Router용 API 핸들러 정의
│       │   ├── category/
│       │   │   └── handler.ts                # `/api/faq/category` 요청 처리 (탭별 카테고리 필터링)
│       │   └── handler.ts                    # `/api/faq` 요청 처리 (검색어/페이징 기반 목록 반환)
│
│       ├── components/                       # FAQ 도메인에 특화된 UI 컴포넌트
│       │   ├── accordion/                    # 아코디언 UI 구성
│       │   │   ├── accordion-item.tsx        # 질문/답변 한 쌍 구성 (열기/닫기 상태 포함)
│       │   │   ├── accordion-label.tsx       # 질문 부분 UI
│       │   │   ├── accordion-detail.tsx      # 답변 영역 UI
│       │   │   ├── accordion-button.tsx      # 아코디언 열기/닫기 버튼
│       │   │   └── accordion-search-result.tsx # 검색 결과 기반 아코디언 렌더링 컴포넌트
│       │   └── search/                       # 검색 UI 모듈
│       │       ├── search-input-form.tsx     # form 전체 컴포넌트 (submit, validation 포함)
│       │       ├── search-input-field.tsx    # 검색어 입력 input 컴포넌트
│       │       ├── search-clear-button.tsx   # 입력 초기화 버튼
│       │       ├── search-button.tsx         # 검색 실행 버튼 (SVG background)
│       │       ├── search-result-header.tsx  # 검색 결과 수/상태 표시 헤더
│       │       └── async-sub-tab-list.tsx    # 비동기 FAQ 카테고리 탭 리스트 (React Query 기반)
│
│       ├── constants/
│       │   └── map.ts                        # 탭/카테고리 매핑용 정적 상수 객체
│
│       ├── hooks/                            # FAQ 도메인 커스텀 훅
│       ├── use-faq-Infinite-query.ts         # FAQ 무한스크롤용 데이터 패칭 훅
│       ├── use-faq-accordion-items.ts        # FAQ 아코디언용 병합 데이터 관리 훅
│       └── use-search-keyword.ts             # 검색 키워드 관련 상태와 query param을 관리하는 훅. keyword 입력, 초기화, 제출 제어를 담당함.
│
│       ├── mock/
│       │   ├── consult/
│       │   │   ├── category.mock.ts           # 상담 FAQ 카테고리 mock
│       │   │   └── faq.mock.ts                # 상담 FAQ 항목 mock
│       │   └── usage/
│       │       ├── category.mock.ts           # 사용 FAQ 카테고리 mock
│       │       └── faq.mock.ts                # 사용 FAQ 항목 mock
│
│       ├── types/
│       │   └── index.ts                       # FaqItem 등 도메인 타입 정의
│
│       └── utils/
│           ├── filter-util.ts                 # 검색어 및 카테고리 필터링 로직 유틸 함수
│           ├── filter.spec.ts                 # 유틸 함수에 대한 유닛 테스트 (Vitest 기반)
│           └── type-utils.ts                  # 타입 추론 보조 유틸 함수

│
├── lib/
│   └── query-provider.tsx                    # React Query 전역 Provider
```

---

## 📐 디렉토리 구조 설계 의도

이 프로젝트는 기능 단위와 관심사 분리를 중심으로 한 **도메인 중심 아키텍처(Domain-Oriented Architecture)** 를 적용하여 유지보수성과 확장성을 높이도록 설계하였습니다.

### ✅ 1. `app/`: Next.js App Router 기반 페이지 및 API 구조

* **페이지와 API 라우트를 명확히 분리**합니다.
* `app/api/` 내의 `route.ts`는 실제 처리 로직을 작성하는 공간이 아니라, **핸들러를 연결하는 라우터 export 지점**으로만 활용됩니다.
* 실제 API 비즈니스 로직은 `features/faq/api/`에서 수행되며, 이 분리를 통해 **핸들러의 복잡도를 줄이고 테스트 및 유지 관리가 용이**합니다.

### ✅ 2. `features/`: 도메인 기반 기능 모듈화

* 기능별로 `faq/`, `common/` 등으로 구분하여 **관심사에 따라 폴더를 분리**하였습니다.
* `faq/`는 특정 페이지나 도메인에 종속된 로직(UI/로직/데이터)이 모여 있고,
* `common/`은 **재사용 가능한 범용 UI 컴포넌트, 훅, 상수, 유틸 함수 등**을 포함합니다.
* 이는 **확장 시 도메인 단위로 폴더만 추가하면 되기 때문에 구조가 간결해지고 팀 작업 분담에도 유리**합니다.

### ✅ 3. `components/` 폴더 내부 구조

* 공통 UI 컴포넌트는 `features/common/components/ui/`에, 도메인 특화 UI는 `features/faq/components/`에 구분되어 있어 **재사용 여부 기준으로 위치를 결정**합니다.
* 특히 `accordion`, `search` 등 세부 UI도 **기능 단위로 디렉토리 분리**하여 유지보수 편의성을 높였습니다.

### ✅ 4. `hooks/`, `utils/`, `types/` 분리

* 각 도메인과 공통 영역 모두 `hooks`, `utils`, `types` 폴더를 분리하여:

    * 공통으로 쓰이는 로직은 `common` 하위에서 재사용
    * 특정 도메인에 종속적인 훅/유틸은 해당 `features/[도메인]/` 하위에 위치

### ✅ 5. `mock/` 폴더로 목데이터 분리

* `mock/`은 실제 API가 준비되지 않아도 UI 개발과 테스트가 가능하도록 구성
* 목적별로 `consult`, `usage` 등으로 분리하여 데이터 스펙의 다양성을 반영함

---
## 🧩 주요 컴포넌트 설명

### 🔍 검색(Search)

* `search-input-form.tsx`: 검색어를 입력받고 제출하는 폼 컴포넌트. `onSubmit` 시 validation 수행하며 모달을 통해 알림 표시.
* `search-input-field.tsx`: 실제 input 동작을 담당하며 키워드 입력 상태만 제어.
* `search-button.tsx`: 백그라운드에 SVG 아이콘을 포함한 반응형 submit 버튼.
* `search-clear-button.tsx`: 현재 입력된 검색어 초기화 버튼.
* `search-result-header.tsx`: 현재 쿼리가 검색 상태인지 판단하여 검색 결과 수와 관련 정보를 표시.

### 🗂️ 탭(Tab)

* `tab-list.tsx`: 상단 메인 탭 컴포넌트. 클릭 시 기존 쿼리 파라미터 초기화 후 새 탭 값으로 갱신. `resetAndClick()`을 통해 searchParams 초기화 및 `tab` 파라미터 설정.
* `sub-tab-list.tsx`: 메인 탭에 따라 하위 탭 표시. 해당 탭만 `category` 파라미터로 쿼리스트링에 반영되며, `onTabClick()`으로 탭 변경을 제어함.
* `async-sub-tab-list.tsx`: React Query 기반으로 비동기 FAQ 카테고리 탭 렌더링 처리.

### 💬 아코디언(Accordion)

* `accordion-item.tsx`: 질문/답변 UI 요소 정의. 각 아이템은 `AccordionButton`(질문)과 `AccordionDetail`(답변)로 구성되며 상태 기반으로 펼침/접힘 애니메이션 처리.
* `accordion-label.tsx`: 질문 상단에 표시되는 카테고리 정보 (label/subLabel)를 반응형으로 표시.
* `accordion-detail.tsx`: 답변 내용을 포함하는 영역. `dangerouslySetInnerHTML`을 이용해 HTML로 출력되며, `max-height` 전환을 이용해 슬라이드 애니메이션 구현.
* `accordion-button.tsx`: 아코디언의 질문 영역 버튼. 클릭 시 `onClick`으로 열림 여부를 부모에 전달. 화살표 아이콘 회전 효과 포함.
* `accordion-search-result.tsx`: 전체 FAQ 리스트를 받아 아코디언으로 렌더링. React Query로 받아온 데이터를 기준으로 펼칠 항목을 상태로 관리하며, "더보기" 버튼으로 무한스크롤 구현.

### ⚙️ 모달 & 에러 처리

* `modal.tsx`: 간단한 정보 전달을 위한 커스텀 모달. 애니메이션 진입 지연 처리 포함.
* `error-modal-boundary.tsx`: `react-error-boundary`를 활용해 에러 발생 시 fallback 모달로 graceful degrade 처리.

### 🔝 스크롤 버튼

* `scroll-top-button.tsx`: 일정 스크롤 이상일 때 나타나며, 푸터에 도달 시 `IntersectionObserver`로 고정 위치를 `absolute`로 전환. `#scroll-anchor` 요소와의 교차 여부를 감지하여 푸터와 겹치지 않도록 처리. 스크롤 이벤트를 통해 보여짐 여부를 제어하며, 상단 이동 기능을 수행함.

### 📌 헤더(Header)

* `header.tsx`: 전체 헤더 컴포넌트. 상단 고정(sticky) 상태 유지 및 햄버거 메뉴 토글 상태 관리 포함.
* `header-sticky.tsx`: 뷰포트 상단에서 요소가 사라지는지를 감지해 헤더에 그림자(`shadow-header`) 효과를 줄지 결정.
* `header-logo.tsx`: `<picture>` 태그를 활용해 화면 크기에 따라 최적화된 Kia BIZ 로고를 보여줌.
* `header-nav.tsx`: 네비게이션 메뉴 리스트. 데스크탑에선 가로, 모바일에선 사이드바 형태로 보여주며 `animate-slide-in-left`, `animate-slide-out-left` 클래스 애니메이션을 적용.
* `header-button.tsx`: 모바일에서 햄버거 버튼 역할 수행. 클릭 시 회전 애니메이션으로 메뉴 열림/닫힘 시각적 효과 제공.

### 🧾 기타 안내 영역

* `app-info.tsx`: 앱 설치 정보 및 링크 안내.
* `inquiry-info.tsx`: 고객문의 방법 관련 UI 안내.
* `process-info.tsx`: 서비스 이용 절차 안내 블럭 UI.

---

## 📌 주요 커스텀 훅 설명

### 🔷 `useQueryParams.ts`  *(공통 유틸 훅)*

* **목적**: `next/navigation`의 `useSearchParams`, `useRouter`, `usePathname`를 래핑해 URL 쿼리 파라미터를 선언적으로 관리
* **특징**:

    * 쿼리 문자열을 `URLSearchParams`로 쉽게 조작할 수 있게 도와주는 유틸
    * 페이지 리로딩 없이 `router.replace()`를 통해 query 변경
    * 외부에서 사용할 수 있는 `.get`, `.set`, `.delete`, `.all()` 메서드 제공

```ts
const query = useQueryParams();
query.set("question", "결제");
const currentTab = query.get("tab");
query.delete("category");
```

---

### 🔷 `useTabWithSearchParams.ts` *(공통 유틸 훅)*

* **목적**: 탭 형태 UI와 특정 query parameter(`tab`, `category` 등)를 동기화
* **의도**:

    * 외부에서 탭 구성 데이터를 넘기고, 현재 활성화된 탭 인덱스를 반환
    * 탭을 클릭하면 지정된 `query param` 값을 URL에 반영
    * `resetAndClick()` 메서드는 다른 query 값들은 모두 제거하고 해당 탭만 설정할 수 있게 함

```ts
const { activeIndex, onTabClick, resetAndClick } = useTabWithSearchParams(
  [{ label: "사용", value: "USAGE" }, { label: "상담", value: "CONSULT" }],
  "USAGE", 
  "tab"
);

onTabClick(1); // "CONSULT" 탭 선택 → query: ?tab=CONSULT
resetAndClick(0); // 모든 query 제거 후 → ?tab=USAGE
```
---

### 🔷 `useFaqInfiniteQuery.ts`

* **목적**: FAQ 데이터를 무한 스크롤로 패칭
* **사용 기술**: `@tanstack/react-query`의 `useInfiniteQuery`
* **핵심**:

    * 탭/카테고리/검색어를 기준으로 `queryKey`를 구성하여 캐싱
    * `offset`, `limit` 기반 페이지네이션
    * 서버 응답의 `offset + limit < totalRecord` 조건을 기준으로 다음 페이지 여부 판단

```ts
const { data, fetchNextPage, hasNextPage } = useFaqInfiniteQuery({
  tab: "USAGE",
  category: "GENERAL",
  question: "결제",
});
```

---

### 🔷 `useFAQAccordionItems.ts`

* **목적**: `useFaqInfiniteQuery`로 가져온 FAQ 데이터를 **Accordion UI용 형식**으로 가공
* **핵심**:

    * 각 `FaqItem`을 `{ question, answer, label, subLabel }` 형태로 변환
    * `useEffect`로 `data.pages`를 병합하여 `allItems` 관리
    * `totalRecord`도 반환하여 결과 수 출력에 활용

```ts
const { allItems, total, hasNextPage, fetchNextPage } = useFAQAccordionItems({
  tab,
  category,
  question,
});
```

---

### 🔷 `useSearchKeyword.ts`

* **목적**: FAQ 검색어 상태를 관리하고, 이를 URL query(`question`)와 동기화
* **핵심**:

    * 입력 키워드와 `question` query를 분리 관리
    * `submitKeyword()`는 최소 2자 이상일 때만 query에 반영
    * `clearKeyword()`로 검색어 초기화 및 query 삭제 가능

```ts
const {
  keyword,
  updateKeyword,
  submitKeyword,
  clearKeyword,
} = useSearchKeyword();
```
---

## ✅ 테스트 방법 및 유닛 테스트 설명

```bash
# 테스트 실행 (Vitest 사용)
npm run test
```

* 유틸 함수 테스트는 `Vitest`를 사용해 작성되었습니다.
* 주요 테스트 대상은 아래와 같습니다:

### `filter-util.spec.ts`

* 탭, 카테고리, 검색어, 페이지네이션 조건별 필터링 로직 검증

### `common-util.spec.ts`

* 배열 데이터에 대한 `paginate()` 로직 (offset/limit 기반 slicing) 검증




