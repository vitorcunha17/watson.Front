import React, { useState, useEffect } from 'react'
import { Input, Button, Table, notification, Row, Col } from 'antd'
import { getComments, saveComments } from "../../../../../services/watson"

const { TextArea } = Input

const Watson = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const [comment, setComment] = useState('')
  const [dataTable, setDataTable] = useState('')

  const save = () => {
    if (comment) {
      try {
        const response = saveComments(comment)
        console.log(response)
        fetchData()
        notificationSuccess("success")
      }
      catch (e) {
        notificationError("error")
      }
    } else {
      notificationEmptyWarning("error")
    }
  }

  const fetchData = async () => {
    const response = await getComments()
    setDataTable(response.data)
  }

  const notificationSuccess = type => {
    notification[type]({
      message: "Sucesso!",
      description:
        "Comentário cadastrado com sucesso",
    });
  }

  const notificationError = type => {
    notification[type]({
      message: "Erro!",
      description:
        "Erro ao cadastrar comentário",
    });
  }

  const notificationEmptyWarning = type => {
    notification[type]({
      message: "Atenção!",
      description:
        "Comentário vazio",
    });
  }

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id
    },
    {
      title: "Comentário",
      dataIndex: "comment"
    },
    {
      title: "Ações",
      render: () => <Button type='primary'>Ouvir</Button>,
    }
  ]

  return (
    <>
      <Row>
        <Col xs={24} sm={24} md={10} lg={10}>
          <br />
          <br />
          <TextArea
            onChange={(e) => setComment(e.target.value)}
            placeholder='Insira a frase'
            autoSize={{ minRows: 3, maxRows: 5 }}
            style={{ marginBottom: '5%' }}
          />
          <Button type='primary' size='lage' style={{ width: '100%', marginBottom: '5%', fontWeight: 'bold' }} onClick={save}>Enviar</Button>
        </Col>
        <Col xs={4} sm={4} md={4} lg={4} />
        <Col xs={24} sm={24} md={10} lg={10}>
          <Table rowKey="id" columns={columns} dataSource={dataTable} size="middle" />
        </Col>
      </Row>
    </>
  )
}

export default Watson
