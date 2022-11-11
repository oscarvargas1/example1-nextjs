import react from 'react'
import { Button } from '../atoms/Button'
import { Container } from '../layout/Container/Container'

export const Home = (data) => {
  return (
    <Container>
      <div>
        <h1 className="mb-10 text-6xl font-black">Latest Articles.</h1>
        {data?.length ? (
          data.map((node) => (
            <div key={node.id}>
              <a className="no-underline hover:text-blue-600">
                <h2 className="mb-4 text-4xl font-bold">{node.title}</h2>
              </a>
              <div className="mb-4 text-gray-600">
                {node.uid?.display_name ? (
                  <span>
                    Posted by{" "}
                    <span className="font-semibold">{node.uid?.display_name}</span>
                  </span>
                ) : null}
                <span> - {formatDate(node.created)}</span>
              </div>
              <hr className="my-20" />
            </div>
          ))
        ) : (
          <p className="py-4">No nodes found</p>
        )}
      </div>
      <Button>Test</Button>
    </Container>
  )
}
