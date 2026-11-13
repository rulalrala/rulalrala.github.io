type HeaderProps = {
  name: string
  tagline: string
}

function Header({ name, tagline }: HeaderProps) {
  return (
    <header className="header">
      <h1 className="header__name">{name}</h1>
      <p className="header__tagline">{tagline}</p>
    </header>
  )
}

export default Header
