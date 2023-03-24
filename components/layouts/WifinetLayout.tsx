import Head from 'next/head'
import React, { FC } from 'react'

interface Props {
    title: string;
    description: string;
    imageFullUrl?: string;
    children: React.ReactNode;
}


export const WifinetLayout: FC<Props> = ({ children, title, description, imageFullUrl }) => {
    return (
        <>
            <Head>
                <title>{title}</title>

                <meta name="description" content={description} />

                <meta name="og:title" content={title} />
                <meta name="og:description" content={description} />

                {
                    imageFullUrl && (
                        <meta name="og:image" content={imageFullUrl} />
                    )
                }
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <nav>
                {/* TODO: Navbar */}
            </nav>

            {/* SideMenu */}

            <main
                style={{
                    margin: '80px auto',
                    maxWidth: '1440px',
                    padding: '0px 30px'
                }}
            >
                {children}
            </main>


            <footer>
                {/* TODO mi custom footer */}
            </footer>

        </>
    )
}
