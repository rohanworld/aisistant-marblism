'use client'

import {
  Typography,
  Card,
  Row,
  Col,
  Button,
  Statistic,
  Modal,
  Form,
  Input,
  TimePicker,
} from 'antd'
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  ScheduleOutlined,
} from '@ant-design/icons'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function MyAIAgentsPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedAgent, setSelectedAgent] = useState<any>(null)
  const [form] = Form.useForm()

  const {
    data: aiAgents,
    isLoading,
    refetch,
  } = Api.aiAgent.findMany.useQuery({
    where: { userId: user?.id },
    include: { hires: true, reviews: true, pricingOptions: true },
  })

  const { mutateAsync: deleteAgent } = Api.aiAgent.delete.useMutation()
  const { mutateAsync: updateAgent } = Api.aiAgent.update.useMutation()

  const handleDelete = async (agentId: string) => {
    try {
      await deleteAgent({ where: { id: agentId } })
      enqueueSnackbar('AI Agent deleted successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to delete AI Agent', { variant: 'error' })
    }
  }

  const showModal = (agent: any) => {
    setSelectedAgent(agent)
    form.setFieldsValue({
      availabilitySchedule: agent.availabilitySchedule
        ? dayjs(agent.availabilitySchedule, 'HH:mm-HH:mm')
        : null,
    })
    setIsModalVisible(true)
  }

  const handleOk = async () => {
    try {
      const values = await form.validateFields()
      const availabilitySchedule = values.availabilitySchedule
        ? `${values.availabilitySchedule[0].format('HH:mm')}-${values.availabilitySchedule[1].format('HH:mm')}`
        : null

      await updateAgent({
        where: { id: selectedAgent.id },
        data: { availabilitySchedule },
      })

      enqueueSnackbar('Availability schedule updated successfully', {
        variant: 'success',
      })
      setIsModalVisible(false)
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to update availability schedule', {
        variant: 'error',
      })
    }
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>My AI Agents</Title>
      <Text>Manage your AI agents and view their performance statistics.</Text>

      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => router.push('/my-ai-agents/add')}
        style={{ marginTop: 16, marginBottom: 24 }}
      >
        Add New AI Agent
      </Button>

      <Row gutter={[16, 16]}>
        {aiAgents?.map(agent => (
          <Col xs={24} sm={12} md={8} key={agent.id}>
            <Card
              title={agent.name}
              extra={
                <Button
                  icon={<EditOutlined />}
                  onClick={() => router.push(`/my-ai-agents/edit/${agent.id}`)}
                >
                  Edit
                </Button>
              }
              actions={[
                <Button
                  key="delete"
                  icon={<DeleteOutlined />}
                  onClick={() => handleDelete(agent.id)}
                  danger
                >
                  Delete
                </Button>,
                <Button
                  key="schedule"
                  icon={<ScheduleOutlined />}
                  onClick={() => showModal(agent)}
                >
                  Set Schedule
                </Button>,
              ]}
            >
              <Statistic title="Hires" value={agent.hires.length} />
              <Statistic
                title="Earnings"
                value={agent.hires.reduce(
                  (sum, hire) => sum + (hire.pricingOption?.price || 0),
                  0,
                )}
                prefix="$"
                precision={2}
              />
              <Statistic
                title="Average Rating"
                value={
                  agent.reviews.length > 0
                    ? agent.reviews.reduce(
                        (sum, review) => sum + (review.rating || 0),
                        0,
                      ) / agent.reviews.length
                    : 0
                }
                precision={1}
                suffix="/ 5"
              />
              <Text>
                Availability: {agent.availabilitySchedule || 'Not set'}
              </Text>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal
        title="Set Availability Schedule"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="availabilitySchedule"
            label="Availability Schedule"
            rules={[
              {
                required: true,
                message: 'Please set the availability schedule',
              },
            ]}
          >
            <TimePicker.RangePicker format="HH:mm" />
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}
