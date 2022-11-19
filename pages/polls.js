import Head from 'next/head';
import React, { useContext } from 'react'
import AppLayout from '../components/Layouts/AppLayout';
import PollPage from '../components/Pull/PollPage';
import { AuthContext } from '../contexts/AuthContext';

const Poll = () => {
    const { user } = useContext(AuthContext);
    return (
        <>
            <AppLayout>
                <Head>
                    <title>Party Insider Application</title>
                </Head>
                <PollPage user={user}/>
            </AppLayout>
        </>
    )
}

export default Poll