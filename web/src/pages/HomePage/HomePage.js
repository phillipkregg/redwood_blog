import { Link, routes } from '@redwoodjs/router'

const HomePage = () => {
  return (
    <>
      <header>
        <h1>Redwood Blog</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              <Link to={routes.testing()}>Testing</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>Home Page!</main>
    </>
  )
}

export default HomePage
