
import React, { useEffect, useState } from 'react';

const RepoStats = ({ repo }) => {
  const [stats, setStats] = useState({ stars: 0, forks: 0, issues: 0 });

  useEffect(() => {
    fetch(`https://api.github.com/repos/${repo}`)
      .then(response => response.json())
      .then(data => {
        setStats({
          stars: data.stargazers_count,
          forks: data.forks_count,
          issues: data.open_issues_count
        });
      })
      .catch(console.error);
  }, [repo]);

  return (
    <p>⭐ Stars: {stats.stars}, 🍴 Forks: {stats.forks}, 📋 Issues: {stats.issues} </p>
  );
};

export default RepoStats;
