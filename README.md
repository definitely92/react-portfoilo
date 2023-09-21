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
<img src="https://img.shields.io/badge/SVG-528DD7?style=plastic&logo=Font Awesome&logoColor=528DD7" />
</div>

<br>

## 🎆 상세 내용

- react를 사용한 이유

  - 포트폴리오를 계속 보완해나가면서 수정 및 추가를 효율적으로 유지 보수 하기 위해서 입니다.
  - 가상 dom을 사용하여 실제 dom을 최소화 시켜 dom 업데이트를 효율적으로 처리하여 페이지 업데이트를 부드럽게 하려고 했습니다.
  - 컴포넌트를 재사용하여 만드는 시간을 절약하기 위해서 사용했습니다.

- 메인

  - 메인 폰트에 gsap 라이브러리를 사용하여 크로스브라이징 호환성을 높이고 부드러운 애니메이션 효과를 주었습니다.
  - 메인 폰트를 비동기 처리하여 해당 함수가 완료되면 상태를 업데이트하여 컴포넌트를 렌더링 합니다.

- 스타일

  - 주로 scss를 사용하여 css를 중첩하여 작성하였고 이로 인해 코드의 가독성을 높였습니다. 또한 스타일 값에 변수를 정의하여 관리 하기 쉽게 하였습니다.
  - contact 컴포넌트에서는 styledComponents를 사용하였습니다. 스타일들간의 충돌을 막을 수 있고 javascript 템플릿 리터럴을 사용하여 스타일을 작성하므로 직관적이었습니다.

- 이미지

  - svg 이미지 형식을 사용한 이유는 크기를 반응형에 맞게 대응하였고 css스타일링을 통해 동적으로 스타일링 할 수 있으며, 컴포넌트화 시켜서 재활용성을 높일 수 있었습니다.

- 서브 페이지

  - propTypes를 사용하여 코드의 안정성을 높이고 잘못된 유형의 데이터가 전달되지 않도록 방지하여 버그를 방지할 수 있었으며 코드를 이해하기 쉽게 하였습니다.
  - reactRouter를 사용하여 브라우저의 url이 변경될 때 새로고침 하지 않고 url에 맞는 컴포넌트를 렌더링 하며 동적으로 url을 생성하고 처리하여 유동적인 데이터에 따라 다양한 화면을 보여주도록 하였습니다.
