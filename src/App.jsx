import { useEffect, useState } from "react"
import Card from "./components/card/Card"
import CardContainer from "./components/card/CardContainer"
import Cart from "./components/cart/Cart"
import Nav from "./components/nav/Nav"
import { items } from "./data"
import ItemContextCtn from "./context/ItemContext"

function App() {

let [isOpened,setIsOpened] = useState(false);

return (
  <>
  <ItemContextCtn>
  <Nav openCart={setIsOpened} />
  <Cart setIsOpened={setIsOpened} isOpened={isOpened} css={isOpened ? 'cart-main' : 'cart-main-cl'}/>
  <CardContainer>
{
  items.map((data,index) => (
    <Card key={index} id={data.id} name={data.name} price={data.price} desc={data.desc} img={data.img} />
  ))
}
  </CardContainer>
  </ItemContextCtn>

  </>
)

}

export default App
