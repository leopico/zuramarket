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
          <Link href="/" passHref>
            <div className={`${styles.homeLink} ${styles.navLeft} hidden sm:block`}>
              <div className="flex flex-col items-center">
                <div className="w-full text-center font-extrabold text-2xl tracking-tighter" style={{ marginBottom: '-0.1rem' }}>
                  ZURAVERSE
                </div>
                <div className="w-full text-center text-lg font-extralight tracking-widest" style={{ marginTop: '-0.5rem' }}>
                  MARKETPLACE
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className={`${styles.navMiddle} hidden sm:block`}>
          <Link href="https://zuraverse.xyz/" target="_blink" className={styles.link}>
            <div className={`${styles.homeLink} ${styles.navLeft} hidden sm:block`}>
              <Image
                src="/images/navbar_icon.jpg"
                width={50}
                height={50}
                alt="NFT marketplace sample logo"
              />
            </div>
          </Link>
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
