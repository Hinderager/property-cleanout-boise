'use client'

import Link from 'next/link'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)

  const cityLinks = [
    { href: '/boise', label: 'Boise' },
    { href: '/meridian', label: 'Meridian' },
    { href: '/nampa', label: 'Nampa' },
    { href: '/caldwell', label: 'Caldwell' },
    { href: '/eagle', label: 'Eagle' },
  ]

  const resourceLinks = [
    { href: '/about-hoarding', label: 'What is Hoarding?' },
    { href: '/hoarding-signs', label: 'Signs of Hoarding' },
    { href: '/helping-a-hoarder', label: 'How to Help' },
    { href: '/blog', label: 'Blog' },
  ]

  return (
    <header className="bg-dark-blue text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Site Name */}
          <Link href="/" className="flex items-center gap-2 py-2 min-h-[44px]">
            <span className="text-xl md:text-2xl font-bold">
              <span className="text-brand-yellow">Hoarding</span> Cleanup Pros
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            <Link
              href="/"
              className="text-white/90 hover:text-white transition-colors font-medium px-3 py-2 min-h-[44px] flex items-center"
            >
              Home
            </Link>
            {cityLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-white transition-colors font-medium px-3 py-2 min-h-[44px] flex items-center"
              >
                {link.label}
              </Link>
            ))}
            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                onBlur={() => setTimeout(() => setResourcesOpen(false), 150)}
                className="flex items-center gap-1 text-white/90 hover:text-white transition-colors font-medium px-3 py-2 min-h-[44px]"
              >
                Resources
                <ChevronDown className={`w-4 h-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              {resourcesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                  {resourceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-gunmetal hover:bg-fog transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <a
              href="tel:2083611982"
              className="hidden md:flex items-center gap-2 bg-brand-yellow text-dark-blue px-4 py-2 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>(208) 361-1982</span>
            </a>
            <a
              href="tel:2083611982"
              className="md:hidden bg-brand-yellow text-dark-blue p-2 rounded-lg"
              aria-label="Call us at (208) 361-1982"
            >
              <Phone className="w-5 h-5" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-white/20">
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/90 hover:text-white py-2 px-4 rounded-lg hover:bg-white/10 transition-colors font-medium"
              >
                Home
              </Link>
              <div className="px-4 py-2 text-white/60 text-sm font-medium">Service Areas</div>
              {cityLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white/90 hover:text-white py-2 px-6 rounded-lg hover:bg-white/10 transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 py-2 text-white/60 text-sm font-medium mt-2">Resources</div>
              {resourceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white/90 hover:text-white py-2 px-6 rounded-lg hover:bg-white/10 transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
