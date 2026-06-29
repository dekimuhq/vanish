import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ErrorBoundary } from './components/ErrorBoundary'
import { Layout } from './components/Layout'
import { useStore } from './store/store'
import { Dashboard } from './views/Dashboard'
import { Onboarding } from './views/Onboarding'
import { Plan } from './views/Plan'
import { Brokers } from './views/Brokers'
import { Letters } from './views/Letters'
import { Panic } from './views/Panic'
import { Report } from './views/Report'
import { Settings } from './views/Settings'
import { Decoy } from './views/Decoy'
import { Scenarios } from './views/Scenarios'

export default function App() {
  return (
    <ErrorBoundary>
      <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Gate />
      </HashRouter>
    </ErrorBoundary>
  )
}

function Gate() {
  const { state } = useStore()
  if (!state.onboarded) {
    return (
      <Routes>
        <Route path="/welcome" element={<Onboarding />} />
        <Route path="*" element={<Navigate to="/welcome" replace />} />
      </Routes>
    )
  }
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/scenarios" element={<Scenarios />} />
        <Route path="/scenarios/:id" element={<Scenarios />} />
        <Route path="/brokers" element={<Brokers />} />
        <Route path="/letters" element={<Letters />} />
        <Route path="/panic" element={<Panic />} />
        <Route path="/report" element={<Report />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/decoy" element={<Decoy />} />
        <Route path="/welcome" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}
