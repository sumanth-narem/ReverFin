'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import AOS from 'aos'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import 'aos/dist/aos.css'

export default function LenisAOSWrapper({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Initialize AOS
        AOS.init({ duration: 800, easing: 'ease-out' })

        // Register GSAP ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger)

        // Initialize Lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        })

        function raf(time: number) {
            lenis.raf(time)
            ScrollTrigger.update()
            requestAnimationFrame(raf)
        }

        lenis.on('scroll', () => {
            AOS.refreshHard()
        })

        requestAnimationFrame(raf)

        // GSAP scroller proxy setup
        ScrollTrigger.scrollerProxy(document.body, {
            scrollTop(value) {
                return value !== undefined ? lenis.scrollTo(value) : window.scrollY
            },
            getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight,
                }
            },
            pinType: getComputedStyle(document.body).transform ? 'transform' : 'fixed',
        })

        ScrollTrigger.refresh()

        return () => {
            lenis.destroy()
            // ScrollTrigger.kill() — NOT needed unless you want to manually remove all triggers
        }
    }, [])

    return <>{children}</>
}
