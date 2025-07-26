'use client'

import { useParams, notFound } from 'next/navigation'
import { IndividualBlogData } from '@/constants/Blogspage/IndividualBlog'
import SideBar from '@/components/Blog/Individual/SideBar'
import ImageComponent from '@/components/ui/Image'
import ScrollSection from '@/components/Blog/Individual/MainContent'

export default function DynamicRoute() {
  const params = useParams();

  const blog = IndividualBlogData.find(
    (blog) => blog.name === params.blogName
  );

  if (!blog) {
    notFound();
  }

  return (
    <>
      {
        blog ?
          <>
            <div className='w-full flex items-center justify-center flex-col'>
              <div className='w-full max-w-[100rem] px-12 pt-16'>
                <div className='border-x border-primary-500 px-10 py-16 flex items-center justify-center'>
                  <div className='max-w-[75rem] w-full'>
                    <div className='flex items-start justify-start flex-col gap-8'>
                      <div>
                        <div className='font-ppMori text-[14px] border border-primary-400 bg-primary-800 rounded-full px-4 py-1 w-max'>
                          <p className='mt-0.5'>{blog?.category}</p>
                        </div>
                      </div>
                      <p className='text-4xl font-alliance'>{blog?.title}</p>
                      <div>
                        <p className='text-sm font-ppMori'>{blog?.date}</p>
                      </div>
                    </div>
                    <div className='-mt-4'>
                      {
                        blog?.img &&
                        <ImageComponent
                          alt={blog?.name ?? ""}
                          fill
                          loading='lazy'
                          className='relative w-full aspect-video'
                          src={blog?.img}
                        />
                      }
                    </div>
                    <div className='flex items-start justify-start flex-row gap-10'>
                      <div className='sticky top-20 min-w-72'>
                        <p className='font-alliance text-xl mb-5'>Table of content</p>
                        <SideBar
                          content={blog?.sideContent}
                        />
                      </div>
                      <div className=''>
                        <ScrollSection
                          content={blog?.mainContent}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </> :
          <>
            notFound()
          </>
      }
    </>
  )
}
