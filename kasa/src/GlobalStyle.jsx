import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: Monsterrat, sans-serif;
    }
`

function GlobalStyle() {

    return <StyledGlobalStyle />
}

export default GlobalStyle