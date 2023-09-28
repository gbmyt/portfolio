import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href, repository, contributorsHref, contributors }) => (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <div
      className={`${
        imgSrc && 'h-full'
      }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      {imgSrc && imgSrc.substr(imgSrc.length - 4) === '.gif' && href ? (
        <Link href={href} aria-label={`Link to ${title}`}>
          <Image
            unoptimized={true}
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        </Link>
      ) : imgSrc && href ? (
        <Link href={href} aria-label={`Link to ${title}`}>
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        </Link>
      ) : (
        <Image
          alt={title}
          src={imgSrc}
          className="object-cover object-center md:h-36 lg:h-48"
          width={544}
          height={306}
        />
      )}
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        {href && repository ? (
          <>
            <div className="py-1">
              <Link
                href={href}
                className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label={`Link to ${title}`}
              >
                Visit the Site &rarr;
              </Link>
            </div>
            <Link
              href={repository}
              className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label={`Link to ${title}`}
            >
              Check out the Repo &rarr;
            </Link>
          </>
        ) : repository ? (
          <Link
            href={repository}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}'s Github Repository`}
          >
            Check out the Repo &rarr;
          </Link>
        ) : href ? (
          <div className="py-1">
            <Link
              href={href}
              className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label={`Link to ${title}`}
            >
              Visit the Site &rarr;
            </Link>
          </div>
        ) : (
          <p
            className="text-base font-medium leading-6 text-gray-600"
            aria-label={`${title} Coming Soon`}
          >
            Coming Soon
          </p>
        )}
        {contributors && contributorsHref && (
          <div className="py-1">
            <Link
              href={contributorsHref}
              className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label={`Link to a list of ${title}'s Contributors`}
            >
              Contributors &rarr;
            </Link>
          </div>
        )}
      </div>
    </div>
  </div>
)

export default Card
