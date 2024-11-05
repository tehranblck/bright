import { FaWhatsapp } from "react-icons/fa"
import { Badge } from "@mui/material"

interface BadgeComponentProps {
  onClick: () => void;
  className: string;
}

const BadgeComponent: React.FC<BadgeComponentProps> = ({ onClick }) => {
  return (
    <Badge onClick={onClick} className="fixed shake bounce   transition-all cursor-pointer right-2 bottom-2 z-50 text-5xl rounded-full text-blue-500 " badgeContent={+1} color="error">
      <FaWhatsapp className='border-1 border-white  ' />
    </Badge>

  )

}
export default BadgeComponent