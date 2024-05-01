import clsx from 'clsx'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { FaFileDownload } from 'react-icons/fa'
import { GrMysql } from 'react-icons/gr'
import {
  SiCss3,
  SiHtml5,
  SiInsomnia,
  SiJavascript,
  SiLaravel,
  SiPhp,
  SiReact,
  SiSymfony,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// function Article({ article }) {
//   return (
//     <Card as="article">
//       <Card.Title href={`/articles/${article.slug}`}>
//         {article.title}
//       </Card.Title>
//       <Card.Eyebrow as="time" dateTime={article.date} decorate>
//         {formatDate(article.date)}
//       </Card.Eyebrow>
//       <Card.Description>{article.description}</Card.Description>
//       <Card.Cta>Voir l'article</Card.Cta>
//     </Card>
//   )
// }

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="size-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

// function Newsletter() {
//   return (
//     <form
//       action="/thank-you"
//       className="p-6 border rounded-2xl border-zinc-100 dark:border-zinc-700/40"
//     >
//       <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
//         <MailIcon className="flex-none w-6 h-6" />
//         <span className="ml-3">Stay up to date</span>
//       </h2>
//       <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
//         Get notified when I publish something new, and unsubscribe at any time.
//       </p>
//       <div className="flex mt-6">
//         <input
//           type="email"
//           placeholder="Email address"
//           aria-label="Email address"
//           required
//           className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
//         />
//         <Button type="submit" className="flex-none ml-4">
//           Join
//         </Button>
//       </div>
//     </form>
//   )
// }

function Skills() {
  let skills = [
    {
      name: 'HTML',
      Icon: SiHtml5,
    },
    {
      name: 'CSS',
      Icon: SiCss3,
    },
    {
      name: 'PHP',
      Icon: SiPhp,
    },
    {
      name: 'Javascript',
      Icon: SiJavascript,
    },
    {
      name: 'Typescript',
      Icon: SiTypescript,
    },
    {
      name: 'MySQL',
      Icon: GrMysql,
    },
    {
      name: 'Tailwind CSS',
      Icon: SiTailwindcss,
    },
    {
      name: 'Insomnia',
      Icon: SiInsomnia,
    },
    {
      name: 'React',
      Icon: SiReact,
    },
    {
      name: 'Next JS',
      Icon: TbBrandNextjs,
    },
    {
      name: 'Symfony',
      Icon: SiSymfony,
    },
    {
      name: 'Laravel',
      Icon: SiLaravel,
    },
  ]

  return (
    <>
      <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <BriefcaseIcon className="size-6 flex-none" />
          <span className="ml-3">Mes compétences</span>
        </h2>
        <ol className="mt-6 grid grid-cols-4 gap-4 text-center sm:grid-cols-6">
          {skills.map((skill, skillIndex) => (
            <li key={skillIndex} className="flex flex-col items-center gap-2">
              <div className="relative mt-1 flex size-12 items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition hover:scale-125 hover:text-teal-500 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:text-zinc-100 dark:ring-0 dark:hover:text-teal-500">
                <skill.Icon className="size-6" />
              </div>
              <dd className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {skill.name}
              </dd>
            </li>
          ))}
        </ol>
      </div>
      <div className="flex justify-center">
        <Button
          href="/YOHAN-BAECHLE-CV.pdf"
          variant="secondary"
          className="group mt-6"
        >
          Télécharger mon CV
          <FaFileDownload className="size-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
      </div>
    </>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 size-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>Yohan Baechlé - Développeur Web Symfony, Laravel, React</title>
        <meta
          name="description"
          content="I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Développeur Web <br /> Symfony, Laravel et React
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Bienvenue sur mon portfolio numérique. Je me présente : Yohan,
            développeur web spécialisé dans le développement Full Stack. Je vous
            invite à parcourir les différentes sections de mon portfolio pour
            explorer une sélection de mes réalisations antérieures. Si mon
            approche et mes compétences résonnent avec vos besoins, je serais
            ravi d&aposéchanger avec vous sur votre projet à venir et de
            découvrir comment je pourrais y apporter ma contribution.
            <br />
            N&aposhésitez surtout pas à me contacter.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/Yohan-Baechle"
              target="_blank"
              aria-label="Me suivre sur Github"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/yohanbaechle"
              target="_blank"
              aria-label="Me suivre sur Linkedin"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-1">
          {/* <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div> */}
          <div className="space-y-10">
            <Skills />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
