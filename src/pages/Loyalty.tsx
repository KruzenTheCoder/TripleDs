import { CheckIcon } from '@heroicons/react/20/solid';

const tiers = [
  {
    name: 'Street Fan',
    id: 'tier-fan',
    href: '#',
    priceMonthly: 'Free',
    description: 'Start earning points with every order.',
    features: ['Earn 1 point per R10 spent', 'Birthday treat', 'Monthly newsletter'],
    mostPopular: false,
  },
  {
    name: 'Spice Master',
    id: 'tier-master',
    href: '#',
    priceMonthly: 'Spend R2000+',
    description: 'For the true Durban curry connoisseurs.',
    features: [
      'Earn 1.5 points per R10 spent',
      'Free delivery on orders over R300',
      'Priority support',
      'Exclusive tasting events',
    ],
    mostPopular: true,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Loyalty() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-red-600">Rewards Program</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Eat More, Earn More
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Join the Triple D's family and get rewarded for your love of street food. 
          Sign up today and get 50 bonus points!
        </p>
        
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-8 xl:gap-x-12">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'ring-2 ring-red-600' : 'ring-1 ring-gray-200',
                'rounded-3xl p-8 xl:p-10'
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={tier.id}
                  className={classNames(
                    tier.mostPopular ? 'text-red-600' : 'text-gray-900',
                    'text-lg font-semibold leading-8'
                  )}
                >
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-red-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-red-600">
                    Most popular
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.priceMonthly}</span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-red-600 text-white shadow-sm hover:bg-red-500'
                    : 'text-red-600 ring-1 ring-inset ring-red-200 hover:ring-red-300',
                  'mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'
                )}
              >
                Join Now
              </a>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-red-600" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
