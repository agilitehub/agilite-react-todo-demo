import React from 'react'
import { Row, Col, Card } from 'antd'

const Information = () => {
  return (
    <Row justify='center'>
      <Col span={12}>
        <Card>
          This is a demo app, designed to show how the <a href='https://npmjs.org/agilite-react' target='_blank' rel='noopener noreferrer'>agilite-react</a> module can easily be used
          to design an app.

          Powered by <a href='https://agilite.io' target='_blank' rel='noopener noreferrer'>Agilit-e</a>
        </Card>
      </Col>
    </Row>
  )
}

export default Information
