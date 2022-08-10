import React, { useEffect, useState} from 'react'
import Checkbox from '../../shared/CheckBox/Checkbox'
import LineChart from '../../shared/LineChart/LineChart'
import AppContainer from '../AppContainer/AppContainer'
import AppHeader from '../AppHeader/AppHeader'
import ShoppingList from '../ProductsList/ShoppingList'
import productsMock from '../mocks/products.json'

import { Container, Wrapper } from './App.styles'

function App(){ 
  const colors = ['#62cbc6', '#00abad', '#00858c', '006073', '#004d61']

   const [products, setProducts] = useState(productsMock.products)
   const [selectedProducts, setSelectedProduct ] = useState([]) 

   useEffect(() => {
    const newSelectedProducts = products
    .filter(product => product.checked)

    setSelectedProduct(newSelectedProducts)
 
   }, [products])



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
                      products={selectedProducts}
                      onToggle={handleToggle}>
                      
              </ShoppingList>}
              right={<div>
                estatistica
                <LineChart color={colors[0]} title="saudavel" percentage={80}/>
                <LineChart color={colors[1]} title="nao tao saudavel" percentage={20}/>
                <LineChart color={colors[2]} title="limpeza" percentage={35}/>
                <LineChart color={colors[3]} title="outros" percentage={15}/>
              </div>}
            />
            
       </Container>
    </Wrapper>
}

export default App