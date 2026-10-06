import { LandingPage } from "@/components/landing-page";
import { copy, locales, type Locale } from "@/lib/i18n";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeValue } = await params;
  const locale = locales.includes(localeValue as Locale) ? (localeValue as Locale) : "ru";
  const localized = copy[locale];
  const title = `TOO TAS — ${localized.hero.title} ${localized.hero.accent}`;

  return {
    title,
    description: localized.hero.text,
    alternates: {
      languages: { ru: "/ru/", kk: "/kk/", zh: "/zh/" },
    },
    openGraph: {
      title,
      description: localized.hero.text,
      locale: locale === "ru" ? "ru_KZ" : locale === "kk" ? "kk_KZ" : "zh_CN",
    },
  };
}

export default async function LocalizedPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return <LandingPage locale={locale as Locale} />;
}
