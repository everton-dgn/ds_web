import styles from './styles.module.css'
import * as C from 'ui/components'
import { ReactComponent as IconArrowUp } from 'ui/assets/icons/arrow_up.svg'

const Home = () => {
  return (
    <main className={styles.container} role="main">
      <C.TitleSection title="Hello World!" />

      <br />

      <IconArrowUp
        className={styles.svg}
        width={50}
        height={50}
        title="Arrow pointing up"
      />
    </main>
  )
}

export default Home
