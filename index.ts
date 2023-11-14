import Link from 'next/link';
import App from 'next/app';
import useRouter from 'next/navigation';

import React from 'react';
import 'react-dom';
import 'nextjs';

import Home from './src/pages/Home';
import About from './src/pages/About';
import Rankings from './src/pages/Rankings';
import Techniques from './src/pages/Techniques';
import ContactUs from './src/pages/ContactUs';

const BJJRookieApp = () => {
  const router = useRouter();

  return (
    <nav>
    <Link href="/">
      <a>Home</a>
    </Link>
    </nav>
  );
};

export default BJJRookieApp;
