import  {Container} from '@chakra-ui/react'
import styled from '@emotion/styled'

const StyledContainer = styled(Container)({ 
    backgroundColor: '#fff',
    borderRadius: '0.5rem',
    padding: '1rem',
    boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.1)',
    margin: '1rem auto',
    maxWidth: '50rem',
    minWidth: '30rem', 
})

export { StyledContainer }