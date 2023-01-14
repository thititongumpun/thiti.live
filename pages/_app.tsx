import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="Thiti Tongumpun"
        titleTemplate="Thiti Tongumpun"
        defaultTitle="Thiti Tongumpun"
        description="A software developer, who loves to design and develop beautiful websites. I have been coding for over a year now. One of my hobbies is writing, I love to document my journey by writing blog posts and also teach others through them."
        canonical="https://thiti.live/"
        openGraph={{
          url: "https://thiti.live/",
          title: "Thiti Tongumpun",
          description:
            "A full stack web developer, who loves to design and develop beautiful websites. I have been coding for over a year now. One of my hobbies is writing, I love to document my journey by writing blog posts and also teach others through them.",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
