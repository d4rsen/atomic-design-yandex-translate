import React, {FC, memo} from 'react'
import './Header.scss'

const Header: FC = () => {
    return (
        <header className="header">
            <div className="header__content">
                <div className="header__left">
                    <div className="header__logo">
                        <img src="assets/svg/logo1.svg" alt="logo1"/>
                        <img src="assets/svg/logo2.svg" alt="logo2"/>
                    </div>
                </div>
                <div className="header__right">
                    <div className="header__user">
                        <img src="assets/svg/user.svg" alt="user" className="header__img"/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default memo(Header)

