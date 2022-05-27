import { getSession, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import Header from 'src/components/Header';
import cookies from 'js-cookie';

export async function getServerSideProps(ctx: any) {
    console.log('ctx', await getSession(ctx));
    return {
        props: {},
    };
}

function Home() {
    const { data } = useSession();

    useEffect(() => {
        console.log(data);
        cookies.set('tuan', 'hehe');
    }, [data]);

    return (
        <div>
            <Header />
        </div>
    );
}

export default Home;
