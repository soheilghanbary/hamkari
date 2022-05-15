import * as React from 'react'
import { Link } from 'react-router-dom'
import type { LinkProps } from 'react-router-dom'

type BaseProps = {
  children: React.ReactNode
  className?: string
  color: 'primary' | 'secondary' | 'tertiary'
  rounded?: boolean
}

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    as?: 'button'
  }

type ButtonAsUnstyled = Omit<ButtonAsButton, 'as' | 'color'> & {
  as: 'unstyled'
  color?: BaseProps['color']
}

type ButtonAsLink = BaseProps &
  Omit<LinkProps, keyof BaseProps> & {
    as: 'link'
  }

type ButtonAsExternal = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    as: 'externalLink'
  }

type ButtonProps =
  | ButtonAsButton
  | ButtonAsExternal
  | ButtonAsLink
  | ButtonAsUnstyled

export function Button(props: ButtonProps): JSX.Element {
  const allClassNames = `btn ${props.color ? props.color : ''} ${
    props.className ? props.className : ''
  } ${props.rounded ? 'full-rounded' : ''}`

  if (props.as === 'link') {
    // don't pass unnecessary props to component
    const {className, color, as, ...rest} = props
    return <Link className={allClassNames} {...rest} />
  } else if (props.as === 'externalLink') {
    const {className, color, as, ...rest} = props
    return (
      <a
        className={allClassNames}
        // provide good + secure defaults while still allowing them to be overwritten
        target='_blank'
        rel='noopener noreferrer'
        {...rest}
      >
        {props.children}
      </a>
    )
  } else if (props.as === 'unstyled') {
    const {className, color, as, ...rest} = props
    return <button className={className} {...rest} />
  } else {
    const {className, color, as, ...rest} = props
    return <button className={allClassNames} {...rest} />
  }
}