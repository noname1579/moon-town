import Header from "@/components/Header";
import { Star } from "lucide-react";
import Image from "next/image";

export default function Profile() {
  return (
    <>
      <Header />
      <div className="bg-[#22107c] md:bg-[1300px] m-auto p-2 text-white">

        <div className="ava-container flex items-center gap-5">
          <div className="">
            <Image className="my-2 ml-2" src='https://cdn-icons-png.flaticon.com/512/25/25231.png' width={50} height={50} alt="" />
          </div>
          <div className="flex flex-col items-center leading-5">
            <h1 className="text-[20px]">0</h1>
            <h1 className="">прочитано</h1>
          </div>
          <div className="flex flex-col items-center leading-5">
            <h1 className="text-[20px]">0</h1>
            <h1 className="">написано</h1>
          </div>
        </div>  

        <div className="name">
          <h1 className="text-2xl">Никнейм</h1>
          <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque exercitationem omnis molestiae eveniet natus! Iste ipsum ut, excepturi porro maxime velit. Natus maiores quod, amet neque tempora dolores veritatis aspernatur?</p>
        </div>

        <h1 className="my-3 font-bold">Друзья</h1>
        <div className="flex mt-2 gap-1.5">
          <Image src='https://pikuco.ru/upload/test_stable/c42/c4238640f6ea4233a1b5085f9ef70218.webp' className="rounded-full" width={45} height={45} alt="" />
          <Image src='https://sun9-46.userapi.com/s/v1/ig2/OzLmLeAHBSXz20oiTymPl_eNwFdkPgqYf3Nc1d53xVnWBDmclfhVAKmH0WFjQ4XbsQCAgmfqDgV0o4JzUd4DSeSQ.jpg?quality=95&as=32x30,48x45,72x67,108x101,160x149,240x224,360x336,480x448,540x504,604x564&from=bu&u=qcAAoTsPcvG8-gn8vSpnLWr7NXnMYZxjBptPboGpjnI&cs=604x564' className="rounded-full" width={45} height={45} alt="" />
          <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkUMjTBWiv5XkRfbalr8a7QfSiw2SilItNPA&s' className="rounded-full" width={45} height={45} alt="" />
        </div>

        <h1 className="my-3 font-bold">Написано</h1>
        <div className="grid grid-cols-2 gap-2">

          <div className="history">
            <Image src='https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg' width={200} height={100} alt="" />
            <h1 className="text-[13px]">Название истории</h1>
            <div className="flex items-center">
              <p className="pr-1">4.9</p>
              <Star size={16} />
            </div>
            <p className="text-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptatibus quos culpa nihil eum suscipit</p>
          </div>

          <div className="history">
            <Image src='https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg' width={200} height={100} alt="" />
            <h1 className="text-[13px]">Название истории 2</h1>
            <div className="flex items-center">
              <p className="pr-1">4.3</p>
              <Star size={16} />
            </div>
            <p className="text-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptatibus quos culpa nihil eum suscipit</p>
          </div>
        </div>
      </div>
    </>
  )
}
