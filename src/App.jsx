import { Routes, Route } from "react-router-dom";
import { createContext, useContext } from "react";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
import New from "./pages/New";
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
  {
    id: 5,
    created_at: "2023-02-17T15:30:00.000Z",
    title: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique, ipsum vel sollicitudin rutrum, elit elit malesuada elit, et dapibus urna magna vel nunc.",
    image_url: null,
    upvotes: 5,
    comments: [
      {
        id: 5,
        created_at: "2023-02-18T10:00:00.000Z",
        content: "Great post! I really enjoyed reading it.",
      },
      {
        id: 6,
        created_at: "2023-02-19T14:30:00.000Z",
        content: "I totally agree with your points. Keep up the good work!",
      },
    ],
  },
  {
    id: 6,
    created_at: "2023-02-16T11:45:00.000Z",
    title: "Pellentesque habitant morbi tristique senectus",
    content:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed euismod ac metus quis rutrum. Ut vel tellus vel nulla hendrerit tristique ac vel turpis.",
    image_url:
      "https://via.placeholder.com/640x480.png/0088cc?text=Placeholder+Image",
    upvotes: 10,
    comments: [
      {
        id: 7,
        created_at: "2023-02-17T09:00:00.000Z",
        content: "I learned a lot from this post. Thanks for sharing!",
      },
      {
        id: 8,
        created_at: "2023-02-18T17:30:00.000Z",
        content: "This is a really well-written article. Keep it up!",
      },
    ],
  },
  {
    id: 7,
    created_at: "2023-02-15T14:20:00.000Z",
    title:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    content:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut convallis elit ut odio semper vestibulum. Sed ut justo et odio convallis fermentum at at purus.",
    image_url: null,
    upvotes: 7,
    comments: [
      {
        id: 9,
        created_at: "2023-02-16T12:30:00.000Z",
        content:
          "This is an interesting topic. Thanks for sharing your thoughts.",
      },
      {
        id: 10,
        created_at: "2023-02-17T11:00:00.000Z",
        content:
          "I never thought about this issue before. You've given me a lot to think about.",
      },
    ],
  },
];

export const PostContext = createContext();

function App() {
  return (
    <PostContext.Provider value={dummyPosts}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home posts={dummyPosts} />} />
          <Route path="/post/:id" element={<Detail />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/new" element={<New />} />
        </Routes>
      </div>
    </PostContext.Provider>
  );
}

export default App;
