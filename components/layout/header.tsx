import Link from 'next/link'
import Image from 'next/image'
import { config } from '../../lib/config'

const Header = () => {
  return (
    <div className="flex flex-wrap w-full p-10 drop-shadow-md z-10 bg-accent-1 text-white bg-opacity-50 text-center">
      <Link href="/" className="basis-full pb-5">
        <div className="align-left">
          <Image
            src="/assets/logo.png"
            width={50}
            height={120}
            alt="Blog Logo"
            className="drop-shadow-md inline"
          />
          <h1 className="inline text-3xl align-middle font-brand">
            {config.title}
          </h1>
        </div>
      </Link>

      <nav className="basis-full sm:float-right">
        <Link href="/">
          Home
        </Link>
      </nav>
    </div>
  )
}

export default Header
