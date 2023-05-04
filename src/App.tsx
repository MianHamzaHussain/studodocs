import SectionWrapper from "./components/SectionWrapper/SectionWrapper";
import assets from "./assets";
import Features from "./components/Features/Features";
import Download from "./components/Download/Download";
import styles from "./styles/Global";

const App: React.FC = (): React.ReactElement => {
  return (
    <>
      <SectionWrapper
        title="STUDOCS APP"
        description="An application for computer science students studying at the Open University"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Overview of the courses"
        description="All information is concentrated in one place! The number of assignments in the course, general and exam information, blocking courses and more"
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Open Source"
        description="STUDOCS was developed with Cross-Platform technology called Flutter and is published as open source"
        mockupImg={assets.feature}
        reverse
        showBtn
      />
      <SectionWrapper
        title="Open Source"
        description="The application will be upgraded - share with us your ideas and content to improve and optimize the application"
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with &#10084; by{" "}
          <span
            className="bold underline cursor-pointer"
            onClick={(): void => {
              window.open("github.com", "_blank");
            }}
          >
            WEBDEV
          </span>
        </p>
      </div>
    </>
  );
};

export default App;
