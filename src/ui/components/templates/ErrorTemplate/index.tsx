import styles from './styles.module.css'
import { ErrorProps } from './types'

const ErrorTemplate = ({ children }: ErrorProps) => {
  return (
    <div className={styles.grid}>
      <header className={styles.header} role="banner">
        Template Error
      </header>
      <div>{children}</div>
    </div>
  )
}

export default ErrorTemplate
