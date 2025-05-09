import React from "react";
import Image from "next/image";
import { useConfig } from "nextra-theme-docs";

const config = {
  logo: (
    <Image src="/hatchet_logo.png" alt="Hatchet logo" width={120} height={35} />
  ),
  head: () => {
    return (
      <>
        <title>Hatchet Docs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
      </>
    );
  },
  primaryHue: {
    dark: 210,
    light: 210
  },
  primarySaturation: {
    dark: 60,
    light: 60
  },
  logoLink: "https://github.com/hatchet-dev/hatchet",
  project: {
    link: "https://github.com/hatchet-dev/hatchet",
  },
  chat: {
    link: "https://hatchet.run/discord",
  },
  docsRepositoryBase:
    "https://github.com/hatchet-dev/hatchet/blob/main/frontend/docs",
  feedback: {
    labels: "Feedback",
    useLink: (...args: unknown[]) =>
      `https://github.com/hatchet-dev/hatchet/issues/new`,
  },
  footer: {
    content: null,
  },
  sidebar: {
    defaultMenuCollapseLevel: 2,
    toggleButton: true,
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: "dark",
    forcedTheme: "dark"
  },
  themeSwitch: {
    useOptions() {
      return {
        dark: "Dark",
        light: "Light"
      }
    }
  }
};

export default config;
