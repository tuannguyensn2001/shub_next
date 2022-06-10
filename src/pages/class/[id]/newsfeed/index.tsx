import DefaultLayout from "src/components/Layout";
import LayoutClass from "src/components/LayoutClass";
import Post from "src/components/Post";
import PostEditor from 'src/components/PostEditor';
import useAuthStore from 'src/store/useAuthStore';
import styles from './style.module.scss';

function Newsfeed() {
    const user = useAuthStore((state) => state.user);

    return (
        <LayoutClass>
            <div className={'tw-h-full'}>
                <div className="tw-grid tw-grid-cols-12 tw-h-full">
                    <div className="tw-col-span-10 tw-bg-gray-100 ">
                        <div className="tw-flex tw-justify-center ">
                            <div className={'tw-w-1/2 tw-mt-4'}>
                                <div>
                                    {user?.profile?.avatar && <PostEditor avatar={user?.profile?.avatar}/>}
                                </div>
                                <div className={'tw-mt-10'}>
                                    <Post/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tw-col-span-2">
                        notification
                    </div>
                </div>
            </div>
        </LayoutClass>
    );
}

export default Newsfeed;
