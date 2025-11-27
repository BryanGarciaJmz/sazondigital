import './App.css'

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
  return (
    <main>
      <header className="page-header">
        <h1>Sazón Digital</h1>
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
    </main>
  )
}

export default App
