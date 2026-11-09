import './globals.css';

export const metadata = {
  title: '영유아 몸과 마음을 조율하는 신체놀이 프로그램',
  description: '호흡하며 전이하기 · 몸을 깨우는 스트레칭 · 사회정서 협동 프로그램(악기연주) — 영유아교육디자인연구소',
};

export const viewport = { width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Jua&family=Gowun+Dodum&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <footer className="foot">ⓒ 영유아교육디자인연구소가 제작하여 무단 배포를 금합니다</footer>
      </body>
    </html>
  );
}
