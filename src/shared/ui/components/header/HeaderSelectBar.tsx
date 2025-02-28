import { Container } from "@/components/Container/Container";
import s from "./HeaderSelectBar.module.scss";
import LanguageSelector from "@/components/LanguageSelector/LanguageSelector";

function HeaderSelectBar() {
  return (
    <article className={s.wrapper}>
      <Container className={s.container}>
        <LanguageSelector />
      </Container>
    </article>
  );
}

export default HeaderSelectBar;
