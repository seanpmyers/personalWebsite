import * as React from 'react';

import {

} from '../../Components'

const createTitle = (title: string) => {
  const text =
    <h1 className="blog-title">
      {title}
    </h1>
  return (
    text
  );
}

const createSubtitle = (title: string) => {
  const element =
    <h2 className="blog-subtitle">
      {title}
    </h2>
  return (
    element
  );
}

const createDate = (date: string, updated: string) => {
  const element =
    <h2 className="blog-date">
      Posted: {date}
      <br />
      Updated: {updated}
    </h2>
  return (
    element
  );
}

const createParagraph = (content: string) => {
  const element =
    <p className="blog-paragraph">
      {content}
    </p>
  return (
    element
  );
}

const createLink = (content: string, url: string) => {
  const element =
  <a href={url} id="blog-link" target="_blank" >
    {content}
  </a>
  return (
    element
  );
}



export {
  createDate,
  createLink,
  createParagraph,
  createSubtitle,
  createTitle
};