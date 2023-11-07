import React, { FunctionComponent, ReactElement } from "react";
import { Outlet } from "react-router-dom";


const Layout: FunctionComponent = (): ReactElement => {

    return (
        <div >
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
