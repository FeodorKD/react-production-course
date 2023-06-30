import {classNames} from "shared/lib/classNames/classNames"
import classes from './LangSwitcher.module.scss'
import {AppButton} from "shared/ui/AppButton";
import {useTranslation} from "react-i18next";
import {AppButtonTheme} from "shared/ui/AppButton/ui/AppButton";

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const {t, i18n} = useTranslation();
    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }
    return(
            <AppButton
                className={classNames(classes.LangSwitcher , {}, [className])}
                onClick={toggle}
                theme={AppButtonTheme.CLEAR}
            >
                {t('Язык')}
            </AppButton>
    );
}