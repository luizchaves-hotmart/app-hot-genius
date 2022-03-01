import React from 'react'
import { useTranslation } from 'react-i18next'

export function Microfront() {
  const { t } = useTranslation()
  return <div>Microfront {t('withTranslation')}</div>
}
