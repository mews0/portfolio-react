import React from 'react';

function Nav() {
  const tabs = ['About', 'Projects', 'Contact']; // add resume in future
  return (
    <nav>
      <ul>
        {tabs.map(tab => (
          <li key={tab}>
            <a
              href={'#' + tab.toLowerCase()}
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;