import * as React from 'react';
import loadable from '@loadable/component';

const Navbar = loadable(() => import('../component/Navbar'));

const VisionAndMission = () => (
  <div className="flex items-center flex-col px-3">
    <Navbar />
    <div className="mt-16">
    <h1 className="text-3xl text-center">Visi</h1>
    <div className="px-5">
      <span className="text-center">
      Jemaat BNKP Hilihao menjadi jemaat yang aktif bersekutu dalam beribadah, giat dalam mendukung pelayanan, serta menjadi jemaat yang diakonat dan misioner sebagai wujud kedewasaan iman
      </span>
    </div>
    <h1 className="text-3xl text-center">Misi</h1>
    <div className="px-5">
      <ul className="list-decimal list-inside">
        <li>Membangun spritual</li>
        <li>Membangun sumber daya</li>
        <li>Menata dan meneguhkan persekutuan</li>
        <li>Memerangi kemiskinan dan memberdayakan masyarakat</li>
        <li>Mengupayakan kemandirian</li>
      </ul>
    </div>
    </div>
  </div>
);

export default VisionAndMission;