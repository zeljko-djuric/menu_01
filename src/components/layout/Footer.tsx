import { Link } from 'react-router-dom';
import { APP_NAME } from '@/constants/constants';

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-8">
      <div className="w-full mx-auto">
        <div className="w-full max-w-screen-lg md:flex md:justify-between p-4 py-6 lg:py-8 mx-auto">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center text-primary">
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                {APP_NAME}
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-primary uppercase">
                Zapratite nas
              </h2>
              <ul className="text-gray-500">
                <li>
                  <a href="https://www.instagram.com/picerija_mozzart/" className="hover:underline">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-primary uppercase">
                Kontakt
              </h2>
              <ul className="text-gray-500">
                <li className="mb-4">
                050/211-976
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-2 border-gray-200" />
        <div className="p-2 mx-auto">
          <p className="text-sm text-gray-500 text-center">
            <Link to="/" className="hover:underline">
              {APP_NAME}
            </Link>
            {' Since 2005 '}
          </p>
        </div>
      </div>
    </footer>
  );
}
