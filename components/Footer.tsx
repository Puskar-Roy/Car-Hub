import Image from "next/image";
import Link from "next/link";
import React from "react";
import { footerLinks } from "@/constants";

interface FooterLink {
  title: string;
  links: Array<{ title: string; url: string }>;
}

const Footer: React.FC = () => {
  return (
    <div>
      <footer className="flex flex-col text-blue-100 mt-5 border-t border-gray-100">
        <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
          <div className="flex flex-col justify-start items-start gap-6">
            <Image
              src="/logo.svg"
              alt="logo"
              width={118}
              height={18}
              className="object-contain"
            />
            <p className="text-base text-gray-700">
              Carhub 2023 <br /> All rights reserved &copy;
            </p>
          </div>
          <div className="footer__links">
            {footerLinks.map((link: FooterLink) => (
              <div key={link.title} className="footer__link">
                <h3 className="footer__link text-black-100 font-bold">
                  {link.title}
                </h3>
                {link.links.map((item) => (
                  <Link key={item.title} href={item.url} className="text-grey">
                    {item.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mt-10 flex-wrap border-t border-gray-100 sm:px-16 px-6 py-10">
          <p className="text-gray-500">@2023 Create With 💙 By Puskar Roy .</p>
          <div className="footer__copyrights-link">
            <Link href="/" className="text-gray-500">
              Privacy Policy
            </Link>
            <Link href="/" className="text-gray-500">
              Term Of Use
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
