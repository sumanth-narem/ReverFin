"use client"

import Link from "next/link"
import Button from "./ui/Button"
import ImageComponent from "./ui/Image"
import { NavbarUrls } from "@/constants/NavbarUrls"

export default function NavBar() {
  return (
    <>
      <nav data-aos="fade-up" className="py-5 px-16 h-16 border-b border-primary-500 flex items-center justify-center flex-row fixed top-0 left-0 z-10 w-screen bg-primary-800">
        <div className="max-w-[100rem] w-full flex items-center justify-between flex-row">
          <div className="flex items-center justify-center flex-row gap-12">
            <Link href="/">
              <ImageComponent
                src="/assets/LogoWhite.svg"
                alt="Rever Logo"
                fill
                loading="lazy"
                className="h-10 w-28 left-0 relative"
              />
            </Link>
            <ul className="font-alliance flex flex-row gap-5">
              {
                NavbarUrls?.map((item, key) => {
                  return (
                    <li key={key} className={`py-2 px-2 group flex items-center justify-center gap-1 text-sm ${!item?.icon ? "cursor-pointer" : "cursor-default"}`}>
                      {item?.title}
                      <div className="group-hover:rotate-180 transition-all duration-500">
                        {item?.icon && item?.icon}
                      </div>
                      {
                        item?.icon &&  //group-hover:min-h-96 min-h-0 h-0
                        <div className={`w-full fixed top-16 left-0 group-hover:min-h-72 min-h-0 h-0 px-12 flex items-center justify-center flex-col overflow-hidden transition-all duration-500 bg-primary-800 border-b border-primary-500`}>
                          <div className="flex items-center justify-center flex-row w-full">
                            {
                              item?.subItems?.map((subItem, key) => (
                                <Link href={subItem?.link} key={key} className="w-full flex items-start group/card justify-center flex-col gap-5">
                                  <div className="flex items-start justify-center px-10 flex-col">
                                    <div className="relative h-24 w-32 flex items-center justify-start">
                                      <ImageComponent
                                        fill
                                        loading="lazy"
                                        alt={subItem?.title}
                                        src={subItem?.img}
                                        className="absolute h-full w-full group-hover/card:h-28 group-hover/card:w-40 transition-all duration-500 s"
                                      />
                                    </div>
                                    <div className="">
                                      <div className="flex items-center justify-start flex-row w-full gap-2">
                                        <div className="font-ppMori text-center h-7 w-7 rounded-full border border-primary-400 group-hover/card:bg-white flex items-center justify-center transition-all duration-500">
                                          <p className="mt-1 text-primary-400 group-hover/card:text-primary-800 transition-all duration-500">{"0" + (key + 1)}</p>
                                        </div>
                                        <p className="font-alliance text-2xl text-primary-400 group-hover/card:text-white transition-all duration-500">{subItem?.title}</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="w-full h-1.5 border-y border-primary-500 border-dashed"></div>
                                  {/* <Link href={subItem?.link} key={key} className="w-full px-10 flex items-start group/card justify-center flex-col"> */}
                                  <div className="px-10">
                                    <p className="font-alliance text-sm text-primary-400 group-hover/card:text-white transition-all duration-500">{subItem?.content}</p>
                                  </div>
                                  {/* </Link> */}
                                </Link>
                              ))
                            }
                          </div>
                        </div>
                      }
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className="flex items-center justify-between flex-row gap-5">
            <Link href={"https://github.com/makerever/rever"} target="_blank" title="Rever Github">
              <div className="w-10 h-10 border border-primary-500 hover:bg-primary-500 transition-colors duration-500 cursor-pointer flex items-center justify-center rounded-full">
                <ImageComponent
                  src="/assets/Github.svg"
                  alt="Github icon"
                  fill
                  loading="lazy"
                  className="h-5 w-5 relative"
                />
              </div>
            </Link>
            <Button
              link="https://preview.reverfin.ai/"
              title="Get a demo"
              className="border-2 border-secondary px-5 pt-0.5 h-[2.5rem] flex items-center justify-center hover:bg-secondary hover:text-primary-800 transition-all duration-500 rounded-full"
            />
          </div>
        </div>
      </nav >
    </>
  )
}