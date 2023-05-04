import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function Logout() {
  const Navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  sessionStorage.clear();
  MySwal.fire({
    icon: "success",
    title: "Logout success",
    showConfirmButton: false,
    timer: 1000,
  });

  setTimeout(navigate, 500);
  function navigate() {
    Navigate("/login");
  }
}
