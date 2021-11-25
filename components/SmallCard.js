import React from 'react';

export default function SmallCard({ Icon, title, slug }) {
  const width = 153
  const height = 200
  return (
    <a className="card-small" href={`/project/${slug}`}>
      <Icon w={width} h={height} />
      <Icon w={153} h={163} />
      <h3>{title}</h3>
    </a>
  );
}
