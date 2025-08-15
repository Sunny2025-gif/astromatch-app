import React, { useState } from 'react';

function App() {
  const [yourChart] = useState({
    sun: 'Skorpion',
    moon: 'Jungfrau',
    venus: 'Schütze',
    mars: 'Jungfrau',
    asc: 'Skorpion',
  });

  const [partnerData, setPartnerData] = useState({
    name: '',
    birthDate: '',
    birthTime: '',
    birthPlace: '',
  });

  const [result, setResult] = useState(null);

  function handleMatch() {
    const mockPartnerChart = {
      sun: 'Stier',
      moon: 'Krebs',
      venus: 'Widder',
      mars: 'Stier',
    };

    const emotional = ['Krebs', 'Stier', 'Jungfrau'].includes(mockPartnerChart.moon);
    const love = ['Schütze', 'Widder', 'Löwe'].includes(mockPartnerChart.venus);
    const physical = ['Jungfrau', 'Stier'].includes(mockPartnerChart.mars);

    setResult({
      emotional: emotional ? '❤️ emotional passend' : '⚠️ wenig emotionale Resonanz',
      love: love ? '💞 gute Liebesdynamik' : '⚠️ schwierige Venus-Kombi',
      physical: physical ? '🔥 körperlich sehr anziehend' : '🪶 eher ruhige Anziehung',
    });
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: 600, margin: 'auto' }}>
      <h1>🔮 AstroMatch Skorpion</h1>
      <input placeholder='Name' value={partnerData.name} onChange={e => setPartnerData({ ...partnerData, name: e.target.value })} />
      <input type='date' value={partnerData.birthDate} onChange={e => setPartnerData({ ...partnerData, birthDate: e.target.value })} />
      <input type='time' value={partnerData.birthTime} onChange={e => setPartnerData({ ...partnerData, birthTime: e.target.value })} />
      <input placeholder='Geburtsort' value={partnerData.birthPlace} onChange={e => setPartnerData({ ...partnerData, birthPlace: e.target.value })} />
      <button onClick={handleMatch}>Match analysieren</button>
      {result && (
        <div style={{ marginTop: '1rem' }}>
          <p>{result.emotional}</p>
          <p>{result.love}</p>
          <p>{result.physical}</p>
        </div>
      )}
    </div>
  );
}

export default App;
