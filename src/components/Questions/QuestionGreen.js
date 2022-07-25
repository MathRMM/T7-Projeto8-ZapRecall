import styled from 'styled-components'

export default function QuestionGreen({num}) {

    return (
        <Question className="boxQuestion">
          <div>Pergunta {num}</div>
          <ion-icon name="checkmark-circle-sharp"></ion-icon>
        </Question>
    )
}

const Question = styled.div`
text-decoration-line: line-through;
color: #2FBE34;
`;