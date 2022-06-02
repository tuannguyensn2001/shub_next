import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import useAuthStore from 'src/store/useAuthStore';

function Auth(Component: any) {
    return function (props: any) {
        const { isLoading, isFetchedUser, isAuth } = useAuthStore(
            (state) => state
        );

        const router = useRouter();

        useEffect(() => {
            console.log('isauth', isAuth());
            if (isLoading || !isFetchedUser) return;
            if (!isAuth()) router.push('/login');
        }, [isAuth]);

        if (!isLoading && isFetchedUser && isAuth()) {
            // @ts-ignore
            return <Component {...props} />;
        }
    };
}

export default Auth;
