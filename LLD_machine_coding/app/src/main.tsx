import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { FeatureFlagProvider } from './shared/context/FeatureFlagProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FeatureFlagProvider>
      <App />
    </FeatureFlagProvider>
  </StrictMode>,
)
