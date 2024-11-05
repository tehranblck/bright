import { FaWhatsapp } from "react-icons/fa"
import { Badge } from "@mui/material"

interface BadgeComponentProps {
  onClick: () => void;
}

const BadgeComponent: React.FC<BadgeComponentProps> = ({ onClick }) => {
  return (
    <div className="relative flex justify-end w-full">
      <Badge onClick={onClick} className="fixed  transition-all cursor-pointer right-4 bottom-2 z-50 text-5xl rounded-full text-blue-500 " badgeContent={+1} color="error">
        <FaWhatsapp className='border-1 border-white  ' />
      </Badge>
    </div>

  )

}
export default BadgeComponent