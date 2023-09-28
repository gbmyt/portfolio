'use client'
import { useEffect, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'
import projectsData from '@/data/projectsData'
import Link from './Link'

type projectsDataType =
  | {
      title: string
      name: string
      description: string
      imgSrc: string
      repository: string
      contributorsHref: string
      contributors: {
        [key: string]: { github: string; role: string }
      }
      href: string
    }
  | unknown

function Contributors() {
  const [contributors, setContributors] = useState<projectsDataType>({})
  const pathname = usePathname()
  const projectName = useMemo(() => /^\/projects\/(.+)\/contributors$/i, [])
  const match: string | null = pathname.match(projectName)[1]

  useEffect(() => {
    for (const i in projectsData) {
      if (projectsData[i].name && projectName && projectsData[i].name === match) {
        setContributors(projectsData[i].contributors)
      }
    }
  }, [match, projectName])

  return (
    <>
      <h1 className="mb-3 text-2xl font-bold leading-8 tracking-tight">Project Contributors</h1>
      {contributors &&
        Object.keys(contributors).map((c) => (
          <div key={c}>
            <Link
              className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label={`Link to ${c}'s Github Profile`}
              href={`${contributors[c].github}`}
            >
              {c}
            </Link>{' '}
            {contributors[c].role && ` | ${contributors[c].role}`}
          </div>
        ))}
    </>
  )
}
export default Contributors
