import React, {useEffect, useState} from 'react'
import Checkbox from '../../shared/CheckBox/Checkbox'
import LineChart from '../../shared/LineChart/LineChart'
import AppContainer from '../AppContainer/AppContainer'
import AppHeader from '../AppHeader/AppHeader'
import ShoppingList from '../ProductsList/ShoppingList'
import productsMock from '../mocks/products.json'

import { Container, Wrapper } from './App.styles'

function App(){ 
   const [products, setProducts] = useState(productsMock.products)

 

    return <Wrapper>
       <Container>
            <AppHeader/>
            <AppContainer
              left={<ShoppingList title="Produtos disponiveis">
                Produtos disponiveis:
      

              </ShoppingList>}
              middle={<ShoppingList 
                      title="Sua lista de compras"
                    
                      >
                      
              </ShoppingList>}
              right={<div>
               
               
              </div>}
            />
            
       </Container>
    </Wrapper>
}

export default App