import { ChakraProvider } from '@chakra-ui/react'
import { Input, Button } from '@chakra-ui/react'
// import { Container } from '@chakra-ui/react'
import { StyledContainer} from '../components/Container'
import { Heading, extendTheme, FormControl } from '@chakra-ui/react'
import { useState } from 'react'

const theme = extendTheme({
    styles: {
        global:{
            'html, body': {
                backgroundImage: "url('https://images.hdqwalls.com/wallpapers/clash-royale-clan-wars-5k-7j.jpg')",
                fontFamily: 'Roboto, sans-serif',
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                backgroundPosition: 'center',
            }
        }
    }
})

function App() {
    const [tag, setTag] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`/api/profile/${encodeURIComponent(tag)}`)
        const data = await response.json()
        console.log(data)
    }
  return (
    <ChakraProvider theme={theme}>
        <StyledContainer>
            <Heading paddingBottom="25">Clash Royale Viewer</Heading>
            <form onSubmit={handleSubmit}>
            <FormControl>
            <Input value={tag} onChange={e=>setTag(e.target.value)} placeholder="Search" />
            </FormControl>
            </form>
        </StyledContainer>
    </ChakraProvider>
  )
}

export default App