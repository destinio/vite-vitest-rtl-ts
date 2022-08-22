interface ButtonProps {
  text: string
  clickHandler: () => void
}

function Button({ text, clickHandler = () => {} }: ButtonProps) {
  return <button onClick={clickHandler}>{text}</button>
}

export { Button }
