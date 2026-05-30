# 사라진 공간의 소리

용현동 골다리의 사운드를 모바일 웹으로 감상하는 가벼운 프론트엔드 프로젝트입니다.

## 현재 이해한 범위

- `Project.png`: 프로젝트의 전체 톤과 주제 레퍼런스
- `Page_imgs/`: 구현해야 할 모바일 화면 레퍼런스
  - `Main page.png`: 입장 화면
  - `Sound track.png`: 사운드 선택 화면
  - `Sound 1 (play).png`, `Sound 1 (pause).png`: 플레이어 상태 화면
- `assets/imgs/`: 화면에 사용하는 사운드 패턴 이미지 자산

## 개발 환경

- Next.js App Router
- React
- TypeScript
- 별도 UI 라이브러리 없이 CSS와 이미지 자산 중심으로 구성

## 실행

```bash
npm install
npm run dev
```

개발 서버는 기본적으로 `http://localhost:3000`에서 실행됩니다.

## 검증

```bash
npm run lint
npm run build
```

현재 `lint`는 별도 ESLint 룰 도입 전까지 TypeScript 타입 체크로 연결되어 있습니다.
