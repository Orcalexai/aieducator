// lib/metadata.ts
import { Metadata } from 'next'

type MetadataConfig = {
  [key: string]: Metadata
}
export const pageMetadata: MetadataConfig = {
  home: {
    title: "AiEducator - AI-Powered Education Platform | Personalized Learning Solutions",
    description: "AiEducator is a cutting-edge AI education platform that transforms learning through personalized experiences, adaptive learning paths, and comprehensive analytics.",
    keywords: "AI education, edtech platform, personalized learning, adaptive learning",
    openGraph: {
      title: "AiEducator - AI-Powered Education Platform | Personalized Learning Solutions",
      description: "Transform education with AI-powered personalized learning, adaptive paths, and comprehensive analytics.",
      url: 'https://www.aieducator.com',
      siteName: 'AiEducator',
      images: [
        {
          url: '/solve.png',
          width: 1280,
          height: 720,
          alt: 'AiEducator Platform',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: "AiEducator - AI-Powered Education Platform | Personalized Learning",
      description: "Transform education with AI-powered personalized learning.",
      images: ['/solve.png'],
    },
    alternates: {
      canonical: 'https://www.aieducator.com',
    },
  },
  
  about: {
    title: "About Orcalex Technologies | The Team Behind AiEducator",
    description: "Book a live demo of AiEducator to see how AI personalizes learning, supports educators, and boosts student engagement with adaptive tools and analytics",
    keywords: "Orcalex Technologies, AiEducator team, educational AI development",
    openGraph: {
      title: "About Orcalex Technologies | The Team Behind AiEducator",
      description: "Meet the innovative team powering AiEducator with expertise in RAG, model fine-tuning.",
      url: 'https://www.aieducator.com/about',
      siteName: 'AiEducator',
      images: [
        {
          url: '/mission.png',
          width: 800,
          height: 600,
          alt: 'Orcalex Technologies Team',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: "About Orcalex Technologies | The Team Behind AiEducator",
      description: "Meet the innovative team powering AiEducator.",
      images: ['/mission.png'],
    },
    alternates: {
      canonical: 'https://www.aieducator.com/about',
    },
  },
  
  blogs: {
    title: 'AI Education Insights & Future of Learning | AIeducator',
    description: 'Explore how AI is transforming education, personalized learning experiences, and preparing students for the future.',
    keywords: 'AI education, EdTech, personalized learning, digital education',
    openGraph: {
      title: 'AI Education Insights & Future of Learning | AIeducator',
      description: 'Explore how AI is transforming education with expert insights on personalized learning.',
      url: 'https://www.aieducator.com/blogs',
      siteName: 'AiEducator',
      images: [
        {
          url: '/blog/ai_learn.png',
          width: 1200,
          height: 630,
          alt: 'AI in Education Blog',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    
    alternates: {
      canonical: 'https://www.aieducator.com/blogs',
    },
  },
  
  casestudy: {
    title: "Case Study: AI-Powered Education Transformation | AiEducator",
    description: "Boost student outcomes with AiEducator: AI-powered personalization, teacher efficiency, and consistent learning at scale.",
    keywords: "AiEducator Case Study | Real Impact on Student Outcomes",
    openGraph: {
      title: "Case Study: AI-Powered Education Transformation | AiEducator",
      description: ":Discover how AiEducator transformed learning outcomes with AI-powered personalization, teacher support, and student engagement through its Hero Team model.",
      url: 'https://www.aieducator.com/casestudy',
      siteName: 'AiEducator',
      images: [
        {
          url: '/opportunity.png',
          width: 800,
          height: 600,
          alt: 'AiEducator Case Study Results',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
   
    alternates: {
      canonical: 'https://www.aieducator.com/casestudy',
    },
  },
  
  demo: {
    title: "Experience AiEducator Demo | AI-Powered Education Platform",
    description: "Experience AiEducator in action—explore features, try interactive tools, and see how AI transforms teaching and learning.",
    keywords: "AiEducator demo, AI education demo, edtech platform demo",
    openGraph: {
      title: "Experience AiEducator Demo | AI-Powered Education Platform",
      description: "Try the interactive demo of AiEducator and experience the future of education.",
      url: 'https://www.aieducator.com/demo',
      siteName: 'AiEducator',
      images: [
        {
          url: '/dashboard.png',
          width: 800,
          height: 600,
          alt: 'AiEducator Demo Platform',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
   
    alternates: {
      canonical: 'https://www.aieducator.com/demo',
    },
  },

  features: {
    title: "AiEducator Features | Smart Tools for Personalized Learning",
    description: "AiEducator uses cutting-edge AI to personalize learning, empower educators, and enhance student engagement with adaptive paths, smart analytics, and innovative edtech solutions.",
    keywords: "AiEducator features, personalized learning, adaptive learning paths, smart analytics, edtech solutions, AI education tools, student engagement",
    openGraph: {
      title: "AiEducator Features | Smart Tools for Personalized Learning",
      description: "AiEducator uses cutting-edge AI to personalize learning, empower educators, and enhance student engagement.",
      url: 'https://www.aieducator.com/features',
      siteName: 'AiEducator',
      images: [
        {
          url: '/dashboard.png',
          width: 800,
          height: 600,
          alt: 'AiEducator Features',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
   
    alternates: {
      canonical: 'https://www.aieducator.com/features',
    },
  },

  implementation: {
    title: "AiEducator Implementation | Hero Team Integration Model",
    description: "Empower educators and students with AiEducator's Hero Team model—customized rollout, training, feedback loops, and secure, sustainable implementation in schools.",
    keywords: "AiEducator implementation, Hero Team model, education technology rollout, teacher training, edtech integration, school implementation, sustainable edtech",
    openGraph: {
      title: "AiEducator Implementation | Hero Team Integration Model",
      description: "Empower educators and students with AiEducator's Hero Team model for successful implementation.",
      url: 'https://www.aieducator.com/implementation',
      siteName: 'AiEducator',
      images: [
        {
          url: '/opportunity.png',
          width: 800,
          height: 600,
          alt: 'AiEducator Implementation',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    
    alternates: {
      canonical: 'https://www.aieducator.com/implementation',
    },
  }
}
// Helper function to get metadata for a specific page
export function getPageMetadata(page: string): Metadata {
  return pageMetadata[page] || pageMetadata.home
}