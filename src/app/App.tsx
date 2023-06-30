import React, {Suspense} from 'react';
import './styles/index.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/provider/ThemeProvider";
import {AppRouter} from "app/provider/router";
import {NavBar} from "widgets/NavBar";
import {SideBar} from "widgets/SideBar";


const App = () => {
    const {theme} = useTheme()

    return (
        <Suspense fallback="">
            <div className={classNames('app', {}, [theme])}>
                <NavBar/>
                <div className="content-page">
                    <SideBar/>
                    <AppRouter/>
                </div>
            </div>
        </Suspense>
    );
};

export default App;