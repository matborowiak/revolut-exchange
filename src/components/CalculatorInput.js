import './CalculatorInput.scss'

const componentStyle = 'CalculatorInput'

const CalculatorInput = ({
  value,
  handleInput,
  plusminus,
  readOnly,
  disabled,
}) => (
  <div className={`${componentStyle}__wrapper-flex`}>
    <p className={`${componentStyle}__plusminus`}>
      {value !== '' && value > 0 && plusminus}
    </p>
    <input
      className={`${componentStyle}`}
      disabled={disabled}
      value={value}
      type="string"
      readOnly={readOnly}
      onChange={handleInput}
      placeholder={'0.00'}
      maxLength="20"
    />
  </div>
)

export default CalculatorInput
