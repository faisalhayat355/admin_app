"use client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Inter } from 'next/font/google';
import { theme } from "./themes/com-light";
import LayoutComponent from "./component/common/layout";
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} >
        {/* {children} */}
        <ThemeProvider theme={theme}>
              <CssBaseline />
                <main>
                  <>
                    <LayoutComponent >{children}</LayoutComponent>
                  </>
                </main>
            </ThemeProvider>
        </body>
    </html>
  )
}
