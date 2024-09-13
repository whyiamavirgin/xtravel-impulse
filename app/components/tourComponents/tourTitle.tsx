import NumberTicker from "@/components/magicui/number-ticker";
import PulsatingButton from "@/components/magicui/pulsating-button";
import { Button } from "@/components/ui/button";
import { Chip } from "@nextui-org/react";
import { ChevronDown, PhoneCall } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { pageData as data } from "./tourData/tourData";

export function TourTitle() {
    const g = useTranslations("General")
    const locale = useLocale()


    return(
        <div className={`w-full h-svh flex place-content-center bg-no-repeat bg-cover bg-bottom bg-[url('https://i0.wp.com/www.funnyart.club/uploads/posts/2023-05/1682935041_funnyart-club-p-bishkek-priroda-kartinki-32.jpg?ssl=1')]`}>
            <div className="text-white flex flex-col gap-8 mt-[13%] items-center text-center">
                <p className="text-4xl md:text-6xl font-bold">{data.titleEN}</p>
                <div className="bg-white/10 mx-5 md:mx-0 backdrop-blur-md rounded-2xl px-4 py-2 max-w-max">
                    <p className="text-stone-100 text-md md:text-lg">
                        {locale == "ru" && (
                            data.ru.titleText
                        )}
                        {locale == "en" && (
                            data.en.titleText
                        )}
                        {locale == "de" && (
                            data.de.titleText
                        )}
                    </p>
                </div>
                <div>
                    <ul className="flex flex-col md:flex-row items-center gap-5 text-sm md:text-lg">
                        <li>
                            <Chip 
                                variant="dot"
                                color="warning"
                                className="text-white border-2 px-4 bg-white/10 border-white/10 backdrop-blur-md"
                            >
                                {locale == "ru" && (
                                    data.ru.chips.first
                                )}
                                {locale == "en" && (
                                    data.en.chips.first
                                )}
                                {locale == "de" && (
                                    data.de.chips.first
                                )}
                            </Chip>
                        </li>
                        <li>
                            <Chip 
                                variant="dot"
                                color="warning"
                                className="text-white border-2 px-4 bg-white/10 border-white/10 backdrop-blur-md"
                            >
                                {locale == "ru" && (
                                    data.ru.chips.second
                                )}
                                {locale == "en" && (
                                    data.en.chips.second
                                )}
                                {locale == "de" && (
                                    data.de.chips.second
                                )}
                            </Chip>
                        </li>
                        <li>
                            <Chip 
                                variant="dot"
                                color="warning"
                                className="text-white border-2 px-4 bg-white/10 border-white/10 backdrop-blur-md"
                            >
                                {locale == "ru" && (
                                    data.ru.chips.third
                                )}
                                {locale == "en" && (
                                    data.en.chips.third
                                )}
                                {locale == "de" && (
                                    data.de.chips.third
                                )}
                            </Chip>
                        </li>
                    </ul>
                </div>
                {/* <div className="flex flex-col md:flex-row gap-5">
                    <Button 
                        variant="outline"
                        size="sm" 
                        className="hover:bg-[#FFB800] text-black md:max-w-sm hover:text-white hover:border-[#FFB800] dark:bg-[#ffffff] dark:text-black dark:hover:bg-[#FFB800]" 
                    >
                        {g('readMore')}
                        <ChevronDown className="stroke-[1.5px]" />
                    </Button>
                    <PulsatingButton className="bg-[#FFB800]    " pulseColor="#FFB800">
                        <p className="flex gap-2 items-center">
                            {g('contactUs')}
                            <PhoneCall className="w-4 h-4 stroke-[1.5px]" />
                        </p>
                    </PulsatingButton>
                </div> */}
            </div>
        </div>
    )
}