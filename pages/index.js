import Head from 'next/head'
import Link from 'next/link'
import { useContext } from 'react';

import HomePage from "../components/HomePage/HomePage";
import AppLayout from '../components/Layouts/AppLayout';
import { AuthContext } from '../contexts/AuthContext';

export default function Home() {
    const { user } = useContext(AuthContext);
    console.log('homepage', user);
    return (
        <AppLayout>
            <Head>
                <title>Party Insider Application</title>
            </Head>
            <HomePage user={user} />
        </AppLayout>
    )
}
