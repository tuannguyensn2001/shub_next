import { IUser } from 'src/models/IUser';
import { getMe } from 'src/repositories/auth';
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface AuthStore {
    user: IUser | undefined;
    setUser: (user: IUser) => void;
    isFetchedUser: boolean;
    fetchUser: () => void;
    isLoading: boolean;
    isAuth: () => boolean;
}

const useAuthStore = create<AuthStore>()(
    devtools(
        immer((set, get) => ({
            user: undefined,
            setUser: (user) =>
                set((state) => {
                    state.user = user;
                }),
            isFetchedUser: false,
            isLoading: false,
            fetchUser: async () => {
                console.log('start fetch');
                set((state) => {
                    state.isLoading = true;
                });

                try {
                    const response = await getMe();
                    set((state) => {
                        state.user = response.data;
                    });
                } catch (e) {
                    localStorage.removeItem('accessToken');
                } finally {
                    set((state) => {
                        state.isFetchedUser = true;
                        state.isLoading = false;
                    });
                }
            },
            isAuth: () => {
                return !!get().user;
            },
        }))
    )
);

export default useAuthStore;
