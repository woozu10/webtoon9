export type Webtoon = { id:number; title:string; subtitle:string; category:string; weekday:string; badge?:string; rank?:number; creator?:string; description?:string; characters?:string[]; episodeTitle?:string; scenes?:{caption:string;dialogue?:string}[] }
export const webtoons: Webtoon[] = [
 { id:1,title:'민수의 첫번째 기회',subtitle:'새로운 시작을 향한 첫걸음',category:'신작',weekday:'월',badge:'NEW',rank:1,creator:'WEBTOON9',description:'망설이던 민수에게 드디어 찾아온 첫 번째 기회. 용기를 내어 새로운 문을 두드리는 하루를 그린 웹툰입니다.',characters:['민수','소연','면접관'],episodeTitle:'1화 · 문 앞에서',scenes:[
  {caption:'아침, 민수는 중요한 약속이 있는 건물 앞에 멈춰 선다.',dialogue:'민수: 오늘이야. 이번에는 도망치지 말자.'},
  {caption:'휴대전화에 소연의 응원 메시지가 도착한다.',dialogue:'소연: 잘하려고 애쓰지 말고, 네 이야기만 하고 와.'},
  {caption:'민수는 크게 숨을 들이쉬고 문을 연다.',dialogue:'민수: 안녕하세요. 지원자 김민수입니다.'},
  {caption:'면접관이 미소를 지으며 자리를 권한다.',dialogue:'면접관: 기다리고 있었습니다. 편하게 시작해 볼까요?'},
  {caption:'민수는 떨리는 손을 무릎 위에 올리고 고개를 든다.',dialogue:'민수: 네. 제 첫 번째 이야기를 들려드리겠습니다.'}
 ]},
 {id:2,title:'9번 교실',subtitle:'아무도 모르는 비밀',category:'급상승',weekday:'화',badge:'UP',rank:2},
 {id:3,title:'오늘도 레벨업',subtitle:'게임보다 어려운 학교생활',category:'인기',weekday:'수',badge:'HOT',rank:3},
 {id:4,title:'방과 후 탐정단',subtitle:'사라진 운동화를 찾아라',category:'완결',weekday:'목',rank:4},
 {id:5,title:'3분 히어로',subtitle:'짧고 강한 한 편',category:'짧게 보기',weekday:'금',badge:'3 MIN',rank:5},
 {id:6,title:'우주 급식단',subtitle:'오늘 메뉴는 행성맛',category:'애니메이션',weekday:'토',badge:'ANIME',rank:6},
 {id:7,title:'우리 반 마법사',subtitle:'평범한 줄 알았는데',category:'추천',weekday:'일',rank:7},
 {id:8,title:'골목의 챔피언',subtitle:'다시 시작하는 한 판',category:'인기',weekday:'월',rank:8},
 {id:9,title:'미래에서 온 친구',subtitle:'내일을 바꾸는 오늘',category:'신작',weekday:'화',badge:'NEW',rank:9},
 {id:10,title:'제로 아워',subtitle:'마지막 60분',category:'급상승',weekday:'수',badge:'UP',rank:10},
 {id:11,title:'완벽하지 않은 우리',subtitle:'그래도 함께',category:'완결',weekday:'목'},
 {id:12,title:'한 컷 모험',subtitle:'5분이면 충분해',category:'짧게 보기',weekday:'금'}
]