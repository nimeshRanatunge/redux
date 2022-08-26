import { Fragment } from "react";
import MainNavHeader from "./MainNavHeader";

const Layout = (props)=>{
    return (
        <Fragment>
            <MainNavHeader/>
            <main>{props.children}</main>
        </Fragment>
    );
}

export default Layout;