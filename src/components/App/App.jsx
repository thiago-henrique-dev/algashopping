import React, { useState} from 'react'
import Checkbox from '../../shared/CheckBox/Checkbox'
import LineChart from '../../shared/LineChart/LineChart'
import AppContainer from '../AppContainer/AppContainer'
import AppHeader from '../AppHeader/AppHeader'
import ShoppingList from '../ProductsList/ShoppingList'
import productsMock from '../mocks/products.json'

import { Container, Wrapper } from './App.styles'

function App(){ 
   const [products, setProducts] = useState(productsMock.products)

   function handleToggle(id, checked, name){
      const newProducts = products.map(product =>
      product.id === id 
      ? { ...product, checked: !product.checked } 
      : product
      );
      setProducts(newProducts)
       
      //if(product.id === id){
          //return {
            //...product,
            //checked: !products.checked
          //}
        ////} else {
          //return product
        //}
    
   }

   const colors = ['#62cbc6', '#00abad', '#00858c', '006073', '#004d61']

    return <Wrapper>
       <Container>
            <AppHeader/>
            <AppContainer
              left={<ShoppingList 
                      title="Produtos disponiveis"
                      products={products}
                      onToggle={handleToggle}
                      >
              </ShoppingList>}
              middle={<ShoppingList 
                      title="Sua lista de compras"
                      products={products}
                      onToggle={handleToggle}>
                      
              </ShoppingList>}
              right={<div>
               
               
              </div>}
            />
            
       </Container>
    </Wrapper>
}

export default App