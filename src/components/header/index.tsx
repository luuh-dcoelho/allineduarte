import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="max-w-full">
      <nav>
        <div className="z-10 container mx-auto flex justify-between items-center p-6">
          <div className="flex w-32 z-10 md:ml-40">
            <Link href="/">
              <Image
                className="md:w-[256px] w-[100px]"
                src={"/img/logo/logo_alline.png"}
                alt="Alline Duarte Nutricionista"
                width="256"
                height="256"
              />
            </Link>
          </div>
          <div className="flex bg-white px-[25px] py-1.5 rounded-sm shadow-md hover:shadow-md hover:shadow-slate-600 z-10 md:mr-40">
            <Link
              className="text-[#265d58] text-[13px] font-extrabold text-center "
              href="https://wa.me/5548996126300?text=Ol%C3%A1%20Dra.%20Alline%20Duarte,%20gostaria%20de%20agendar%20uma%20consulta!)"
            >
              WHATSAPP
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
