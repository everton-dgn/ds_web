import { TitleProps } from './types'
import styles from './styles.module.css'

const TitleSection = ({ title }: TitleProps) => (
  <h1 className={styles.title}>{title}</h1>
)

export default TitleSection
