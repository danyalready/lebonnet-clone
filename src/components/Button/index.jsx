import React from "react"
import { Button } from "./styles"

const index = (props) => {
  const { children } = props
  return <Button>{children}</Button>
}

export default index