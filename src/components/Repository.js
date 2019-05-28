import React from 'react';
import Star from '../assets/star.svg';

const Repository = ({ repo }) => (
  <>
    <h3>
      <a
        href={`https://github.com${repo.resourcePath}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {repo.name}
      </a>
      <div style={{ display: `inline-flex`, color: `#586069` }}>
        <Star />
        {repo.stargazers.totalCount}
      </div>
    </h3>
    <p style={{ color: `#586069` }}>
      {repo.description && repo.description}
      <br />
      <a href={repo.homepageUrl}>{repo.homepageUrl}</a>
      <div
        style={{
          borderTop: `1px solid #cccccc`,
          marginTop: `8px`,
          padding: `8px`,
        }}
      />
    </p>
  </>
);

export default Repository;
