import {classNames} from "shared/lib/classNames/classNames";
import classes from './NavBar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/ui/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface NavBarProps {
    className?: string
}

export const NavBar = ({className}: NavBarProps) => {
    return (
        <div className={classNames(classes.NavBar, {}, [className])}>
            <div className={classes.links}>
                <AppLink theme={AppLinkTheme.PRIMARY} to={'/'}>MAIN</AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} to={'/about'}>ABOUT</AppLink>
            </div>

        </div>
    );
};


