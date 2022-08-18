import { Outlet } from 'react-router-dom'
import styles from './styles.module.css'

const DefaultTemplate = () => {
  return (
    <div className={styles.grid}>
      <header className={styles.header} role="banner">
        Template Default
      </header>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default DefaultTemplate
