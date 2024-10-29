import Layout from "@/components/layout/Layout";
import "./globals.css";
import "./grid.css";
import "./responsive.css";
export const metadata = {
  title: " IT App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
