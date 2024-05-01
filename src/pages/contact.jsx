import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api'
import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'
import { useMemo } from 'react'
import { Triangle } from 'react-loader-spinner'
import { toast } from 'sonner'
import { Button } from '@/components/Button'

export default function Contact() {
  const libraries = useMemo(() => ['places'], [])
  const mapCenter = useMemo(() => ({ lat: 48.678965, lng: 5.897432 }), [])

  const mapOptions = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: true,
    }),
    []
  )

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
    libraries: libraries,
  })

  if (!isLoaded) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Triangle
          visible={true}
          height="80"
          width="80"
          color="#15B7A6"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    )
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = {
      firstName: event.target['first-name'].value.trim(),
      lastName: event.target['last-name'].value.trim(),
      email: event.target.email.value.trim(),
      phoneNumber: event.target['phone-number'].value,
      message: event.target.message.value.trim(),
    }

    if (!formData.firstName) {
      toast.error('Le prénom est requis.')
      return
    }
    if (!formData.lastName) {
      toast.error('Le nom est requis.')
      return
    }
    if (!formData.email) {
      toast.error("L'email est requis.")
      return
    }
    if (!formData.message) {
      toast.error('Le message est requis.')
      return
    }

    const sendFormData = async () => {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du message.")
      }

      event.target.reset()

      return await response.json()
    }

    toast.promise(sendFormData(), {
      loading: 'Envoi en cours...',
      success: 'Message envoyé avec succès !',
      error: "Erreur lors de l'envoi du message.",
    })
  }


  return (
    <>
      <Head>
        <title>Me contacter - Yohan Baechlé</title>
        <meta
          name="description"
          content="Things I’ve made trying to put my dent in the universe."
        />
      </Head>
      <SimpleLayout
        title="Me contacter."
        intro="Vous souhaitez échanger des idées sur votre prochain projet ? Je suis là pour vous aider. Vous pouvez me joindre facilement en utilisant le formulaire de contact ci-dessous, ou bien en m'envoyant un e-mail à [votre adresse e-mail]. Vous pouvez également me contacter directement aux coordonnées indiquées ci-dessous. Je m'efforcerai de vous répondre dans les plus brefs délais."
      >
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 lg:static lg:px-8 lg:py-12">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <dl className="space-y-4 text-base leading-7 text-gray-600">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Adresse</span>
                    <BuildingOffice2Icon
                      className="h-7 w-6 text-zinc-800 dark:text-zinc-200"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd className="text-zinc-800 dark:text-zinc-200">
                    7 rue du Moulin Saintin
                    <br />
                    54200 Toul
                  </dd>
                </div>
                <div className="group flex gap-x-4 text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500">
                  <dt className="flex-none">
                    <span className="sr-only">Téléphone</span>
                    <PhoneIcon className="h-7 w-6" aria-hidden="true" />
                  </dt>
                  <dd>
                    <a href="tel:+33645366918">+33 (0)6 45 36 69 18</a>
                  </dd>
                </div>

                <div className="flex gap-x-4 text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon className="h-7 w-6" aria-hidden="true" />
                  </dt>
                  <dd>
                    <a href="mailto:baechle.yohan@gmail.com">
                      baechle.yohan@gmail.com
                    </a>
                  </dd>
                </div>
              </dl>
              <div className="mt-4 rounded-md">
                <GoogleMap
                  options={mapOptions}
                  zoom={14}
                  center={mapCenter}
                  mapTypeId={google.maps.MapTypeId.ROADMAP}
                  mapContainerStyle={{ width: '100%', height: '280px' }}
                >
                  <MarkerF position={mapCenter} />
                </GoogleMap>
              </div>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-12"
          >
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-zinc-800 dark:text-zinc-100"
                  >
                    Prénom <sup>*</sup>
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-zinc-800 dark:text-zinc-100"
                  >
                    Nom <sup>*</sup>
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-zinc-800 dark:text-zinc-100"
                  >
                    Email <sup>*</sup>
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-semibold leading-6 text-zinc-800 dark:text-zinc-100"
                  >
                    Téléphone
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name="phone-number"
                      id="phone-number"
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-zinc-800 dark:text-zinc-100"
                  >
                    Message <sup>*</sup>
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <Button
                  variant="primary"
                  className="w-full sm:w-auto"
                  type="submit"
                >
                  Envoyer
                </Button>
              </div>
            </div>
          </form>
        </div>
      </SimpleLayout>
    </>
  )
}
