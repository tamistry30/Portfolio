/**
 * @copyright 2025 Tejas Mistry
 * @license Apache-2.0
 */

import { ButtonPrimary, ButtonOutline} from "./Button";


const Self = () => {
  return (
    <section
        id="home"
        className="pt-28 lg:pt-36"
    >
        <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
            <div>
               
               <h2 className="headline-1 mt-5 mb-8 lg:mb-10">
  <span className="whitespace-nowrap">Turning complexity</span>
  <br />
  <span className="whitespace-nowrap">into clarity through</span>
  <br />
  <span className="whitespace-nowrap">Data, Cloud, and AI.</span>
</h2>

                <p className="mb-8 text-lg text-zinc-400 items-center">
                Data Engineer | Building at the intersection of Data, Cloud & AI 
                </p>

                <div className="flex items-center gap-3">
                    <ButtonPrimary 
                        label= "Download Resume"
                        icon = "download"
                        href="/RESUME.pdf"

                    />

                    <ButtonOutline 
                        href="#about"
                        label="Scroll down"
                        icon = "arrow_downward"
                    />
                </div>
            </div>

        <div className="hidden lg:block">
            <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
                <img
                src="/TEJAS_NYC.jpeg"
                width={656}
                height={800}
                alt="Tejas Mistry"
                className="w-full"
                />
            </figure>
        </div>



        </div>    
    </section>
  )
}

export default Self
