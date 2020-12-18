import { Link, routes } from '@redwoodjs/router'

const TestingPage = () => {
  return (
    <>
      <h1>TestingPage</h1>
      <p>
        Find me in <code>./web/src/pages/TestingPage/TestingPage.js</code>
      </p>
      <p>
        My default route is named <code>testing</code>, link to me with `
        <Link to={routes.testing()}>Testing</Link>`
      </p>
    </>
  )
}

export default TestingPage
