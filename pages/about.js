import Image from "next/image"
import styles from '../styles/About.module.scss';

const About = () => {
  return (
    <>
    <div className="bg-info">
      <h1 className={styles.about_text}>About</h1>
      <Image width={600} height={200} src="/pic0.png" />
      </div>
    </>
  )
}

export default About