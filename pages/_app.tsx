import "../styles/globals.css"
import type { AppProps } from "next/app"
import type { ReactElement, ReactNode } from "react"
import type { NextPage } from "next"

// Font Awesome
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; 

export type NextPageWithLayout<T = {}> = NextPage<T> & {
	getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page) => page)
	return getLayout(<Component {...pageProps}/>)
}

export default MyApp
