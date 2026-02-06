import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-16 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in touch</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              We'd love to hear from you. Visit us, give us a call, or send us an email.
            </p>

            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <MapPinIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  123 Main Street<br />
                  Phoenix, Durban<br />
                  4068
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-gray-900" href="tel:+27721234567">
                    +27 72 123 4567
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-gray-900" href="mailto:hello@tripleds.co.za">
                    hello@tripleds.co.za
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          {/* Map / Hours */}
          <div>
             <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Operating Hours</h3>
             <ul className="space-y-2 text-gray-600">
               <li className="flex justify-between">
                 <span>Monday - Thursday</span>
                 <span>10:00 AM - 8:00 PM</span>
               </li>
               <li className="flex justify-between font-semibold">
                 <span>Friday - Saturday</span>
                 <span>10:00 AM - 10:00 PM</span>
               </li>
               <li className="flex justify-between">
                 <span>Sunday</span>
                 <span>10:00 AM - 8:00 PM</span>
               </li>
             </ul>

             <div className="mt-10 bg-gray-200 rounded-lg h-64 w-full flex items-center justify-center text-gray-500">
               {/* Embedded Map Placeholder */}
               <MapPinIcon className="h-12 w-12 mr-2" />
               <span>Map Integration</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
