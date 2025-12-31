'use client'

import { useState, useRef, useEffect } from 'react'
import { Camera, Upload, X, ChevronDown, ChevronUp, Loader2 } from 'lucide-react'

// 5 minutes in milliseconds for abandoned form tracking
const ABANDONED_FORM_TIMEOUT = 5 * 60 * 1000

export function QuickQuoteBar() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [photos, setPhotos] = useState<File[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [hasConsent, setHasConsent] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const abandonedTimerRef = useRef<NodeJS.Timeout | null>(null)
  const leadSentRef = useRef(false)

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (abandonedTimerRef.current) {
        clearTimeout(abandonedTimerRef.current)
      }
    }
  }, [])

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '')
    if (numbers.length <= 3) return numbers
    if (numbers.length <= 6) return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    setPhone(formatted)
  }

  const isValidPhone = (phone: string) => {
    const numbers = phone.replace(/\D/g, '')
    return numbers.length === 10
  }

  const sendLeadToGHL = async (firstName: string, lastName: string, phone: string, message?: string, photoUrls?: string[]) => {
    try {
      const response = await fetch('/api/ghl/abandoned-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          phone,
          source: 'ms-property',
          message,
          photoUrls
        })
      })

      if (!response.ok) {
        console.error('Failed to send lead to GHL')
      }
    } catch (error) {
      console.error('Error sending lead to GHL:', error)
    }
  }

  const startAbandonedFormTimer = () => {
    // Clear any existing timer
    if (abandonedTimerRef.current) {
      clearTimeout(abandonedTimerRef.current)
    }

    // Start new 5-minute timer
    abandonedTimerRef.current = setTimeout(async () => {
      // Only send if we have name and phone, form hasn't been submitted, and lead hasn't been sent
      if (name.trim() && isValidPhone(phone) && !leadSentRef.current) {
        const nameParts = name.trim().split(' ')
        const firstName = nameParts[0] || ''
        const lastName = nameParts.slice(1).join(' ') || ''

        await sendLeadToGHL(firstName, lastName, phone.replace(/\D/g, ''), message || undefined)
        leadSentRef.current = true
      }
    }, ABANDONED_FORM_TIMEOUT)
  }

  const handleInitialClick = async () => {
    if (!name.trim() || !isValidPhone(phone)) {
      return
    }

    // Start the abandoned form timer when expanding
    startAbandonedFormTimer()

    // Send initial data to Supabase
    const nameParts = name.trim().split(' ')
    const firstName = nameParts[0] || ''
    const lastName = nameParts.slice(1).join(' ') || ''

    const submitData = new FormData()
    submitData.append('firstName', firstName)
    submitData.append('lastName', lastName)
    submitData.append('phone', phone.replace(/\D/g, ''))
    submitData.append('source', 'property-cleanout-boise')
    submitData.append('form_type', 'property_cleanout_microsite')
    submitData.append('consent', 'pending')
    submitData.append('status', 'partial')

    try {
      await fetch('/api/form-submission', {
        method: 'POST',
        body: submitData
      })
    } catch (error) {
      console.error('Error saving initial form data:', error)
    }

    setIsExpanded(true)
  }

  const handlePhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (files.length + photos.length > 5) {
      alert('Maximum 5 photos allowed')
      return
    }
    setPhotos(prev => [...prev, ...files])
  }

  const removePhoto = (index: number) => {
    setPhotos(prev => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async () => {
    if (!hasConsent) {
      alert('Please agree to the terms before submitting')
      return
    }

    setIsSubmitting(true)

    // Clear the abandoned form timer since they're submitting
    if (abandonedTimerRef.current) {
      clearTimeout(abandonedTimerRef.current)
    }

    const nameParts = name.trim().split(' ')
    const firstName = nameParts[0] || ''
    const lastName = nameParts.slice(1).join(' ') || ''

    const submitData = new FormData()
    submitData.append('firstName', firstName)
    submitData.append('lastName', lastName)
    submitData.append('phone', phone.replace(/\D/g, ''))
    submitData.append('email', email)
    submitData.append('message', message)
    submitData.append('source', 'property-cleanout-boise')
    submitData.append('form_type', 'property_cleanout_microsite')
    submitData.append('consent', hasConsent ? 'true' : 'false')
    submitData.append('status', 'complete')

    photos.forEach((photo, index) => {
      submitData.append(`photo_${index}`, photo)
    })

    try {
      const response = await fetch('/api/form-submission', {
        method: 'POST',
        body: submitData
      })

      if (response.ok) {
        const result = await response.json()

        // Send complete lead to GHL
        await sendLeadToGHL(
          firstName,
          lastName,
          phone.replace(/\D/g, ''),
          message || undefined,
          result.photoUrls || undefined
        )
        leadSentRef.current = true

        setSubmitStatus('success')
        // Reset form
        setName('')
        setPhone('')
        setEmail('')
        setMessage('')
        setPhotos([])
        setHasConsent(false)
        setIsExpanded(false)
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="quote-form" className="pt-4 pb-0 -mt-4 -mb-0 md:-mb-16 border-0 z-0 md:z-20 overflow-visible relative">
      {/* Background layers with proper z-index */}
      <div className="absolute -top-[140px] md:top-0 left-0 right-0 bottom-14 md:bottom-8 bg-[radial-gradient(ellipse_at_center,#2a6ab0_0%,#10477d_60%)] -z-10"></div>
      <div className="absolute -top-[140px] md:top-0 left-0 right-0 bottom-14 md:bottom-8 bg-[url('/assets/asset-7.webp')] bg-repeat bg-[length:800px] opacity-50 -z-[5]"></div>

      {/* Tagline with arrows - using inline styles */}
      <div
        className="hidden md:flex items-center justify-center h-[40px] mb-4 w-full"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline points='18,8 6,15 18,22' fill='none' stroke='white' stroke-width='2' stroke-linejoin='miter'/%3E%3Cpolyline points='28,10 18,15 28,20' fill='none' stroke='white' stroke-width='2' stroke-linejoin='miter'/%3E%3C/svg%3E"), linear-gradient(white, white), linear-gradient(white, white), url("data:image/svg+xml,%3Csvg width='30' height='30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline points='2,10 12,15 2,20' fill='none' stroke='white' stroke-width='2' stroke-linejoin='miter'/%3E%3Cpolyline points='12,8 24,15 12,22' fill='none' stroke='white' stroke-width='2' stroke-linejoin='miter'/%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px, calc(50% - 390px) 2px, calc(50% - 390px) 2px, 30px 30px',
          backgroundPosition: 'left 70px center, left 100px center, right 100px center, right 70px center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <span className="text-white italic text-sm sm:text-base md:text-[1.5rem] font-semibold tracking-tight whitespace-nowrap">
          Delivering fresh starts since 2022
        </span>
      </div>

      {/* Desktop Form */}
      <div className="hidden md:block max-w-4xl mx-auto px-4 mb-6">
        {submitStatus === 'success' ? (
          <div className="bg-green-500 text-white p-4 rounded-lg text-center font-semibold">
            Thank you! We&apos;ll contact you shortly with your free quote.
          </div>
        ) : (
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            {!isExpanded ? (
              <div className="flex gap-3 items-center">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg border-2 border-white/30 bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#FFC845]"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={handlePhoneChange}
                  className="flex-1 px-4 py-3 rounded-lg border-2 border-white/30 bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#FFC845]"
                />
                <button
                  onClick={handleInitialClick}
                  disabled={!name.trim() || !isValidPhone(phone)}
                  className="px-8 py-3 rounded-lg font-bold text-lg uppercase bg-[#FFC845] text-[#10477d] hover:bg-[#e5b13d] transition-all border-4 border-[#FFC845] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  Get Property Cleanout Quote
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex gap-3 items-center">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-lg border-2 border-white/30 bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#FFC845]"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={handlePhoneChange}
                    className="flex-1 px-4 py-3 rounded-lg border-2 border-white/30 bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#FFC845]"
                  />
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="px-8 py-3 rounded-lg font-bold text-lg uppercase bg-[#FFC845] text-[#10477d] hover:bg-[#e5b13d] transition-all border-4 border-[#FFC845] flex items-center gap-2"
                  >
                    Get Property Cleanout Quote
                    <ChevronUp className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Email Address (optional)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-lg border-2 border-white/30 bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#FFC845]"
                  />
                </div>

                <textarea
                  placeholder="Tell us about your property cleanout needs (optional)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border-2 border-white/30 bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#FFC845] resize-none"
                />

                {/* Photo Upload */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all"
                    >
                      <Camera className="w-5 h-5" />
                      <span>Add Photos (optional)</span>
                    </button>
                    <span className="text-white/70 text-sm">{photos.length}/5 photos</span>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handlePhotoSelect}
                    className="hidden"
                  />
                  {photos.length > 0 && (
                    <div className="flex gap-2 flex-wrap">
                      {photos.map((photo, index) => (
                        <div key={index} className="relative">
                          <img
                            src={URL.createObjectURL(photo)}
                            alt={`Upload ${index + 1}`}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() => removePhoto(index)}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting || !hasConsent}
                  className="w-full py-3 rounded-lg font-bold text-lg uppercase bg-[#FFC845] text-[#10477d] hover:bg-[#e5b13d] transition-all border-4 border-[#FFC845] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Upload className="w-5 h-5" />
                      Send My Free Quote Request
                    </>
                  )}
                </button>

                {/* Consent Checkbox - Below submit button */}
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasConsent}
                    onChange={(e) => setHasConsent(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-white/30 bg-white/90 text-[#FFC845] focus:ring-[#FFC845]"
                  />
                  <span className="text-white/80 text-sm">
                    I agree to receive calls and texts about my quote request. Message and data rates may apply.
                  </span>
                </label>

                {submitStatus === 'error' && (
                  <p className="text-red-300 text-sm text-center">
                    Something went wrong. Please try again or call us directly.
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mobile Form */}
      <div className="md:hidden px-4">
        {submitStatus === 'success' ? (
          <div className="bg-green-500 text-white p-4 rounded-lg text-center font-semibold mb-4">
            Thank you! We&apos;ll contact you shortly with your free quote.
          </div>
        ) : (
          <div className="space-y-3">
            {!isExpanded ? (
              <>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-white/30 bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#FFC845]"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={handlePhoneChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-white/30 bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#FFC845]"
                />
                <button
                  onClick={handleInitialClick}
                  disabled={!name.trim() || !isValidPhone(phone)}
                  className="w-full py-3 font-bold text-sm uppercase transition-all rounded-lg bg-[#FFC845] text-[#10477d] hover:bg-[#e5b13d] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  Get Property Cleanout Quote
                  <ChevronDown className="w-4 h-4" />
                </button>
              </>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-white/30 bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#FFC845]"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={handlePhoneChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-white/30 bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#FFC845]"
                />
                <input
                  type="email"
                  placeholder="Email Address (optional)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-white/30 bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#FFC845]"
                />
                <textarea
                  placeholder="Tell us about your property cleanout needs (optional)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border-2 border-white/30 bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#FFC845] resize-none"
                />

                {/* Photo Upload Mobile */}
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all"
                  >
                    <Camera className="w-5 h-5" />
                    <span>Add Photos ({photos.length}/5)</span>
                  </button>
                  {photos.length > 0 && (
                    <div className="flex gap-2 flex-wrap">
                      {photos.map((photo, index) => (
                        <div key={index} className="relative">
                          <img
                            src={URL.createObjectURL(photo)}
                            alt={`Upload ${index + 1}`}
                            className="w-14 h-14 object-cover rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() => removePhoto(index)}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Submit Button Mobile */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting || !hasConsent}
                  className="w-full py-3 font-bold text-sm uppercase transition-all rounded-lg bg-[#FFC845] text-[#10477d] hover:bg-[#e5b13d] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Upload className="w-4 h-4" />
                      Send My Free Quote Request
                    </>
                  )}
                </button>

                {/* Consent Checkbox Mobile - Below submit button */}
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasConsent}
                    onChange={(e) => setHasConsent(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-white/30 bg-white/90 text-[#FFC845] focus:ring-[#FFC845]"
                  />
                  <span className="text-white/80 text-xs">
                    I agree to receive calls and texts about my quote request. Message and data rates may apply.
                  </span>
                </label>

                <button
                  onClick={() => setIsExpanded(false)}
                  className="w-full py-2 text-white/70 text-sm underline"
                >
                  Collapse form
                </button>

                {submitStatus === 'error' && (
                  <p className="text-red-300 text-sm text-center">
                    Something went wrong. Please try again or call us directly.
                  </p>
                )}
              </>
            )}
          </div>
        )}
        <p className="text-white text-center italic text-sm mt-6">
          Delivering fresh starts since 2022
        </p>
      </div>
    </section>
  )
}
