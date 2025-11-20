'use client'
import { IconType } from 'react-icons'

// --- Data Structures ---
export interface MegaMenuSubItem {
  href: string
  label: string
  icon: IconType
  description: string
  isFeatured?: boolean
}

export interface NavItemBase {
  label: string
  href: string
}

export interface NavLinkItem extends NavItemBase {
  type: 'link'
}

export interface NavMegaItem extends NavItemBase {
  type: 'mega'
  subItems: MegaMenuSubItem[]
}

export type NavItem = NavLinkItem | NavMegaItem

// --- Navigation Data ---
export const navItemsData: NavItem[] = [
  { href: '/', label: 'Home', type: 'link' },
  { href: '/#features', label: 'Features', type: 'link' },
  { href: '/#impact', label: 'Impact', type: 'link' },
  { href: '/#benefits', label: 'Benefits', type: 'link' },
  { href: '/#faq', label: 'FAQ', type: 'link' },
  { href: '/#demo', label: 'Request Demo', type: 'link' },
]
