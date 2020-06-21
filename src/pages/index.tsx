
import { NextSeo } from 'next-seo';
import { Container, Header, Layout } from '../styled';

const Index = (props: any) => {
  return (
    <Layout>
      <NextSeo
        title="Gereja BNKP Hilihao"
        description="Selamat datang di website Gereja Banua Niha Keriso Protestan (BNKP) Hilihao"
        noindex={!props.seo}
        openGraph={{
          type: "website",
          title: "Gereja BNKP Hilihao"
        }}
      />

      <Header>
        <Container>
          <div className="flex px-2">
            <div className="flex w-1/4">
              <h1>BNKP Hilihao</h1>
            </div>
            <nav className="flex justify-end w-3/4">
              <ul className="flex">
                <li className="ml-6">Kegiatan</li>
                <li className="ml-6">Departemen</li>
                <li className="ml-6">E-Warta</li>
              </ul>
            </nav>
          </div>
        </Container>
      </Header>

      <Container className="bg-white p-2" style={{"minHeight": "100px"}}>
        <p className="text-2xl text-center">Coming Soon</p>
      </Container>
    </Layout>
  )
};

export default Index;
