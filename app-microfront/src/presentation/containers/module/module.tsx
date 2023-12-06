import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/pro-regular-svg-icons/faArrowRight'

export function Microfront() {
  return (
    <div>
      <div className='_d-flex _flex-column _pt-7' style={{maxWidth: '590px', margin: "0 auto"}}>
        <div className='_bg-white _p-5 _rounded-sm _mb-5'>
          <div className="hot-form">
            <label className="hot-form__label" htmlFor="question1">1 - Qual é o principal problema ou necessidade que o seu produto digital resolve para o seu público-alvo?</label>
            <hr />
            <textarea className="hot-form__input" id="question1" placeholder="Digite sua mensagem" rows={3}></textarea>
          </div>
        </div>
        <div className='_bg-white _p-5 _rounded-sm _mb-5'>
          <div className="hot-form">
            <label className="hot-form__label" htmlFor="question1">2 - Quais são os principais benefícios ou características únicas do seu produto digital em comparação com outros disponíveis no mercado? </label>
            <hr />
            <textarea className="hot-form__input" id="question1" placeholder="Digite sua mensagem" rows={3}></textarea>
          </div>
        </div>
        <div className='_bg-white _p-5 _rounded-sm _mb-5'>
          <div className="hot-form">
            <label className="hot-form__label" htmlFor="question1">3 - Como você descreveria a jornada ou transformação que um cliente pode experimentar ao utilizar seu produto digital?</label>
            <hr />
            <textarea className="hot-form__input" id="question1" placeholder="Digite sua mensagem" rows={3}></textarea>
          </div>
        </div>
        <button className="hot-button hot-button--primary _d-flex _align-items-center _align-self-end">
          Avançar <FontAwesomeIcon className='_ml-2' icon={faArrowRight}/>
        </button>
      </div>
    </div>
  )
}
