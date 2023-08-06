import Image from "next/image"
import Link from "next/link"

import { footerLinks } from "@/constants"

const Footer = () => {
  return (
    <footer className="flex flex-col text-blue-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={118}
            height={18}
            className="object-contain"
          />

          <p className="text-base text-slate-700">
            Carhub 2023 <br /> All rights reserved &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold text-slate-900 ">{link.title}</h3>
              {link.links.map((item) => (
                <Link key={item.title} href={item.url}>
                  <span className="text-slate-500">{item.title}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-slate-100 sm:px-16 px-6 py-10">
        <p className="text-slate-500">@2023 Carhub. All Rights Reserved</p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-slate-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-slate-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
