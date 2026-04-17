// Ascent — Explore Events, Schedule, Leaderboard

function Explore({ onNav }) {
  const cats = ['All', 'Coding', 'Hardware', 'Design', 'Business', 'Quiz', 'Creative'];
  const [cat, setCat] = React.useState('All');
  const events = [
    { n: 'Hack Night', c: 'Coding', d: '24-hour flagship hackathon. Theme drops at kickoff.', tone: 'violet' },
    { n: 'Circuit Rush', c: 'Hardware', d: 'Solder under pressure. First working circuit wins.', tone: 'teal' },
    { n: 'Pitch./Dev', c: 'Business', d: 'Pitch a startup, build the MVP in 12 hours.', tone: 'amber' },
    { n: 'Code Clash', c: 'Coding', d: 'Competitive programming, head-to-head brackets.', tone: 'violet' },
    { n: 'Design Jam', c: 'Design', d: 'Brief, wireframe, hi-fi. All in one night.', tone: 'amber' },
    { n: 'Robo Wars', c: 'Hardware', d: 'Your bot vs theirs. Last one standing.', tone: 'teal' },
    { n: 'Quantum Quiz', c: 'Quiz', d: 'Six rounds. No calculators. No mercy.', tone: 'violet' },
    { n: 'Mirage Walk', c: 'Creative', d: 'Photography trail across the campus.', tone: 'teal' },
    { n: 'Render Race', c: 'Design', d: 'Blender, 90 minutes, one prompt.', tone: 'amber' },
  ];
  const filtered = cat === 'All' ? events : events.filter(e => e.c === cat);
  return (
    <PageBackground>
      <NavBar variant="app" active="explore" onNav={onNav} />
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '40px 28px 80px' }}>
        <div className="eyebrow">§ ALL EVENTS · 24</div>
        <h1 className="display" style={{ fontSize: 64, marginTop: 14, letterSpacing: '-0.02em' }}>Pick your fights.</h1>
        <div style={{ marginTop: 10, color: 'var(--ink-dim)', fontSize: 14, maxWidth: 540 }}>
          Registrations happen on Unstop. Click through to any event to see rules, prize money, and sign up your team.
        </div>

        <div style={{ marginTop: 36, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {cats.map(c => (
            <div key={c} onClick={() => setCat(c)} className="chip" style={{
              cursor: 'pointer', padding: '8px 14px', fontSize: 11,
              background: cat === c ? 'rgba(127,119,221,0.18)' : undefined,
              borderColor: cat === c ? 'rgba(127,119,221,0.55)' : undefined,
              color: cat === c ? '#F1EFE8' : undefined,
            }}>{c}</div>
          ))}
        </div>

        <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {filtered.map((ev, i) => (
            <div key={ev.n} className="glass" style={{ padding: 0, overflow: 'hidden', transition: 'all .3s', cursor: 'pointer' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(127,119,221,0.45)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(127,119,221,0.15)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--glass-border)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ position: 'relative' }}>
                <PosterPlaceholder title={ev.n.toUpperCase()} sub="700 × 400" w="100%" h={180} tone={ev.tone} />
              </div>
              <div style={{ padding: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className={`chip ${ev.tone}`} style={{ padding: '2px 8px', fontSize: 9 }}>{ev.c.toUpperCase()}</span>
                  <span style={{ fontFamily: 'var(--f-mono)', fontSize: 10, color: 'var(--ink-mute)' }}>0{i+1}</span>
                </div>
                <div className="display" style={{ fontSize: 22, marginTop: 12, letterSpacing: '-0.01em' }}>{ev.n}</div>
                <div style={{ marginTop: 8, fontSize: 13, color: 'var(--ink-dim)', lineHeight: 1.5, minHeight: 60 }}>{ev.d}</div>
                <div style={{ marginTop: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <a className="btn sm" onClick={() => onNav('event-detail')}>Details</a>
                  <a className="btn sm primary">View on Unstop ↗</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageBackground>
  );
}

function Schedule({ onNav }) {
  const [day, setDay] = React.useState('Day 1');
  const [venue, setVenue] = React.useState('All');
  const venues = ['All', 'Block C', 'Robotics Lab', 'Auditorium', 'Studio B', 'Main Stage'];
  const slots = [
    { t: '09:00', e: 'Opening Ceremony', v: 'Auditorium', tone: 'amber', reg: true },
    { t: '10:00', e: 'Hack Night · Kickoff', v: 'Block C', tone: 'violet', reg: true },
    { t: '11:30', e: 'Circuit Rush · Heat 1', v: 'Robotics Lab', tone: 'teal', reg: false },
    { t: '12:30', e: 'Keynote · Dr. Ishan Mehra', v: 'Auditorium', tone: 'amber', reg: true },
    { t: '14:00', e: 'Code Clash · Qualifiers', v: 'Block C', tone: 'violet', reg: false },
    { t: '16:00', e: 'Design Jam · Intro', v: 'Studio B', tone: 'amber', reg: true },
    { t: '18:00', e: 'Pitch./Dev · Round 1', v: 'Auditorium', tone: 'amber', reg: false },
    { t: '20:00', e: 'Quantum Quiz · Prelims', v: 'Main Stage', tone: 'violet', reg: false },
    { t: '22:00', e: 'Hack Night · Checkpoint', v: 'Block C', tone: 'violet', reg: true },
  ];
  const filtered = venue === 'All' ? slots : slots.filter(s => s.v === venue);
  return (
    <PageBackground>
      <NavBar variant="app" active="schedule" onNav={onNav} />
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '40px 28px 80px' }}>
        <div className="eyebrow">§ LIVE SCHEDULE</div>
        <h1 className="display" style={{ fontSize: 64, marginTop: 14, letterSpacing: '-0.02em' }}>Every slot. Every stage.</h1>

        <div style={{ marginTop: 32, display: 'flex', gap: 20, alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', gap: 6, padding: 4, borderRadius: 999, background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)' }}>
            {['Day 1', 'Day 2'].map(d => (
              <div key={d} onClick={() => setDay(d)} style={{
                padding: '8px 20px', borderRadius: 999, cursor: 'pointer',
                fontSize: 12.5, fontWeight: 500,
                background: day === d ? 'rgba(127,119,221,0.2)' : 'transparent',
                color: day === d ? 'var(--ink)' : 'var(--ink-dim)',
                border: day === d ? '1px solid rgba(127,119,221,0.5)' : '1px solid transparent',
              }}>{d} <span style={{ fontFamily: 'var(--f-mono)', fontSize: 10, opacity: 0.6, marginLeft: 4 }}>{d === 'Day 1' ? 'MAY 16' : 'MAY 17'}</span></div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {venues.map(v => (
              <div key={v} onClick={() => setVenue(v)} className="chip" style={{
                cursor: 'pointer', padding: '6px 12px', fontSize: 10,
                background: venue === v ? 'rgba(127,119,221,0.18)' : undefined,
                borderColor: venue === v ? 'rgba(127,119,221,0.55)' : undefined,
                color: venue === v ? '#F1EFE8' : undefined,
              }}>{v}</div>
            ))}
          </div>
        </div>

        <div className="glass" style={{ marginTop: 32, padding: 0, overflow: 'hidden' }}>
          {filtered.map((s, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '120px 1fr 180px 140px',
              alignItems: 'center', gap: 20,
              padding: '18px 24px',
              borderTop: i === 0 ? 'none' : '1px solid var(--glass-border)',
              transition: 'background .2s',
              cursor: 'pointer',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.03)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{ fontFamily: 'var(--f-mono)', fontSize: 20, color: 'var(--ink)', letterSpacing: '-0.02em' }}>{s.t}</div>
              <div>
                <div style={{ fontFamily: 'var(--f-display)', fontSize: 18, fontWeight: 600 }}>{s.e}</div>
                <div style={{ marginTop: 4, fontSize: 11, color: 'var(--ink-mute)', fontFamily: 'var(--f-mono)' }}>{day.toUpperCase()} · {s.v}</div>
              </div>
              <span className={`chip ${s.tone}`} style={{ padding: '3px 10px', fontSize: 9.5 }}>{s.v}</span>
              {s.reg ? (
                <span className="chip violet" style={{ padding: '3px 10px', fontSize: 9.5 }}>REGISTERED</span>
              ) : (
                <a className="btn sm" style={{ padding: '6px 12px', fontSize: 11 }}>Register →</a>
              )}
            </div>
          ))}
        </div>
      </div>
    </PageBackground>
  );
}

function Leaderboard({ onNav }) {
  const [tab, setTab] = React.useState('college');
  const colleges = [
    { r: 1, n: 'IIIT Bangalore', p: 1840, d: 'up' },
    { r: 2, n: 'BITS Pilani', p: 1720, d: 'up' },
    { r: 3, n: 'NIT Trichy', p: 1680, d: 'same' },
    { r: 4, n: 'IIT Madras', p: 1540, d: 'down' },
    { r: 5, n: 'VIT Vellore', p: 1490, d: 'up', mine: true },
    { r: 6, n: 'Manipal Institute', p: 1370, d: 'up' },
    { r: 7, n: 'PES University', p: 1290, d: 'down' },
    { r: 8, n: 'IIT Bombay', p: 1220, d: 'same' },
    { r: 9, n: 'DTU Delhi', p: 1180, d: 'up' },
    { r: 10, n: 'VNIT Nagpur', p: 1090, d: 'down' },
  ];
  const people = [
    { r: 1, n: 'Kabir Nair', c: 'IIIT Bangalore', p: 420 },
    { r: 2, n: 'Simran Shah', c: 'BITS Pilani', p: 395 },
    { r: 3, n: 'Aditi Sen', c: 'NIT Trichy', p: 380 },
    { r: 4, n: 'Rohan Das', c: 'IIT Madras', p: 360 },
    { r: 47, n: 'Aarav Rao', c: 'VIT Vellore', p: 185, mine: true },
  ];
  return (
    <PageBackground>
      <NavBar variant="app" active="leaderboard" onNav={onNav} />
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 28px 80px' }}>
        <div className="eyebrow">§ STANDINGS · LIVE</div>
        <h1 className="display" style={{ fontSize: 64, marginTop: 14, letterSpacing: '-0.02em' }}>The climb.</h1>

        <div style={{ marginTop: 28, display: 'flex', gap: 6, padding: 4, borderRadius: 999, background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', width: 'fit-content' }}>
          {[['college','Colleges'],['global','Individuals']].map(([k,l]) => (
            <div key={k} onClick={() => setTab(k)} style={{
              padding: '8px 20px', borderRadius: 999, cursor: 'pointer',
              fontSize: 12.5, fontWeight: 500,
              background: tab === k ? 'rgba(127,119,221,0.2)' : 'transparent',
              color: tab === k ? 'var(--ink)' : 'var(--ink-dim)',
              border: tab === k ? '1px solid rgba(127,119,221,0.5)' : '1px solid transparent',
            }}>{l}</div>
          ))}
        </div>

        {/* Podium */}
        <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: '1fr 1.2fr 1fr', gap: 14, alignItems: 'end' }}>
          {[
            { r: 2, d: tab === 'college' ? colleges[1] : people[1], h: 180 },
            { r: 1, d: tab === 'college' ? colleges[0] : people[0], h: 230 },
            { r: 3, d: tab === 'college' ? colleges[2] : people[2], h: 150 },
          ].map((s, i) => (
            <div key={i} className="glass-strong" style={{
              height: s.h, padding: 22, position: 'relative', overflow: 'hidden',
              background: s.r === 1 ? 'linear-gradient(180deg, rgba(232,185,116,0.18), rgba(232,185,116,0.04))' : undefined,
              borderColor: s.r === 1 ? 'rgba(232,185,116,0.4)' : undefined,
            }}>
              <div style={{ position: 'absolute', top: -40, right: -40, width: 140, height: 140, borderRadius: '50%', background: s.r === 1 ? 'radial-gradient(closest-side, rgba(232,185,116,0.3), transparent 70%)' : 'radial-gradient(closest-side, rgba(127,119,221,0.18), transparent 70%)' }}/>
              <div style={{ position: 'relative' }}>
                <div className="display" style={{ fontSize: s.r === 1 ? 86 : 68, letterSpacing: '-0.04em', color: s.r === 1 ? 'var(--amber)' : 'var(--ink)', lineHeight: 1 }}>#{s.r}</div>
                <div style={{ marginTop: 12, fontFamily: 'var(--f-display)', fontSize: 18, fontWeight: 600 }}>{s.d.n}</div>
                <div style={{ marginTop: 4, fontFamily: 'var(--f-mono)', fontSize: 11, color: 'var(--ink-mute)' }}>{s.d.p} PTS</div>
              </div>
            </div>
          ))}
        </div>

        {/* Full list */}
        <div className="glass" style={{ marginTop: 24, padding: 0, overflow: 'hidden' }}>
          {(tab === 'college' ? colleges : people).map((row, i) => {
            const dirColor = row.d === 'up' ? 'var(--teal)' : row.d === 'down' ? '#D97777' : 'var(--ink-mute)';
            const dirSym = row.d === 'up' ? '↑' : row.d === 'down' ? '↓' : '—';
            return (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '80px 1fr 120px 80px',
                alignItems: 'center', gap: 20, padding: '16px 24px',
                borderTop: i === 0 ? 'none' : '1px solid var(--glass-border)',
                background: row.mine ? 'rgba(127,119,221,0.1)' : 'transparent',
                borderLeft: row.mine ? '2px solid var(--violet)' : '2px solid transparent',
              }}>
                <div className="display" style={{ fontSize: 24, color: row.r <= 3 ? 'var(--amber)' : 'var(--ink-dim)' }}>#{row.r}</div>
                <div>
                  <div style={{ fontFamily: 'var(--f-display)', fontSize: 16, fontWeight: 600 }}>
                    {row.n} {row.mine && <span className="chip violet" style={{ padding: '1px 6px', fontSize: 9, marginLeft: 6 }}>YOU</span>}
                  </div>
                  {row.c && <div style={{ fontSize: 11, color: 'var(--ink-mute)', fontFamily: 'var(--f-mono)' }}>{row.c}</div>}
                </div>
                <div style={{ fontFamily: 'var(--f-mono)', fontSize: 14, color: 'var(--ink)' }}>{row.p} pts</div>
                {row.d && <div style={{ fontFamily: 'var(--f-mono)', fontSize: 13, color: dirColor }}>{dirSym}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </PageBackground>
  );
}

Object.assign(window, { Explore, Schedule, Leaderboard });
