/* eslint-disable react/jsx-key */
import { nanoid } from 'nanoid'
import { skills } from './Skills.constants'
import styles from './Skills.module.scss'

const Skills = () => {
  return (
    <section className={styles.container}>
      <div className={styles.description}>
        <div className={styles.wrapper}>
          <h2 className='title'>Навыки</h2>
          {skills.map((item: any) =>
            Object.entries(item).map(([_key, values]: any) => (
              <div key={nanoid()} className={styles.block}>
                <div className={styles.items_skills}>
                  {values.map((value: any) => (
                    <div key={nanoid()} className={styles.item}>
                      <picture className={styles.picture}>
                        <source
                          srcSet={`https://cdn.simpleicons.org/${value}/black`}
                          type='image/svg'
                        />
                        <img
                          className={styles.image}
                          src={`https://cdn.simpleicons.org/${value}/black`}
                          alt='Landscape picture'
                        />
                      </picture>
                      <span className={styles.text_skills}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )),
          )}
        </div>
      </div>
    </section>
  )
}

export default Skills
