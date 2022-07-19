import { AnnotationIcon, GlobeAltIcon, HeartIcon, LightningBoltIcon, PencilIcon, PhotographIcon, ScaleIcon } from '@heroicons/react/outline'
import { Container } from '@components/Container'

const features = [
    {
      name: 'Fast Service',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: LightningBoltIcon,
    },
    {
      name: 'Knowledgable',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: PencilIcon,
    },
    {
      name: 'Custom Artwork',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: PhotographIcon,
    },
    {
      name: 'Mobile notifications',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: AnnotationIcon,
    },
  ]

export function Hero() {
    return (
    <section
        id="home"
        aria-label="home"
        className="bg-white py-4 sm:py-4"
      >
    
    <div className="py-0.5 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white-100" />
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                    <div className="absolute inset-0">
                    <img
                        className="h-full w-full opacity-60 object-cover"
                        src="https://media.istockphoto.com/photos/selective-focus-photo-of-can-of-blue-paint-on-wooden-shelve-on-the-picture-id1307786537?b=1&k=20&m=1307786537&s=170667a&w=0&h=CpzN4u5Ct5wb_fYWiw2ApKzA5HE7YKESRBfV-j-O5wQ="
                        alt="Screen Printing"
                    />
                    <div className="absolute inset-0 bg-white-700 mix-blend-multiply" />
                    </div>
                    <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                    <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                        <span className="block text-white">Hairy Frog Grafix</span>
                    </h1>
                    <p className="mt-6 max-w-lg mx-auto font-bold text-center text-xl text-white sm:max-w-3xl">
                        Your local screen printing solution
                    </p>
                    <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                        <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                        <a
                            href="#"
                            className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-teal-600 bg-white hover:bg-indigo-50 sm:px-8"
                        >
                            Contact Us
                        </a>
                        <a
                            href="#products"
                            className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-teal-600 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                        >
                            Products
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {features.map((feature) => (
                <div key={feature.name} className="relative">
                    <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-teal-600 text-white">
                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                </div>
                ))}
            </dl>
            </div>
        </div>
        </div>
    
    </section>
    )
}