import styled from 'styled-components'

export default function QuestionRed({ num }) {
  return (
    <Question className="boxQuestion">
      <div>Pergunta {num}</div>
      <ion-icon name="help-circle-sharp"></ion-icon>
    </Question>
  )
}

const Question = styled.div`
text-decoration-line: line-through;
color: #FF3030;
`;