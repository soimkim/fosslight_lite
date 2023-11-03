'use client';

import Logo from '@/public/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Modal from './modal';

export default function TopBar() {
  const [isProfileShown, setIsProfileShown] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center h-12 px-4">
        <Link className="relative w-6 h-6 no-tap-highlight" href="/">
          <Image src={Logo} fill sizes="48px" alt="fosslight" />
        </Link>
        <Link className="text-xl font-semibold no-tap-highlight" href="/">
          FOSSLight Hub&nbsp;
          <span className="text-lg font-light">Lite</span>
        </Link>
        <i
          className="text-lg cursor-pointer no-tap-highlight fa-solid fa-user"
          onClick={() => setIsProfileShown(true)}
        />
      </div>
      <Modal show={isProfileShown} onHide={() => setIsProfileShown(false)}>
        <div className="flex justify-center items-center gap-x-2 pb-2 mb-2 border-b border-b-semiblack font-semibold">
          <i className="text-xl fa-solid fa-user" />
          Profile Information
        </div>
        <div className="flex flex-col gap-y-1 text-sm">
          <div className="flex gap-x-4 text-charcoal">
            <div className="font-bold">Name</div>
            <div className="opacity-80">최덕경</div>
          </div>
          <div className="flex gap-x-4 text-charcoal">
            <div className="font-bold">Email</div>
            <div className="opacity-80">hjcdg197@gmail.com</div>
          </div>
        </div>
      </Modal>
    </>
  );
}
