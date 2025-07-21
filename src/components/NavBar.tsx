"use client"

import Link from "next/link"
import Button from "./ui/Button"
import ImageComponent from "./ui/Image"
import { NavbarUrls } from "@/constants/NavbarUrls"

export default function NavBar() {
  return (
    <>
      <nav data-aos="fade-up" className="py-5 px-16 h-16 border-b border-primary-500 flex items-center justify-center fixed top-0 left-0 z-10 w-screen bg-primary-800">
        <div className="max-w-[100rem] w-full flex items-center justify-between flex-row">
          <div className="flex items-center justify-center flex-row gap-12">
            <ImageComponent
              src="/assets/LogoWhite.svg"
              alt="Rever Logo"
              fill
              loading="lazy"
              className="h-10 w-28 left-0 relative"
            />
            <div className="font-alliance flex flex-row gap-7">
              {
                NavbarUrls?.map((item, key) => {
                  return (
                    <div key={key} className="cursor-pointer flex items-center justify-center gap-2 text-sm">
                      {item?.title}
                      {item?.icon && item?.icon}
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="flex items-center justify-between flex-row gap-5">
            <div className="w-10 h-10 border border-primary-500 hover:bg-primary-500 transition-colors duration-500 cursor-pointer flex items-center justify-center rounded-full">
              <Link href={"https://github.com/makerever/rever"} target="_blank" title="Rever Github">
                <ImageComponent
                  src="/assets/Github.svg"
                  alt="Github icon"
                  fill
                  loading="lazy"
                  className="h-5 w-5 relative"
                />
              </Link>
            </div>
            <Button
              link="https://preview.reverfin.ai/"
              title="Get a demo"
              className="border-2 border-secondary px-5 pt-0.5 h-[2.5rem] flex items-center justify-center hover:bg-secondary hover:text-primary-800 transition-all duration-500 rounded-full"
            />
          </div>
        </div>
      </nav>
    </>
  )
}