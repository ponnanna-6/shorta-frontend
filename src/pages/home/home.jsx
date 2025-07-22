import React, { useState } from "react";
import styles from "./home.module.css";
import { useNavigate } from "react-router-dom";
import triangle from '../../assets/triangle.png'
import rightCircle from '../../assets/rightCircle.png'
import { createShortUrl } from "../../services/url";
import { alertToast, errorToast } from "../../helper/toast";

const Home = () => {
    const navigate = useNavigate()
    const [originalUrl, setOriginalUrl] = useState("")

    const shortUrl = async () => {
        if (originalUrl) {
            const res = await createShortUrl({
                originalUrl: originalUrl
            })

            if (res.status == 200) {
                alertToast(res.data.message)
                setOriginalUrl("")
            } else {
                errorToast(res.message)
            }
        }
    }

    return (
        <div className={styles.container}>
            {/* Header Section */}
            <header className={styles.header}>
                {/* <LogoImage /> add logo here*/}
                <div className={styles.navButtons}>
                    <button className={styles.signInButton} onClick={() => { navigate('/login') }}>Sign In</button>
                    <button className={styles.createButton} onClick={() => { navigate('/register') }}>Sign Up</button>
                </div>
            </header>

            {/* Main Section */}
            <main className={styles.main}>
                <div className={styles.titleContainer}>
                    <div style={{ flex: 2, marginLeft: 20 }}>
                        <h1 className={styles.title}>Make your links shorter</h1>
                        <p className={styles.subtitle}>
                            Shorta is a URL shortner application that allows you to shorten your links to help redirect
                        </p>
                    </div>
                    <img src={rightCircle} alt="Right Circle" className={styles.rightCircleImage} />
                </div>
                <div className={styles.inputContainer}>
                    <input
                        type="text"
                        placeholder="Enter your long url"
                        className={styles.input}
                        value={originalUrl}
                        onChange={(e) => setOriginalUrl(e.target.value)}
                    />
                </div>

                <button className={styles.ctaButton} onClick={shortUrl}>Shorten</button>
            </main>
        </div>
    );
};

export default Home;
