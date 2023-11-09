import Image from 'next/image';

import imgSrc from '../../../../public/image/DSCF2524.jpg';

const MemoryLane: any = () => {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-xl ">{"Denna dag i Talkative's historia..."}</h1>

      <div className="">
        <div className="flex flex-col justify-center">
          <Image
            className="object-cover w-1/2 rounded-2xl"
            src={imgSrc}
            alt="memorylane"
          />
        </div>
        <div>
          <h2 className="text-lg ">6/6-2022</h2>
          <p>
            Dracks det öl och spelades boule i Folkets Park. Adrian vann inte.
            Heller inte Anton som endast gick därifrån med en bruten tå. Marcus
            och Marcus, var ska vi börja? Inte en enda vinst där heller. Vem
            vann egentligen? Är vi inte bara här för att ha kul? Inte om du
            frågar Mackan och Mackan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MemoryLane;
