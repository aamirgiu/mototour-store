import { useEffect, useState } from 'react'
import './App.css'

const API_URL = 'http://192.168.77.128:8000/products'

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) throw new Error('Products load nahi huay')
        return response.json()
      })
      .then(setProducts)
      .catch(() => setError('Backend API se connection nahi ho saka.'))
      .finally(() => setLoading(false))
  }, [])

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="store">
      <header className="navbar">
        <a className="brand" href="#">🏍️ MotoTour</a>
        <nav>
          <a href="#products">Products</a>
          <a href="#about">About</a>
        </nav>
        <div className="cart">🛒 Cart ({cart.length})</div>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow">GEAR UP. RIDE FAR.</p>
          <h1>Your next adventure<br />starts here.</h1>
          <p className="hero-text">
            Quality motorcycle touring gear for every road and every journey.
          </p>
          <a className="shop-button" href="#products">Explore Gear →</a>

        </section>
        <section className="adventure-banner">
          <img src="/images/motob.jpg" alt="Motorcycle touring adventure" />
          <div className="adventure-overlay">
            <p className="eyebrow">THE OPEN ROAD AWAITS</p>
            <h2>Make Every Ride an Adventure</h2>
            <p>Discover the gear for your next journey.</p>
            <a className="shop-button" href="#products">Explore Our Gear →</a>
          </div>
        </section>

        <section id="products" className="products-section">
          <p className="eyebrow">OUR COLLECTION</p>
          <h2>Essential Riding Gear</h2>

          {loading && <p>Loading products...</p>}
          {error && <p role="alert">{error}</p>}

          {!loading && !error && (
            <div className="product-grid">
              {products.map((product) => (
                <article className="product-card" key={product.id}>
<img
  className="product-image"
  src={
    product.id === 1
      ? '/images/helmet.jpg'
      : product.id === 2
      ? '/images/riding-gloves.jpg'
      : '/images/saddle-bag.jpg'
  }
  alt={product.name}
/>                  <p className="category">{product.category}</p>
                  <h3>{product.name}</h3>
                  <p className="price">
                    PKR {product.price.toLocaleString('en-PK')}
                  </p>
                  <button onClick={() => setCart([...cart, product])}>
                    Add to Cart +
                  </button>
                </article>
              ))}
            </div>
          )}

          <div className="cart-summary">
            <strong>Cart total: PKR {total.toLocaleString('en-PK')}</strong>
            <p>Demo checkout only — no real payments.</p>
          </div>
        </section>
        <section id="about" className="about">
          <h2>Made for the open road.</h2>
          <p>Practical gear for riders who love the journey.</p>
        </section>
      </main>

      <footer>© 2026 MotoTour Store . Demo Project</footer>
    </div>
  )
}

export default App
