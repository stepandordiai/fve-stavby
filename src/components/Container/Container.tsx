import { ReactNode } from "react";
import styles from "./Container.module.scss";

interface ContainerProps {
	children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
	return <div className={styles.container}>{children}</div>;
};

export default Container;
