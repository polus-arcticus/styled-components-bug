import Icon from '@mdi/react'
import styled from 'styled-components'
import { mdiBugOutline  } from '@mdi/js';

const StyledIcon = styled(Icon)`
  width: 100vw;
  height: 100px;
  margin: 0 auto;
`
function App() {
  return (
    <div className="App">
      <StyledIcon
        path={mdiBugOutline} />
    </div>
  )
}

export default App
