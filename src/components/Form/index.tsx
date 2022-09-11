import { useState, useCallback } from "react"
import { Input, Button } from 'antd'
import styles from './styles.module.scss'

function Form() {
  const [tagName, setTagName] = useState("")
  const [color, setColor] = useState("")

  const changeTagHandler = useCallback((event) => {
    setTagName(event.target.value)
  }, [])

  const changeColorHandler = useCallback((event) => {
    setColor(event.target.value)
  }, [])

  return (
    <div className={styles.root}>
      <Input value={tagName} onChange={changeTagHandler} placeholder="Селектор" />
      <Input value={color} onChange={changeColorHandler} placeholder="Цвет" />
      <Button type="primary">Применить</Button>
    </div>
  )
}

export default Form