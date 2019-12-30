import React from 'react';
import styled from 'styled-components';
import './App.css';
import { Link } from 'react-router-dom';

const AppContainer = styled.div`
  width: 480px;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const NavbarContainer = styled.div`
  background: #FFF;
`;

const Footer = styled.div`
  // background: #555;
  // color: #FFF;
`;

const sectionClass = 'flex flex-col mt-10';

// const StyledBurger = styled.button`
//   // position: absolute;
//   top: 5%;
//   left: 2rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   width: 2rem;
//   height: 2rem;
//   background: transparent;
//   border: none;
//   cursor: pointer;
//   padding: 0;
//   z-index: 10;

//   &:focus {
//     outline: none;
//   }

//   div {
//     width: 2rem;
//     height: 0.25rem;
//     background: black;
//     border-radius: 10px;
//     transition: all 0.3s linear;
//     position: relative;
//     transform-origin: 1px;
//   }
// `

const App: React.FC = () => {
  return (
    <div className="flex items-center flex-col px-3">
      <NavbarContainer className="flex w-full justify-center fixed shadow py-2 px-3">
        <AppContainer className="flex items-center">
          {/* <StyledBurger className="mr-2">
            <div />
            <div />
            <div />
          </StyledBurger> */}
          <div className="w-6">
            <img
              alt="logo bnkp" src="/img/logo_bnkp.png" />
          </div>
          <div>
            <p className="text-sm">Gereja</p>
            <p className="text-base">BNKP Hilihao</p>
          </div>
        </AppContainer>
      </NavbarContainer>
      <AppContainer className="flex flex-col mt-16">
        {/* Banner */}
        <div className="flex">
          <img alt="Banner Natal" src="/img/banner_25_12_2019_sm.png" />
        </div>
        {/* Visi */}
        <div className={sectionClass}>
          <p className="text-3xl font-semibold text-center">Visi</p>
          <span className="text-center font-light text-sm">
            Jemaat BNKP Hilihao menjadi jemaat yang aktif bersekutu dalam beribadah, giat dalam mendukung pelayanan, serta menjadi jemaat yang diakonat dan misioner sebagai wujud kedewasaan iman.
          </span>
          <Link to="/visi-misi" className="text-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
            Selengkapnya
          </button>
          </Link>
        </div>

        {/* Ministry */}
        <div className={sectionClass}>
          <p className="text-3xl font-semibold text-center">Total Jemaat</p>
          <div className="text-center blue">
            <p className="text-xl font-normal">1376 Jiwa</p>
            <i>(data desember 2017)</i>
          </div>
        </div>
        
        {/* Upcoming Events */}
        <div className="flex flex-col mt-10" id="upcoming_events">
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo numquam modi quam dolorem! Non itaque consequuntur quisquam facere quis qui magni reiciendis iure, mollitia inventore, aspernatur voluptate assumenda quia impedit.</p> */}
          <p className="text-2xl font-semibold text-center">Jadwal Kebaktian / Acara</p>

          {/* List Acara */}

          <div className="flex rounded overflow-hidden shadow-md flex-col py-8 px-2 mt-2">
            <p className="font-semibold text-xl">
                Kebaktian Akhir Tahun
            </p>
            <p className="text-gray-700 text-base">
                31 Desember 2019, 20.00 WIB
            </p>
            <p className="text-gray-700 text-base">
                Gereja BNKP Hilihao
            </p>
          </div>

        </div>

        <div className={sectionClass}>
          <Footer className="text-center">
            <address>Jalan Cikditiro No.220, Desa Hilihao</address>
            <address>Kota Gunungsitoli - Nias</address>
          </Footer>
        </div>
      </AppContainer>
    </div>
  );
}

export default App;
