import React from "react";
import assets from "../../assets";
import styles from "../../styles/Global";
import FeatureCard from "../FeatureCard/FeatureCard";

const Features: React.FC = (): React.ReactElement => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>
          Open Source
          </h1>
          <p className={`${styles.pText} ${styles.whiteText}`} dir="rtl">
          STUDOCS was developed with Cross-Platform technology called Flutter and is published as open source
          </p>
        </div>
        <div className={styles.flexWrap}>
          <FeatureCard iconUrl={assets.dart} iconText="Dart" />
          <FeatureCard iconUrl={assets.flutter} iconText="Flutter" />
          <FeatureCard iconUrl={assets.androidstudio} iconText="Android Studio" />
        </div>
      </div>
    </div>
  );
};

export default Features;
