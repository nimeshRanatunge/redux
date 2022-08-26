import CartButton from "../Cart/CartButton";
import classes from './MainNavHeader.module.css'

const MainNavHeader = ()=>{
    return (
        <header className={classes.header}>
            <h1>ReduxCart</h1>
            <nav>
                <ul>
                    <li>
                        <CartButton/>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavHeader;