// Project card — mockup §03. Text-only (no thumbnail): title + index, description,
// tech-stack tags, and typed links with an icon (GitHub vs external).
import React, { useEffect, useRef, useState } from 'react'
import { TagRow } from './Tag'
import { ExternalLinkIcon, GitHubIcon, DocIcon } from './icons'

const DEFAULT_LABEL = {
  demo: 'Live demo',
  github: 'GitHub',
  case_study: 'Case study',
  paper: 'Read paper',
}

// Icon per link type; anything unmapped falls back to the external-link icon.
const LINK_ICON = {
  github: GitHubIcon,
  paper: DocIcon,
}

const ProjectLink = ({ label, url, type }) => {
  const Icon = LINK_ICON[type] || ExternalLinkIcon
  return (
    <a className="btn-link" href={url} target="_blank" rel="noopener noreferrer">
      <Icon />
      {label || DEFAULT_LABEL[type] || 'Link'}
    </a>
  )
}

const ProjectCard = ({ index, title, description, tags = [], links = [] }) => {
  const descRef = useRef(null)
  const [expanded, setExpanded] = useState(false)
  const [overflowing, setOverflowing] = useState(false)

  // Only show "See more" when the clamped text actually overflows. Re-measure on
  // resize and after web fonts load (line heights shift once the real font swaps in).
  useEffect(() => {
    const el = descRef.current
    if (!el) return
    const measure = () => {
      if (expanded) return // keep the toggle visible while expanded
      setOverflowing(el.scrollHeight > el.clientHeight + 1)
    }
    measure()
    window.addEventListener('resize', measure)
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure)
    return () => window.removeEventListener('resize', measure)
  }, [description, expanded])

  return (
    <article className="card">
      <div className="card-top">
        <h3 className="card-title">{title}</h3>
        <span className="card-idx">{String(index).padStart(2, '0')}</span>
      </div>

      <p ref={descRef} className={`card-desc ${expanded ? 'is-expanded' : ''}`.trim()}>
        {description}
      </p>

      {(overflowing || expanded) && (
        <button
          type="button"
          className="card-more"
          aria-expanded={expanded}
          onClick={() => setExpanded(v => !v)}
        >
          {expanded ? 'See less' : 'See more'}
        </button>
      )}

      {tags.length > 0 && <TagRow tags={tags.map(t => t.label)} />}

      {links.length > 0 && (
        <div className="card-links">
          {links.map((link, i) => <ProjectLink key={i} {...link} />)}
        </div>
      )}
    </article>
  )
}

export default ProjectCard
