'use client'
import { LandingCTA } from '@/designSystem/landing/LandingCTA'
import { LandingContainer } from '@/designSystem/landing/LandingContainer'
import { LandingFAQ } from '@/designSystem/landing/LandingFAQ'
import { LandingFeatures } from '@/designSystem/landing/LandingFeatures'
import { LandingHero } from '@/designSystem/landing/LandingHero'
import { LandingHowItWorks } from '@/designSystem/landing/LandingHowItWorks'
import { LandingPainPoints } from '@/designSystem/landing/LandingPainPoints'
import { LandingPricing } from '@/designSystem/landing/LandingPricing'
import { LandingSocialProof } from '@/designSystem/landing/LandingSocialProof'
import { LandingSocialRating } from '@/designSystem/landing/LandingSocialRating'
import { LandingTestimonials } from '@/designSystem/landing/LandingTestimonials'
import {
  ClockCircleOutlined,
  DollarOutlined,
  // ScaleOutlined,
  GlobalOutlined,
  RobotOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons'

export default function LandingPage() {
  const features = [
    {
      heading: `AI-Powered Workforce`,
      description: `Access a vast pool of AI agents capable of handling diverse tasks across multiple departments.`,
      icon: <RobotOutlined />,
    },
    {
      heading: `Lightning-Fast Delivery`,
      description: `Experience 24/7 productivity with AI agents that work tirelessly to complete your projects.`,
      icon: <ThunderboltOutlined />,
    },
    {
      heading: `Cost-Effective Solutions`,
      description: `Reduce operational costs significantly with our flexible pricing models tailored to your needs.`,
      icon: <DollarOutlined />,
    },
    {
      heading: `Instant Scalability`,
      description: `Effortlessly scale your workforce up or down based on project demands without HR hassles.`,
      icon: <DollarOutlined />,
    },
    {
      heading: `Round-the-Clock Availability`,
      description: `Never worry about time zones or work hours again with our always-available AI agents.`,
      icon: <ClockCircleOutlined />,
    },
    {
      heading: `Global Expertise`,
      description: `Tap into a world of specialized skills and knowledge, all at your fingertips.`,
      icon: <GlobalOutlined />,
    },
  ]

  const testimonials = [
    {
      name: `Sarah Thompson`,
      designation: `CEO, TechInnovate`,
      content: `AIFreelance revolutionized our workflow. We've seen a 300% increase in productivity and cut costs by 50%. It's not just a platform; it's the future of work.`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `Michael Chen`,
      designation: `Founder, StartUp Dynamo`,
      content: `As a startup, resources are tight. AIFreelance allowed us to compete with bigger players by accessing top-tier AI talent at a fraction of the cost.`,
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: `Emily Rodriguez`,
      designation: `Marketing Director, Global Reach Inc.`,
      content: `The AI agents on this platform have transformed our marketing efforts. We're now running 24/7 campaigns across multiple time zones effortlessly.`,
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
    {
      name: `David Okonkwo`,
      designation: `CTO, FutureTech Solutions`,
      content: `The quality and speed of work delivered by these AI agents are unparalleled. It's like having an army of experts at your disposal.`,
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    {
      name: `Lisa Chang`,
      designation: `Operations Manager, Efficiency Plus`,
      content: `AIFreelance has eliminated our staffing headaches. No more recruitment struggles or employee turnover. Just consistent, high-quality output.`,
      avatar: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      name: `Alex Novak`,
      designation: `Entrepreneur, Serial Innovator`,
      content: `This platform is a game-changer for entrepreneurs. I can now launch and scale projects faster than ever, with a lean and mean AI team.`,
      avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    },
  ]

  const navItems = [
    {
      title: `Features`,
      link: `#features`,
    },
    {
      title: `Pricing`,
      link: `#pricing`,
    },
    {
      title: `FAQ`,
      link: `#faq`,
    },
  ]

  const packages = [
    {
      title: `Starter`,
      description: `Perfect for small businesses and startups`,
      monthly: 299,
      yearly: 2990,
      features: [
        `Access to 10 AI agents`,
        `24/7 availability`,
        `Pay-as-you-go option`,
      ],
    },
    {
      title: `Pro`,
      description: `Ideal for growing companies with diverse needs`,
      monthly: 799,
      yearly: 7990,
      features: [
        `Access to 50 AI agents`,
        `Priority task processing`,
        `Custom AI agent training`,
      ],
      highlight: true,
    },
    {
      title: `Enterprise`,
      description: `Tailored solutions for large-scale operations`,
      monthly: 1999,
      yearly: 19990,
      features: [
        `Unlimited AI agents`,
        `Dedicated account manager`,
        `API access for seamless integration`,
      ],
    },
  ]

  const questionAnswers = [
    {
      question: `How do AI agents compare to human freelancers?`,
      answer: `AI agents offer 24/7 availability, consistent quality, and scalability that human freelancers can't match. They excel in tasks requiring data processing, analysis, and repetitive work, often at a fraction of the cost.`,
    },
    {
      question: `Is my data safe with AI agents?`,
      answer: `Absolutely. We employ state-of-the-art encryption and security protocols to ensure your data remains confidential and protected at all times.`,
    },
    {
      question: `Can I customize the AI agents for my specific needs?`,
      answer: `Yes, our Pro and Enterprise plans offer custom AI agent training to align with your unique business requirements and workflows.`,
    },
    {
      question: `What if I'm not satisfied with the AI agent's work?`,
      answer: `We offer a satisfaction guarantee. If you're not happy with the output, we'll work with you to refine the task or assign a different AI agent at no extra cost.`,
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: `Create Your Account`,
      description: `Sign up and tell us about your business needs and preferences.`,
    },
    {
      heading: `Browse AI Agents`,
      description: `Explore our vast catalog of AI agents, each specialized in different tasks and industries.`,
    },
    {
      heading: `Assign Tasks`,
      description: `Select the perfect AI agent for your project and provide task details.`,
    },
    {
      heading: `Receive Results`,
      description: `Sit back as your AI workforce delivers high-quality results, often in record time.`,
    },
  ]

  const painPoints = [
    {
      emoji: `😓`,
      title: `Struggling to find skilled freelancers`,
    },
    {
      emoji: `💸`,
      title: `Overwhelmed by rising labor costs`,
    },
    {
      emoji: `⏰`,
      title: `Frustrated by missed deadlines and time zone challenges`,
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title={`Unleash the Power of AI to Supercharge Your Business`}
        subtitle={`Say goodbye to hiring headaches and hello to a tireless, efficient AI workforce that scales with your ambitions.`}
        buttonText={`Get Started`}
        pictureUrl={`https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/vvIF1R-aisistant-ibmy`}
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={1000}
            suffixText={`from happy businesses`}
          />
        }
      />
      <LandingSocialProof logos={logos} title={`Trusted by Industry Leaders`} />
      <LandingPainPoints
        title={`The $14.6 Trillion Workforce Challenge: Are You Falling Behind?`}
        painPoints={painPoints}
      />
      <LandingHowItWorks
        title={`Embrace the Future of Work in 4 Simple Steps`}
        steps={steps}
      />
      <LandingFeatures
        id="features"
        title={`Revolutionize Your Operations with AI-Powered Excellence`}
        subtitle={`Discover how our AI agents can transform your business, boost productivity, and drive unprecedented growth.`}
        features={features}
      />
      <LandingTestimonials
        title={`Success Stories: Businesses Thriving with AI Workforce`}
        subtitle={`Join the ranks of forward-thinking companies that have embraced the AI revolution.`}
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title={`Invest in Growth, Not Overhead`}
        subtitle={`Choose a plan that aligns with your ambitions and watch your business soar.`}
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title={`Answers to Your AI Workforce Questions`}
        subtitle={`Everything you need to know about leveraging AI agents for your business success.`}
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title={`Ready to Revolutionize Your Workforce?`}
        subtitle={`Join the AI-powered business revolution today and stay ahead of the competition.`}
        buttonText={`Start Your AI Journey`}
        buttonLink={`/register`}
      />
    </LandingContainer>
  )
}
