import Head from "next/head";
import Image from "next/image";
import TypingEffect from "../components/TypingEffect";
import Navbar from "../components/navBar";

import Me from "../image/Andreas.png";

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Navbar />
            <main className='mx-2 '>
                <div className='flex justify-center py-5 text-xl '>
                    <TypingEffect />
                </div>
                <section className='mx-auto '>
                    <div>
                        <p className='text-sm '>Mitt navn er:</p>
                        <p className='text-blue-500 text-[64px] '>
                            Andreas Takvam
                        </p>
                        <p className='text-sm '>Jeg er:</p>
                        <p className='text-blue-500 text-[32px] '>
                            Frontend Utvikler
                        </p>
                        <div className='mx-10 '>
                            <Image
                                className='rounded-full'
                                src={Me}
                                alt='Profilbilde av Andreas'
                                height={200}
                            />
                        </div>
                        <p className='mt-4'>
                            Her er jeg, en 36 år ung mann som har funnet gleden
                            med å kode. Jeg er problemløser av natur, og gir meg
                            ikke før jeg har oppnådd resultat. Med stor
                            interesse for data, elektronikk og duppedingser, har
                            jeg også fattet interesse for å knytte koding sammen
                            med små datamaskiner som Arduino og Rasbery Pi. Ved
                            å ha meg med på laget, får dere en dedikert,
                            energisk person som aldri sier nei for å ta i et
                            tak. Jeg ser på en hver utfordring til å tilegne meg
                            ny kunnskap. Mitt mål er ikke å bli best, men å bli
                            den beste personen å ha med på laget!
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}
