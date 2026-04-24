# ArtFit — 건강 데이터 기반 생성형 아트 서비스
![서비스 화면](./assets/artfit-gif.gif)
> 하루 건강 데이터(식단, 운동, 수분)를 입력하면  
> 나만의 **생성형 아트**로 변환되어 잠금화면에 적용되는 헬스케어 서비스

---

## 서비스 소개

건강 앱은 정확하지만 즐겁지 않습니다. 매일 입력해도 수치와 그래프뿐이라 건강이 목적이 되는 순간 쉽게 지칩니다.

잠금화면은 앱을 열지 않아도 하루 수십 번 마주치는 공간입니다. 입력의 결과물이 나만의 아트가 된다면, 건강 관리는 목적이 아닌 부산물이 됩니다.

수치 입력이라는 행위는 그대로 두고, 결과물만 바꿨습니다. **데이터를 예술로 변환하는 엔진**을 만들었습니다.

🔗 [라이브 서비스 보러가기](https://rlarbfl081513.github.io/artfit/)

---

## 프로젝트 정보

| 항목 | 내용 |
|------|------|
| 진행 기간 | 2023.09 - 2024.09 |
| 프로젝트 형식 | 개인 프로젝트 |
| 역할 | 기획 · 디자인 · 개발 100% |

---

## 기술 스택

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![p5.js](https://img.shields.io/badge/p5.js-ED225D?style=flat&logo=p5dotjs&logoColor=white)
![HTML/CSS](https://img.shields.io/badge/HTML%2FCSS-E34F26?style=flat&logo=html5&logoColor=white)

---

## 디자인-데이터 매핑 전략

건강 데이터(탄수화물, 단백질, 지방, 운동시간, 수분량)를 p5.js의 좌표, 색상값, 진동 폭으로 변환하는 로직을 설계했습니다.

### 점 테마 — 밀도로 읽는 하루 활동량

| 데이터 | 시각 속성 |
|--------|----------|
| 운동시간 | 그리드 밀도 및 패턴 변화 |
| 수분 섭취 | 시간대별 점 레이어 추가 |
| 영양비율 | 배경 그라디언트 색상 비율 |

> 점의 좌표 변화만으로 패턴이 달라진다 — 운동량은 밀도로, 수분 섭취는 시간대별 위치로 표현해 하루의 활동 리듬을 시각화했다

### 선 테마 — 시간의 흐름으로 읽는 하루 식단
![선테마 화면](./assets/artfit-line-gif.gif)

| 데이터 | 시각 속성 |
|--------|----------|
| 운동시간 | 파형의 굴곡 |
| 수분 섭취 | 해당 시간대 라인 색상 추가 |
| 영양비율 | 흐름의 색 비율 |

> 선은 시간의 흐름을 가장 자연스럽게 담는 형태다 — 아침·점심·저녁 시간대별로 선을 배치해 식단의 영양 구성이 하루 전체의 흐름으로 읽히도록 설계했다

### 면 테마 — 부피와 움직임으로 읽는 영양 균형

| 데이터 | 시각 속성 |
|--------|----------|
| 운동시간 | 블롭 진동 속도 |
| 수분 섭취 | 배경 블롭 크기 변화 |
| 영양비율 | 탄·단·지 각 블롭 크기 |

> 세 개의 블롭은 아침·점심·저녁이다 — 크기로 영양 섭취량을, 움직임의 속도로 운동량을 표현해 하루 식단을 하나의 유기적인 덩어리로 느끼게 했다

---

## 주요 구현 내용

### 1. 데이터 → 시각 속성 변환 알고리즘

건강 수치를 그대로 보여주는 것이 아닌, 시각적 속성으로 변환하는 매핑 로직을 설계했습니다.

```javascript
// 운동시간을 그리드 밀도로 변환
function mapExerciseToGrid(exerciseTime) {
  const density = map(exerciseTime, 0, 120, MIN_DENSITY, MAX_DENSITY);
  return constrain(density, MIN_DENSITY, MAX_DENSITY);
}

// 영양비율을 색상 그라디언트로 변환
function mapNutritionToColor(carb, protein, fat) {
  const total = carb + protein + fat;
  return {
    carbRatio: carb / total,
    proteinRatio: protein / total,
    fatRatio: fat / total
  };
}
```

### 2. 데이터 부재 시 심미적 패턴 유지

데이터 값이 0일 때 화면이 비어 보이는 문제를 해결하기 위해, 기본 밀도 알고리즘을 적용해 데이터가 없어도 심미적 패턴이 유지되도록 설계했습니다.

```javascript
// 데이터가 0이어도 기본 패턴 렌더링
function getBaseDensity(value, defaultValue = BASE_DENSITY) {
  return value > 0 ? map(value, 0, MAX_VALUE, MIN_DENSITY, MAX_DENSITY) : defaultValue;
}
```

### 3. Web-to-Print 하드웨어 연동

디지털 경험을 실물 가치로 확장하기 위해 웹과 포토 프린터를 연동, 사용자가 생성한 아트를 즉석 인화할 수 있는 체험 부스를 운영했습니다.

---

## 성과

졸업 전시회 현장에서 관람객들이 화면 속 아트를 즉석 인화해 소장했습니다.

> "건강 데이터가 예술이 되자, 사람들은 소장했다 — 기록이 즐거움이 될 때 건강 관리는 자연스럽게 따라온다"

- 디지털 경험이 오프라인 행동(인화/소장)으로 이어지는 확장된 UX 검증
- 잠금화면이라는 일상의 접점이 서비스에 대한 관심과 즐거움을 만들어낸다는 것을 현장에서 확인
