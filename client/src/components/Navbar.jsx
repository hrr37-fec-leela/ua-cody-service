import React from 'react';
import styles from './Styles.module.css';

// This is NavBar is strictly for looks and is essesntially just static html. No props are passed in. The i tags are fontawesome icons, version 4.7.0. A script tag for font awesome is in index.html so no css modular syntax is used for those components.

const NavBar = (props) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.messages}>
        <span className={styles.freeReturns}>
          FREE Returns &#38; FREE U.S. Standard Shipping Orders $60+
        </span>
        <div className={styles.utilityLinksContainer}>
          <span className={styles.utilityLinks}>
            <img
            src="https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/UA-logo/usa-flag.png" alt="american-flag"
            className={styles.americanFlag}
            />
            <span className={styles.US}>US</span>
            <i className="fa fa-caret-down" aria-hidden="true"></i>
          </span>
          <span className={styles.utilityLinks}>Stores</span>
          <span className={styles.utilityLinks}>Log In</span>
        </div>
      </div>
      <div className={styles.navbartop}>
        <span className={styles.navbarLogo}>
          <img
            className={styles.uaLogo}
            src="https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/UA-logo/UAlogo.png"
            alt="ua-logo"
          />
        </span>
        <span className={styles.navbartopLinks}>
          <span className={styles.individualNavLinks}>MEN</span>
          <span className={styles.individualNavLinks}>WOMEN</span>
          <span className={styles.individualNavLinks}>BOYS</span>
          <span className={styles.individualNavLinks}>GIRLS</span>
          <span className={styles.individualNavLinks}>SHOES</span>
          <span className={styles.individualNavLinks}>OUTLET</span>
        </span>
        <span className={styles.navbarIconContainer}>
          <input className={styles.searchBar} type="text" placeholder="Search"/>
          <span className={styles.searchBarIcon}>
            <i className="fa fa-search" aria-hidden="true"></i>
          </span>
          <span className={styles.navbarIcons}>
            <i className="fa fa-heart-o" aria-hidden="true"></i>
          </span>
          <span className={styles.navbarIcons}>
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          </span>
        </span>
      </div>
    </nav>
  )
}

export default NavBar;