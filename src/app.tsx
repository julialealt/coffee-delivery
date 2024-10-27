import { ThemeProvider } from "styled-components"
import { BrowserRouter } from "react-router-dom"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Router } from "./router"
import { CartContextProvider } from "./contexts/CartContext"
import { OrderContextProvider } from "./contexts/OrderContext"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <OrderContextProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </OrderContextProvider>
      </CartContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
