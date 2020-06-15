import getConfig from 'next/config';

import '../tailwind.css';

interface PropsMyApp {
  Component: any;
  pageProps: any;
}

const { publicRuntimeConfig  } = getConfig();

const MyApp = (props: PropsMyApp) =>  {
  const { Component, pageProps} = props;
  let seo  = publicRuntimeConfig.seoNoIndex;
  pageProps.seo = (seo === 'true');
  return (<Component {...pageProps} />);
};

export default MyApp;
