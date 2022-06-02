import {
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from '@chakra-ui/react';
import {
    ArrowForwardIcon,
    DeleteIcon,
    EditIcon,
    ViewIcon,
    ViewOffIcon,
} from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import { IClass } from 'src/models/IClass';
import Image from 'next/image';

type Prop = Pick<IClass, 'id' | 'name' | 'code'>;

function CardClass({ name, code, id }: Prop) {
    const router = useRouter();

    return (
        <div
            className={
                'tw-w-[320px] tw-rounded-xl  tw-border-2 tw-border-gray-200 tw-cursor-pointer'
            }
        >
            <div className={'tw-w-full'}>
                {/*<img*/}
                {/*    className={'tw-h-[132px] tw-rounded-t-xl'}*/}
                {/*    src="https://shub-storage.sgp1.cdn.digitaloceanspaces.com/profile_images/44-01.jpg"*/}
                {/*    alt=""*/}
                {/*/>*/}
                <Image
                    src={
                        'https://shub-storage.sgp1.cdn.digitaloceanspaces.com/profile_images/44-01.jpg'
                    }
                    width={100}
                    height={100}
                />
            </div>
            <div className={'tw-flex tw-justify-between tw-py-3 tw-px-4'}>
                <div>
                    <div className={'tw-font-semibold tw-text-base'}>
                        {name}
                    </div>
                    <div className={'tw-uppercase'}>{code}</div>
                </div>
                <div className={'tw-flex tw-flex-col tw-justify-center'}>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label="Options"
                            icon={<ViewIcon />}
                            variant="ghost"
                        />
                        <MenuList>
                            <MenuItem
                                onClick={() => router.push(`/class/${id}`)}
                                icon={<ArrowForwardIcon />}
                            >
                                Vào lớp
                            </MenuItem>
                            <MenuItem icon={<EditIcon />}>Chỉnh sửa</MenuItem>
                            <MenuItem icon={<ViewOffIcon />}>Ẩn lớp</MenuItem>
                            <MenuItem icon={<DeleteIcon />}>Xóa</MenuItem>
                        </MenuList>
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default CardClass;
