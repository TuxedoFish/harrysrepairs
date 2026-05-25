// Selected Work — mockup §03. Strapi-driven 2-up card grid. Anchor target #work.
import React from 'react'
import { useQuery } from '@apollo/client'

import { GET_PORTFOLIO } from '../queries/portfolio'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PORTFOLIO)
  const projects = data?.portfolios || []

  return (
    <section className="pad" id="work">
      <div className="sec-head">
        <div className="sec-kicker">Selected Work</div>
        <h2 className="sec-title">Things I've built</h2>
      </div>

      {loading && <p className="sec-loading">Loading…</p>}
      {error && <p className="sec-loading">Couldn’t load projects right now.</p>}

      {!loading && !error && (
        <div className="card-grid">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              index={i + 1}
              title={project.title}
              description={project.description}
              tags={project.tags}
              links={project.links}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default Projects
