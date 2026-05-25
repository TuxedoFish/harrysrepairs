// Design-system button — variants from the mockup: primary / ghost / link.
// Plain JSX + scoped `.hl` classes (no semantic-ui). Renders as <a> by default;
// pass `as` (e.g. a react-router Link or "button") to change the element.
import React from 'react'

const Button = ({
  as: Tag = 'a',
  variant = 'primary',
  className = '',
  iconLeft = null,
  iconRight = null,
  children,
  ...rest
}) => {
  const classes = variant === 'link' ? 'btn-link' : `btn btn-${variant}`

  return (
    <Tag className={`${classes} ${className}`.trim()} {...rest}>
      {iconLeft}
      {children}
      {iconRight}
    </Tag>
  )
}

export default Button
