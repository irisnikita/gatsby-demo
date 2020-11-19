import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: string
        boxShadow: string,
        size: {
            header: {
                height: string
            }
        },
        colors: {
            backgroundWhite?: string,
            backgroundGrey?: string
            main?: string
            secondary?: string,
            textWhite?: string
        }
    }
}

declaration