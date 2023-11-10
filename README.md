# 전남대 16조 <span style="background-color:#fff5b1">TEAM 다글다글🐶🐱</span>

![LOGO_IMAGE](https://github.com/Step3-kakao-tech-campus/Team16_FE/assets/81916309/fcee1491-fcac-4531-b2a5-23e4874d7fd7)

### 새로운 가족을 기다리는 유기동물을 연결하는 서비스 Animory 입니다.

</br>

## 🔗 목차

- [📰 최종 기획서 제출](#-최종-기획서-제출)
- [👨‍💻👩‍💻 FE 팀원 소개](#-fe-%ED%8C%80%EC%9B%90-%EC%86%8C%EA%B0%9C)
- [💻 프로젝트 소개](#-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%86%8C%EA%B0%9C)
- [📚 기술 스택](#-%EA%B8%B0%EC%88%A0-%EC%8A%A4%ED%83%9D)
- [🗃️ 디자인 패턴 & 디렉토리 구조 소개](#%EF%B8%8F-%EB%94%94%EC%9E%90%EC%9D%B8-%ED%8C%A8%ED%84%B4--%EB%94%94%EB%A0%89%ED%86%A0%EB%A6%AC-%EA%B5%AC%EC%A1%B0-%EC%86%8C%EA%B0%9C)
- [⌨️ 네이밍 컨벤션](#%EF%B8%8F-네이밍-컨벤션)
- [📑 페이지별 기능 소개](#-%ED%8E%98%EC%9D%B4%EC%A7%80%EB%B3%84-%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C)
- [📝 요구사항 명세서](https://github.com/Step3-kakao-tech-campus/Team16_BE/wiki/%EC%9A%94%EA%B5%AC%EC%82%AC%ED%95%AD-%EB%AA%85%EC%84%B8)
  </br>

## 📰 최종 기획서 제출

### 1️⃣ 팀 내 배포 링크 모음

</br>

### 2️⃣ 최신 ERD 이미지 파일

![ERD 최종](https://github.com/Step3-kakao-tech-campus/Team16_BE/assets/81916309/f6221f50-1c04-4de0-9d55-d951573c2594)
</br>

### 3️⃣ 각 트랙별 코딩에 대한 간략한 설명

### 기획 주안점 및 서비스 기획 의도

```
- 저희는 보호소에 입양된 동물들에 대한 사회적 인식을 개선시키고, 사용자에게 접근성이 좋은 컨텐츠를 제공하는 것을 초점에 두고 서비스를 기획, 개발했습니다.
- 동영상 숏폼을 통해 사용자의 진입 장벽을 낮춰 컨텐츠를 이용할 수 있게 만들었습니다.
```

### 세부적인 개발 내용

- 메인 페이지

```
- 주요 기능
   - 자동재생 / 클릭을 통한 일시정지, 음소거 컨트롤 / 드래그를 통한 페이지 이동의 기능을 가진 숏폼을 사용자에게 제공합니다.
   - 영상을 기다리는 동안 로더가 동작하도록 만들었습니다.
- 개발 주안점
   - 데스크톱의 크롬과 사파리, 모바일의 크롬과 사파리 등 브라우저의 영상 정책에 맞게 동영상이 의도한대로 동작하도록 개발했습니다.
   - 유튜브 shorts, 틱톡과 같은 슬라이더 형태의 숏폼을 만들었습니다.
```

- 내 주변 보호소 찾기 페이지

```
- 주요 기능
   - 카카오 맵 api를 연결하여, 애니모리에 등록된 보호소를 포함한 주변 동물 보호소를 보여주도록 개발했습니다.
   - 보호소 리스트에서 등록된 보호소를 클릭하면, 해당 보호소 페이지로 이동할 수 있습니다.
   - 등록되지 않은 보호소의 경우, 페이지 이동을 할 수 없음을 사용자에게 보여주도록 했습니다.
- 개발 주안점
   - 카카오맵 api를 리액트에서 사용하기 위해서 useEffect 안에 모든 코드를 집약시켜야 하는 문제가 있었고, 이를 해결하기 위해 커스텀 훅을 만들어 개발했습니다.
   - 애니모리에 등록된 보호소는 구분할 수 있도록 만들었습니다.
```

- 동물 상세 정보 페이지

```
- 주요 기능
   - 해당 동물의 사진을 비롯한 상세정보를 조회할 수 있습니다.
   - 보호소 정보 하단에 있는 "정보 보기"를 통해 해당 동물이 등록된 보호소 페이지로 이동할 수 있습니다.
- 개발 주안점
   - 반응형을 고려하여 UI가 변경되도록 구현했습니다.
```

- 프로필 리스트(홈, 신규, 긴급) 페이지

```
- 주요 기능
   - 유기 동물의 사진과 간단한 정보를 리스트 형태로 보여줍니다.
   - "더보기"를 누르면 신규, 긴급으로 묶인 유기 동물의 리스트 페이지로 이동합니다.
- 개발 주안점
   - 비슷한 구조가 반복되는 부분이라서 컴포넌트 재사용을 신경써서 구현했습니다.
   - 긴급의 경우, 사용자가 더 많이 접할 수 있도록 신규 리스트보다 상단에 위치시켰습니다.
```

- 보호소 프로필 페이지

```
- 주요 기능
   - 보호소의 간단한 정보와 해당 보호소에서 관리중인 유기동물 리스트를 보여줍니다.
   - 로그인된 계정의 경우 본인 보호소 정보로 이동하면 유기동물 수정하기 버튼이 띄워집니다.
- 개발 주안점
   - 반응형 ui와 수정하기 버튼 처리를 구현했습니다.
```

- 보호소 정보 수정 페이지

```
- 주요 기능
   - 보호소 회원 정보를 수정할 수 있습니다.
   - 보호소 정보를 가져오는 동안 스켈레톤을 보여줍니다.
- 개발 주안점
   - get, put 방식의 api fetch를 코드의 가독성을 높이기 위해 custom hook으로 만들어 구현했습니다.
   - "정보 수정하기" 버튼을 통해 api가 동작하는 동안 로더를 통해 동작 중임을 보여줍니다.
```

- 등록하기, 수정하기 페이지

```
- 주요 기능
   - 사용자가 업로드한 사진과 동영상을 formData로 관리하여 서버 api와 연결합니다.
   - input, radio button group을 통해 동물의 상세 정보를 입력받을 수 있습니다.
   - 안락사 일자를 고를 수 있는 Calendar를 직접 구현했습니다.
   - 등록, 수정 과정을 보여주는 모달을 만들었습니다.
- 개발 주안점
   - json 데이터, 이미지, 동영상을 한꺼번에 보내기 위해 formData 사용
   - input 방식이 다른 값들을 모아서 필수정보에 대한 autoComplete 값을 제어하는 부분을 신경썼습니다.
   - 필수 정보(안락사 일자, 동물 특성 점수 선택을 제외한 정보) 중 일부가 입력되지 않았을 때에는 안내 텍스트를 통해 사용자에게 알려줍니다.
   - api status code에 따라 적절한 에러 메시지를 사용자에게 보여줍니다.
   - 민간 동물 보호소의 경우 안락사 예정 일자가 지난 동물도 데리고 있을 수 있기 때문에, Calendar에서 과거 날짜도 설정할 수 있도록 했습니다.
   - 모달에서 api가 동작하는 동안 로딩의 과정을 보여주어 UX가 끊기지 않게 만들었습니다.
```

- 로그인 페이지

```
- 주요 기능
   - 이메일, 비밀번호를 입력하여 로그인을 요청할 수 있습니다.
   - 로그인 api가 진행되는 동안 로더를 보여주도록 만들었습니다.
- 개발 주안점
   - 이메일 형식을 프론트에서 확인하고, 로그인 결과를 백에서 확인하여 사용자에게 에러를 보여줄 수 있도록 구현했습니다.
   - 사용자의 편의성을 고려하여 로그인 완료 시 바로 메인 페이지로 이동하도록 했습니다.
```

- 회원가입 페이지

```
- 주요 기능
   - 이메일, 비밀번호, 비밀번호 입력 등 회원 정보를 입력하여 회원 가입을 요청할 수 있습니다.
   - react-daum-postcode를 통해 주소를 검색하여 입력 받을 수 있도록 만들었습니다.
   - 회원가입 api가 진행되는 동안 로더를 보여주도록 만들었습니다.
- 개발 주안점
   - api를 통해 이메일이 중복되었는지 확인하고, 적절한 안내 텍스트가 나오도록 만들었습니다.
   - 비밀번호 확인의 경우, 값을 입력할 때 바로 비밀번호와 일치하는지 확인할 수 있도록 구현했습니다.
   - 적절한 에러 텍스트를 사용자에게 보여주는 부분을 신경 썼습니다.
   - 사용자의 편의성을 고려하여 회원가입 완료 시 바로 로그인 페이지로 이동하도록 했습니다.
```

- 레이아웃

```
- 주요 기능
   - GNB: 메인 로고, 카테고리, 내 주변 보호소 찾기, 로그인 상태를 담고 있는 GNB를 만들었습니다.
   - ValidationCheckLayout: 로그인 정보를 담고 있는 토큰의 유무에 따라 나타나는 ValidationCheckLayout을 만들었습니다.
   - ValidationCheckLayout: 해당 레이아웃을 통해 로그인 페이지로 이동하거나, 로그아웃을 유지한 채로 서비스를 이용할 수 있습니다.
- 개발 주안점
   - GNB: 로그인 상태에 따라 GNB에 보이는 컨텐츠가 다르도록 구현했습니다.
   - GNB: 반응형을 고려하여 구현했습니다.
   - ValidationCheckLayout: 로그인 토큰이 만료된 후 로그인 상태에서 접근할 수 있는 api 기능을 사용하기 전에, 사용자가 미리 파악할 수 있도록 구현했습니다.
   - ValidationCheckLayout: useLocation을 통해 url이 변경이 되었을 때, 가지고 있는 쿠키 정보를 활용하여 판단하도록 구현했습니다.
   - ValidationCheckLayout: 속도 개선을 위해 로그인 안내 모달이 미리 랜더링 되지 않도록 lazy loading을 적용했습니다.
```

- 공통 모달 컴포넌트

```
- 주요 기능
   - 카테고리: 동영상의 지역과 동물을 고를 수 있는 카테고리 선택 모달을 만들었습니다.
   - 로그인 확인 모달: 토큰 만료에 따라 로그아웃된 사용자가 api에 접근하기 전 안내하는 모달을 만들었습니다.
- 개발 주안점
   - 카테고리: DOM 분리 및 스타일링을 위해서 react portal을 이용했습니다.
   - 로그인 확인 모달: 쿠키를 세션으로 저장하는 방식을 이용해서 "첫 화면 로딩 시", "로그아웃을 유지" 했을 때 모달이 나오지 않는 것에 신경 썼습니다.
```

- 라우터 관리

```
- 주요 기능
   - page를 감싸는 layout tree를 관리하도록 createBrowserRouter를 사용해 구현했습니다.
- 개발 주안점
   - "layout의 props로 children을 넣는 구조 => createBrowserRouter를 사용하는 구조"로
      레이아웃이 필요한 부분과 필요하지 않은 부분을 구별하여 사용하기 용이한 방법을 선택해 구현했습니다.
   - react-router-dom에서 지원하는 lazy 방식을 사용하여 속도 부분 개선을 고려했습니다.
     (메인 페이지의 경우, 영상을 받는 방식에 문제가 있어 lazy 방식을 사용하지 않았습니다. )
```

</br>

### 💻 프로젝트 소개

💡 반려인이 되고자 하는 사람들과 새로운 가족을 기다리는 유기동물을 연결하는 웹서비스입니다.  
</br>
🙋‍♂️ 저희의 메인 기능은 이렇게 되어있어요!!

- 저희 서비스의 타겟층은 민간 유기동물 보호소입니다.
- 유기동물의 **정적인 이미지**뿐만 아닌 **동적인 숏폼 영상**을 통한 컨텐츠로 사용자의 접근성을 높이는 것을 목표로 하고 있습니다.
- 지역, 동물별 카테고리를 통해 내가 원하는 지역 내 보호소에서 등록한 유기 동물의 사진과 영상을 확인할 수 있습니다.
- 근처 위치에 있는 동물 보호소를 검색할 수 있고, 서비스를 이용하여 유기 동물을 등록한 보호소를 구분하여 찾아볼 수 있습니다.
  </br>

### 👨‍💻👩‍💻 FE 팀원 소개

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/JeonDoGyun"><img src="https://avatars.githubusercontent.com/u/81916309?s=400&u=f7d48e3594c569f596361ade863d4615ade2702e&v=4" width="100px;" alt="테크리더 : 전도균"/><br /><sub><b>테크리더 : 전도균</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/LimSumi"><img src="https://avatars.githubusercontent.com/u/114466348?v=4" width="100px;" alt="팀원 : 임수미"/><br /><sub><b>팀원 : 임수미</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/hjiwon"><img src="https://avatars.githubusercontent.com/u/77186082?v=4" width="100px;" alt="팀원 : 황지원"/><br /><sub><b>팀원 : 황지원</b></sub></a><br /></td>
    </tr>
  </tbody>
</table>
</br>

### 📚 기술 스택

[![stackticon](https://firebasestorage.googleapis.com/v0/b/stackticon-81399.appspot.com/o/images%2F1696271782741?alt=media&token=cf0d1eea-7816-44f4-972a-8108d6e56312)](https://github.com/msdio/stackticon)

- Typescript 언어를 사용한 React 라이브러리 통해 SPA 방식의 웹 애플리케이션입니다.
- Recoil과 React Query를 통해 상태 관리를 하고 있습니다.
- CSS 스타일 작업을 위해 Tailwind CSS를 사용하고 있습니다.
  </br>

### 🗃️ 디자인 패턴 & 디렉토리 구조 소개

### ▶️ 디자인 패턴 설명 [변경 전]

- `VAC Pattern`과 `Atomic Design Pattern`을 병합하여 사용하고 있습니다.
  - VAC 패턴을 사용하여 UI를 담당하는 부분과 비즈니스 로직을 담당하는 부분을 분리하여 사용하고 있습니다.
  - 컴포넌트 및 페이지는 Atomin 디자인 패턴을 사용하여 컴포넌트의 재사용성을 염두에 두고 관리하고 있습니다.

</br>

### ▶️ 디자인 패턴 설명 [1차 변경]

- 기존 방식의 문제점
  1.  `Component의 Level`을 정하는 기준이 모호하다는 문제점이 있었습니다.
  2.  재사용할 수 있는 컴포넌트가 한정적이어서 모든 컴포넌트를 나누는 것에 어려움이 있었습니다.
- 변경된 방식
  1. `VAC Pattern`을 유지하여 로직과 UI를 분리하고, 페이지 단위로 컴포넌트를 관리하는 방식으로 변경하였습니다.
  2. `commons` 폴더를 만들어서 재사용할 수 있는 컴포넌트를 따로 분리했습니다.

</br>

- 디렉토리 구조
  - 아래의 구조는 디자인 패턴을 고려하여 작성한 가이드라인입니다.
  - `Atomic Design Pattern`의 문제로 인해 변경 사항이 반영된 구조입니다.
  - 폴더명은 바뀌지 않지만, 내부 파일의 이름은 변경될 수 있습니다.

### ▶️ 디자인 패턴 설명 [2차 변경]

- 기존 방식의 문제점
  1. page 디렉토리 내 컴포넌트의 수가 많아지면서 파일에 대한 가독성이 저하되는 문제가 있었습니다.
  2. Type, Interface를 작성하는 과정에서 중복되는 내용이 있었습니다.
- 변경된 방식
  1. page 디렉토리 내 components 디렉토리를 만들어서 페이지 내 사용되는 컴포넌트를 정리했습니다.
  2. page에 대한 `pageType.d.ts` 파일을 만들어서 Type과 Interface를 관리하도록 했습니다.

</br>

```
├── /public
│   ├── favicon.ico
│   ├── index.html
│   ├── /assets
│   │   ├── /fonts
│   │   │   └── font1
│   │   ├── /images
│   │   │   └── image1
│   │   ├── /logos
│   └── └── └── logo1
├── /src
│   ├── /commons
│   │   ├── apis
│   │   │   ├── useFetch.ts
│   │   │   ├── useGetFetch.ts
│   │   │   └── usePostFetch.ts
│   │   ├── components
│   │   │   ├── Input.tsx
│   │   │   ├── UserToggleBox.tsx
│   │   │   └── LogoButton.tsx
│   │   ├── cookie
│   │   │   └── cookie.ts
│   │   ├── modals
│   │   │   ├── AutoplayGuideModal.tsx
│   │   │   └── CategoryModal.tsx
│   ├── /pages
│   │   ├── home
│   │   │   ├── homeType.d.ts
│   │   │   ├── /components
│   │   │   │   ├── VHomeComponent.tsx
│   │   │   │   └── homeComponent.tsx
│   │   │   └── Home.tsx
│   │   ├── map
│   │   │   ├── mapType.d.ts
│   │   │   ├── /components
│   │   │   │   ├── VMapComponent.tsx
│   │   │   │   └── mapComponent.tsx
│   │   │   └── Map.tsx
│   ├── /layouts
│   │   ├── VGNB.tsx
│   │   └── GNB.tsx
│   ├── /recoil
│   │   ├── registerState.tsx
│   │   └── regionState.tsx
│   ├── /hooks
│   │   └── useFetch.ts
│   ├── App.css
│   ├── App.tsx
│   ├── App.test.tsx
│   ├── index.css
│   └── index.tsx
├── .env
├── .eslintrc
├── .gitignore
├── .prettierrc
├── package-lock.json
├── package.json
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

</br>

### ⌨️ 네이밍 컨벤션

- 모든 이름은 기능을 유추할 수 있도록 의미를 내포하고 있도록 작성함을 원칙으로 한다.
  #### 1. 파일
  - 컴포넌트 파일 : `PascalCase` 적용
  - 컴포넌트 이외의 파일 : `camelCase` 적용
  - 테스트 파일 : `App.test.tx`와 같이 `.test`를 명시
  #### 2. 폴더
  - 모든 폴더를 `camelCase`로 적용
  #### 3. 변수명
  - 일반적인 변수 : `camelCase`로 영어 대소문자를 사용
  - 상수 : 대문자로만 작성하고, 여러 단어의 구분은 \_(underscore) 사용
  #### 4. 이벤트 핸들러
  - handle + EventName으로 사용
  #### 5. 함수
  - 함수의 기능을 기준으로 작명
  - `camelCase` 적용
  #### 6. Type, Interface
  - `PascalCase` 적용
  #### 7. Route(경로)
  - `kebab-case` 적용

</br>

### 📑 페이지별 기능 소개

- 기획 단계에서 `Figma`를 통해 UI에 대한 와이어프레임을 제작하였습니다.
- 사전 기획 상태와 개발 후 상태를 비교하기 위해 작성했습니다.
- 아래 이미지는 페이지별 UI 설계 이미지와 사용되는 컴포넌트 및 기능에 대한 설명입니다.
- 자세한 사항은 [TEAM-16-Wireframe](https://www.figma.com/file/A0w3m1DU5JJm2zzvo9lnGE/16%EC%A1%B0-%EC%83%88%EA%B8%B0%ED%9A%8D?type=design&node-id=684%3A1302&mode=design&t=OXljL8TPJH6AsihE-1)을 통해 확인하실 수 있습니다.
  </br>

### 1. 메인 페이지

   <img width="450" alt="main-page" src="https://github.com/Step3-kakao-tech-campus/Team16_FE/assets/81916309/9836ad76-7103-4db2-8de2-108243a3e1cb">

- 메인 홈 화면입니다.
- 마우스 휠, 드래그 제스처를 통해 위아래로 숏폼을 랜덤하게 보여줄 수 있습니다.
- 영상에 마우스를 올렸을 때 상세 정보를 볼 수 있는 화살표 기호가 나오게 되고, 기호를 누르게 되면 오른쪽으로 넘어가면서 영상에 나오는 동물의 상세 정보를 볼 수 있습니다.

</br>

### 2. 상세 정보 페이지

   <img width="450" alt="image" src="https://github.com/Step3-kakao-tech-campus/Team16_FE/assets/81916309/73fa44a9-4096-4fbe-bd1a-96656973ccfe">

- 영상에서 화살표 기호를 눌렀을 때 나오는 페이지입니다.
- 등록된 동물의 상세 정보를 볼 수 있고, 보호소 연락하기 버튼을 누르게 되면 등록된 번호로 전화를 연결해줍니다.
- 동물의 성격에 대해 오각형 형태로 보여주어 사용자가 보기 편한 직관성을 가지고 있습니다.

</br>

### 3. 근처 동물 보호소 찾기 페이지

   <img width="450" alt="image" src="https://github.com/Step3-kakao-tech-campus/Team16_FE/assets/81916309/46567a69-aebf-4bbd-b288-86d1e8b7bab2">

- 사용자의 현재 위치를 중심으로 근처 동물 보호소 위치를 알려주는 페이지입니다.
- 검색된 보호소는 보호소의 이름, 주소, 연락처를 보여주게 됩니다.
- 검색된 보호소 중 현재 서비스를 이용하여 동물을 등록한 보호소는 별도의 표시를 통해 구분합니다.

</br>

### 4. 보호소 프로필 페이지

   <img width="450" alt="image" src="https://github.com/Step3-kakao-tech-campus/Team16_FE/assets/81916309/d8fd3872-74e1-4baf-ada8-e61db9877be3">

- 보호소에 대한 정보와 보호소에서 등록한 유기 동물을 그룹화하여 보여주는 페이지입니다.
- 페이지네이션을 통해 등록된 유기 동물 리스트를 관리합니다.

</br>

### 5. 프로필 리스트 페이지

   <img width="450" alt="image" src="https://github.com/Step3-kakao-tech-campus/Team16_FE/assets/81916309/cdea2d38-69fc-45ae-865a-c6e830480357">
   <img width="450" alt="image" src="https://github.com/Step3-kakao-tech-campus/Team16_FE/assets/81916309/9a897d39-8edd-450d-8b63-e99c72354b3d">

- 사이트에 등록된 유기 동물의 리스트를 사진과 함께 볼 수 있는 페이지입니다.
- 안락사 예정이 가까운 동물을 따로 분류해서 보여주고 있습니다.
- 새롭게 추가된 유기 동물을 볼 수 있는 탭을 따로 만들었습니다.
- 더보기를 누르면 추가로 등록된 유기 동물을 찾아볼 수 있고, 페이지네이션을 통해 등록된 유기 동물 리스트를 관리합니다.

</br>

### 6. 등록하기 페이지

   <img width="300" alt="image" src="https://github.com/Step3-kakao-tech-campus/Team16_FE/assets/81916309/80a87ef3-2990-44f8-a9f4-740ecd5e0906">
   <img width="350" alt="image" src="https://github.com/Step3-kakao-tech-campus/Team16_FE/assets/81916309/a10b6302-8976-485a-9b62-1c131ec88156">

- 유기 동물의 정보를 입력하여 사이트에 등록하는 페이지입니다.
- 비디오와 이미지를 등록할 수 있는 버튼이 있고, 제한 용량에 대해 텍스트로 명시해주고 있습니다.
- 등록하기 버튼을 통해 정보를 등록하고, 추가로 등록할 동물이 있는지 물어보는 모달창을 통해 사용자가 확인할 수 있도록 합니다.

</br>

### 7. 수정하기 페이지

   <img width="450" alt="image" src="https://github.com/Step3-kakao-tech-campus/Team16_FE/assets/81916309/6f2fe250-121c-47ad-8710-f9a48d876026">

- 등록하기 페이지에서 등록했던 정보를 수정할 수 있는 페이지입니다.
- 수정완료 버튼을 통해 정보를 수정하여 다시 등록할 수 있습니다.

</br>

### 8. 로그인 페이지

   <img width="450" alt="image" src="https://github.com/Step3-kakao-tech-campus/Team16_FE/assets/81916309/a23d7cdc-6e14-44db-9148-a26547dbd58e">

- 이메일, 비밀번호, 보호소 정보를 입력하여 회원가입 할 수 있습니다.
- 이메일 중복 확인 요청을 보냈을 때 validation 처리를 사용자에게 알려줍니다.
- 회원가입 버튼을 눌렀을 때, `이메일 형식에 맞지 않음`, `비밀번호 형식에 어긋남` 등의 validation 처리를 사용자에게 알려줍니다.
- 우편번호 찾기를 통해 보호소의 우편번호, 주소를 기입할 수 있는 모달창이 화면에 나오게 됩니다.
- 로그인 버튼을 통해 로그인 페이지로 이동할 수 있습니다.

</br>

### 9. 회원가입 페이지

   <img width="350" alt="image" src="https://github.com/Step3-kakao-tech-campus/Team16_FE/assets/81916309/b15f4b83-0cd3-4e74-a2dc-c81ed578bfe1">

- 이메일, 비밀번호를 입력하여 로그인할 수 있습니다.
- 로그인 요청을 보냈을 때 `등록되지 않은 이메일`, `비밀번호가 다름` 등의 validation 처리를 사용자에게 알려줍니다.
- 회원가입 버튼을 통해 회원가입 페이지로 이동할 수 있습니다.

</br>

### 10. GNB(Global Navigation Bar)

  <img width="450" alt="image" src="https://github.com/Step3-kakao-tech-campus/Team16_FE/assets/81916309/abbc8077-66a0-487b-a2fb-49cc375c0628">

- 카테고리, 프로필 목록, 주변 보호소 찾기, 등록하기, 로그인, 회원가입 페이지입니다.
- 각 기능에 대한 버튼을 누르게 되면, 해당 역할을 하는 페이지로 이동하게 됩니다.
- Layout으로 홈 화면과 같은 계층으로 두어서 동작합니다.

</br>

### 11. 카테고리 Modal

  <img width="436" alt="image" src="https://github.com/Step3-kakao-tech-campus/Team16_FE/assets/81916309/d8121898-cc0e-4b87-bc34-05771e77e4f4">
  <img width="395" alt="image" src="https://github.com/Step3-kakao-tech-campus/Team16_FE/assets/81916309/698a6822-c5f4-4dc7-8179-b14d1a0109bc">

- GNB에 있는 카테고리 탭을 누르게 되면, 지역과 동물 카테고리를 지정할 수 있는 모달창이 나오게 됩니다.
- 선택된 카테고리에 따라 홈 화면에서 보여지는 동물 숏폼 리스트가 변경됩니다.

</br>
