import { GetServerSideProps } from 'next'
import Head from 'next/head'
import styles from './styles.module.css'
import { getSession } from 'next-auth/react'
import { Textarea } from '@/components/textarea'

export default function Dashboard(){
    return(
        <div className={styles.container}>
            <Head>
                <title>Meu painel de tarefas</title>
            </Head>

            <main className={styles.main}>
                <section className={styles.content}>
                    <div className={styles.contentForm}>
                        <h1 className={styles.title}>Qual é sua tarefa?</h1>

                        <form>
                            <Textarea
                            placeholder="Digite sua tarefa"/>
                            <div className={styles.checkboxArea}>
                                <input type="checkbox" className={styles.checkbox} />
                                <label>Deixar tarefa puclica?</label>
                            </div>

                            <button type="submit" className={styles.button}> Registrar </button>
                        </form>

                    </div>
                </section>
            </main>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const session = await getSession({ req })
 
    if(!session?.user){
        return{
            redirect:{
                destination:'/',
                permanent:false,
            }
        }
    }

    return{
        props:{},
    };
};