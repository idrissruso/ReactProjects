import './App.css'

const skills = [
  {
    skill: 'HTML+CSS',
    level: 'advanced',
    color: '#2662EA',
  },
  {
    skill: 'JavaScript',
    level: 'advanced',
    color: '#EFD81D',
  },
  {
    skill: 'Web Design',
    level: 'advanced',
    color: '#C3DCAF',
  },
  {
    skill: 'Git and GitHub',
    level: 'intermediate',
    color: '#E84F33',
  },
  {
    skill: 'React',
    level: 'advanced',
    color: '#60DAFB',
  },
  {
    skill: 'Svelte',
    level: 'beginner',
    color: '#FF3B00',
  },
]

function App() {
  return <Card />
}

function Card() {
  return (
    <div className="card">
      <Avatar />
      <Description />
    </div>
  )
}

function Avatar() {
  return <img src="img.jpg" alt="avatar" />
}

function Description() {
  return (
    <div>
      <h1>Idrissa Rusongeka</h1>
      <p>
        1500'lerden beri kullanılmakta olan standard Lorem Ipsum metinleri
        ilgilenenler için yeniden üretilmiştir. Çiçero tarafından yazılan
        1.10.32 ve 1.10.33 bölümleri de 1914 H. Rackham çevirisinden alınan
        İngilizce sürümleri eşliğinde özgün biçiminden yeniden üretilmiştir.
      </p>
      <div className="skils">
        {skills.map((skil) => (
          <Skil
            key={skil.skill}
            name={skil.skill}
            color={skil.color}
            level={skil.level}
          />
        ))}
      </div>
      <div className="skils"></div>
    </div>
  )
}

function Skil({ name, color, level }) {
  return (
    <div className="skil" style={{ backgroundColor: color }}>
      {`${name} - ${
        level === 'advanced' ? '🫡' : level === 'intermediate' ? '😉' : '🥲'
      }`}
    </div>
  )
}

export default App
