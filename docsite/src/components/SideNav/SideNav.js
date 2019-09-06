import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'
import get from 'lodash/get'
import set from 'lodash/set'

const GetDocsiteNavigationQuery = graphql`
  query GetDocsiteNavigation {
    allMdx {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`

const renderEl = (el, key) => {
  const isTerminalNode = el && el.path && el.title

  return isTerminalNode ? (
    <li key={el.path}>
      <Link to={el.path}>{el.title}</Link>
    </li>
  ) : (
    <li key={key}>
      {key}
      <ul>{Object.keys(el).map(subkey => renderEl(el[subkey], subkey))}</ul>
    </li>
  )
}

const SideNav = () => (
  <StaticQuery
    query={GetDocsiteNavigationQuery}
    render={data => {
      const edges = get(data, 'allMdx.edges', [])

      const directory = edges.reduce((acc, edge) => {
        const node = get(edge, 'node.frontmatter')

        if (node && node.path) {
          const { path, title } = node
          const pathPieces = path.split('/').filter(piece => !!piece)

          set(acc, pathPieces.join('.'), {
            title,
            path,
          })
        }

        return acc
      }, {})

      return <ul>{Object.keys(directory).map(key => renderEl(directory[key], key))}</ul>
    }}
  />
)

export { SideNav }
