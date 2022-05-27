import axios from 'axios';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import cookies from 'js-cookie';

export default NextAuth({
    providers: [
        CredentialsProvider({
            credentials: {},
            async authorize(credentials) {
                try {
                    const response = await axios.post(
                        'http://localhost:9000/api/v1/auth/login',
                        credentials
                    );

                    return {
                        ...response.data.data.user,
                        accessToken: response.data.data.accessToken,
                    };
                } catch (e) {
                    console.log('error', e);
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user, account, profile }) {
            if (user?.accessToken) {
                token.accessToken = user.accessToken;
            }
            if (user?.id) {
                token.id = user?.id;
            }
            return token;
        },
        async session({ session, token, user }) {
            const response = await axios.get(
                'http://localhost:9000/api/v1/auth/me',
                {
                    headers: {
                        Authorization: `Bearer ${token?.accessToken}`,
                    },
                }
            );
            // @ts-ignore
            session.user = response?.data?.data;

            return session;
        },
    },
    secret: 'tuannguyensn2001',
});
