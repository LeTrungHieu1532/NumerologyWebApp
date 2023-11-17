import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Script from "next/script";
import { theme } from "../Utils/themes";

export default function RootLayout({ children }: { children: ReactNode }) {
   const id = Date.now().toString();

   return (
      <html lang="en">
         <body>
            <ChakraProvider theme={theme}>
               <Script
                  id={id}
                  strategy="lazyOnload"
                  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
               />

               <Script id={id} strategy="lazyOnload">
                  {`
                     window.dataLayer = window.dataLayer || [];
                     function gtag(){dataLayer.push(arguments);}
                     gtag('js', new Date());
                     gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                     page_path: window.location.pathname,
                     });
                  `}
               </Script>
               {children}
            </ChakraProvider>
         </body>
      </html>
   );
}