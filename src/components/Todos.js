import React, { useState } from 'react'
import { Row, Col, Table, Checkbox, Divider, Card, Button, Input } from 'antd'
import { DeleteTwoTone } from '@ant-design/icons'
import Modal from 'antd/lib/modal/Modal'

const Todos = () => {
  const [visible, setVisible] = useState(false)
  const [data, setData] = useState([
    {
      title: 'Wash Car',
      complete: false
    },
    {
      title: 'Do dishes',
      complete: true
    },
    {
      title: 'Finish project',
      complete: false
    },
    {
      title: 'Phone Vacation Resort to confirm tariffs',
      complete: false
    }
  ])

  const onChange = (index, value) => {
    const tmpData = Object.assign([], data)

    tmpData[index].complete = value
    setData(tmpData)
  }

  const deleteTodo = (index) => {
    const tmpData = Object.assign([], data)

    delete tmpData[index]
    setData(tmpData)
  }

  const addTodo = () => {
    const tmpData = Object.assign([], data)

    tmpData.push({ title: tmpValue, complete: false })
    setData(tmpData)
  }

  let tmpValue = ''

  return (
    <div>
      <Row justify='center'>
        <Col span={18}>
          <Card
            title='Todos'
            extra={<Button type='primary' onClick={() => setVisible(true)}>Add</Button>}
          >
            <Table
              dataSource={data}
              columns={[
                {
                  dataIndex: 'title',
                  key: 'title',
                  width: '90%',
                  render: (text, record) => {
                    return (
                      record.complete ? <s>{record.title}</s> : record.title
                    )
                  }
                },
                {
                  key: 'title',
                  width: '5%',
                  render: (text, record, index) => {
                    return (
                      <div>
                        <Checkbox checked={record.complete} onChange={(e) => onChange(index, e.target.checked)} />
                        <Divider type='vertical' />
                        <DeleteTwoTone onClick={() => deleteTodo(index)} style={{ cursor: 'pointer', fontSize: 16 }} />
                      </div>
                    )
                  }
                }
              ]}
              pagination={false}
            />
          </Card>
        </Col>
        <Modal
          destroyOnClose
          visible={visible}
          okText='Add'
          onOk={() => {
            addTodo()
            setVisible(false)
            tmpValue = ''
          }}
          onCancel={() => {
            setVisible(false)
            tmpValue = ''
          }}
        >
          Title
          <Input
            placeholder='Add a todo title here...'
            onChange={e => {
              tmpValue = e.target.value

              return null
            }}
          />
        </Modal>
      </Row>
    </div>
  )
}

export default Todos
