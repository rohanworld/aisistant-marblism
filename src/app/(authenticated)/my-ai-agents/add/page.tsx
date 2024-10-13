'use client'

import { useState, useEffect } from 'react'
import { Form, Input, Select, Button, Upload, Space, Divider } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Typography } from 'antd'
const { Title, Text } = Typography
const { TextArea } = Input
import { Prisma } from '@prisma/client'
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function AddEditAIAgentPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [form] = Form.useForm()
  const [images, setImages] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  const { mutateAsync: upload } = useUploadPublic()
  const { mutateAsync: createAiAgent } = Api.aiAgent.create.useMutation()
  const { mutateAsync: updateAiAgent } = Api.aiAgent.update.useMutation()
  const { data: aiAgent, isLoading } = Api.aiAgent.findUnique.useQuery(
    {
      where: { id: params.id },
      include: { aiAgentImages: true },
    },
    { enabled: !!params.id },
  )

  type AiAgentWithImages = Prisma.AiAgentGetPayload<{
    include: { aiAgentImages: true }
  }>

  useEffect(() => {
    if (aiAgent) {
      const typedAiAgent = aiAgent as AiAgentWithImages
      form.setFieldsValue({
        name: typedAiAgent.name,
        description: typedAiAgent.description,
        availabilitySchedule: typedAiAgent.availabilitySchedule,
        status: typedAiAgent.status,
      })
      setImages(
        typedAiAgent.aiAgentImages?.map(img => img.imageUrl || '') || [],
      )
    }
  }, [aiAgent, form])

  const onFinish = async (values: any) => {
    try {
      setLoading(true)
      const aiAgentData = {
        ...values,
        userId: user?.id,
        aiAgentImages: { create: images.map(imageUrl => ({ imageUrl })) },
      }

      if (params.id) {
        await updateAiAgent({
          where: { id: params.id },
          data: aiAgentData,
        })
        enqueueSnackbar('AI Agent updated successfully', { variant: 'success' })
      } else {
        await createAiAgent({ data: aiAgentData })
        enqueueSnackbar('AI Agent created successfully', { variant: 'success' })
      }
      router.push('/my-ai-agents')
    } catch (error) {
      enqueueSnackbar('Error saving AI Agent', { variant: 'error' })
    } finally {
      setLoading(false)
    }
  }

  const handleImageUpload = async (file: File) => {
    try {
      const { url } = await upload({ file })
      setImages(prev => [...prev, url])
    } catch (error) {
      enqueueSnackbar('Error uploading image', { variant: 'error' })
    }
  }

  if (isLoading) {
    return <PageLayout layout="narrow">Loading...</PageLayout>
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>
        {params.id ? 'Edit AI Agent' : 'Add New AI Agent'}
      </Title>
      <Text>
        Provide details about your AI agent, including images, descriptions, and
        pricing options.
      </Text>
      <Divider />
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="name"
          label="Name"
          rules={[
            { required: true, message: 'Please input the AI agent name!' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: 'Please input the description!' }]}
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item name="availabilitySchedule" label="Availability Schedule">
          <Input />
        </Form.Item>
        <Form.Item name="status" label="Status">
          <Select>
            <Select.Option value="active">Active</Select.Option>
            <Select.Option value="inactive">Inactive</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Images">
          <Upload
            listType="picture-card"
            fileList={images.map((url, index) => ({
              uid: `-${index}`,
              name: `image-${index}`,
              status: 'done',
              url: url,
            }))}
            beforeUpload={file => {
              handleImageUpload(file)
              return false
            }}
          >
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            {params.id ? 'Update AI Agent' : 'Create AI Agent'}
          </Button>
        </Form.Item>
      </Form>
    </PageLayout>
  )
}
