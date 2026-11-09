// 사이트에 들어가는 글과 영상. 영상 파일을 새로 받으면 src만 바꾸면 된다(public/videos/ 에 넣기).
export const CHAPTERS = [
  {
    n: 1, href: '/breath', img: '/img/card-breath.jpg', color: '#7cc8a8',
    title: '호흡하며 전이하기',
    sub: '놀이와 놀이 사이, 숨을 고르며 몸과 마음을 쉬어 가요',
  },
  {
    n: 2, href: '/stretch', img: '/img/card-stretch.jpg', color: '#f5a76c',
    title: '몸을 깨우는 스트레칭',
    sub: '등원 후 내 몸을 알아차리고 하루를 준비해요',
  },
  {
    n: 3, href: '/music', img: '/img/card-music.jpg', color: '#a88be0',
    title: '사회정서 협동 프로그램',
    tag: '악기연주',
    sub: '음악을 듣고, 친구와 소리를 맞추며 함께 조율해요',
  },
];

export const BREATH_SITE = 'https://kids-breathing.vercel.app';

// 다른 선생님이 만든 호흡 자세 영상 — 파일을 받으면 '/videos/breath-pose.mp4' 처럼 넣기
export const BREATH_VIDEO = '/videos/breath.mp4';
// 원장님이 만든 스트레칭 영상 — 파일을 받으면 '/videos/stretch.mp4' 처럼 넣기
export const STRETCH_VIDEO = null;

export const MUSIC = {
  tempo: { src: '/videos/tempo.mp4', poster: '/videos/tempo.jpg' },
  free: { src: '/videos/free.mp4', poster: '/videos/free.jpg' },
  steps: [
    { k: 'bear', no: '①', title: '곰 세 마리 — 곰이 나오면 내 악기 소리!', src: '/videos/bear.mp4', poster: '/videos/bear.jpg',
      tip: '노래 속 「곰」이 나올 때만 악기를 연주해요. 자기 차례에 소리 내고, 다른 구절에서는 기다리며 시작과 멈춤을 연습해요.' },
    { k: 'pair', no: '②', title: '친구와 등을 돌리고, 같은 소리 찾기', src: '/videos/pair.mp4', poster: '/videos/pair.jpg',
      tip: '두 명씩 등을 맞대고 앉아요. 같은 악기를 앞에 놓아 주고, 한 친구가 먼저 소리를 내면 다른 친구는 귀로 듣고 같은 악기를 찾아 똑같이 소리 내요.' },
    { k: 'together', no: '③', title: '친구들과 함께 연주해요', src: '/videos/together.mp4', poster: '/videos/together.jpg',
      tip: '내 소리만 크지 않게, 친구들의 소리도 잘 들으며 함께 연주해요. 모두의 소리가 만나 하나의 음악이 돼요.' },
  ],
};
