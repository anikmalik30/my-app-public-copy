// withFooter.tsx
import React from 'react';
import Footer from '../components/Footer';
import SmoothScroll from '../components/SmoothScroll';

const withFooter = (Component: any) => {
  const WithFooter = (props: any) => (
    <>
      <SmoothScroll>
        <Component {...props} />
        <Footer />
      </SmoothScroll>
    </>
  );

  WithFooter.displayName = `WithFooter(${getDisplayName(Component)})`;

  return WithFooter;
};

function getDisplayName(Component: React.ComponentType<any>) {
  return Component.displayName || Component.name || 'Component';
}
export default withFooter;
