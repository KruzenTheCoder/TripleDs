export default function About() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2832&q=80"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About Us</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Triple D’s Streetfood delivers bold, culturally rich flavours from Durban’s legendary street food scene in a contemporary, accessible restaurant experience.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Our Mission</h3>
            <p className="mt-4 text-base leading-7 text-gray-600">
              To provide consistently high-quality, flavour-forward street food that reflects the diversity of Durban cuisine, delivered with efficiency, transparency, and genuine hospitality.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Our Vision</h3>
            <p className="mt-4 text-base leading-7 text-gray-600">
              To be recognized as the go-to destination for authentic Durban street food — both in-store and online — known for innovation, reliability, and community impact.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 text-center mb-12">Our Core Values</h3>
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                Authenticity
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Dishes rooted in real Durban and coastal street food traditions.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                Consistency
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Every order meets defined standards for taste, portion size, and presentation.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                Customer First
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Fast service, accurate orders, responsive support.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                Integrity
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Honest pricing and transparent ingredients.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
