import {StyledContainer} from '../../components/Container'
import {Heading} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

const getPlayerInfo = async (tag) => {
    const response = await fetch(`/api/profile/${encodeURIComponent(tag)}`)
    const data = await response.json()
    return data
}

function profile() {
  const router = useRouter()
    const [data, setData] = useState({})
    useEffect(() => {
        getPlayerInfo(router.query.tag).then(data => setData(data))
    }, [router.query])
  return (
    <StyledContainer>
        <Heading paddingBottom="25">Profile Info</Heading>  
        {
          JSON.stringify(data, null, 2)
        }
    </StyledContainer>
  );
}

export default profile;