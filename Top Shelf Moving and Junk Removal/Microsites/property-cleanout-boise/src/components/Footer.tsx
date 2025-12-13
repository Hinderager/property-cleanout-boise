import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Clock } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-dark-blue text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Resources */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-light-blue">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/foreclosure-cleanouts" className="text-white/80 hover:text-white transition-colors">
                  Foreclosure Cleanouts
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/80 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/rental-turnovers" className="text-white/80 hover:text-white transition-colors">
                  Rental Turnovers
                </Link>
              </li>
              <li>
                <Link href="/eviction-cleanouts" className="text-white/80 hover:text-white transition-colors">
                  Eviction Cleanouts
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-light-blue">Services</h4>
            <ul className="space-y-2">
              <li className="text-white/80">Foreclosure Cleanouts</li>
              <li className="text-white/80">Rental Property Clearing</li>
              <li className="text-white/80">Eviction Cleanouts</li>
              <li className="text-white/80">Estate Cleanouts</li>
              <li className="text-white/80">Hoarding Cleanup</li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-light-blue">Service Areas</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/boise" className="text-white/80 hover:text-white transition-colors">
                  Boise
                </Link>
              </li>
              <li>
                <Link href="/meridian" className="text-white/80 hover:text-white transition-colors">
                  Meridian
                </Link>
              </li>
              <li>
                <Link href="/nampa" className="text-white/80 hover:text-white transition-colors">
                  Nampa
                </Link>
              </li>
              <li>
                <Link href="/caldwell" className="text-white/80 hover:text-white transition-colors">
                  Caldwell
                </Link>
              </li>
              <li>
                <Link href="/eagle" className="text-white/80 hover:text-white transition-colors">
                  Eagle
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-light-blue">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-[#ff6b35] flex-shrink-0 mt-1" />
                <div>
                  <a
                    href="tel:2083611982"
                    className="text-white/80 hover:text-white transition-colors font-semibold"
                  >
                    <span className="md:hidden">Call Now</span>
                    <span className="hidden md:inline">(208) 361-1982</span>
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-[#ff6b35] flex-shrink-0 mt-1" />
                <div>
                  <a
                    href="mailto:info@property-cleanout-boise.com"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    info@property-cleanout-boise.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#ff6b35] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white/80">
                    Serving the Treasure Valley<br />
                    Boise, ID
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-[#ff6b35] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white/80">
                    Mon-Sat: 8am - 6pm<br />
                    Emergency: 24/7
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              <span
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </span>
              <span
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </span>
              <span
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </span>
            </div>

            <div className="text-center md:text-right">
              <p className="text-white/60 text-sm">
                &copy; {new Date().getFullYear()} Property Cleanout Pros. All rights reserved.
              </p>
              <div className="flex gap-4 mt-2 justify-center md:justify-end">
                <Link href="/privacy" className="text-white/60 text-sm hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-white/60 text-sm hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
