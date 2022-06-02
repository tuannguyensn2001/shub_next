import type { AppProps } from 'next/app';
import 'src/styles/global.scss';
import { ChakraProvider } from '@chakra-ui/react';
import { useEffect } from 'react';
import useAuthStore from 'src/store/useAuthStore';
import dynamic from 'next/dynamic';
import { QueryClientProvider, QueryClient } from 'react-query';
import { createStandaloneToast } from '@chakra-ui/react';
import { ToastContainer } from 'src/packages/toast';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    const { fetchUser, isFetchedUser } = useAuthStore((state) => state);

    useEffect(() => {
        fetchUser();
        return () => {
            console.log('clear');
        };
    }, [fetchUser]);

    if (typeof window === 'undefined') {
        return <></>;
    }
    return (
        // <SessionProvider session={session}>
        //     <Component {...pageProps} />
        // </SessionProvider>
        <QueryClientProvider
            client={
                new QueryClient({
                    defaultOptions: {
                        queries: {
                            refetchOnWindowFocus: false,
                        },
                    },
                })
            }
        >
            <ChakraProvider>
                {!!isFetchedUser && <Component {...pageProps} />}
                <ToastContainer />
            </ChakraProvider>
        </QueryClientProvider>
    );
}

export default dynamic(() => Promise.resolve(MyApp), {
    ssr: false,
});
