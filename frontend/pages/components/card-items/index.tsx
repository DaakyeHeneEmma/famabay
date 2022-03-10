import useSwr from 'swr'
import Head from 'next/head'
import styles from '../../../styles/Home.module.css'
import Link from 'next/link'

const fetcher = (url:any) => fetch(url).then((res) => res.json())
type Props = {
  title?:string;
}; 

const Card_Index = ({
  title = 'famabay cards',
}: Props): JSX.Element =>{
  const { data, error } = useSwr('/api/hello', fetcher)

  if (error) return <div>Failed to load users</div>
  if (!data) return <div>Loading...</div>
  return(
    <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <ul className={styles.card_container}>
      {data.map((user:any) => (
        <li key={user.id}
            className={styles.card_index}>
          <Link href="/user/[id]" 
                as={`/user/${user.id}`}>
            <a>{`Name: ${user.name},
                 Age: ${user.age}`}
            </a>
          </Link>
        </li>
     ))}
    </ul>    
    
   </>
  )
} 
  

export default Card_Index;