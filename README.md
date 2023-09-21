### 포트폴리오

## 소개

안녕하세요, 저는 황수현입니다.

React를 기반으로 만들었고, github 링크를 사용하여 배포하였습니다.

제가 이직을 결심하게 된 이유는 변해가는 사회와 더불어 제 자신의 가치를 높이기 위함입니다.  
현실에 안주하는 분위기에서 벗어나 좀 더 보람 있고 성취감을 느낄 수 있는 곳에서 일하고 싶습니다.  
새로운 기술에 관심이 많으며 동료들과의 커뮤니케이션과 상호 피드백 및 리뷰를 좋아합니다.  
맡은 일에 자부심을 갖고 도전을 경험할 수 있는 회사에서 일하고 싶습니다!

감사합니다.

[포트폴리오 링크](https://definitely92.github.io/react-portfolio/)

## 📁 폴더 구조

```
src
 ┣ components // 컴포넌트
 ┣ hooks // 커스텀 훅
 ┣ libs // 변수 관리
 ┣ pages // 페이지 관리
 ┣ assets //  CSS, images
 ┃ ┣ images
 ┃ ┣ styles
 ┣ App.js // 라우터 관리
 ┗ index.js
```

<br>

## 🛠️ 기술 스택

<div align="center">
<img src="https://img.shields.io/badge/HTML5-E34F26?style=plastic&logo=HTML5&logoColor=E34F26" />
<img src="https://img.shields.io/badge/SCSS-1572B6?style=plastic&logo=CSS3&logoColor=1572B6" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=plastic&logo=JavaScript&logoColor=F7DF1E" />
</div>

<div align="center">
<img src="https://img.shields.io/badge/React-18.2.0-61DAFB?style=plastic&logo=React&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/React Router-6.14.2-CA4245?style=plastic&logo=React Router&logoColor=CA4245" />
<img src="https://img.shields.io/badge/styled components-6.0.6-DB7093?style=plastic&logo=styled-components&logoColor=DB7093" />
</div>

<div align="center">
<img src="https://img.shields.io/badge/Eslint-8.45.0-4B32C3?style=plastic&logo=Eslint&logoColor=4B32C3" />
<img src="https://img.shields.io/badge/Prettier-3.0.0-F7B93E?style=plastic&logo=Prettier&logoColor=#F7B93E" />
<img src="https://img.shields.io/badge/SVG-6.4.0-528DD7?style=plastic&logo=Font Awesome&logoColor=528DD7" />
</div>

<br>

## 🎆 주요 기능

- 메인

  - 페이지 별 메뉴 네비게이션 바
  - 캐러셀

- 로그인

  - localStorage에 저장하여 로그인 상태를 유지
  - 알맞지 않은 정보를 입력시 로그인 실패에 대한 알림
  - 로그인 성공 시 메뉴 관리로 이동

- 메뉴 관리

  - Redux Toolkit을 활용하여 메뉴들을 로컬스토리지에 저장하고 불러오는 방식으로 전역적으로 상태 관리
  - Redux Toolkit의 slice를 활용하여 로직을 바깥으로 분리하고 데이터를 다룸
  - 상위 메뉴와 하위 메뉴의 CRUD 기능을 직접적으로 구현

- 페이지 관리
  - 하위 메뉴만을 모아 관리할 수 있는 영역
  - useDebounce훅을 활용하여 검색 시 입력시 마다 리렌더링이 일어나 화면이 변하는 현상을 늦춤
  - 복제 기능을 통해 해당 페이지를 다른 이름과 url로 변경하여 복제할 수 있음
