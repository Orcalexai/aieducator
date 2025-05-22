import { ReactNode } from 'react'
import { metadata } from './metadata'

export { metadata }

export default function DemoLayout({
  children,
}: {
  children: ReactNode
}) {
  return children
}