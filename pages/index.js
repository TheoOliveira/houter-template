import Head from 'next/head'
import Layout from "../components/layout/layout";
import {title} from "../constants/content";

export default function Home() {
    return (
        <div >
            <Head>
                <title>{title}</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Layout/>

        </div>
    )
}