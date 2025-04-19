type NotFoundDataProps = {
  errorMessage?: string
}
export const NotFoundData = (props: NotFoundDataProps) => {
  const { errorMessage } = props

  return <div>{errorMessage}</div>
}
