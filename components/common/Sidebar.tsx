import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/orders">Orders</Link>
          </li>
          <li>
            <Link href="/statistics">Statistics</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
