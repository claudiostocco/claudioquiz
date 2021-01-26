import styled from 'styled-components'

function Quiz() {
    const H1 = styled.h1`
        color: ${({theme}) => theme.colors.primary};
    `

    return (
        <H1>Teste</H1>
    )
}

export default Quiz