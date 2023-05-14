import { useState } from 'react';
import { MainMenuHookFunc } from './mobile-main-menu-types';

function useMobileMainMenuStatus(status = false): (boolean | MainMenuHookFunc)[] {
    const [opened, setOpened] = useState(status);

    const handleToggle = () => setOpened(!opened);

    return [opened, {
        setTrue: () => setOpened(true),
        setFalse: () => setOpened(false),
        setToggle: handleToggle
    } as MainMenuHookFunc];
}

export { useMobileMainMenuStatus };

