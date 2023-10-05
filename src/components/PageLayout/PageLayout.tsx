import { RootState } from "../../store/store";
import styles from "./PageLayout.module.css";
import { useSelector } from "react-redux";

const PageLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const theme = useSelector((state: RootState) => state.ui.theme);

  return (
    <main className={styles.pageContainer + " " + styles[theme]}>
      {children}
    </main>
  );
};
export default PageLayout;
