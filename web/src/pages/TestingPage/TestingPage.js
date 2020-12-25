import { Link, routes } from '@redwoodjs/router'
import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'

const TestingPage = () => {
  return (
    <>
      <BlogLayout>
        My default route is named <code>testing</code>, link to me with `
        <Link to={routes.testing()}>Testing</Link>`
      </BlogLayout>
    </>
  )
}

export default TestingPage
