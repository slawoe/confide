import React from "react";
import { useForm } from "react-hooks-helper";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import User from "./User";
import UserLogin from "./UserLogin";
import Moodster from "./Moodster";
import Review from "./Review";
import Submit from "./Submit";

const defaultData = {
  firstName: null,
  lastName: null,
  nickName: null,
  birthDay: null,
  userName: null,
  password: null,
  passowordRepeat: null,
  moodstername: null,
};
function RegistrationForm() {
  const [formData, setForm] = useForm(defaultData);
  const { path } = useRouteMatch();
  const props = {
    formData,
    setForm,
  };
  return (
    <Switch>
      <Route path={`${path}/submit`}>
        <Submit {...props} />
      </Route>
      <Route path={`${path}/review`}>
        <Review {...props} />
      </Route>
      <Route path={`${path}/moodster`}>
        <Moodster {...props} />
      </Route>
      <Route path={`${path}/userlogin`}>
        <UserLogin {...props}></UserLogin>
      </Route>
      <Route path={`${path}/`}>
        <User {...props}></User>
      </Route>
    </Switch>
  );
}

export default RegistrationForm;
