import { Fragment, useEffect, useState } from "react";
import "./Register.css";
import { useSelector, useDispatch } from "react-redux";
import { registeruseraction } from "../../../Actions/useraction";
import Metadata from "../../Metadata";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewProduct = () => {
  const Navigate = useNavigate()
  const dispatch = useDispatch();

    const { loading, error, success } = useSelector((state) => state.RegisterUser);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const [role, setrole] = useState("");

  useEffect(() => {
    if (error) {
      toast.error(error)
    }

    if (success) {
      toast.success('Register Successfull!')
        dispatch({ type: 'REGISTER_USER_RESET' });
    }
  }, [dispatch, alert, error, Navigate, success,toast]);

  const registerhandle = (e) => {
    e.preventDefault();
    if(!(!password || !cpassword) && password===cpassword){

      const myForm = {
        name,
        email,
        password,
        cpassword,
        role,
      };
      // console.log(myForm);
      dispatch(registeruseraction(myForm));
      window.location.reload()
    }
    };

  const [namefocus, setnamefocus] = useState();
  const [emailfocus, setemailfocus] = useState();
  const [rolefocus, setrolefocus] = useState();
  const [passfocus, setpassfocus] = useState();
  const [cpassfocus, setcpassfocus] = useState();

  return (
    <Fragment>
<Metadata title='Portal Register | Admin | Masterji'/>
<ToastContainer/>

     <div className="registercontainer">
        <div class="register-content">
          <form action="index.html">
            <br />
            <h4 class="title">Register New Portal User</h4>
            <br />
            <div class={`input-div one ${namefocus || (name && "focus")}`}>
              <div class="i">
                <i class="fas fa-user"></i>
              </div>
              <div class="div">
                <h5>Name</h5>
                <input
                  type="text"
                  class="input"
                  value={name || ""}
                  onChange={(e) => setname(e.target.value)}
                  onFocus={() => setnamefocus("focus")}
                  onBlur={() => setnamefocus("")}
                />
              </div>
            </div>
            <div class={`input-div one ${emailfocus || (email && "focus")}`}>
              <div class="i">
                <i class="fas fa-envelope"></i>
              </div>
              <div class="div">
                <h5>Email</h5>
                <input
                  type="email"
                  class="input"
                  value={email || ""}
                  onChange={(e) => setemail(e.target.value)}
                  onFocus={() => setemailfocus("focus")}
                  onBlur={() => setemailfocus("")}
                />
              </div>
            </div>
            <div class={`input-div one ${passfocus || (password && "focus")}`}>
              <div class="i">
                <i class="fas fa-lock"></i>
              </div>
              <div class="div">
                <h5>Password</h5>
                <input
                  type="password"
                  class="input"
                  value={password || ""}
                  onChange={(e) => setpassword(e.target.value)}
                  onFocus={() => setpassfocus("focus")}
                  onBlur={() => setpassfocus("")}
                />
              </div>
            </div>
            <div
              class={`input-div one ${cpassfocus || (cpassword && "focus")}`}
            >
              <div class="i">
                <i class="fas fa-lock"></i>
              </div>
              <div class="div">
                <h5>Confirm Password</h5>
                <input
                  type="password"
                  class="input"
                  value={cpassword || ""}
                  onChange={(e) => setcpassword(e.target.value)}
                  onFocus={() => setcpassfocus("focus")}
                  onBlur={() => setcpassfocus("")}
                />
              </div>
            </div>
            <div class={`input-div one ${rolefocus || (role && "focus")}`}>
              <div class="i">
                <i class="fas fa-hat-cowboy"></i>
              </div>
              <div class="div">
                <h5>Role</h5>
                <input
                  type="text"
                  class="input"
                  value={role || ""}
                  onChange={(e) => setrole(e.target.value)}
                  onFocus={() => setrolefocus("focus")}
                  onBlur={() => setrolefocus("")}
                  list="roles"
                />
                <datalist id="roles">
                  <option value="Admin" />
                  <option value="Developer" />
                  <option value="Analyser" />
                  <option value="Manager" />
                  <option value="User Manager" />
                  <option value="Sales" />
                  <option value="Customer" />
                  <option value="Booking Manager" />
                  <option value="Fabric Sourcing" />
                  <option value="Fashion Consultant" />
                  <option value="Tailor" />
                  <option value="Delivery Partner" />
                </datalist>
              </div>
            </div>
            <input
              type="submit"
              class="btn"
              value="register"
              disabled={false}
              onClick={registerhandle}
            />
            <br />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default NewProduct;
