# 스크래퍼(진행 중)

## 소개
사이트에서 검색된 제품들의 사진과 정보들을 엑셀로 출력합니다.

**실행 화면**
![scraper](https://user-images.githubusercontent.com/71337000/136776364-b304176a-22f7-4d0c-b3e3-f0167a5fa459.gif)
> 

## 기술
### 언어
+ HTML
+ SCSS
+ TypeScript
+ JavaScript

### 프레임워크
+ Electron
+ Jest

### 라이브러리
+ React
+ React Testing Library
+ DOM Testing Library

### 도구
+ Prettier
+ ESLint
+ Webpack

## 시작
지인의 요청으로 시작했습니다. 처음엔 Listly, 엑셀(셀레니움)을 사용해 보았지만 불편하거나 너무 느렸습니다. JS 스크랩 프로젝트는 전무하기도 하니 이 기회에 관심 있었던 기술들도 함께 학습하며 진행해 보기로 했습니다.

## 목표
+ React 클래스 형 컴포넌트로 개발 후 함수형 컴포넌트로 코드 변경해 보기 **(완료)**
+ React Testing Library로 테스트 코드 작성해 보기 **(완료)**
+ Electron으로 데스크톱 앱 개발 후 Electron Forge로 배포 파일 만들기 **(완료)**
+ JavaScript로 컴포넌트 만들어 보기 **(완료)**
+ DOM Testing Library로 JavaScript 컴포넌트 테스트 코드 작성해 보기 **(완료)**
+ 한글 변수 사용해 보기 **(완료)**
+ TypeScript로 마이그레이션 해 보기 **(완료)**
+ TypeScript 클린 코드, 구글 스타일 가이드 참고하며 코드 수정하기 **(진행 중)**
+ KMP, Boyer Moore 알고리즘으로 유해 성분 포함된 제품 필터 해 보기 **(진행 중)**

## 목표 후기
### React 클래스 형 컴포넌트로 개발 후 함수형 컴포넌트로 코드 변경해 보기 ###
#### React를 선택한 이유 ####
+ 많은 기업들에서 요구하는 기술이라 사용 해 보고 싶었습니다.
+ Angular, Vue와 달리 라이브러리여서 비교적 학습 난이도가 쉬울 거라 생각했습니다.
+ VanillaJS로 개발하는 것보다 속도가 더 빠를 거라 생각했습니다.

클래스형과 함수형 컴포넌트 중에 어떤 것을 현업에서 사용하게 될지 모르니 두 가지를 사용해 보았습니다.

#### 느낀점 ####
+ 클래스형 컴포넌트
  + this를 신경 써 주어야 한다.
  + 라이프 사이클 메서드가 있어 렌더링 관련 작업이 수월하다.
+ 함수형 컴포넌트
  + 코드가 더 간소하다.
  + 각 훅들의 용도와 사용법을 숙지해야 한다.
  + 렌더링 최적화가 어렵다.

**실행 화면**
![products-load](https://user-images.githubusercontent.com/71337000/131956703-8dc0f66d-ab22-4012-bd35-972510d2422b.gif)

#### CORS ####
clinet-side에서 fetch 호출 시, CORS에 막혀 http 통신이 이루어지지 않았습니다. 우회 서버를 사용해 보았지만 느렸고, 직접 서버를 구현하기엔 필요 이상의 비용이 드는것 같고, node.js 설치부터 사용할 때마다 로컬 서버를 CLI로 실행하기까지 사용자의 불편함이 상당할 것 같았습니다. 크롬 설정을 통해 우회가 가능한 것을 보고 사용자의 브라우저를 확인 후 이 방법을 선택했습니다.

---

### React Testing Library로 테스트 코드 작성해 보기 ###
다른 사람이 사용하고, 실제로 사용하다 보면 무슨 일이 일어날지 모르니 불안감이 생겼습니다. 이런 부분을 해소하고자 테스트 코드를 작성해 보며 자신감을 얻고 싶었습니다.

#### React Testing Library를 선택한 이유 ####
+ '리액트 테스트 코드'로 검색하면 관련 글이 많이 나온다.
+  공식 문서에 따르면 Facebook에서는 React Testing Library 사용을 권장한다.

#### 느낀점 ####
+ 코드에 대해 조금은 자신감이 생긴 것 같다.
+ 실제 UI를 테스트하고 싶으면 Stroybook을 사용하면 될 것 같다.

---

### Electron으로 데스크톱 앱 개발 후 Electron Forge로 배포 파일 만들기 ###
이때까지는 client-side에서 실행 가능한 API만으로도 충분했지만 기능 수정으로 인해 fs모듈을 사용해야 했습니다. 사용자의 불편함을 최소한으로 줄이기 위해 node.js를 사용하는 한편 GUI를 제공하며 배포, 실행이 가능한 앱으로 만들어 보기로 했습니다.

#### Electron를 선택한 이유 ####
+ 파일 CRUD 강의를 보 간단 해 보였습니다.
+ JS 데스크톱 앱 개발 도구 중 Electron이 유명하기 때문입니다.
