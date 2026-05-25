// Project card — mockup §03. Text-only (no thumbnail): title + index, description,
// tech-stack tags, and typed links with an icon (GitHub vs external).
import React from 'react'
import { TagRow } from './Tag'
import { ExternalLinkIcon, GitHubIcon } from './icons'

const DEFAULT_LABEL = {
  demo: 'Live demo',
  github: 'GitHub',
  case_study: 'Case study',
  paper: 'Read paper',
}

const ProjectLink = ({ label, url, type }) => (
  <a className="btn-link" href={url} target="_blank" rel="noopener noreferrer">
    {type === 'github' ? <GitHubIcon /> : <ExternalLinkIcon />}
    {label || DEFAULT_LABEL[type] || 'Link'}
  </a>
)

const ProjectCard = ({ index, title, description, tags = [], links = [] }) => (
  <article className="card">
    <div className="card-top">
      <h3 className="card-title">{title}</h3>
      <span className="card-idx">{String(index).padStart(2, '0')}</span>
    </div>

    <p className="card-desc">{description}</p>

    {tags.length > 0 && <TagRow tags={tags.map(t => t.label)} />}

    {links.length > 0 && (
      <div className="card-links">
        {links.map((link, i) => <ProjectLink key={i} {...link} />)}
      </div>
    )}
  </article>
)

export default ProjectCard
