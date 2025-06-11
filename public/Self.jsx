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
                <div className="flex items-center gap-3">
                    <figure className="img-box w-9 h-9 rounded-lg">
                        <img 
                            src="/images/Tejas Mistry_pic.jpg"
                            width={40}
                            height={40}
                            alt="Tejas Mistry Potrait"
                            className="img-cover" 
                        /> 
                    </figure>

                    <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                        <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                        </span>
                    </div>
                </div>

                <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                    From Models to Meaning — I Code to Solve, Learn & Create
                </h2>

                <p className="mb-8 text-lg text-zinc-400 items-center">
                    SWE | AI/ML | Cloud Computing
                </p>

                <div className="flex items-center gap-3">
                    <ButtonPrimary 
                        label= "Download Resume"
                        icon = "download"
                        href="/Tejas Mistry_resume.pdf"

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
                src="/images/Tejas Mistry_grad.jpg"
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