'use client'

import {
  Typography,
  Card,
  Row,
  Col,
  Button,
  Rate,
  Input,
  Form,
  Select,
} from 'antd'
import {
  UserOutlined,
  DollarOutlined,
  ProjectOutlined,
  StarOutlined,
} from '@ant-design/icons'
import { useState } from 'react'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function AIAgentDetailsandHirePage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [selectedPricing, setSelectedPricing] = useState<string | null>(null)
  const [projectDetails, setProjectDetails] = useState('')

  const { data: aiAgent, isLoading } = Api.aiAgent.findUnique.useQuery({
    where: { id: params.agentId },
    include: {
      aiAgentImages: true,
      pricingOptions: true,
      reviews: { include: { user: true } },
      aiAgentTags: { include: { tag: true } },
    },
  })

  const { mutateAsync: createHire } = Api.hire.create.useMutation()

  const handleHire = async () => {
    if (!selectedPricing || !projectDetails) {
      enqueueSnackbar(
        'Please select a pricing option and provide project details',
        { variant: 'error' },
      )
      return
    }

    try {
      await createHire({
        data: {
          projectDetails,
          status: 'PENDING',
          userId: user?.id || '',
          aiAgentId: aiAgent?.id || '',
          pricingOptionId: selectedPricing,
        },
      })
      enqueueSnackbar('AI Agent hired successfully!', { variant: 'success' })
      router.push('/dashboard')
    } catch (error) {
      enqueueSnackbar('Failed to hire AI Agent. Please try again.', {
        variant: 'error',
      })
    }
  }

  if (isLoading) {
    return <PageLayout layout="narrow">Loading...</PageLayout>
  }

  if (!aiAgent) {
    return <PageLayout layout="narrow">AI Agent not found</PageLayout>
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>AI Agent Details</Title>
      <Card>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            {aiAgent.aiAgentImages?.[0]?.imageUrl && (
              <img
                src={aiAgent.aiAgentImages[0].imageUrl}
                alt={aiAgent.name}
                style={{ width: '100%', borderRadius: '8px' }}
              />
            )}
          </Col>
          <Col xs={24} md={12}>
            <Title level={3}>{aiAgent.name}</Title>
            <Paragraph>{aiAgent.description}</Paragraph>
            <Text strong>Tags: </Text>
            {aiAgent.aiAgentTags?.map(tag => (
              <Text key={tag.id} style={{ marginRight: '8px' }}>
                {tag.tag?.name}
              </Text>
            ))}
          </Col>
        </Row>
      </Card>

      <Title level={3} style={{ marginTop: '24px' }}>
        Pricing Options
      </Title>
      <Row gutter={[16, 16]}>
        {aiAgent.pricingOptions?.map(option => (
          <Col xs={24} sm={12} md={8} key={option.id}>
            <Card
              hoverable
              onClick={() => setSelectedPricing(option.id)}
              style={{
                border:
                  selectedPricing === option.id
                    ? '2px solid #1890ff'
                    : undefined,
              }}
            >
              <Title level={4}>{option.type}</Title>
              <Text strong>
                <DollarOutlined /> ${option.price.toString()}
              </Text>
            </Card>
          </Col>
        ))}
      </Row>

      <Title level={3} style={{ marginTop: '24px' }}>
        Hire this AI Agent
      </Title>
      <Form layout="vertical">
        <Form.Item label="Project Details" required>
          <Input.TextArea
            rows={4}
            value={projectDetails}
            onChange={e => setProjectDetails(e.target.value)}
            placeholder="Describe your project requirements"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            onClick={handleHire}
            icon={<ProjectOutlined />}
          >
            Hire AI Agent
          </Button>
        </Form.Item>
      </Form>

      <Title level={3} style={{ marginTop: '24px' }}>
        Reviews
      </Title>
      {aiAgent.reviews?.map(review => (
        <Card key={review.id} style={{ marginBottom: '16px' }}>
          <Row align="middle">
            <Col span={18}>
              <Text strong>
                <UserOutlined /> {review.user?.name}
              </Text>
            </Col>
            <Col span={6} style={{ textAlign: 'right' }}>
              <Rate disabled defaultValue={review.rating || 0} />
            </Col>
          </Row>
          <Paragraph>{review.comment}</Paragraph>
          <Text type="secondary">
            {dayjs(review.createdAt).format('MMMM D, YYYY')}
          </Text>
        </Card>
      ))}
    </PageLayout>
  )
}
