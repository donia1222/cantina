import Navigation from './components/Navigation'
import './styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <header>
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>
          <p>© 2024 Mi Proyecto Next.js</p>
        </footer>
      </body>
    </html>
  )
}