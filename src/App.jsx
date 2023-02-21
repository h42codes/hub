import { useState } from "react";
import Header from "./components/Header";
import Feed from "./components/Feed";
import "./App.css";

const dummyPosts = [
  {
    id: 1,
    created_at: "2023-02-21T12:34:56.000Z",
    title: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed arcu a nulla commodo molestie. Nulla fermentum convallis est, eu vestibulum lorem varius eu.",
    image_url:
      "https://via.placeholder.com/640x480.png/0088cc?text=Placeholder+Image",
    upvotes: 10,
    comments: [
      {
        id: 1,
        created_at: "2023-02-21T13:01:23.000Z",
        content: "Great post, thanks for sharing!",
      },
      {
        id: 2,
        created_at: "2023-02-21T13:05:46.000Z",
        content: "I really enjoyed reading this. Keep up the good work!",
      },
    ],
  },
  {
    id: 2,
    created_at: "2023-02-20T23:45:00.000Z",
    title: "Duis aute irure dolor in reprehenderit",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image_url:
      "https://via.placeholder.com/640x480.png/0088cc?text=Placeholder+Image",
    upvotes: 5,
    comments: [
      {
        id: 3,
        created_at: "2023-02-21T09:30:15.000Z",
        content: "Interesting perspective. I'd love to hear more about this.",
      },
    ],
  },
  {
    id: 3,
    created_at: "2023-02-19T18:12:34.000Z",
    title: "Sed ut perspiciatis unde omnis iste natus",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    image_url:
      "https://via.placeholder.com/640x480.png/0088cc?text=Placeholder+Image",
    upvotes: 8,
    comments: [],
  },
  {
    id: 4,
    created_at: "2023-02-18T09:15:00.000Z",
    title: "Nulla quis lorem ut libero malesuada feugiat",
    content:
      "Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh. Proin eget tortor risus.",
    image_url:
      "https://via.placeholder.com/640x480.png/0088cc?text=Placeholder+Image",
    upvotes: 3,
    comments: [
      {
        id: 4,
        created_at: "2023-02-18T13:00:00.000Z",
        content: "Thanks for sharing your thoughts on this topic.",
      },
    ],
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <Feed posts={dummyPosts} />
    </div>
  );
}

export default App;
