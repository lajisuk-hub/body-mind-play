import Link from 'next/link';
import { CHAPTERS } from './content';

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="heroText">
          <p className="kicker">영유아교육디자인연구소</p>
          <h1>영유아 몸과 마음을 조율하는<br />신체놀이 프로그램</h1>
          <p className="lead">숨을 고르고, 몸을 깨우고, 친구와 소리를 맞추며<br />아이들이 스스로 몸과 마음을 조절해 가요.</p>
        </div>
        <img src="/img/hero.jpg" alt="편안하게 웃으며 음악 놀이를 하는 아이들" />
      </section>

      <p className="pick">배우고 싶은 챕터를 눌러 보세요</p>
      <section className="chapters">
        {CHAPTERS.map(c => (
          <Link key={c.n} href={c.href} className="chap" style={{ '--c': c.color }}>
            <div className="chapImg"><img src={c.img} alt="" /></div>
            <div className="chapBody">
              <span className="num">{c.n}</span>
              <h2>{c.title}{c.tag && <small>({c.tag})</small>}</h2>
              <p>{c.sub}</p>
              <span className="go">들어가기 →</span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
