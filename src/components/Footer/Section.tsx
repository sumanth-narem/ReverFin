import React from 'react'
import ImageComponent from '../ui/Image';
import Link from 'next/link';

const footerData = {
  Product: [
    { title: "Features & Integrations", link: "/features-integrations" },
    { title: "Pricing & Plans", link: "/pricing" },
    { title: "API Documentation", link: "/api-docs" },
    { title: "Product Roadmap", link: "/product-roadmap" }
  ],
  Company: [
    { title: "About Rever", link: "/about" },
    { title: "Our Team", link: "/team" },
    { title: "Careers", link: "/careers" },
    { title: "Press Kit", link: "/press-kit" }
  ],
  Resources: [
    { title: "Help Center", link: "/help-center" },
    { title: "Blog & Guides", link: "/blog" },
    { title: "Webinars", link: "/webinars" },
    { title: "Customer Stories", link: "/customer-stories" }
  ],
  Connect: [
    { title: "Contact Sales", link: "/contact-sales" },
    { title: "Support", link: "/support" },
    { title: "Newsletter", link: "/newsletter" },
    { title: "Signup", link: "/signup" }
  ]
};


function Header() {
  return (
    <>
      <div className='w-full px-12 border-b border-footerBorder'>
        <div className='w-full border-x border-footerBorder py-20'>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 bg-black text-white px-10 text-sm">
            {Object.entries(footerData).map(([section, links]) => (
              <div key={section}>
                <h3 className="mb-4 font-ppMori text-xl">{section}</h3>
                <ul className="space-y-2">
                  {links.map(({ title, link }) => (
                    <li key={title}>
                      <a href={link} className="hover:underline font-ppMori text-sm text-gray-400 duration-300 transition-all">
                        {title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='w-full px-12'>
        <div className='h-full w-full flex items-end justify-between border-x border-b border-footerBorder pt-16 pb-5 px-10 relative'>
          <div className='w-96 pb-10'>
            <p className='font-alliance text-4xl'>Modern AI Assistant for Finance</p>
          </div>
          <div className='flex items-start justify-center gap-3'>
            <Link href={"/"}>
              <div className='bg-zinc-900 p-3 rounded-lg'>
                <ImageComponent
                  fill
                  loading='lazy'
                  alt='X'
                  src='/assets/X.svg'
                  className='relative h-4 w-4'
                />
              </div>
            </Link>
            <Link href="https://www.linkedin.com/company/reverfin-ai/" target='_blank'>
              <div className='bg-zinc-900 p-3 rounded-lg'>
                <ImageComponent
                  fill
                  loading='lazy'
                  alt='LinkedIn'
                  src='/assets/LinkedIn.svg'
                  className='relative h-4 w-4'
                />
              </div>
            </Link>
          </div>
          <div className='absolute bg-black -bottom-8 w-24 -ml-2'>
            <ImageComponent
              fill
              loading='lazy'
              alt='Rever'
              src='/assets/LogoWhite.svg'
              className='realtive h-16 w-20'
            />
          </div>
        </div>
        <div className='h-20 w-full py-16 px-10 text-[12px] border-x border-footerBorder text-zinc-600 font-ppMori flex items-center justify-between flex-col lg:flex-row gap-2'>
          <div>
            <p>© Rever 2025. All rights reserved. Privacy Policy, EULA and Terms & conditions. </p>
          </div>
          <div className='flex items-center justify-evenly gap-5'>
            <Link className='underline w-min' href={"/"}>Privacy&nbsp;Policy</Link>
            <Link className='underline w-min' href={"/"}>Terms&nbsp;of&nbsp;Service</Link>
            <Link className='underline w-min' href={"/"}>Cookies&nbsp;Settings</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header