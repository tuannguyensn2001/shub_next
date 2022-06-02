import { createStandaloneToast } from '@chakra-ui/react';

const { ToastContainer, toast } = createStandaloneToast({
    defaultOptions: {
        position: 'top',
    },
});

export { ToastContainer, toast };
