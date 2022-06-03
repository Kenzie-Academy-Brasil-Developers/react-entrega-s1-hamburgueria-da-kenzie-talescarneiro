import './styles.css'

const Header = ({children}) => {
  return (
    <header className="header-container">
        {children}
    </header>
  )
}

export default Header