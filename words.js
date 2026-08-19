/* ------------------------------------------------------------------
   단어 목록 — 이 파일만 고치면 됩니다.
   각 줄은 [올바른 철자, 틀린 철자] 순서입니다.
   쌍의 개수는 자유롭게 늘리거나 줄여도 됩니다. (최소 ROUNDS 개 필요)
------------------------------------------------------------------ */

window.SPELLING_WORDS = [
  ["receive", "recieve"],
  ["necessary", "neccessary"],
  ["separate", "seperate"],
  ["definitely", "definately"],
  ["beginning", "begining"],
  ["restaurant", "restarant"],
  ["because", "becuase"],
  ["friend", "freind"],
  ["believe", "beleive"],
  ["tomorrow", "tommorow"],
  ["calendar", "calender"],
  ["environment", "enviroment"],
  ["February", "Febuary"],
  ["surprise", "suprise"],
  ["weird", "wierd"],
  ["library", "libary"],
  ["exercise", "excercise"],
  ["rhythm", "rythm"],
  ["interesting", "intresting"],
  ["address", "adress"],
  ["different", "diffrent"],
  ["tongue", "tounge"],
  ["language", "langauge"],
  ["character", "charecter"],
  ["knowledge", "knowlege"]
];

/* ------------------------------------------------------------------
   게임 설정
------------------------------------------------------------------ */

window.GAME_CONFIG = {
  ROUNDS: 10,        // 한 판의 라운드 수
  GO_COUNT: 6,       // 그중 '올바른 철자'(눌러야 하는) 라운드 수
  WINDOW_MS: 3000,   // 단어가 떠 있는 시간
  TOP_N: 10          // 리더보드에 보관할 인원
};
