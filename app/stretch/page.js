import { Top, Video, ChapterNav } from '../parts';
import { STRETCH_VIDEO } from '../content';

export const metadata = { title: '몸을 깨우는 스트레칭 · 신체놀이 프로그램' };

export default function Stretch() {
  return (
    <main className="page">
      <Top n={2} title="몸을 깨우는 스트레칭" color="#f5a76c" />
      <p className="intro">등원 후 몸의 감각을 깨우고, 하루 일과에 참여할 준비를 해요.</p>

      <section className="block">
        <h3>영상을 보고 우리 몸을 알아차려 봐요!</h3>
        <p>등·하원 전에 할 수 있는 <b>키쭉쭉 스트레칭</b>이에요. 제목이 나오면 잠깐 멈추고, 제목이 사라지면 함께 따라 해요.<br /><b>발목 까딱까딱 → 바닥 찍고 기지개 → 옆구리 스트레칭 → 어깨 돌리기 → 어깨 크게 돌리기</b></p>
        <Video src={STRETCH_VIDEO} poster="/videos/stretch.jpg" empty="스트레칭 영상이 준비되면 이곳에서 바로 볼 수 있어요." />
        <div className="callout">
          <span>💡</span>
          <p><b>빠르게 하기보다, 자세를 정확하게 하는 것이 중요합니다!</b><br />천천히 따라 하며 내 몸이 어디가 늘어나는지 느껴 보세요.</p>
        </div>
      </section>

      <section className="block">
        <h3>선생님과 함께 조절해요 (공동조절)</h3>
        <ol className="list">
          <li><b>상태 살피기</b> — 아이의 표정, 몸의 긴장, 움직임의 크기로 그날의 컨디션을 살펴요.</li>
          <li><b>속도 맞추기</b> — 부드러운 목소리와 느린 동작으로 시범을 보이며 아이가 따라올 수 있는 속도로 안내해요.</li>
          <li><b>지시가 아닌 반응 이끌기</b> — “팔을 높이 들어!” 대신 “편안한 만큼 팔을 뻗어 볼까?”처럼 말해요.</li>
        </ol>
      </section>
      <ChapterNav now={2} />
    </main>
  );
}
