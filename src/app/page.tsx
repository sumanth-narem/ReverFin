"use client"

import GettingStarted from "@/components/GettingStarted"
import Home from "@/components/Header"
import Integrations from "@/components/Integrations"
import NavBar from "@/components/NavBar"
import PlatformCap from "@/components/PlatformCap"
import Results from "@/components/ProvenResults"
import RbyR from "@/components/RoleByRole"
import ScrollSection from "@/components/ScrollSection"

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Home />
      <Results />
      <div className="bg-primary-100 flex items-center justify-center flex-col w-full">
        <ScrollSection />
        <GettingStarted />
      </div>
      <RbyR />
      <PlatformCap />
      <div className="bg-primary-100 flex items-center justify-center flex-col w-full">
        <Integrations />
      </div>
    </>
  )
}