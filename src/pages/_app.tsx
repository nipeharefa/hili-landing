import '../tailwind.css';

interface PropsMyApp {
  Component: any;
  pageProps: any;
}

const MyApp = (props: PropsMyApp) =>  {
  const { Component, pageProps} = props;
  return (<Component {...pageProps} />);
};

export default MyApp;
