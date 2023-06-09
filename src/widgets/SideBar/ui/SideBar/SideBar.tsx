import {classNames} from "shared/lib/classNames/classNames"
import classes from './SideBar.module.scss'
import {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher/ui/LangSwitcher";

interface SideBarProps {
    className?: string
}

export const SideBar = ({className}: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prevState => !prevState)
    }
    return(
        <div
            className={classNames(classes.SideBar , {[classes.collapsed]: collapsed}, [className])}
        >
            <button onClick={onToggle}>toggle</button>

            <div className={classes.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher />
            </div>
        </div>
    );
}