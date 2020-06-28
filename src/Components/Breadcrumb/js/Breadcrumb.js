import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTv, faStream } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Breadcrumb({ level }) {
  const breadcrumb = [
    {
      level: 1,
      path: '/',
      name: 'Home',
      icon: faHome,
    },
    {
      level: 2,
      path: '/dashboard',
      name: 'Dashboard',
      icon: faTv,
    },
    {
      level: 3,
      path: '/deck-list-manager',
      name: 'Decks',
      icon: faStream,
    },
  ];

  return (
    <nav className='flex sm:justify-center border-b border-indigo-700'>
      <ul className='flex items-center justify-center text-indigo-700 w-full sm:w-1/2 lg:w-1/3'>
        {breadcrumb
          .filter((crumb) => crumb.level <= level)
          .map((crumb) => {
            return (
              <li key={crumb.level} className='px-6 py-3 sm:px-2 sm:py-1'>
                <Link to={crumb.path} className='flex items-center'>
                  <FontAwesomeIcon icon={crumb.icon} />
                  <span className='hidden ml-1 sm:inline'>{crumb.name}</span>
                </Link>
              </li>
            );
          })}
      </ul>
    </nav>
  );
}
