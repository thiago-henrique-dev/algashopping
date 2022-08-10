import React from 'react'
import { Wrapper, Title, Array } from './ShoppingList.styles'
import Checkbox from '../../shared/CheckBox/Checkbox'

function ShoppingList({ title, }){
    return <Wrapper>
        <Title>
            {title}
        </Title>
        <Array>
            <Checkbox value={true} title="Alface"/>
            <Checkbox value={true} title="Arroz"/>
        </Array>
    </Wrapper>

    
        
  
}

export default ShoppingList