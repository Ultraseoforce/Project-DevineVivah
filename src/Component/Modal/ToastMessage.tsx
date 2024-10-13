import { useToast } from 'react-native-toast-notifications';

const Toast = () => {
    const toast = useToast();

    const showToast = (message: string | JSX.Element, options: any = {}) => {
        toast.show(message, {
            type: options.type || 'normal',
            placement: options.placement || 'bottom',
            duration: options.duration || 4000,
            animationType: options.animationType || 'slide-in',

        });
    };

    return { showToast };
};

export default Toast;
