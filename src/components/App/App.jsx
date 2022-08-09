import React, {useEffect, useState} from 'react'
import Checkbox from '../../shared/CheckBox/Checkbox'
import LineChart from '../../shared/LineChart/LineChart'
import AppContainer from '../AppContainer/AppContainer'
import AppHeader from '../AppHeader/AppHeader'

import { Container, Wrapper } from './App.styles'



function App(){
  const [lettuce, setLettuce ] = useState()
  const [rice, setRice ] = useState()
  const [apple, setApple ] = useState()
  const [healthy, setHealthy] = useState(20)

    useEffect(() => {
      setTimeout(function (){
        setHealthy(100)
      }, 5000)
    }, [])


    return <Wrapper>
       <Container>
            <AppHeader/>
            <AppContainer
              left={<div>
                Produtos disponiveis:
      
                <Checkbox
                  value={lettuce}
                  title="Alface"
                  onClick={() => setLettuce(!lettuce)}
                />
                <Checkbox
                  value={rice}
                  title="Arroz"
                  onClick={() => setRice(!rice)}
                />
                <Checkbox
                  value={apple}
                  title="Apple"
                  onClick={() => setApple(!rice)}/>
              </div>}
              middle={<div>
                Sua lista de compras
              </div>}
              right={<div>
                Estatisticas
                <LineChart
                color="#09f"
                title="Frutas"
                percentage={healthy}
                />
                <LineChart
                color="#004d62"
                title="Verduras"
                percentage={healthy}
                />
                <LineChart
                color="#004d61"
                title="Legumes"
                percentage={healthy}
                />
              </div>}
            />
            
       </Container>
    </Wrapper>
}

export default App