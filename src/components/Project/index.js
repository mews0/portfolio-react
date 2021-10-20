import React from 'react';

const project = [
  { "link":"https://github.com/mews0/e-commerce", "title":"E-Commerce Back End" },
  { "link":"https://github.com/mews0/social-network-api", "title":"Social Network API" },
  { "link":"https://github.com/mews0/employee-tracker", "title":"Employee Tracker" },
  { "link": "https://mews0-note-taker.herokuapp.com/", "title":"Note Taker" },
  { "link":"https://mews0.github.io/wi-state-parks/", "title":"WI State Parks App" },
  { "link":"http://dry-wildwood-65158.herokuapp.com/", "title":"Book Tracker" }
];

function Project () {
  return (
    <>
      <section id="work">
        { project.map(x => <><a className="work" href={x.link}>{x.title}</a><br/></>) }
      </section>
    </>
  );
}

export default Project;