
const CardBody = ({className="" ,children}) => {
  return (
    <div className={`text-gray-600 ${className}`}>
        {children}
      
    </div>
  )
}

export default CardBody
