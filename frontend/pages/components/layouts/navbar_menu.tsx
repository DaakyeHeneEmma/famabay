import Link from 'next/link'
import styles from '../../../styles/Home.module.css'

export default function Navbar_Menu() {
    return (
      <>
      <div className={styles.navbar_container}>
      <ul>
              <li> <Link href="/"><a>Home</a></Link> </li>
              <li> <Link href="/about"><a>Join Us</a></Link> </li>
              <li> <Link href="/contact"><a>Contact</a></Link> </li>
              <li> <Link href="/contact"><a>About Us</a></Link> </li>
          </ul>
      </div>
       
      </>
    )
  }