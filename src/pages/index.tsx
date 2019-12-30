import getConfig from 'next/config';
import { NextSeo } from 'next-seo';

const { serverRuntimeConfig  } = getConfig();

const Index = () => {
  let { seoNoIndex  } : { seoNoIndex : boolean } = serverRuntimeConfig;
  return (
    <>
      <NextSeo
        title="Gereja BNKP Hilihao"
        description="Website Gereje Banua Niha Keriso Protestan (BNKP) Hilihao"
        noindex={seoNoIndex}
      />
      <p className="text-2xl">Coming Soon</p>
    </>
  )
};

export default Index;
