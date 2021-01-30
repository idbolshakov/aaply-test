import CardsListTemplate from "./items/CardsList";
import GalleryTemplate from "./items/Gallery";
import MediaPlayerTemplate from "./items/MediaPlayer";
import ProfileTemplate from "./items/Profile";

import styles from "./Library.module.css";

const templates = [
  { item: <CardsListTemplate />, title: "cards list template" },
  { item: <GalleryTemplate />, title: "gallery template" },
  { item: <MediaPlayerTemplate />, title: "media player template" },
  { item: <ProfileTemplate />, title: "profile template" },
];

function Library({ handleSelectTemplate }) {
  return (
    <section>
      <h2 className={styles.title}>Templates library:</h2>

      <ul className={styles.templates}>
        {templates.map((template) => (
          <li
            key={template.title}
            onClick={() => handleSelectTemplate(template)}
            title="add this item"
          >
            <h3>{template.title}</h3>

            {template.item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Library;
