'use client';
import { useRef, useState } from 'react';

// 활동 1: 첫 음악 영상이 끝나면 「다른 음악으로 이어서 활동하시겠습니까?」를 묻고 다음 음악으로 넘어가요.
export default function TempoPlayer({ first, next }) {
  const v = useRef(null);
  const [cur, setCur] = useState(0); // 0 = 첫 음악, 1 = 다음 음악
  const [ask, setAsk] = useState(false);
  const [done, setDone] = useState(false);
  const list = [first, next];

  function go(i) {
    setAsk(false); setDone(false); setCur(i);
    setTimeout(() => { const el = v.current; if (el) { el.load(); el.play().catch(() => {}); } }, 50);
  }

  return (
    <div>
      <div className="tabs2">
        <button className={cur === 0 ? 'on' : ''} onClick={() => go(0)}>🎵 첫 번째 음악</button>
        <button className={cur === 1 ? 'on' : ''} onClick={() => go(1)}>💃 다음 음악 (자유롭게 움직여요)</button>
      </div>
      <div className="vbox askWrap">
        <video ref={v} key={list[cur].src} src={list[cur].src} poster={list[cur].poster} controls playsInline
          preload="metadata" controlsList="nodownload"
          onPlay={() => { setAsk(false); setDone(false); }}
          onEnded={() => (cur === 0 ? setAsk(true) : setDone(true))} />
        {ask && (
          <div className="askBox">
            <p className="askQ">🎶 다른 음악으로 이어서<br />활동하시겠습니까?</p>
            <div className="askBtns">
              <button className="yes" onClick={() => go(1)}>네, 이어서 할래요 ▶</button>
              <button className="nope" onClick={() => setAsk(false)}>아니요, 여기까지</button>
            </div>
          </div>
        )}
        {done && (
          <div className="askBox">
            <p className="askQ">👏 모두 잘했어요!</p>
            <div className="askBtns">
              <button className="yes" onClick={() => go(0)}>처음 음악 다시 하기</button>
              <button className="nope" onClick={() => setDone(false)}>닫기</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
