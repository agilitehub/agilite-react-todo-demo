import React from 'react'
import { Row, Col, Card } from 'antd'

const Welcome = () => {
  return (
    <div>
      <Card
        type='inner'
        bordered={false}
        style={{ margin: 20 }}
      >
        <center>
          <h2>Welcome to Agilit-e React Todo Demo</h2>
        </center>
      </Card>
      <Row justify='space-around'>
        <Col span={6}>
          <Card
            type='inner'
            title='Left Menu'
          >
            Use the Left Menu to navigate to your Todos
          </Card>
        </Col>
        <Col span={6}>
          <Card
            type='inner'
            title='Overview'
          >
            You can create and delete todos with this app, note that it does not persist todos meaning
            once you refresh, close the browser or close the Todo Tab all todos are lost.
          </Card>
        </Col>
        <Col span={6}>
          <Card
            type='inner'
            title='Right Menu'
          >
            Use the Right Menu to Navigate to the Information about the Todo App
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Welcome
