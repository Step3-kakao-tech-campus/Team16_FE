# 전남대 16조 <span style="background-color:#fff5b1">TEAM 다글다글🐶🐱</span>
![LOGO_IMAGE](https://github.com/Step3-kakao-tech-campus/Team16_FE/assets/81916309/fcee1491-fcac-4531-b2a5-23e4874d7fd7)
### 새로운 가족을 기다리는 유기동물을 연결하는 서비스 Animory 입니다.
</br>

## 🔗 목차
- [👨‍💻👩‍💻 FE 팀원 소개](https://github.com/Step3-kakao-tech-campus/Team16_FE/edit/feat/%2331/README.md#-fe-%ED%8C%80%EC%9B%90-%EC%86%8C%EA%B0%9C)
- [💻 프로젝트 소개](https://github.com/Step3-kakao-tech-campus/Team16_FE/edit/feat/%2331/README.md#-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%86%8C%EA%B0%9C)
- [📚 기술 스택](https://github.com/Step3-kakao-tech-campus/Team16_FE/edit/feat/%2331/README.md#-%EA%B8%B0%EC%88%A0-%EC%8A%A4%ED%83%9D)
- [🗃️ 디자인 패턴 & 디렉토리 구조 소개](https://github.com/Step3-kakao-tech-campus/Team16_FE/edit/feat/%2331/README.md#%EF%B8%8F-%EB%94%94%EC%9E%90%EC%9D%B8-%ED%8C%A8%ED%84%B4--%EB%94%94%EB%A0%89%ED%86%A0%EB%A6%AC-%EA%B5%AC%EC%A1%B0-%EC%86%8C%EA%B0%9C)
- [📑 페이지별 기능 소개](https://github.com/Step3-kakao-tech-campus/Team16_FE/edit/feat/%2331/README.md#-%ED%8E%98%EC%9D%B4%EC%A7%80%EB%B3%84-%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C)
- [📝 요구사항 명세서](https://github.com/Step3-kakao-tech-campus/Team16_BE/wiki/%EC%9A%94%EA%B5%AC%EC%82%AC%ED%95%AD-%EB%AA%85%EC%84%B8)
- [📒 카카오 테크 캠퍼스 3단계 진행 커리큘럼 안내 사항](https://github.com/Step3-kakao-tech-campus/Team16_FE/edit/feat/%2331/README.md#-%EC%B9%B4%EC%B9%B4%EC%98%A4-%ED%85%8C%ED%81%AC-%EC%BA%A0%ED%8D%BC%EC%8A%A4-3%EB%8B%A8%EA%B3%84-%EC%A7%84%ED%96%89-%EB%B3%B4%EB%93%9C)
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
디자인 패턴 설명
- `VAC Pattern`과 `Atomic Design Pattern`을 병합하여 사용하고 있습니다. 
    - VAC 패턴을 사용하여 UI를 담당하는 부분과 비즈니스 로직을 담당하는 부분을 분리하여 사용하고 있습니다. 
    - 컴포넌트 및 페이지는 Atomin 디자인 패턴을 사용하여 컴포넌트의 재사용성을 염두에 두고 관리하고 있습니다. 
</br>

디렉토리 구조   
- 아래의 구조는 디자인 패턴을 고려하여 작성한 가이드라인입니다.
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
│   ├── /apis
│   ├── /components
│   │   ├── /atoms
│   │   ├── /molecules
│   │   ├── /organisms
│   │   ├── /templates
│   │   │   ├── SomeTemplate.tsx
│   │   └── └── VSomeTemplate.tsx
│   ├── /pages
│   │   ├── HomePage.tsx
│   │   └── DetailedPetPage.tsx
│   ├── /layouts
│   └── └── GNB.tsx
│   ├── /recoil
│   │   ├── PetShelterState.tsx
│   └── └── PetInfoState.tsx
│   ├── /commons
│   │   ├── someFunction.ts
│   └── └── regex.ts
│   ├── /hooks
│   └── └── useFetch.ts
│   ├── App.css
│   ├── App.tsx
│   ├── App.test.tsx
│   ├── index.css
└── └── index.tsx
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

### 📑 페이지별 기능 소개

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
