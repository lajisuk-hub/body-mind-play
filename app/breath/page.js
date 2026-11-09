import { Top, Video, ChapterNav } from '../parts';
import { BREATH_SITE, BREATH_VIDEO } from '../content';

export const metadata = { title: '호흡하며 전이하기 · 신체놀이 프로그램' };

export default function Breath() {
  return (
    <main className="page">
      <Top n={1} title="호흡하며 전이하기" color="#7cc8a8" />
      <p className="intro">신나게 놀고 난 뒤, 다음 활동으로 넘어가기 전에 숨을 고르며 몸과 마음을 차분하게 쉬어 가요.</p>

      <section className="block">
        <h3><span className="step">STEP 1</span> 호흡하는 법을 배워요</h3>
        <p>캐릭터 친구를 고르면, 친구가 커질 때 코로 들이쉬고 작아질 때 입으로 후~ 내쉬어요.</p>
        <a className="bigBtn" href={BREATH_SITE} target="_blank" rel="noreferrer">
          <span>🌟</span> 숨쉬기 친구들 열기
        </a>
      </section>

      <section className="block">
        <h3><span className="step">STEP 2</span> 영상을 보며 호흡 자세를 배워요</h3>
        <p>영상을 열람하고, 영상을 보며 호흡 자세를 배워요.</p>
        <Video src={BREATH_VIDEO} empty="호흡 자세 영상이 준비되면 이곳에서 바로 볼 수 있어요." />
      </section>

      <section className="block two">
        <div className="mini">
          <h4>🐢 거북이 호흡</h4>
          <p>호흡과 움직임을 연결해 몸의 상태를 알아차린 뒤 이완해요. 길게 이어지는 쉼의 음악과 천천히 말하는 신호를 써요.</p>
          <p className="tip"><b>살펴보기</b> 호흡이 빨라지면 동작을 더 느리게 바꿔 주세요.</p>
        </div>
        <div className="mini">
          <h4>🦋 나비 포옹</h4>
          <p>양팔로 내 몸을 부드럽게 감싸고 “나는 사랑스러워” 같은 따뜻한 말을 들으며 나를 소중히 대해요.</p>
          <p className="tip"><b>살펴보기</b> 표정과 몸의 긴장이 편안해지는지 지켜봐 주세요.</p>
        </div>
      </section>
      <ChapterNav now={1} />
    </main>
  );
}
