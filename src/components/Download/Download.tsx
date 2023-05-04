import React from "react";
import styles from "../../styles/Global";
import assets from "../../assets";
import Button from "../Button/Button";

const Download: React.FC = (): React.ReactElement => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>
          Download the app
          </h1>
          <p className={`${styles.pText} ${styles.blackText}`} dir="rtl">
          Soon the source code will be uploaded to GitHub
          </p>
        </div>
        {/* <button
          className={styles.btnPrimary}
          onClick={(): void => {
            window.open(
              "https://github.com/jerdevs/nft-app/tree/master/showcase",
              "_blank"
            );
          }}
        >
          Source Code
        </button> */}
        
        <div className="pt-6">
          <Button
            assetUrl={assets.github}
            color={styles.btnPrimary}
            title="GitHub"
            subtitle="View it on"
            link="https://play.google.com/store/apps/details?id=com.ladunjexa.studocs"
          />
        </div>
        <div className="pt-6">
          <Button
            assetUrl={assets.googleplay}
            color={styles.btnBlack}
            title="Google Play"
            subtitle="Download it on"
            link="https://play.google.com/store/apps/details?id=com.ladunjexa.studocs"
          />
        </div>
        <div className={styles.flexCenter}>
          <img src={assets.scene} alt="download" className={styles.fullImg} />
        </div>
      </div>
    </div>
  );
};

export default Download;
