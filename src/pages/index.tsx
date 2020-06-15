
import { NextSeo } from 'next-seo';

const Index = (props: any) => {
  console.log(props);
  return (
    <>
      <NextSeo
        title="Gereja BNKP Hilihao"
        description="Website Gereje Banua Niha Keriso Protestan (BNKP) Hilihao"
        noindex={props.seo}
      />
      <p className="text-2xl">Coming Soon</p>
    </>
  )
};

export default Index;
