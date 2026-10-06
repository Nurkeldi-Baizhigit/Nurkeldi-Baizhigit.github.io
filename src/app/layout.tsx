import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TOO TAS — поставка материалов и логистика",
  description:
    "Поставка инертных материалов, товарного бетона и асфальта. Собственный парк техники, работа 24/7 по Астане и Акмолинской области.",
  openGraph: {
    title: "TOO TAS — поставка материалов и логистика",
    description:
      "Материалы и перевозки для строительных компаний Астаны и Акмолинской области.",
    type: "website",
    locale: "ru_KZ",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
