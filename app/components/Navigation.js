import Link from 'next/link'

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link href="/">Inicio</Link></li>
        <li><Link href="/about">Acerca de</Link></li>
        <li><Link href="/services">Servicios</Link></li>
        <li><Link href="/contact">Contacto</Link></li>
      </ul>
    </nav>
  )
}