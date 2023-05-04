import React from "react";
import styles from "../../styles/Global";

interface ButtonProps {
  assetUrl: string;
  link: string;
  title: string,
  subtitle: string,
  color: string,
  
}

const Button: React.FC<ButtonProps> = (
  props: ButtonProps
): React.ReactElement => {
  const { assetUrl, link, title, subtitle, color } = props;
  return (
    <div
      className={color}
      onClick={(): void => {
        window.open(link, "_blank");
      }}
    >
      <img src={assetUrl} alt="btnIcon" className={styles.btnIcon} />
      <div className="flex flex-col justify-start ml-4">
        <p className={`${styles.btnText} font-normal text-xs`}>{subtitle}</p>
        <p className={`${styles.btnText} font-bold text-sm`}>{title}</p>
      </div>
    </div>
  );
};

export default Button;
