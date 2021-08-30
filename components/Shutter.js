import styles from '../styles/Carousel.module.scss';
import { useRef, useEffect } from 'react';

// https://stackoverflow.com/questions/59476859/iterating-through-htmlcollection-in-react-js

const Shutter = () => {
    const shutterRef = useRef(null);
    const
        shutterCluster = [document.getElementsByClassName("shutter")],
        shutterList = shutterCluster[0];

    const initShutter = () => {
        for (let i = 0; i < shutterList.length; i++) {
            let layer = shutterList[i];
            layer.style.display = "none";
            layer.classList.remove("a" + i);
            layer.classList.remove("b" + i);
        }
    }
    const siteLoadShutter = () => {
        for (let i = 0; i < shutterList.length; i++) {
            let layer = shutterList[i];
            layer.style.display = "";
            layer.style.borderColor = "black";
            layer.classList.add("b" + i);
            setTimeout(() => {
                initShutter();
            }, 666);
        }
    }

    const pageShutter = (e) => {
        for (let i = 0; i < shutterList.length; i++) {
            let layer = shutterList[i];
            layer.style.display = "";
            layer.style.borderColor = "transparent";
            layer.classList.add("a" + i);
        };
        setTimeout(() => {
            initShutter();
            //wire function to nav and set below attribute to shutter between pages
            // window.location.href = e.target.getAttribute("data-href");
            siteLoadShutter();
        }, 666);
    }


    useEffect(() => {
        initShutter();
        siteLoadShutter();
    })


    return (
        <div ref={shutterRef} className={styles.shutter}>
            <div className={styles.shutter}>
                <div className={styles.shutter}>
                    <div className={styles.shutter}>
                        <div className={styles.shutter}>
                            <div className={styles.shutter}>
                                <div className={styles.shutter}>
                                    <div className={styles.shutter}>
                                        <div className={styles.shutter}>
                                            <div className={styles.shutter}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Shutter }