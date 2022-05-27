import type { AppProps } from 'next/app';
import 'src/styles/global.scss';
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        // <SessionProvider session={session}>
        //     <Component {...pageProps} />
        // </SessionProvider>
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
