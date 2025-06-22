export const metadata = {
  title: 'Piyapp – Social Feed',
  description: 'A creative social app built with 💖 by Piya',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'sans-serif', backgroundColor: '#fef9ff' }}>
        {children}
        <footer
          style={{
            marginTop: '3rem',
            padding: '1rem',
            textAlign: 'center',
            background: '#fdf2f8',
            color: '#6b21a8',
            fontSize: '0.9rem',
            borderTop: '1px solid #f3e8ff',
          }}
        >
          Made with 🤍 by Piya 🌼
        </footer>
      </body>
    </html>
  );
}