import Link from "next/link";
import React, { useEffect, useState } from "react";

function Footer() {
  const [githubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });

  useEffect(() => {
    fetch("https://api.github.com/repos/koolkishan/chat-app-react-nodejs")
      .then((response) => response.json())
      .then((json) => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <footer>
      <Link
        href="https://github.com/ompo-dev/"
        target="_blank"
        className="footer-link"
      >
        <span className="footer-info">Feito por Maicon-ompo.</span>
      </Link>
    </footer>
  );
}

export default Footer;
