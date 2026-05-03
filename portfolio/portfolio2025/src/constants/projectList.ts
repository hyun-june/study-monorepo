const imagesMap = {
  HealthyLife2024: import.meta.glob(
    "/src/assets/healthy2024/*.{png,jpg,jpeg}",
    {
      eager: true,
    }
  ),
  SELLECT: import.meta.glob("/src/assets/sellect/*.{png,jpg,jpeg}", {
    eager: true,
  }),
  GeoWeather: import.meta.glob("/src/assets/GeoWeather/*.{png,jpg,jpeg}", {
    eager: true,
  }),
  Radion: import.meta.glob("/src/assets/Radion/*.{png,jpg,jpeg}", {
    eager: true,
  }),
  weatherapp: import.meta.glob("/src/assets/weatherapp/*.{png,jpg,jpeg}", {
    eager: true,
  }),
  todoapp: import.meta.glob("/src/assets/todoapp/*.{png,jpg,jpeg}", {
    eager: true,
  }),
  ShootingGame: import.meta.glob(
    "/src/assets/ShootingGame/*.{png,jpg,jpeg,gif}",
    {
      eager: true,
    }
  ),
};

const readImg = (folder: keyof typeof imagesMap): string[] => {
  const img = imagesMap[folder];
  if (!img) return [];
  const imgList = Object.values(img)
    .map((mod: any) => mod.default)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  return imgList;
};

export const projectList = [
  {
    title: "SELLECT",
    subTitle: "실사용 가능한 모델 웹 사이트 개발",
    skills: [
      "React",
      "React Query",
      "Node.js",
      "Express",
      "Axios",
      "MongoDB",
      "Mongoose",
    ],
    role: [
      "홈페이지 디자인",
      "글 작성, 삭제, 수정 가능한 게시판 기능 개발",
      "React-Hook-Form을 활용하여 폼 처리",
      "역할을 명확히 구분하여 백엔드 개발자와의 협업 경험",
    ],
    git: "https://github.com/hyun-june/sellect-me",
    figma:
      "https://www.figma.com/design/f7bTK7dr7UU3Azw6TqEn3R/HealthyLife?t=MsnbD71k0iPJcXgz-0",
    notion:
      "https://daily-creator-da3.notion.site/ebd/13bd357c34288018a2daf447fe2680c2",
    date: "2024.11 ~ 2025.09",
    team: true,
    important: true,
    img: readImg("SELLECT"),
  },
  {
    title: "HealthyLife2024",
    subTitle: "나만의 건강 관리와 SNS 기능을 한 곳에서.",
    skills: [
      "React",
      "React Query",
      "Node.js",
      "Express",
      "Axios",
      "MongoDB",
      "Mongoose",
    ],
    role: [
      "API 명세서 작성",
      "로그인 및 회원가입 페이지 개발",
      "유저 디테일 페이지 개발",
      "피드 페이지 개발",
    ],
    git: "https://github.com/hyun-june/Nodejs-TeamProject2-3",
    figma:
      "https://www.figma.com/design/f7bTK7dr7UU3Azw6TqEn3R/HealthyLife?t=MsnbD71k0iPJcXgz-0",
    notion:
      "https://daily-creator-da3.notion.site/ebd/13bd357c34288018a2daf447fe2680c2",
    date: "2024.11",
    team: true,
    important: true,
    img: readImg("HealthyLife2024"),
  },
  {
    title: "LostArk(미정)",
    subTitle:
      "로스트아크 캐릭터 검색 및 다양한 기능을 제공하는 React Native 앱을 개발 중",
    skills: ["React Native", "React Query", "Expo"],
    role: [
      "캐릭터 검색 및 정보 획득",
      "내가 원하는 정보를 저장해서  손쉽게 폰으로 확인 할 수 있는 사이트 개발 목표",
    ],
    git: "https://github.com/hyun-june/sellect-me",
    figma: "https://github.com/hyun-june/react-native-LostArk",
    velog:
      "https://velog.io/@hyun_jun/LostArk-%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B0%9C%EB%B0%9C-%EC%9D%BC%EC%A7%80",
    date: "2025.10 ~ 개발 중",
    team: false,
    important: true,
  },
  {
    title: "지오웨더(GeoWeather)",
    subTitle: "실시간 날씨와 현재 위치 기반 서비스",
    skills: ["Javascript", "KakaoMap API", "OpenWeather API", "Web Speech API"],
    role: [
      "출발지와 도착지 사이의 이동 거리를 선을 이용하여 지도에 표시",
      "Kakao Map API 활용 경험",
    ],
    git: "https://github.com/jaeyoung99-lee/CodingSister_JS_TeamProject",
    site: "https://codingsister-js-teamproject.netlify.app/",
    figma:
      "https://www.figma.com/design/OaschMcLrot0yruH5uJ0eP/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-2%EA%B8%B0-5%EC%A1%B0?node-id=0-1&p=f&t=eJYLOvR3xfGrW6qu-0",
    notion: "https://hyun-june.github.io/javscript2-teamproject/",
    date: "2024.07",
    team: true,
    important: false,
    img: readImg("GeoWeather"),
  },
  {
    title: "Radion",
    subTitle: "원하는 음악과 추천 음악을 쉽게 즐기세요!",
    skills: [
      "React",
      "React Query",
      "React-oauth/google",
      "Redux",
      "Youtube data api v3",
      "Spotify API",
    ],
    role: ["youtube data api v3 이용해서 플레이 리스트 페이지 개발"],
    git: "https://github.com/hyun-june/react-study-teamProject-Radion",
    figma:
      "https://www.figma.com/design/1XkwexEXjYZP0XyOWO04Dm/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%8A%A4%ED%84%B0%EB%94%94-2%EA%B8%B0-6%EC%A1%B0?node-id=0-1&t=z0g2EL66gqLERHKi-0",
    notion: "https://hyun-june.github.io/react-study-teamProject-Radion/",
    date: "2024.09",
    team: true,
    important: false,
    img: readImg("Radion"),
  },
  {
    title: "weather App",
    subTitle: "React Native 클론 코딩 - weather app",
    skills: ["React Native", "Expo", "Expo App"],
    role: ["현재 위치의 날씨를 알 수 있는 앱"],
    git: "https://github.com/hyun-june/react-native_weather",
    date: "2025.09",
    team: false,
    important: false,
    img: readImg("weatherapp"),
  },
  {
    title: "todo App",
    subTitle: "React Native 클론 코딩 - todo app",
    skills: ["React Native", "Expo", "Expo App"],
    role: ["두 가지 카테고리로 분류하여 내 일정을 기록 할 수 있는 앱"],
    git: "https://github.com/hyun-june/react-native_todo",
    date: "2025.09",
    team: false,
    important: false,
    img: readImg("todoapp"),
  },
  {
    title: "Shooting Game",
    subTitle: "자바스크립트 캔버스를 이용한 슈팅 게임입니다.",
    skills: ["javascript", "canvas"],
    role: ["캔버스를 활용해서 만든 간단한 웹 슈팅 게임"],
    git: "https://github.com/hyun-june/javascript-shootingGame",
    date: "2024.09",
    team: false,
    important: false,
    img: readImg("ShootingGame"),
  },
];
