'use client'

// src/Links.tsx
import { useQueryState, parseAsString } from 'nuqs'
import { links } from './Links.constants'

const Links = () => {
  return (
    <section id='contacts'>
      <div>
        <h2>ссылки</h2>
        <ul>
          {Object.entries(links).map(([key, { label, link }]) => (
            <li key={key}>
              <a href={link} target='_blank' rel='noopener noreferrer'>
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Links
