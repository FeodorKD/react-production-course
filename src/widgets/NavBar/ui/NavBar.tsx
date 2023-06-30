import {classNames} from "shared/lib/classNames/classNames";
import classes from './NavBar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/ui/AppLink";
import {useTranslation} from "react-i18next";

interface NavBarProps {
    className?: string
}

export const NavBar = ({className}: NavBarProps) => {
    const {t} = useTranslation()
    return (
        <div className={classNames(classes.NavBar, {}, [className])}>
            <div className={classes.links}>
                <AppLink theme={AppLinkTheme.PRIMARY} to={'/'}>{t('Главная')}</AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} to={'/about'}>{t('О сайте')}</AppLink>
            </div>
        </div>
    );
};


