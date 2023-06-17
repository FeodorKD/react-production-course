import {classNames} from "shared/lib/classNames/classNames"
import classes from './AppButton.module.scss'
import {ButtonHTMLAttributes, FC, ReactChildren, ReactNode} from "react";

export enum AppButtonTheme{
    CLEAR = 'clear',
    LIGHT = 'light',
    DARK = 'dark'
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: AppButtonTheme;
}

export const AppButton: FC<AppButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props
    return(
        <button
            className={classNames(classes.AppButton , {}, [className, classes[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
}