import Header from '../header';
import Footer from '../footer';
import ContentInner from '@ui/contentInner';
import Text from '@ui/text';

import styles from './baseLayout.module.css';

type BaseLayoutProps = {
  children?: React.ReactNode;
  title?: string;
  showThankYou?: boolean;
  showHeader?: boolean;
};

const BaseLayout: React.FC<BaseLayoutProps> = ({
  children,
  title,
  showThankYou = false,
  showHeader = false,
}) => (
  <>
    {showHeader && <Header />}

    <div className={styles.content}>
      <ContentInner>
        <Text size="32" className={styles.title}>
          {title}
        </Text>
        {children}
      </ContentInner>
    </div>
    {showThankYou && <Footer />}
  </>
);

export default BaseLayout;
