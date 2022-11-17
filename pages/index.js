import Head from 'next/head'
import Link from 'next/link'

import HomePage from "../components/HomePage/HomePage";
import AppLayout from '../components/Layouts/AppLayout';

export default function Home() {
    return (
        <AppLayout>
            <Head>
                <title>Party Insider Application</title>
            </Head>
            <HomePage />
        </AppLayout>
    )
}
