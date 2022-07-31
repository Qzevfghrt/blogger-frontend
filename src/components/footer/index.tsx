import classNames from 'classnames';
import React from 'react'
import styles from './index.module.scss'

const Footer = () => {
    return(
        <div className={classNames(styles.footerWrapper)}>
            <div className={classNames(styles.copyright)}>CopyRight @2022 由刘学峰纯手工打造</div>
            <div className={classNames(styles.record)}>浙ICP备2022021838号</div>
        </div>
    )
}

export default Footer;