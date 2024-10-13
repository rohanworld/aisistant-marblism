'use client'

import { Typography, Input, Card, Row, Col, Space, Spin } from 'antd'
import { SearchOutlined, StarOutlined, TeamOutlined } from '@ant-design/icons'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [searchKeyword, setSearchKeyword] = useState('')

  const { data: featuredAgents, isLoading: isFeaturedLoading } =
    Api.aiAgent.findMany.useQuery({
      where: { status: 'FEATURED' },
      take: 3,
      include: { aiAgentTags: { include: { tag: true } } },
    })

  const { data: topRatedAgents, isLoading: isTopRatedLoading } =
    Api.aiAgent.findMany.useQuery({
      orderBy: { reviews: { _count: 'desc' } },
      take: 3,
      include: { reviews: true },
    })

  const { data: mostUsedAgents, isLoading: isMostUsedLoading } =
    Api.aiAgent.findMany.useQuery({
      orderBy: { hires: { _count: 'desc' } },
      take: 3,
      include: { hires: true },
    })

  const { data: categories } = Api.tag.findMany.useQuery({
    where: { type: 'CATEGORY' },
    take: 5,
  })

  const { data: departments } = Api.tag.findMany.useQuery({
    where: { type: 'DEPARTMENT' },
    take: 5,
  })

  const handleSearch = () => {
    router.push(`/ai-agents?search=${searchKeyword}`)
  }

  const renderAgentCard = (agent: any) => (
    <Card
      key={agent.id}
      hoverable
      style={{ width: '100%' }}
      onClick={() => router.push(`/ai-agents/${agent.id}`)}
    >
      <Title level={4}>{agent.name}</Title>
      <Text>{agent.description}</Text>
    </Card>
  )

  const renderTagCard = (tag: any) => (
    <Card
      key={tag.id}
      hoverable
      style={{ width: '100%' }}
      onClick={() => router.push(`/ai-agents?tag=${tag.id}`)}
    >
      <Text strong>{tag.name}</Text>
    </Card>
  )

  if (isFeaturedLoading || isTopRatedLoading || isMostUsedLoading) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title>Discover AI Agents</Title>
        <Text>Find the perfect AI agent for your needs</Text>

        <Input
          size="large"
          placeholder="Search for AI agents"
          prefix={<SearchOutlined />}
          value={searchKeyword}
          onChange={e => setSearchKeyword(e.target.value)}
          onPressEnter={handleSearch}
        />

        <Title level={2}>Featured AI Agents</Title>
        <Row gutter={[16, 16]}>
          {featuredAgents?.map(agent => (
            <Col key={agent.id} xs={24} sm={12} md={8}>
              {renderAgentCard(agent)}
            </Col>
          ))}
        </Row>

        <Title level={2}>Categories</Title>
        <Row gutter={[16, 16]}>
          {categories?.map(category => (
            <Col key={category.id} xs={24} sm={12} md={8}>
              {renderTagCard(category)}
            </Col>
          ))}
        </Row>

        <Title level={2}>Departments</Title>
        <Row gutter={[16, 16]}>
          {departments?.map(department => (
            <Col key={department.id} xs={24} sm={12} md={8}>
              {renderTagCard(department)}
            </Col>
          ))}
        </Row>

        <Title level={2}>Top-Rated AI Agents</Title>
        <Row gutter={[16, 16]}>
          {topRatedAgents?.map(agent => (
            <Col key={agent.id} xs={24} sm={12} md={8}>
              {renderAgentCard(agent)}
            </Col>
          ))}
        </Row>

        <Title level={2}>Most-Used AI Agents</Title>
        <Row gutter={[16, 16]}>
          {mostUsedAgents?.map(agent => (
            <Col key={agent.id} xs={24} sm={12} md={8}>
              {renderAgentCard(agent)}
            </Col>
          ))}
        </Row>
      </Space>
    </PageLayout>
  )
}
