import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-[1920px] px-6 py-16 md:px-[100px] xl:px-[200px]">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/logo-hor.png" alt="Triagenius" className="mb-4 h-10" />
            <p className="max-w-[220px] text-sm leading-relaxed text-brand-muted">
              Streamlined Triage Software for Swift and Accurate Healthcare Assessment by Experts
            </p>
            <a href="mailto:info@triagenius.com" className="mt-4 block font-medium text-brand-teal">
              info@triagenius.com
            </a>
            <div className="mt-4 flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <a href="#" aria-label="Facebook"><img src="/assets/icon-facebook.svg" className="h-6 w-6" alt="" /></a>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <a href="#" aria-label="Instagram"><img src="/assets/icon-instagram.svg" className="h-6 w-6" alt="" /></a>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <a href="#" aria-label="LinkedIn"><img src="/assets/icon-linkedin.svg" className="h-6 w-6" alt="" /></a>
            </div>
          </div>

          <div>
            <p className="mb-4 text-lg font-semibold text-black">Why Triagenius</p>
            <ul className="space-y-3 text-sm text-black/80">
              <li><Link prefetch={false} href="/features" className="hover:text-brand-teal">Features</Link></li>
              <li><Link prefetch={false} href="/how-it-works" className="hover:text-brand-teal">How it works</Link></li>
              <li><Link prefetch={false} href="/how-it-works#faq" className="hover:text-brand-teal">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-lg font-semibold text-black">Product</p>
            <ul className="space-y-3 text-sm text-black/80">
              <li><Link prefetch={false} href="/plans" className="hover:text-brand-teal">Pricing Plans</Link></li>
              <li><Link prefetch={false} href="/training-support" className="hover:text-brand-teal">Training &amp; support</Link></li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-lg font-semibold text-black">Useful Links</p>
            <ul className="space-y-3 text-sm text-black/80">
              <li><a href="#" className="hover:text-brand-teal">Terms and Conditions</a></li>
              <li><a href="#" className="hover:text-brand-teal">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-teal">Cookies</a></li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-lg font-semibold text-black">Contact</p>
            <ul className="space-y-3 text-sm text-black/80">
              <li><a href="#" className="hover:text-brand-teal">Download iOS App</a></li>
              <li><a href="#" className="hover:text-brand-teal">Download Android App</a></li>
              <li><Link prefetch={false} href="/contact" className="hover:text-brand-teal">Contact us</Link></li>
            </ul>
          </div>
        </div>

        <hr className="my-10 border-gray-200" />

        <div className="flex flex-col items-center justify-between gap-2 text-sm text-brand-muted sm:flex-row">
          <p>Triagenius © 2023</p>
          <p>
            Powered by{" "}
            <a href="https://www.konnektable.com" target="_blank" rel="noopener" className="text-brand-purple underline">
              Konnektable Technologies Ltd
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
