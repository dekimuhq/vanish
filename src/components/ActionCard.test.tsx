import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { ActionCard } from './ActionCard'
import { StoreProvider } from '../store/store'
import type { Action } from '../lib/types'

const sample: Action = {
  id: 'demo',
  title: 'Demo action',
  tier: 2,
  category: 'data-brokers',
  summary: 'A demo.',
  steps: ['First step', 'Second step'],
  url: 'https://example.com',
  urlLabel: 'Go',
  effort: 'low',
  impact: 'high',
}

function setup() {
  localStorage.clear()
  return render(
    <MemoryRouter>
      <StoreProvider>
        <ActionCard action={sample} />
      </StoreProvider>
    </MemoryRouter>,
  )
}

describe('ActionCard', () => {
  it('renders the action with its external link and effort/impact', () => {
    setup()
    expect(screen.getByText('Demo action')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Go/ })).toHaveAttribute('href', 'https://example.com')
    expect(screen.getByText('Easy')).toBeInTheDocument()
    expect(screen.getByText('High impact')).toBeInTheDocument()
  })

  it('toggles done state and persists it', async () => {
    setup()
    const checkbox = screen.getByRole('button', { name: /Mark "Demo action" done/ })
    await userEvent.click(checkbox)
    expect(screen.getByRole('button', { name: /not done/ })).toBeInTheDocument()
    expect(JSON.parse(localStorage.getItem('vanish.state.v1')!).progress.demo.status).toBe('done')
  })

  it('reveals how-to steps on demand', async () => {
    setup()
    expect(screen.queryByText('First step')).not.toBeInTheDocument()
    await userEvent.click(screen.getByRole('button', { name: 'How-to' }))
    expect(screen.getByText('First step')).toBeInTheDocument()
  })
})
