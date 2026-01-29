export default function Footer() {
  return (
    <footer style={styles.footer}>
      © 2026 <a href="https://nederlearn.nl">NederLearn.nl</a>
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: "center",
    padding: "24px",
    opacity: 0.6,
  },
};
