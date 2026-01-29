export default function Footer() {
  return (
    <footer style={foot}>
      <a href="https://nederlearn.nl" style={link}>
        © 2026 NederLearn.nl
      </a>
    </footer>
  );
}

const foot = {
  padding: "28px 16px",
  textAlign: "center",
  opacity: 0.7,
};

const link = {
  color: "white",
  textDecoration: "none",
};
