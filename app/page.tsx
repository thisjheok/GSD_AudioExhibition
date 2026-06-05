"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Screen = "home" | "tracks" | "player" | "about" | "designer";

const tracks = [
  { id: "01", title: "Park", duration: "0:30", group: "화합의 교류", image: "/sound-assets/sound-01.svg" },
  { id: "02", title: "Park", duration: "0:30", group: "화합의 교류", image: "/sound-assets/sound-02.svg" },
  { id: "03", title: "Park", duration: "0:30", group: "화합의 교류", image: "/sound-assets/sound-03.svg" },
  { id: "04", title: "Park", duration: "0:30", group: "화합의 교류", image: "/sound-assets/sound-04.svg" },
  { id: "05", title: "Park", duration: "0:30", group: "굴다리 속 소리", image: "/sound-assets/sound-05.svg" },
  { id: "06", title: "Park", duration: "0:30", group: "굴다리 속 소리", image: "/sound-assets/sound-06.svg" },
  { id: "07", title: "Park", duration: "0:30", group: "굴다리 속 소리", image: "/sound-assets/sound-07.svg" },
  { id: "08", title: "Park", duration: "0:30", group: "굴다리 속 소리", image: "/sound-assets/sound-08.svg" },
];

export default function Home() {
  const [screen, setScreen] = useState<Screen>("home");
  const [activeId, setActiveId] = useState("01");
  const [playing, setPlaying] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeTrack = useMemo(
    () => tracks.find((track) => track.id === activeId) ?? tracks[0],
    [activeId],
  );

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
    setMenuOpen(false);
  }, [screen]);

  return (
    <main className="phone-shell">
      {screen !== "home" && (
        <button className="icon-button back-button" aria-label="뒤로가기" onClick={() => setScreen(screen === "player" ? "tracks" : "home")}>
          <Image src="/icons/arrow-back.svg" alt="" width={18} height={18} aria-hidden="true" />
        </button>
      )}
      <button
        className="icon-button menu-button"
        aria-expanded={menuOpen}
        aria-haspopup="menu"
        aria-label="메뉴"
        onClick={() => setMenuOpen((value) => !value)}
      >
        <Image src="/icons/menu.svg" alt="" width={20} height={18} aria-hidden="true" />
      </button>
      {menuOpen && (
        <>
          <button className="menu-scrim" aria-label="메뉴 닫기" onClick={() => setMenuOpen(false)} />
          <nav className="menu-popover" aria-label="메뉴" role="menu">
            <button
              className="menu-item"
              role="menuitem"
              onClick={() => {
                setScreen("tracks");
                setMenuOpen(false);
              }}
            >
              <Image className="menu-item-icon" src="/icons/Music-2.svg" alt="" width={22} height={22} aria-hidden="true" />
              <span>사운드 트랙</span>
            </button>
            <button
              className="menu-item"
              role="menuitem"
              onClick={() => {
                setScreen("about");
                setMenuOpen(false);
              }}
            >
              <Image className="menu-item-icon" src="/icons/flag-2.svg" alt="" width={22} height={22} aria-hidden="true" />
              <span>프로젝트에 대해서</span>
            </button>
            <button
              className="menu-item"
              role="menuitem"
              onClick={() => {
                setScreen("designer");
                setMenuOpen(false);
              }}
            >
              <Image className="menu-item-icon" src="/icons/person-2.svg" alt="" width={22} height={22} aria-hidden="true" />
              <span>만든이</span>
            </button>
          </nav>
        </>
      )}

      {screen === "home" && (
        <section className="home-screen" aria-label="프로젝트 입장">
          <p className="eyebrow">AUDIO EXHIBITION</p>
          <div className="hero-rings">
            <Image src="/icons/hero.svg" alt="" fill priority sizes="100vw" />
          </div>
          <div className="home-copy">
            <h1>사라진 공간의 소리</h1>
            <p>용현동 굴다리 사운드<br />아카이빙 프로젝트</p>
          </div>
          <button className="enter-button" onClick={() => setScreen("tracks")}>
            <span>입장하기</span>
            <Image className="enter-button-icon" src="/icons/arrow_forward.svg" alt="" width={23} height={23} aria-hidden="true" />
          </button>
        </section>
      )}

      {screen === "tracks" && (
        <section className="tracks-screen" aria-label="사운드 선택">
          <div className="tracks-header">
            <h1>CHOOSE<br />YOUR SOUND</h1>
            <p>소리를 선택하세요</p>
          </div>
          {["화합의 교류", "굴다리 속 소리"].map((group) => (
            <div className="track-group" key={group}>
              <div className="group-title">
                <span />
                <div />
                <p>{group}</p>
              </div>
              <div className="track-grid">
                {tracks.filter((track) => track.group === group).map((track) => (
                  <button
                    className="track-card"
                    key={track.id}
                    onClick={() => {
                      setActiveId(track.id);
                      setPlaying(true);
                      setScreen("player");
                    }}
                  >
                    <span className="track-id">{track.id}</span>
                    <Image src={track.image} alt="" width={92} height={92} />
                    <strong>{track.title}</strong>
                    <small>{track.duration}</small>
                    <span className="small-play" aria-hidden="true">▶</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </section>
      )}

      {screen === "about" && (
        <section className="about-screen" aria-label="프로젝트에 대해서">
          <div className="about-heading">
            <h1>사라진 공간의 소리</h1>
            <p>용현동 굴다리 사운드 아카이빙 프로젝트</p>
          </div>
          <div className="about-content">
            <Image className="about-rings" src="/hero-back.svg" alt="" fill sizes="100vw" />
            <div className="about-copy">
              <p>
                본 전시는<br />
                경인고속도로 일반화 추진사업으로 변화하고 있는<br />
                용현동 굴다리의 소리를 기록하고,<br />
                사라지는 공간의 감각을 청각적으로<br />
                아카이빙하는 프로젝트이다.
              </p>
              <p>
                굴다리가 사라지기 전,<br />
                우리는 이 공간에서 발생하는 다양한 소리를<br />
                직접 채집하고 녹음하였다.
              </p>
              <p>
                학생들의 발소리,<br />
                차량의 엔진소리,<br />
                사람들의 말소리,<br />
                굴다리를 통과하는 바람 소리 등
              </p>
              <p>일상 속에서 무심히 지나쳤던 소리들을 기록의 대상으로 삼았다.</p>
            </div>
          </div>
        </section>
      )}

      {screen === "designer" && (
        <section className="about-screen designer-screen" aria-label="만든이">
          <div className="about-heading">
            <h1>사라진 공간의 소리</h1>
            <p>용현동 굴다리 사운드 아카이빙 프로젝트</p>
          </div>
          <div className="about-content designer-content">
            <Image className="about-rings" src="/hero-back.svg" alt="" fill sizes="100vw" />
            <div className="about-copy designer-copy">
              <p>
                이 프로젝트는 인하대학교<br />
                지역사회와 디자인 수업의 일환으로<br />
                제작되었습니다.
              </p>
              <p>감상해주셔서 감사합니다.</p>
              <p className="project-by">Project by</p>
              <p>
                김승미<br />
                김지형<br />
                김휘정<br />
                박서현<br />
                정혜인
              </p>
            </div>
          </div>
        </section>
      )}

      {screen === "player" && (
        <section className="player-screen" aria-label="사운드 플레이어">
          <p className="player-kicker">공원의 소리를 미리 느껴보세요</p>
          <h1>{activeTrack.title}</h1>
          <div className="player-art">
            <Image src={activeTrack.image} alt="" fill sizes="80vw" />
          </div>
          <div className="progress">
            <span style={{ width: playing ? "52%" : "17%" }} />
          </div>
          <div className="time-row">
            <span>0:00</span>
            <span>0:30</span>
          </div>
          <button className="play-toggle" aria-label={playing ? "일시정지" : "재생"} onClick={() => setPlaying((value) => !value)}>
            {playing ? "Ⅱ" : "▶"}
          </button>
          <div className={`equalizer ${playing ? "is-playing" : ""}`} aria-hidden="true">
            {[58, 36, 67, 84, 67, 96, 92, 104, 25, 72, 68, 48, 26, 24, 58, 57, 80].map((height, index) => (
              <span key={index} style={{ height: `${height}%`, animationDelay: `${index * 80}ms` }} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
