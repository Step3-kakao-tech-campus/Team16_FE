# 전남대 16조 <span style="background-color:#fff5b1">TEAM 다글다글🐶🐱</span>
![LOGO_IMAGE](https://github.com/Step3-kakao-tech-campus/Team16_FE/assets/81916309/fcee1491-fcac-4531-b2a5-23e4874d7fd7)
### 새로운 가족을 기다리는 유기동물을 연결하는 서비스 Animory 입니다.
</br>

## 🔗 목차
- [👨‍💻👩‍💻 FE 팀원 소개](#-fe-%ED%8C%80%EC%9B%90-%EC%86%8C%EA%B0%9C)
- [💻 프로젝트 소개](#-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%86%8C%EA%B0%9C)
- [📚 기술 스택](#-%EA%B8%B0%EC%88%A0-%EC%8A%A4%ED%83%9D)
- [🗃️ 디자인 패턴 & 디렉토리 구조 소개](#%EF%B8%8F-%EB%94%94%EC%9E%90%EC%9D%B8-%ED%8C%A8%ED%84%B4--%EB%94%94%EB%A0%89%ED%86%A0%EB%A6%AC-%EA%B5%AC%EC%A1%B0-%EC%86%8C%EA%B0%9C)
- [⌨️ 네이밍 컨벤션](#%EF%B8%8F-네이밍-컨벤션)
- [📑 페이지별 기능 소개](#-%ED%8E%98%EC%9D%B4%EC%A7%80%EB%B3%84-%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C)
- [📝 요구사항 명세서](https://github.com/Step3-kakao-tech-campus/Team16_BE/wiki/%EC%9A%94%EA%B5%AC%EC%82%AC%ED%95%AD-%EB%AA%85%EC%84%B8)
- [📒 카카오 테크 캠퍼스 3단계 진행 커리큘럼 안내 사항](#-%EC%B9%B4%EC%B9%B4%EC%98%A4-%ED%85%8C%ED%81%AC-%EC%BA%A0%ED%8D%BC%EC%8A%A4-3%EB%8B%A8%EA%B3%84-%EC%A7%84%ED%96%89-%EB%B3%B4%EB%93%9C)
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

### ▶️ 디자인 패턴 설명 [변경 후]
- 기존 방식의 문제점
   1. `Component의 Level`을 정하는 기준이 모호하다는 문제점이 있었습니다. 
   2. 재사용할 수 있는 컴포넌트가 한정적이어서 모든 컴포넌트를 나누는 것에 어려움이 있었습니다. 
- 변경된 방식
  1. `VAC Pattern`을 유지하여 로직과 UI를 분리하고, 페이지 단위로 컴포넌트를 관리하는 방식으로 변경하였습니다.
  2. `commons` 폴더를 만들어서 재사용할 수 있는 컴포넌트를 따로 분리했습니다. 

</br>

디렉토리 구조   
- 아래의 구조는 디자인 패턴을 고려하여 작성한 가이드라인입니다.
- `Atomic Design Pattern`의 문제로 인해 변경 사항이 반영된 구조입니다. 
- 폴더명은 바뀌지 않지만, 내부 파일의 이름은 변경될 수 있습니다.

```
├── /public
│   ├── index.html
│   ├── /assets
│   │   ├── /images
│   │   │   ├── image1
│   │   │   └── image2
│   │   ├── /logos
│   │   │   ├── logo1
│   └── └── └── logo2
├── /src
│   ├── /commons
│   ├── /pages
│   │   ├── home
│   │   │   └── Home.tsx
│   │   ├── login
│   │   │   ├── VLoginPage.tsx
│   │   │   └── LoginPage.tsx
│   │   ├── map
│   │   │   ├── Map.tsx
│   ├── └── └── MapPage.tsx
│   ├── /layouts
│   │   ├── VGNB.tsx
│   │   └── GNB.tsx
│   ├── /recoil
│   │   ├── registerState.tsx
│   └── └── regionState.tsx
│   ├── /hooks
│   └── └── useFetch.ts
│   ├── App.css
│   ├── App.tsx
│   ├── App.test.tsx
│   ├── index.css
├── └── index.tsx
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
  - 상수 : 대문자로만 작성하고, 여러 단어의 구분은 _(underscore) 사용
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
- 기획 단계에서 `Figma`을 통해 UI에 대한 와이어프레임을 제작하였습니다.
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

***


## 📒 카카오 테크 캠퍼스 3단계 진행 보드

</br>

## 배포와 관련하여

```

최종 배포는 크램폴린으로 배포해야 합니다.

하지만 배포 환경의 불편함이 있는 경우를 고려하여 

임의의 배포를 위해 타 배포 환경을 자유롭게 이용해도 됩니다. (단, 금액적인 지원은 어렵습니다.)

아래는 추가적인 설정을 통해 (체험판, 혹은 프리 티어 등)무료로 클라우드 배포가 가능한 서비스입니다.

ex ) AWS(아마존), GCP(구글), Azure(마이크로소프트), Cloudtype 

```
## Notice

```
필요 산출물들은 수료 기준에 영향을 주는 것은 아니지만, 
주차 별 산출물을 기반으로 평가가 이루어 집니다.

주차 별 평가 점수는 추 후 최종 평가에 최종 합산 점수로 포함됩니다.
```

![레포지토리 운영-001 (1)](https://github.com/Step3-kakao-tech-campus/practice/assets/138656575/acb0dccd-0441-4200-999a-981865535d5f)
![image](https://github.com/Step3-kakao-tech-campus/practice/assets/138656575/b42cbc06-c5e7-4806-8477-63dfa8e807a0)

[git flowchart_FE.pdf](https://github.com/Step3-kakao-tech-campus/practice/files/12521045/git.flowchart_FE.pdf)


</br>

## 필요 산출물
<details>
<summary>Step3. Week-1</summary>
<div>
    
✅**1주차**
    
```
    - 5 Whys
    - 마켓 리서치
    - 페르소나 & 저니맵
    - 와이어 프레임
    - 칸반보드
```
    
</div>
</details>

---

<details>
<summary>Step3. Week-2</summary>
<div>
    
✅**2주차**
    
```
    - ERD 설계서
    
    - API 명세서
```
    
</div>
</details>

---

<details>
<summary>Step3. Week-3</summary>
<div>
    
✅**3주차**
    
```
    - 최종 기획안
```
    
</div>
</details>

---

<details>
<summary>Step3. Week-4</summary>
<div>
    
✅**4주차**
    
```
    - 4주차 github
    
    - 4주차 노션
```
    
</div>
</details>

---
<details>
<summary>Step3. Week-5</summary>
<div>
    
✅**5주차**
    
```
    - 5주차 github
    
    - 5주차 노션
```
    
</div>
</details>

---

<details>
<summary>Step3. Week-6</summary>
<div>
    
✅**6주차**
    
```
    - 6주차 github
    
    - 중간발표자료
    
    - 피어리뷰시트
```
    
</div>
</details>

---

<details>
<summary>Step3. Week-7</summary>
<div>
    
✅**7주차**
    
```
    - 7주차 github
    
    - 7주차 노션
```
    
</div>
</details>

---

<details>
<summary>Step3. Week-8</summary>
<div>
    
✅**8주차**
    
```
    - 중간고사
    
```
    
</div>
</details>

---

<details>
<summary>Step3. Week-9</summary>
<div>
    
✅**9주차**
    
```
    - 9주차 github
    
    - 9주차 노션
```
    
</div>
</details>

---

<details>
<summary>Step3. Week-10</summary>
<div>
    
✅**10주차**
    
```
    - 10주차 github
    
    - 테스트 시나리오 명세서
    
    - 테스트 결과 보고서
```
    
</div>
</details>

---

<details>
<summary>Step3. Week-11</summary>
<div>
    
✅**11주차**
    
```
    - 최종 기획안
    
    - 배포 인스턴스 링크
```
    
</div>
</details>

---

## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**

```
1. README.md 파일은 동료 개발자에게 프로젝트에 쉽게 랜딩하도록 돕는 중요한 소통 수단입니다.
해당 프로젝트에 대해 아무런 지식이 없는 동료들에게 설명하는 것처럼 쉽고, 간결하게 작성해주세요.

2. 좋은 개발자는 디자이너, 기획자, 마케터 등 여러 포지션에 있는 분들과 소통을 잘합니다.
UI 컴포넌트의 명칭과 이를 구현하는 능력은 필수적인 커뮤니케이션 스킬이자 필요사항이니 어떤 상황에서 해당 컴포넌트를 사용하면 좋을지 고민하며 코드를 작성해보세요.

```

</br>

## **코드리뷰 관련: review branch로 PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**

**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**

> PR 제목 : 부산대_0조_아이템명_0주차
> 

</br>

</div>

---
