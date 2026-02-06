export default function Specials() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Weekly Specials</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Limited time offers you don't want to miss!
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {/* Special 1 */}
          <article className="flex flex-col items-start justify-between">
            <div className="relative w-full">
              <img
                src="https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80"
                alt=""
                className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div className="max-w-xl">
              <div className="mt-8 flex items-center gap-x-4 text-xs">
                <time dateTime="2020-03-16" className="text-gray-500">
                  Ends Friday
                </time>
                <span className="relative z-10 rounded-full bg-red-50 px-3 py-1.5 font-medium text-red-600 hover:bg-red-100">
                  Combo Deal
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span className="absolute inset-0" />
                    Family Feast
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  2 Large Mutton Curries, 4 Rotis, and a 2L Soft Drink. Perfect for sharing!
                </p>
              </div>
              <div className="mt-4 flex items-center gap-x-4">
                 <span className="text-2xl font-bold text-red-600">R 250.00</span>
                 <span className="text-sm text-gray-500 line-through">R 320.00</span>
              </div>
            </div>
          </article>
           {/* Special 2 */}
           <article className="flex flex-col items-start justify-between">
            <div className="relative w-full">
              <img
                src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=800&q=80"
                alt=""
                className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div className="max-w-xl">
              <div className="mt-8 flex items-center gap-x-4 text-xs">
                <time dateTime="2020-03-16" className="text-gray-500">
                  Lunch Only (12-3pm)
                </time>
                <span className="relative z-10 rounded-full bg-red-50 px-3 py-1.5 font-medium text-red-600 hover:bg-red-100">
                  Lunch Special
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span className="absolute inset-0" />
                    Hake & Calamari Combo
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  Fried hake fillet, 100g calamari strips, chips and tartare sauce.
                </p>
              </div>
              <div className="mt-4 flex items-center gap-x-4">
                 <span className="text-2xl font-bold text-red-600">R 99.00</span>
                 <span className="text-sm text-gray-500 line-through">R 140.00</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
