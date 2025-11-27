import './App.css'
import { useState } from 'react'

const recipes = [
  {
    id: 1,
    title: 'Tacos de Asada',
    image: '../public/recipes/tacos.jpg',
  },
  {
    id: 2,
    title: 'Ensalada Mediterránea',
    image: '../public/recipes/ensalada.jpg',
  },
  {
    id: 3,
    title: 'Pasta al Pesto',
    image: '../public/recipes/pasta.jpg',
  },
  {
    id: 4,
    title: 'Sushi Variado',
    image: '../public/recipes/sushi.jpg',
  },
  {
    id: 5,
    title: 'Hamburguesa Artesanal',
    image: '../public/recipes/hamburguesa.jpg',
  },
  {
    id: 6,
    title: 'Chilaquiles Verdes',
    image: '../public/recipes/chilaquiles.png',
  },
  {
    id: 7,
    title: 'Pozole Rojo',
    image: '../public/recipes/pozole.jpg',
  },
  {
    id: 8,
    title: 'Ceviche de Pescado',
    image: '../public/recipes/ceviche.jpg',
  },
  {
    id: 9,
    title: 'Paella Valenciana',
    image: '../public/recipes/paella.jpg',
  },
  {
    id: 10,
    title: 'Ramen Japonés',
    image: '../public/recipes/ramen.jpg',
  },
]

function App() {
  const [view, setView] = useState('home') // 'home' | 'login'

  const LoginPage = () => (
    <section className="login-section" aria-labelledby="login-title">
      <header className="page-header">
        <h1 id="login-title">Inicia sesión</h1>
        <p className="subtitle">Accede para guardar y ver tus recetas favoritas</p>
      </header>

      <form className="login-form" onSubmit={(e) => { e.preventDefault(); }}>
        <div className="form-row">
          <label htmlFor="email">Correo electrónico</label>
          <input id="email" name="email" type="email" placeholder="tu@correo.com" required />
        </div>
        <div className="form-row">
          <label htmlFor="password">Contraseña</label>
          <input id="password" name="password" type="password" placeholder="••••••••" required />
        </div>
        <div className="form-actions">
          <button className="primary-button" type="submit">Entrar</button>
          <button className="secondary-button" type="button" onClick={() => setView('home')}>Volver</button>
        </div>
      </form>
    </section>
  )

  return (
    <main>
        <div className="top-actions">
          {view === 'home' ? (
            <button className="primary-button" type="button" onClick={() => setView('login')}>Iniciar sesión</button>
          ) : (
            <button className="secondary-button" type="button" onClick={() => setView('home')}>Volver al inicio</button>
          )}
        </div>
        {view === 'login' ? (
          <LoginPage />
        ) : (
        <>
        <section id="inicio" aria-labelledby="inicio-title">
          <header className="page-header">
            <h1 id="inicio-title">Sazón Digital</h1>
            <p className="subtitle">Explora recetas con imágenes de alta calidad y títulos atractivos</p>
          </header>

          <section className="gallery">
            {recipes.map((recipe) => (
              <article key={recipe.id} className="card">
                <div className="card-image-wrapper">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    loading="lazy"
                    className="card-image"
                  />
                </div>
                <h3 className="card-title">{recipe.title}</h3>
              </article>
            ))}
          </section>
  </section>

  <section id="busqueda" aria-labelledby="busqueda-title" className="section">
          <h2 id="busqueda-title">Búsqueda</h2>
          <div className="search-bar">
            <input type="search" placeholder="Buscar recetas..." aria-label="Buscar recetas" />
            <button className="secondary-button" type="button">Buscar</button>
          </div>
          <p className="muted">Próximamente podrás buscar por ingredientes o categorías.</p>
        </section>

        <section id="favoritos" aria-labelledby="favoritos-title" className="section">
          <h2 id="favoritos-title">Favoritos</h2>
          <p className="muted">Aún no tienes recetas favoritas.</p>
        </section>
  </>
  )}
      </main>
  )
}

export default App
