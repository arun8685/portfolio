import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://namanbansal02.me/"),

	title: {
		template: "%s | Arun Sharma",
		default: "Arun Sharma",
	},
	authors: {
		name: "Arun Sharma",
	},

	description:
		"Data enthusiast with a proven ability to identify business challenges and derive actionable insights from real-world data. Skilled in predictive modeling, machine learning, and statistical analysis using Python and SQL Adept at working in agile environments, delivering data-driven solutions that optimize decision-making and drive business success. Passionate about continuous learning and contributing to innovative, high-impact projects.",
	openGraph: {
		title: "Arun Sharma",
		description:
    "Data enthusiast with a proven ability to identify business challenges and derive actionable insights from real-world data. Skilled in predictive modeling, machine learning, and statistical analysis using Python and SQL Adept at working in agile environments, delivering data-driven solutions that optimize decision-making and drive business success. Passionate about continuous learning and contributing to innovative, high-impact projects.",
		url: "https://namanbansal02.me/",
		siteName: "Arun Sharma",
		images: "https://mir-s3-cdn-cf.behance.net/projects/404/6a438557657667.Y3JvcCwxOTcyLDE1NDQsMCw5Mg.png",
		type: "website",
	},
	keywords: ["Arun Sharma", "Arun Sharma portfolio", "nextjs portfolio" , "Arun Sharma chitkara university"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
