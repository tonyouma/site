import React from 'react'
import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head/>
                <head>
                    <style>
                        <img src="/loader.gif" alt="" />
                    </style>
                </head>
                <body>
                <div id={'globalLoader'} className="flex items-center justify-center w-screen h-screen">
                    <div className="loader">
                        <img src="/assets/logo.svg" alt="DIL LOGO" />
                    </div>
                </div>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument