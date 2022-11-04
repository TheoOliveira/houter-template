import React from "react";
import styles from './actionButton.module.scss'

const ActionButton: React.FC = ({label, url}): React.ReactElement => {
    return <a className={styles.actionButtonStyle} href={url}>{label}</a>;
}

export default ActionButton;
