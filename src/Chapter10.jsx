import styled from 'styled-components'

const PrimaryButton = styled.button`
   color: ${(props) => (props.primary ? 'blue' : 'red')};
   font-size: ${(props) => props.size || '10px'};
`

function Chapter10() {
   return (
      <>
         <PrimaryButton>버튼</PrimaryButton>
         <PrimaryButton primary size="20px">
            버튼
         </PrimaryButton>
      </>
   )
}

export default Chapter10
