'use client'

import { useState, useEffect } from 'react'
import {
  Typography,
  Input,
  Select,
  Card,
  Rate,
  Space,
  Row,
  Col,
  Spin,
  Empty,
} from 'antd'
import {
  SearchOutlined,
  FilterOutlined,
  SortAscendingOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
const { Option } = Select
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function AIAgentsListingPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [agents, setAgents] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('')
  const [selectedRating, setSelectedRating] = useState(0)
  const [sortBy, setSortBy] = useState('')

  const { data: aiAgents, isLoading } = Api.aiAgent.findMany.useQuery({
    include: {
      aiAgentTags: {
        include: {
          tag: true,
        },
      },
      pricingOptions: true,
      reviews: true,
    },
  })

  useEffect(() => {
    if (aiAgents) {
      setAgents(aiAgents)
      setLoading(false)
    }
  }, [aiAgents])

  const handleSearch = (value: string) => {
    setSearchTerm(value)
  }

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value)
  }

  const handleDepartmentChange = (value: string) => {
    setSelectedDepartment(value)
  }

  const handleRatingChange = (value: number) => {
    setSelectedRating(value)
  }

  const handleSortChange = (value: string) => {
    setSortBy(value)
  }

  const filteredAgents = agents.filter(agent => {
    const matchesSearch =
      agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agent.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory
      ? agent.aiAgentTags.some(
          (tag: any) =>
            tag.tag.type === 'CATEGORY' && tag.tag.name === selectedCategory,
        )
      : true
    const matchesDepartment = selectedDepartment
      ? agent.aiAgentTags.some(
          (tag: any) =>
            tag.tag.type === 'DEPARTMENT' &&
            tag.tag.name === selectedDepartment,
        )
      : true
    const matchesRating = selectedRating
      ? agent.reviews.reduce(
          (acc: number, review: any) => acc + review.rating,
          0,
        ) /
          agent.reviews.length >=
        selectedRating
      : true

    return (
      matchesSearch && matchesCategory && matchesDepartment && matchesRating
    )
  })

  const sortedAgents = [...filteredAgents].sort((a, b) => {
    if (sortBy === 'price') {
      return a.pricingOptions[0]?.price - b.pricingOptions[0]?.price
    } else if (sortBy === 'popularity') {
      return b.hires?.length - a.hires?.length
    } else if (sortBy === 'rating') {
      const aRating =
        a.reviews.reduce((acc: number, review: any) => acc + review.rating, 0) /
        a.reviews.length
      const bRating =
        b.reviews.reduce((acc: number, review: any) => acc + review.rating, 0) /
        b.reviews.length
      return bRating - aRating
    }
    return 0
  })

  return (
    <PageLayout layout="narrow">
      <Title level={2}>AI Agents Listing</Title>
      <Text>Browse and find AI agents for your projects</Text>

      <Space
        direction="vertical"
        size="large"
        style={{ width: '100%', marginTop: 24 }}
      >
        <Input
          placeholder="Search AI agents"
          prefix={<SearchOutlined />}
          onChange={e => handleSearch(e.target.value)}
        />

        <Space>
          <Select
            style={{ width: 200 }}
            placeholder="Select Category"
            onChange={handleCategoryChange}
            allowClear
          >
            <Option value="chatbot">Chatbot</Option>
            <Option value="image-generation">Image Generation</Option>
            <Option value="text-analysis">Text Analysis</Option>
          </Select>

          <Select
            style={{ width: 200 }}
            placeholder="Select Department"
            onChange={handleDepartmentChange}
            allowClear
          >
            <Option value="marketing">Marketing</Option>
            <Option value="customer-service">Customer Service</Option>
            <Option value="research">Research</Option>
          </Select>

          <Select
            style={{ width: 200 }}
            placeholder="Minimum Rating"
            onChange={handleRatingChange}
            allowClear
          >
            <Option value={1}>
              <Rate disabled defaultValue={1} />
            </Option>
            <Option value={2}>
              <Rate disabled defaultValue={2} />
            </Option>
            <Option value={3}>
              <Rate disabled defaultValue={3} />
            </Option>
            <Option value={4}>
              <Rate disabled defaultValue={4} />
            </Option>
            <Option value={5}>
              <Rate disabled defaultValue={5} />
            </Option>
          </Select>

          <Select
            style={{ width: 200 }}
            placeholder="Sort By"
            onChange={handleSortChange}
            allowClear
          >
            <Option value="price">Price</Option>
            <Option value="popularity">Popularity</Option>
            <Option value="rating">Rating</Option>
          </Select>
        </Space>

        {loading ? (
          <Spin size="large" />
        ) : sortedAgents.length > 0 ? (
          <Row gutter={[16, 16]}>
            {sortedAgents.map(agent => (
              <Col xs={24} sm={12} md={8} key={agent.id}>
                <Card
                  hoverable
                  onClick={() => router.push(`/ai-agents/${agent.id}`)}
                  cover={
                    <img
                      alt={agent.name}
                      src={
                        agent.aiAgentImages?.[0]?.imageUrl ||
                        'https://via.placeholder.com/300'
                      }
                    />
                  }
                >
                  <Card.Meta
                    title={agent.name}
                    description={
                      <>
                        <Text>{agent.description}</Text>
                        <br />
                        <Rate
                          disabled
                          defaultValue={
                            agent.reviews.reduce(
                              (acc: number, review: any) => acc + review.rating,
                              0,
                            ) / agent.reviews.length
                          }
                        />
                        <Text> ({agent.reviews.length} reviews)</Text>
                        <br />
                        <Text strong>
                          Price: ${agent.pricingOptions[0]?.price.toFixed(2)}
                        </Text>
                      </>
                    }
                  />
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <Empty description="No AI agents found" />
        )}
      </Space>
    </PageLayout>
  )
}
