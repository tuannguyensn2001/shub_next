import {useQuery} from 'react-query';
import Auth from 'src/components/Auth';
import CardClass from 'src/components/CardClass';
import GroupSearchClass from 'src/components/GroupSearchClass';
import GroupYourClass from 'src/components/GroupYourClass';
import {getOwnClass} from "src/repositories/class";


function ClassPage() {

    const {data} = useQuery("classes", () => getOwnClass())


    return (
        <div className={'tw-mx-5 tw-mt-5'}>
            <GroupYourClass showTotal={5} hideTotal={0}/>
            <div className="tw-mt-5">
                <GroupSearchClass/>
            </div>
            <div>
                <div className={'tw-grid tw-grid-cols-5 tw-mt-5 tw-gap-5'}>
                    {data?.data.data &&
                        data?.data?.data?.map((item, index) => (
                            <CardClass
                                id={item.id}
                                name={item.name}
                                code={item.code}
                                key={item.id}
                            />
                        ))}

                </div>
            </div>
        </div>
    );
}

export default Auth(ClassPage);
