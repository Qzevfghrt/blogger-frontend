import React, { ReactNode, FC } from "react";
import { DefaultSeo } from "next-seo";
import classNames from "classnames";
import styles from "./index.module.scss";
import NavigationBar from "@/src/components/navigationBar";
import Footer from "@/src/components/footer";

export interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <>
      <NavigationBar />
      <main className={classNames(styles.contentWrapper)}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
