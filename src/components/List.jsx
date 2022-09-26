import React from "react";

const list = [
  {
    title: "React",
    url: "https://reactjs.org",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectId: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectId: 1,
  },
];

export default function List() {
  return (
    <ul>
      {list.map((item) => {
        return (
          <li key={item.objectId}>
            <span>
              <a href={item.url} target="#blank">
                {item.title}
              </a>
            </span>
            <br />
            <span>
              URL:
              <a href={item.url} target="#blank">
                {item.url}
              </a>
            </span>
            <br />
            <span>Author: {item.author}</span>
            <br />
            <span>Number of comments: {item.num_comments}</span>
            <br />
            <span>Number of points: {item.points}</span>
            <br />
          </li>
        );
      })}{" "}
    </ul>
  );
}
