"use client"

import Link from "next/link"
import Button from "../ui/Button"
import ImageComponent from "../ui/Image"
import { useNavbarUrls } from "@/constants/NavbarUrls"
import SubItemCard from "./SubItem"

export default function NavBar() {
  const NavbarUrls = useNavbarUrls();
  return (
    <>
      <nav data-aos="fade-up" className="py-5 px-16 h-16 border-b border-primary-500 flex items-center justify-center flex-row fixed top-0 left-0 z-10 w-screen bg-primary-800">
        <div className="max-w-[100rem] w-full flex items-center justify-between flex-row">
          <div className="flex items-center justify-center flex-row gap-12">
            <Link href="/" target="_blank">
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
                      <div className="flex max-w-[100rem] items-center justify-center relative w-full">
                        {
                          item?.icon &&  //group-hover:min-h-96 min-h-0 h-0
                          <div className={`w-full fixed left-0 top-16 ${key === 0 ? "group-hover:min-h-80" : "group-hover:min-h-60"} min-h-0 h-0 px-12 flex items-center justify-center flex-col overflow-hidden transition-all duration-500 bg-primary-800 border-b border-primary-500`}>
                            <div className="flex items-center justify-center flex-row w-full">
                              {
                                item?.subItems?.map((subItem, key) => (
                                  <SubItemCard
                                    key={key}
                                    {...subItem}
                                  />
                                ))
                              }
                            </div>
                          </div>
                        }
                      </div>
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
              link="https://app.reverfin.ai/"
              title="Sign up"
              className="border-2 border-secondary px-5 pt-0.5 h-[2.5rem] flex items-center justify-center hover:bg-secondary hover:text-primary-800 transition-all duration-500 rounded-full"
            />
          </div>
        </div>
      </nav >
    </>
  )
}