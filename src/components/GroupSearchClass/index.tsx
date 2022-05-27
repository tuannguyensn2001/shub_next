import { Button, FormControl, Input, Select } from '@chakra-ui/react';
import { useRouter } from 'next/router';

function GroupSearchClass() {
    const router = useRouter();

    const handleClickAdd = () => {
        router.push('/class/add');
    };

    return (
        <div className={'tw-grid tw-grid-cols-12 tw-gap-4'}>
            <div className="tw-col-span-10">
                <FormControl>
                    <Input />
                </FormControl>
            </div>
            <div className="tw-col-span-1">
                <FormControl>
                    <Select defaultValue={'latest'}>
                        <option value="latest">Mới nhất</option>
                        <option value="oldest">Cũ nhất</option>
                    </Select>
                </FormControl>
            </div>
            <div className="tw-col-span-1">
                <Button onClick={handleClickAdd} colorScheme={'telegram'}>
                    Tạo lớp học
                </Button>
            </div>
        </div>
    );
}

export default GroupSearchClass;
