import { Top, Video, ChapterNav } from '../parts';
import { MUSIC } from '../content';

export const metadata = { title: '사회정서 협동 프로그램(악기연주) · 신체놀이 프로그램' };

export default function Music() {
  return (
    <main className="page">
      <Top n={3} title="사회정서 협동 프로그램 (악기연주)" color="#a88be0" />
      <p className="intro">음악과 선생님의 신호를 듣고 반응하며, 친구와 속도·차례·소리를 맞추는 연습을 해요.</p>

      <section className="block">
        <h3><span className="step">활동 1</span> 음악을 듣고 내 몸을 조절해요</h3>
        <p>음악 선생님의 설명을 듣고, 음악이 흐르면 <b>속도에 맞춰 까딱까딱</b>, 음악이 길게 멈추면 <b>그대로 멈춰요</b>.</p>
        <Video {...MUSIC.tempo} />
      </section>

      <section className="block">
        <h3><span className="step">활동 2</span> 악기 연주를 해 봐요</h3>
        <p>음악 선생님이 차례로 설명해 줘요. 세 가지 연주 놀이를 순서대로 해 보세요.</p>
        <div className="steps">
          {MUSIC.steps.map(s => (
            <div key={s.k} className="stepCard">
              <h4><span className="no">{s.no}</span>{s.title}</h4>
              <Video src={s.src} poster={s.poster} />
              <p className="tip">{s.tip}</p>
            </div>
          ))}
        </div>
      </section>
      <ChapterNav now={3} />
    </main>
  );
}
