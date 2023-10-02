import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";


/**
 * Navigation bar that shows up on all pages.
 * Rendered in _app.tsx file above the page content.
 */
export function Navbar() {
  const address = useAddress();

  return (
    <div className={`${styles.navContainer} container mx-auto pl-2`}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <Link href="https://zuraverse.xyz/" target="_blink" className={`${styles.homeLink} ${styles.navLeft} hidden sm:block`}>
            <Image
              src="/images/logo.png"
              width={200}
              height={150}
              alt="NFT marketplace sample logo"
            />
          </Link>

          <div className={`${styles.navMiddle} hidden sm:block`}>
            <Link href="/" className={styles.link}>
              <span className="text-xl">Home</span>
            </Link>
          </div>
        </div>

        <div className={styles.navRight}>
          <div className={styles.navConnect}>
            <ConnectWallet theme="dark" btnTitle="Connect Wallet" />
          </div>
          {address && (
            <Link className={styles.link} href={`/profile/${address}`}>
              <Image
                className={styles.profileImage}
                src="/user-icon.png"
                width={42}
                height={42}
                alt="Profile"
              />
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
