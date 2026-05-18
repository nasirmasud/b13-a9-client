import { BookOpen } from 'lucide-react'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import { IoShieldCheckmark } from 'react-icons/io5'

const footerLinks = {
  Platform: ['Browse Tutors', 'How It Works', 'Pricing', 'FAQs'],
  'My Account': ['My Bookings', 'My Sessions', 'Messages', 'Profile Settings'],
  'For Tutors': ['Become a Tutor', 'Tutor Login', 'Resources', 'Help Center'],
  Company: ['About Us', 'Blog', 'Contact Us', 'Terms & Conditions', 'Privacy Policy'],
}

const SocialIcons = [
  { Icon: FaFacebook, label: 'Facebook', href: '#' },
  { Icon: FaXTwitter, label: 'Twitter', href: '#' },
  { Icon: FaInstagram, label: 'Instagram', href: '#' },
  { Icon: FaLinkedin, label: 'LinkedIn', href: '#' },
  { Icon: FaYoutube, label: 'YouTube', href: '#' },
]

const paymentMethods = ['bKash', 'Nagad', 'Rocket', 'VISA', 'Mastercard']

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-slate-100 pt-12 pb-6">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section: Brand, Links, Newsletter */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-10">

          {/* Brand & Socials */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-primary">MediQueue</span>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed max-w-[200px]">
              Your trusted platform to discover expert tutors and book personalized learning sessions online.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-4">
              {SocialIcons.map(({ Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-7 h-7 rounded-full bg-slate-100 hover:bg-primary hover:text-white text-slate-500 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Dynamic Link Groups */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="text-sm font-bold text-slate-800 mb-3 uppercase tracking-wider">
                {group}
              </p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-slate-600 hover:text-primary transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Subscription */}
          <div className="col-span-2 md:col-span-1">
            <p className="text-sm font-bold text-slate-800 mb-1 uppercase tracking-wider">
              Stay Updated
            </p>
            <p className="text-sm text-slate-600 mb-3">
              Subscribe to get tips, updates and offers.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary min-w-0"
              />
              <button
                type="submit"
                className="px-3 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section: Copyright, Payments, Security */}
        <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">
            © {currentYear} MediQueue. All rights reserved.
          </p>

          {/* Payment Badges */}
          <ul className="flex items-center gap-3">
            {paymentMethods.map((method) => (
              <li
                key={method}
                className="text-[11px] font-bold text-slate-600 bg-slate-50 border border-slate-200 px-2 py-1 rounded"
              >
                {method}
              </li>
            ))}
          </ul>

          {/* Security Badge */}
          <div className="flex items-center gap-1.5 text-sm text-slate-600">
            <IoShieldCheckmark className='text-green-700 text-xl' />
            Secure Payments
          </div>
        </div>

      </div>
    </footer>
  )
}