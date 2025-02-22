import Image from "next/image"
import Link from "next/link"
import { footerLinks } from "@constants"

const Footer = () => {
  
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">

      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">

        <div className="flex flex-col justify-start items-start gap-6">
          <Image src="/logo.svg" alt="Car Hub Logo" width={118} height={18} className="object-contain" />
          <p className="text-base text-gray-700">
            Car Hub 2023 <br />
            All rights reserved &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map(
            (link) => {
              const { title, links } = link
              return (
                <div key={title} className="footer__link">
                  <h3 className="font-bold">{title}</h3>
                  {links.map(
                    (item) => {
                      const { title, url } = item
                      return (
                        <Link
                          key={title}
                          href={url}
                          className="text-gray-500"
                        >
                          {title}
                        </Link>
                      )
                    }
                  )}
                </div>
              )
            }
          )}
        </div>

      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10" >

        <p className="text-base text-gray-700">
          Copyright 2023 Car Hub. All rights reserved
        </p>
          
        <div className="footer__copyrights-link">
          <Link
            href="/"
            className="text-gray-500"
          >
            Privacy Policy
          </Link>
          <Link
            href="/"
            className="text-gray-500"
          >
            Terms of Use
          </Link>
        </div>

        </div>

    </footer>
  )
}

export default Footer