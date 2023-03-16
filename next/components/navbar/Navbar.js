import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <div>
        <nav>
          <div>
            <img src="" alt="" />
          </div>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/home/contact">Contact</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar