'use client'

import { Typography, Row, Col, Card, List, Button, Space, Spin } from 'antd'
import {
  ProjectOutlined,
  RobotOutlined,
  HistoryOutlined,
  DownloadOutlined,
  MessageOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function DashboardPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: hires, isLoading: hiresLoading } = Api.hire.findMany.useQuery({
    where: { userId: user?.id },
    include: { aiAgent: true, pricingOption: true },
  })

  const { data: aiAgents, isLoading: aiAgentsLoading } =
    Api.aiAgent.findMany.useQuery({
      where: { userId: user?.id },
    })

  const { data: messages, isLoading: messagesLoading } =
    Api.message.findMany.useQuery({
      where: {
        OR: [{ senderUserId: user?.id }, { recipientUserId: user?.id }],
      },
      orderBy: { createdAt: 'desc' },
      take: 5,
    })

  const { data: payments, isLoading: paymentsLoading } =
    Api.billing.findManyPayments.useQuery()

  const handleDownloadInvoice = async (paymentId: string) => {
    try {
      // This is a placeholder. You would need to implement the actual invoice download logic.
      enqueueSnackbar('Invoice download started', { variant: 'info' })
    } catch (error) {
      enqueueSnackbar('Failed to download invoice', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Dashboard</Title>
      <Text>
        Welcome to your dashboard. Here you can view your ongoing projects,
        hired AI agents, recent activity, and order history.
      </Text>

      <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
        <Col xs={24} md={12}>
          <Card
            title={
              <>
                <ProjectOutlined /> Ongoing Projects
              </>
            }
          >
            {hiresLoading ? (
              <Spin />
            ) : (
              <List
                dataSource={hires}
                renderItem={hire => (
                  <List.Item>
                    <List.Item.Meta
                      title={hire.aiAgent?.name}
                      description={`Status: ${hire.status}`}
                    />
                    <Text>{`$${hire.pricingOption?.price.toString()}`}</Text>
                  </List.Item>
                )}
              />
            )}
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card
            title={
              <>
                <RobotOutlined /> My AI Agents
              </>
            }
          >
            {aiAgentsLoading ? (
              <Spin />
            ) : (
              <List
                dataSource={aiAgents}
                renderItem={agent => (
                  <List.Item>
                    <List.Item.Meta
                      title={agent.name}
                      description={agent.description}
                    />
                  </List.Item>
                )}
              />
            )}
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
        <Col xs={24} md={12}>
          <Card
            title={
              <>
                <MessageOutlined /> Recent Activity
              </>
            }
          >
            {messagesLoading ? (
              <Spin />
            ) : (
              <List
                dataSource={messages}
                renderItem={message => (
                  <List.Item>
                    <List.Item.Meta
                      title={`From: ${message.senderUserId === user?.id ? 'You' : 'Client'}`}
                      description={message.content}
                    />
                    <Text>
                      {dayjs(message.createdAt).format('MMM D, YYYY')}
                    </Text>
                  </List.Item>
                )}
              />
            )}
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card
            title={
              <>
                <HistoryOutlined /> Order History
              </>
            }
          >
            {paymentsLoading ? (
              <Spin />
            ) : (
              <List
                dataSource={payments}
                renderItem={payment => (
                  <List.Item>
                    <List.Item.Meta
                      title={`Payment #${payment.id}`}
                      description={`Amount: $${payment.amount.toString()}`}
                    />
                    <Space>
                      <Text>
                        {dayjs(payment.createdAt).format('MMM D, YYYY')}
                      </Text>
                      <Button
                        icon={<DownloadOutlined />}
                        onClick={() => handleDownloadInvoice(payment.id)}
                      >
                        Invoice
                      </Button>
                    </Space>
                  </List.Item>
                )}
              />
            )}
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
