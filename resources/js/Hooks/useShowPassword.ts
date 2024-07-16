import { useState } from "react";

export default function useShowPassword(defaultValue = false) {
    const [showPassword, setShowPassword] = useState(defaultValue);
    const [onFocusPassword, setOnFocusPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(prev => !prev);
    };

    const handleOnFocusPassword = (val: boolean) => {
        setOnFocusPassword(val);
    };

    return {
        showPassword,
        onFocusPassword,
        handleShowPassword,
        handleOnFocusPassword,
    };
}