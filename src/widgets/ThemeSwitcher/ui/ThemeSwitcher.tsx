import {classNames} from "shared/lib/classNames/classNames"
import classes from './ThemeSwitcher.module.scss'
import React from "react";
import {useTheme} from "app/provider/ThemeProvider";
import {Theme} from "app/provider/ThemeProvider/lib/themeContext";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import LightIcon from "shared/assets/icons/theme-light.svg"
import {AppButton} from "shared/ui/AppButton";
import {AppButtonTheme} from "shared/ui/AppButton/ui/AppButton";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme()
    return(
        <AppButton
            theme={AppButtonTheme.CLEAR}
            className={classNames(classes.ThemeSwitcher , {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}
        </AppButton>
    );
}