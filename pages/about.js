import Image from "next/image"
import styles from '../styles/About.module.scss';
import {Roboto} from "@next/font/google";

const roboto = Roboto({
  weight:['400', '500'],
  style:['italic','normal']
})

const About = () => {
  return (
    <>
    <div className={roboto.className}>
      <h1 className={styles.about_text}>About</h1>
      <Image width={600} height={200} src="/pic0.png" />
      </div>
    </>
  )
}

export default About