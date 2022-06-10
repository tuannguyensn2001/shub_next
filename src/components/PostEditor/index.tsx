import {Button, Textarea} from '@chakra-ui/react';
import {Controller, useForm} from 'react-hook-form';

interface Form {
    content: string;
}

interface Prop {
    avatar: string;
}

function PostEditor({avatar}: Prop) {
    const {control, register, watch} = useForm<Form>({
        defaultValues: {
            content: '',
        },
    });

    return (
        <div className="tw-w-full tw-p-5 tw-bg-white tw-rounded-xl ">
            <div className="tw-flex">
                <div className="tw-w-1/12">
                    <img
                        src={avatar}
                        alt=""
                        className="tw-w-10 tw-h-10 tw-rounded-full"
                    />
                </div>
                <div className="tw-w-11/12">
                    <Controller
                        control={control}
                        name="content"
                        render={({field}) => (
                            <Textarea
                                placeholder={'Nhập nội dung thảo luận với lớp học'}
                                {...field}
                                size="sm"
                                variant={'oultined'}
                            />
                        )}
                    />
                </div>
            </div>

            <div className={'tw-mt-5'}>
                <hr/>
            </div>

            <div className={'tw-flex tw-justify-end tw-mt-5'}>
                <Button disabled={!watch("content")?.trim()} colorScheme={'telegram'}>Đăng tin</Button>
            </div>
        </div>
    );
}

export default PostEditor;
