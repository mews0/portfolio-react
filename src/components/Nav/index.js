import React from 'react';

function Nav(props) {
  const tabs = ['About', 'Projects', 'Contact']; // add resume in future
  return (
    <nav>
      <ul>
        {tabs.map(tab => (
          <li key={tab}>
            <a
              href={'#' + tab.toLowerCase()}
              // whenever a tab is clicked on, the current page is set through the handlePageChange props
              onClick={() => props.handlePageChange(tab)}
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