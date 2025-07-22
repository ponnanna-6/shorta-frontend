import React, { useEffect } from "react";
import styles from "./redirect.module.css";
import { useParams } from "react-router-dom";
import { getOriginalUrl } from "../../services/url";
import { errorToast } from "../../helper/toast";

const Redirect = () => {
    const { shortCode } = useParams()

    useEffect(() => {
        const redirectToOriginalUrl = async () => {
            const res = await getOriginalUrl(shortCode)
            if (res.status === 200) {
                window.location.href = res.originalUrl
                console.log(res.originalUrl)
            } else {
                errorToast(res.message)
            }
        }
        redirectToOriginalUrl()
    }, [shortCode])

    return (
        <div className={styles.container}>
            <div className={styles.redirecting}>
                <div className={styles.redirectingText}>Redirecting...</div>
            </div>
        </div>
    );
};

export default Redirect;
