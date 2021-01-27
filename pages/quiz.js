import styled from 'styled-components'

import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import Footer from '../src/components/Footer';
import QuizContainer from '../src/components/QuizContainer';

function Quiz() {
    // const name = window.location.search.split('=')[1]
    const name = 'Claudio'

    return (
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>The legend of zelda</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Seja bem vindo ao quiz {name}</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
    )
}

export default Quiz