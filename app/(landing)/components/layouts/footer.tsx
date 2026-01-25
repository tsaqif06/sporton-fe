import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-dark-alternate text-white">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between pt-14 pb-14 lg:pb-24 px-4 lg:px-0 gap-10 lg:gap-0">
        <div className="w-full lg:w-[400px]">
          <Link href="/">
            <Image
              src="/images/logo-footer.svg"
              alt="logo sporton footer"
              width={187}
              height={44}
            />
          </Link>
          <p className="mt-6 lg:mt-8 text-gray-300">
            Engineered for endurance and designed for speed. Experience gear
            that moves as fast as you do.
          </p>
        </div>

        <div className="w-full lg:w-[400px] grid grid-cols-2 gap-10">
          <div className="flex gap-4 lg:gap-7 flex-col font-medium">
            <Link href="#" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Categories
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Products
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              About Us
            </Link>
          </div>
          <div className="flex gap-4 lg:gap-7 flex-col font-medium">
            <Link href="#" className="hover:text-primary transition-colors">
              Instagram
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Facebook
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              TikTok
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              YouTube
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container mx-auto py-8 lg:py-6.5 flex flex-col-reverse lg:flex-row justify-between items-center gap-6 lg:gap-0 px-4 lg:px-0 text-center lg:text-left text-sm text-gray-400">
          <div>SportsOn © 2025 All Rights Reserved.</div>

          <div className="flex justify-center lg:justify-end gap-10 lg:w-[400px]">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors whitespace-nowrap"
            >
              Terms Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
