import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/samuelc99.png",
      name: "Samuel Cristovao",
      role: "Software Engenieer",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-04-01 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifólio. Já está no meu Github e no linkedin... 🚀",
      },
      { type: "link", content: "ryan.design/doctorcare" },
    ],
    publishedAt: new Date("2024-04-01 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
          posts.map(post => {
            return (
            <Post
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />)
          })}
        </main>
      </div>
    </div>
  );
}
