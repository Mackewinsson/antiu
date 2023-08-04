import type { AppProps } from "next/app";
import StyledComponentsRegistry from "./lib/registry";
import { ClerkProvider } from "@clerk/nextjs";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledComponentsRegistry>
      <ClerkProvider {...pageProps}>
        <Component {...pageProps} />
      </ClerkProvider>
    </StyledComponentsRegistry>
  );
}
