// Design-system tag + tag row — mockup tech-stack chips.
import React from 'react'

export const Tag = ({ children }) => <span className="tag">{children}</span>

export const TagRow = ({ tags, children }) => (
  <div className="tag-row">
    {children ? children : (tags || []).map((t, i) => <Tag key={i}>{t}</Tag>)}
  </div>
)
