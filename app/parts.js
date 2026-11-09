import Link from 'next/link';

export function Top({ n, title, color }) {
  return (
    <header className="top" style={{ '--c': color }}>
      <Link href="/" className="back">← 처음으로</Link>
      <div className="topTitle"><span className="num">{n}</span>{title}</div>
    </header>
  );
}

export function Video({ src, poster, empty }) {
  if (!src) {
    return (
      <div className="vbox empty">
        <div>
          <div className="emIcon">🎬</div>
          <b>영상이 곧 올라와요</b>
          <p>{empty || '영상 준비 중입니다.'}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="vbox">
      <video src={src} poster={poster} controls playsInline preload="metadata" controlsList="nodownload" />
    </div>
  );
}

export function ChapterNav({ now }) {
  const all = [
    { n: 1, href: '/breath', t: '호흡하며 전이하기' },
    { n: 2, href: '/stretch', t: '몸을 깨우는 스트레칭' },
    { n: 3, href: '/music', t: '사회정서 협동 프로그램' },
  ];
  return (
    <nav className="cnav">
      {all.filter(a => a.n !== now).map(a => (
        <Link key={a.n} href={a.href}><span className="num sm">{a.n}</span>{a.t} →</Link>
      ))}
    </nav>
  );
}
