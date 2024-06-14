import { Dispatch } from 'react';

export const handleToggleHeader = (setHeader: Dispatch<React.SetStateAction<boolean>>) => {
    setHeader((prev) => !prev);
}