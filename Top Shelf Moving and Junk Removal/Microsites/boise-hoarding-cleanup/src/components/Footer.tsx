import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export function Footer() {
  const serviceAreas = [
    { name: 'Boise', href: '/boise' },
    { name: 'Meridian', href: '/meridian' },
    { name: 'Nampa', href: '/nampa' },
    { name: 'Caldwell', href: '/caldwell' },
    { name: 'Eagle', href: '/eagle' },
  ]

  const resources = [
    { name: 'What is Hoarding?', href: '/about-hoarding' },
    { name: 'Signs of Hoarding', href: '/hoarding-signs' },
    { name: 'How to Help', href: '/helping-a-hoarder' },
    { name: 'Blog', href: '/blog' },
  ]

  return (
    <footer className="bg-gunmetal text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-yellow">Hoarding Cleanup Pros</h3>
            <p className="text-gray-300 mb-4">
              Professional, compassionate hoarding cleanup services in the Treasure Valley.
              We help families reclaim their homes with dignity and respect.
            </p>
            <p className="text-gray-400 text-sm">
              Licensed & Insured | Same-Day Service Available
            </p>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-yellow">Service Areas</h3>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area.name}>
                  <Link
                    href={area.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <MapPin className="w-4 h-4 text-light-blue" />
                    {area.name}, Idaho
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-yellow">Resources</h3>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    href={resource.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-yellow">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="tel:2083611982"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 text-light-blue" />
                (208) 361-1982
              </a>
              <a
                href="mailto:info@boise-hoarding-cleanup.com"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 text-light-blue" />
                info@boise-hoarding-cleanup.com
              </a>
              <p className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-light-blue flex-shrink-0 mt-1" />
                Serving the Treasure Valley
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Hoarding Cleanup Pros. All rights reserved.</p>
          <div className="mt-2 flex justify-center gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
