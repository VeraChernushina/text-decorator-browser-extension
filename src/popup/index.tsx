import Form from "~src/components/Form"
import "antd/dist/antd.css"
import styles from './styles.module.scss'
import { sendMessage } from '~src/utils/sendMessage'
import { useCallback } from "react"

function IndexPopup() {
  const submitHandler = useCallback((tagName: string, color: string) => {
    void sendMessage({
      type: 'changeColor',
      payload: [tagName, color],
    })
  }, [])
  return (
    <div className={styles.root}>
      <Form onSubmit={submitHandler} />
    </div>
  )
}

export default IndexPopup